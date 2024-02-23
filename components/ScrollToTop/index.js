import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
  
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <>
        {isVisible && (
          <button
            className="fixed bottom-5 right-5 p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700"
            onClick={scrollToTop}
          >
            Scroll To Top
          </button>
        )}
      </>
    );
  };
  
  export default ScrollToTopButton;
  