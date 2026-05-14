import Image from 'next/image';
import React from 'react';
import { FaArrowUp, FaCalendarAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const CardDestination = ({ destination }) => {
  const { imageUrl, destinationName, country, price, duration } = destination;
  return (
    <div className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      {/* image */}
      <div className="relative h-[220px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        {/* rating */}
        <div className="absolute top-3 right-3 bg-white px-3 py-1 flex items-center gap-1 text-sm font-semibold">
          4.5
          <FaStar className="text-black text-xs" />
        </div>
      </div>

      {/* content */}
      <div className="p-4 space-y-3">
        {/* country */}
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <FaMapMarkerAlt />
          <span>{country}</span>
        </div>

        {/* title + price */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-medium text-gray-800">Title</h2>

          <div>
            <span className="text-xl font-semibold text-black">
              ${price}
            </span>
            <span className="text-gray-400 text-sm">/Person</span>
          </div>
        </div>

        {/* duration */}
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <FaCalendarAlt className="text-xs" />
          <span>{duration}</span>
        </div>

        {/* button */}
        <button className="flex items-center gap-2 text-cyan-500 font-medium pt-2 group/btn">
          BOOK NOW
          <FaArrowUp className="rotate-45 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition duration-300" />
        </button>
      </div>
    </div>
  );
};

export default CardDestination;