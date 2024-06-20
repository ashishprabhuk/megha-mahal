import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import './TopButton.css'; // Import your CSS file for styling

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    // Show button when user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Add event listener when component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? 'show' : 'hide'}`} onClick={scrollToTop}>
      <button className='top-btn'>
        <IoIosArrowUp />
      </button>
    </div>
  );
};

export default TopButton;
