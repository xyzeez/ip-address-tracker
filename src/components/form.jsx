// import React from 'react'

import arrowIcon from '../assets/icon-arrow.svg';

const Form = () => {
  return (
    <form className="w-full">
      <div className="relative flex bg-white rounded-2xl overflow-hidden">
        <input
          type="text"
          name=""
          id=""
          placeholder="192.212.174.101"
          className="w-full font-rubik font-normal text-lg py-4 px-6 tracking-wide"
        />
        <button
          type="submit"
          aria-label="submit Button"
          className="absolute right-0 bg-black top-0 bottom-0 flex items-center justify-center w-16">
          <img src={arrowIcon} alt="" className="size-fit" />
        </button>
      </div>
      {/* <p className="mt-2 ml-4 font-rubik text-base">wrong ip address</p> */}
    </form>
  );
};

export default Form;
