import { DeleteBooking } from '@/components/DeleteBooking';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaEye,
  FaCheckCircle,
} from 'react-icons/fa';

const BookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;

  const res = await fetch(
    `http://localhost:5000/bookings/${user.id}`,
  );
  const bookingsList = await res.json();
  return (
    <div className="container mx-auto px-5 py-10">
      {/* heading */}
      <div className="mb-10">
        <h1 className="text-5xl font-light text-gray-900">My Bookings</h1>

        <p className="text-gray-500 mt-2">
          Manage and view your upcoming travel plans
        </p>
      </div>

      {/* bookings */}
      <div className="space-y-6">
        {/* card */}
        {bookingsList.map(item => (
          <div
            key={item._id}
            className="border p-4 flex flex-col lg:flex-row gap-5 items-center justify-between"
          >
            {/* left */}
            <div className="flex flex-col lg:flex-row gap-5">
              {/* image */}
              <div className="relative w-full lg:w-[260px] h-[150px] overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.destinationName}
                  fill
                  className="object-cover"
                />
              </div>

              {/* content */}
              <div className="space-y-3">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm inline-flex items-center gap-2">
                  <FaCheckCircle className="text-xs" />
                  Confirmed
                </span>

                <h2 className="text-4xl font-light">{item.destinationName}</h2>

                <div className="space-y-2 text-gray-500">
                  <p className="flex items-center gap-2">
                    <FaCalendarAlt className="text-sm" />
                    Departure:{' '}{item.date}
                  </p>

                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-sm" />
                    Booking ID: b1
                  </p>
                </div>

                <h3 className="text-5xl font-light text-cyan-500">${ item.price}</h3>
              </div>
            </div>

            {/* buttons */}
            <div className="flex items-center gap-3">
              <DeleteBooking bookingId={item._id} />

              <button className="bg-cyan-500 hover:bg-cyan-600 transition text-white px-6 py-3 flex items-center gap-2">
                <FaEye className="text-sm" />
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingsPage;
