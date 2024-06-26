import React, { useState } from 'react';
import { IoIosChatbubbles } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import './ChatButton.css';

const ChatButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };

  const phoneNumber = '919486363226';
  const whatsappMessage = 'Hello! I would like to get in touch regarding Meghaa Mahal.';

  return (
    <div className="chat-box">
      <input
        type="checkbox"
        id="toggle"
        checked={isChecked}
        onChange={handleToggleChange}
      />
      <label className="tog-btn" htmlFor="toggle">
        {isChecked ? <FaPlus color="#fff" size={22} /> : <IoIosChatbubbles color="#fff" size={22} />}
      </label>
      <nav className="nav-lists">
        <button 
          className="chat-btn whatsapp-btn"
          onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
        >
          <FaWhatsapp size={20} />
        </button>
        <button className="chat-btn call-btn">
          <a href={`tel:${phoneNumber}`}>
            <FiPhoneCall size={20} />
          </a>
        </button>
      </nav>
    </div>
  );
};

export default ChatButton;
