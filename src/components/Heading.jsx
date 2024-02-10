import React from 'react';

const Heading = () => {
  return (
    <div className="text-center mt-2">
      <marquee className="text-xl sm:text-2xl font-bold text-red-700" behavior="scroll" direction="left" scrollamount="10">
        Birthday Cakes, Pastries, Veg & Non-Veg Cakes Available - Check them out now!
      </marquee>
    </div>
  );
};

export default Heading;
