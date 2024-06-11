import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { emailAddress } = req.body;

    // Configure your transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.GMAIL_USER, // Your email
      to: process.env.GMAIL_USER, // Your email
      subject: 'New Newsletter Subscription',
      text: `A new user has subscribed to the newsletter. Email Address: ${emailAddress}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Subscription notification sent successfully' });
    } catch (error) {
      console.error('Failed to send subscription notification:', error);
      res.status(500).json({ message: 'Failed to send subscription notification', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
