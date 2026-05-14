import CardDestination from '@/components/CardDestination';
import React from 'react';

const DestinationsPage = async() => {
  const res = await fetch('http://localhost:5000/destination');
  const destinations = await res.json();
  return (
    <div className='container mx-auto px-5'>
      <h2 className='text-3xl'>Explore All Destinations</h2>

      <div className="grid grid-cols-4 gap-5">
        {
          destinations.map(destination => <CardDestination key={destination._id} destination={destination} />)
        }
      </div>
    </div>
  );
};

export default DestinationsPage;