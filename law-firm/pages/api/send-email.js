import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, phoneNumber, emailAddress, message } = req.body;

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
      from: emailAddress, // The email of the person filling the form
      to: process.env.GMAIL_USER, // Your email
      subject: 'Appointment Request',
      text: `
        Name: ${fullName}
        Phone: ${phoneNumber}
        Email: ${emailAddress}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Failed to send email:', error);
      res.status(500).json({ message: 'Failed to send email', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
