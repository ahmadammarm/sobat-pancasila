
import React from 'react';
import EmbedVideo from '@/app/components/EmbedVideo';
import BackButton from '@/app/components/BackButton';
import Papua from '@/app/components/Papua';


const page = () => {

  return (
    <div className="p-5">
      <BackButton />
      <div className="flex flex-col justify-center items-center">
        <EmbedVideo />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Papua />
      </div>
    </div>
  );
};

export default page;
