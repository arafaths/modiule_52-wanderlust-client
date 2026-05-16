import CardLeft from '@/components/CardLeft';
import { DeleteAlert } from '@/components/DeleteAlert';
import EditModel from '@/components/EditModel';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowLeft,
  FaStar,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from 'react-icons/fa';

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destinations/${id}`);
  const destination = await res.json();
  
   const {
     imageUrl,
     destinationName,
     country,
     price,
     duration,
     departureDate,
     description,
  } = destination;

  
  return (
    <div className="container mx-auto px-5 py-8">
      {/* top nav */}
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/destinations"
          className="flex items-center gap-2 text-gray-500 hover:text-black transition"
        >
          <FaArrowLeft className="text-sm" />
          Back to Destinations
        </Link>

        <div className="flex items-center gap-3">
          <EditModel destination={destination} />

          <DeleteAlert destination={destination} />
        </div>
      </div>

      {/* hero image */}
      <div className="relative h-[400px] overflow-hidden rounded-sm">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover"
        />
      </div>

      {/* content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        {/* left */}
        <div className="lg:col-span-2 space-y-8">
          {/* location */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaMapMarkerAlt className="text-sm" />
            <span>{country}</span>
          </div>

          {/* title */}
          <h1 className="text-5xl font-light text-gray-900">
            {destinationName}
          </h1>

          {/* stats */}
          <div className="flex flex-wrap items-center gap-5 text-gray-700">
            <div className="flex items-center gap-2">
              <FaStar className="text-green-500 text-sm" />
              <span className="font-semibold">4.5</span>
              <span className="text-gray-400">(150 reviews)</span>
            </div>

            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-sm" />
              <span className="font-medium">{duration}</span>
            </div>
          </div>

          {/* overview */}
          <div className="space-y-4">
            <h2 className="text-3xl font-light">Overview</h2>

            <p className="text-gray-600 leading-8">{description}</p>
          </div>
        </div>

        {/* right card */}
        <CardLeft destination={destination} />
      </div>
    </div>
  );
};

export default DetailsPage;
