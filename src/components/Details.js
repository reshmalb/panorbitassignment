import React, { useRef, useEffect } from 'react';
import './Details.css';

const Details = ({ name, profilepic, email, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className='modal-overlay'>
      <div className='modal-container' ref={modalRef}>
        <div className='modal-header'>
          <h2>User Details</h2>
          <button onClick={onClose} className='close-button'>
            X
          </button>
        </div>
        <div className='modal-body'>
          <img className='modal-image' src={profilepic} alt='profile-image' />
          <label>{name}</label>
          <label>{email}</label>
        </div>
        <div className='modal-footer'>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
