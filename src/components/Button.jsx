import React from 'react';

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-pink-gradient hover:bg-none border-2 border-pink hover:text-pink font-poppins font-medium text-[18px] text-primary outline-none rounded-lg ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
