// import React from 'react';

const DataBoard = () => {
  return (
    <div className="bg-white w-full flex items-center p-6 overflow-hidden rounded-2xl">
      <ul className="font-rubik text-xl text-gray-900 font-bold flex flex-col gap-4 items-center text-center w-full">
        <li className="">
          <span className="block text-xs mb-2 text-gray-600">IP ADDRESS</span>
          192.212.174.101
        </li>
        <li>
          <span className="block text-xs mb-2 text-gray-600">LOCATION</span>
          Brooklyn, NY 10001
        </li>
        <li>
          <span className="block text-xs mb-2 text-gray-600">TIMEZONE</span>
          UTC-05:00
        </li>
        <li>
          <span className="block text-xs mb-2 text-gray-600">ISP</span>
          SpaceX Starlink
        </li>
      </ul>
    </div>
  );
};

export default DataBoard;
