import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, voluptas nostrum quisquam!",
      image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      name: "Anna Morian"
    },
    {
      quote: "Neque cupiditate assumenda in maiores repudiandae mollitia adipisci maiores repudiandae mollitia consectetur adipisicing architecto elit sed adipiscing elit.",
      image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp",
      name: "Teresa May"
    },
    {
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur est laborum neque cupiditate assumenda in maiores.",
      image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
      name: "Kate Allise"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const truncateQuote = (quote, maxLength = 100) => {
    if (quote.length > maxLength) {
      return quote.slice(0, maxLength) + '...';
    }
    return quote;
  };

  return (
    <div
      id="carouselExampleCaptions"
      className="relative"
      data-twe-carousel-init
      data-twe-carousel-slide>
      <div
        className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative float-left -mr-[100%] ${index === currentSlide ? 'block' : 'hidden'} w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
            data-twe-carousel-active={index === currentSlide}
            data-twe-carousel-item
            style={{ backfaceVisibility: 'hidden' }}>
            <p className="mx-auto max-w-md text-xl italic text-neutral-700 dark:text-neutral-300 text-left">
              {truncateQuote(slide.quote)}
            </p>
            <div className="mb-6 mt-12 flex justify-center">
              <img
                src={slide.image}
                className="h-24 w-24 rounded-full shadow-lg dark:shadow-black/30"
                alt="sample image" />
            </div>
            <p className="text-neutral-500 dark:text-neutral-300">- {slide.name}</p>
          </div>
        ))}
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white"
        type="button"
        onClick={prevSlide}>
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
      </button>

      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white"
        type="button"
        onClick={nextSlide}>
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
