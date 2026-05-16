'use client';
import { authClient } from '@/lib/auth-client';
import React, { useState } from 'react';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

const CardLeft = ({ destination }) => {
  const {
    imageUrl,
    destinationName,
    country,
    price,
    duration,
    departureDate,
    _id,
  } = destination;

  const { data: session } = authClient.useSession();
  const user = session?.user;
console.log(user)
  const [bookingDate, setBookingDate] = useState(null);
  const date = new Date(bookingDate);
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const handleBooking = async() => {
    const allInfo = {
      userId: user?.id,
      name: user?.name,
      image: user?.image,
      destinationId: _id,
      imageUrl,
      destinationName,
      country,
      price,
      duration,
      departureDate,
      date: formattedDate,
    };
    const res = await fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(allInfo)
    });
    const data = await res.json();
    console.log(data)
  };
  return (
    <div>
      <div className="border p-6 shadow-sm space-y-6 sticky top-10">
        <div>
          <p className="text-gray-400 text-sm mb-1">Starting from</p>

          <h2 className="text-5xl font-light text-cyan-500">${price}</h2>

          <p className="text-gray-400 mt-1">per person</p>
        </div>

        <input
          type="date"
          className="w-full border px-4 py-3 outline-none"
          onChange={e => setBookingDate(e.target.value)}
        />

        <button
          onClick={handleBooking}
          className="w-full bg-cyan-500 hover:bg-cyan-600 transition text-white py-4 flex items-center justify-center gap-2"
        >
          Book Now
          <FaArrowRight />
        </button>

        <div className="space-y-3 text-gray-500 text-sm">
          <div className="flex items-center gap-3">
            <FaCheck className="text-green-500" />
            <span>Free cancellation up to 7 days</span>
          </div>

          <div className="flex items-center gap-3">
            <FaCheck className="text-green-500" />
            <span>Travel insurance included</span>
          </div>

          <div className="flex items-center gap-3">
            <FaCheck className="text-green-500" />
            <span>24/7 customer support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLeft;
