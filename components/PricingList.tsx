"use client"; 
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const PricingList = () => {
  return (
    <>
     <h1 id='list' className='text-[hsl(189,92%,58%)] text-3xl md:text-5xl mb-6 underline font-semibold mt-10 '>Price List</h1>
     <div className='grid grid-cols-2 gap-4 md:grid-cols-4 '>
     <StyledWrapper>
  <div className="card">
    <div className="card__content text-center">
      <div className="flex flex-col items-center">
            <Image
                     src="/thumbnail/thumbnail (1).jpg"
                     alt="/"
                     height="300"
                     width="300"
                     className="object-contain  rounded-xl"
                     priority
                   />
        <h1 className="text-[#30D6F3]">Thumbnail</h1>
        <p className='text-white text-xs font-extralight'>Thumbnails for your videos.</p>
        <h1 className="text-red-700 mb-2">Rs: 300</h1>          
      </div>
    </div>
  </div>
</StyledWrapper>
<StyledWrapper>
  <div className="card">
    <div className="card__content text-center">
      <div className="flex flex-col items-center">
            <Image
                     src="/thumbnail/thumbnail (1).jpg"
                     alt="/"
                     height="300"
                     width="300"
                     className="object-contain rounded-xl"
                   />
        <h1 className="text-[#30D6F3]">Thumbnail</h1>
        <p className='text-white text-xs font-extralight'>Thumbnails for your videos.</p>
        <h1 className="text-red-700 mb-2">Rs: 300</h1>          
      </div>
    </div>
  </div>
</StyledWrapper>
<StyledWrapper>
  <div className="card">
    <div className="card__content text-center">
      <div className="flex flex-col items-center">
            <Image
                     src="/thumbnail/thumbnail (1).jpg"
                     alt="/"
                     height="300"
                     width="300"
                     className="object-contain  rounded-xl"
                   />
        <h1 className="text-[#30D6F3]">Thumbnail</h1>
        <p className='text-white text-xs font-extralight'>Thumbnails for your videos.</p>
        <h1 className="text-red-700 mb-2">Rs: 300</h1>          
      </div>
    </div>
  </div>
</StyledWrapper>
<StyledWrapper>
  <div className="card">
    <div className="card__content text-center">
      <div className="flex flex-col items-center">
            <Image
                     src="/thumbnail/thumbnail (1).jpg"
                     alt="/"
                     height="300"
                     width="300"
                     className="object-contain rounded-xl"
                   />
        <h1 className="text-[#30D6F3]">Thumbnail</h1>
        <p className='text-white text-xs font-extralight'>Thumbnails for your videos.</p>
        <h1 className="text-red-700 mb-2">Rs: 300</h1>          
      </div>
    </div>
  </div>
</StyledWrapper>



     </div>
    </>
  
  );
}

const StyledWrapper = styled.div`
  .card {
    
    // height: 254px;
    border-radius: 20px;
    padding: 5px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    background-image: linear-gradient(144deg,#30D6F3, #30d6f374 50%,#00DDEB);
  }

  .card__content {
    background: rgb(5, 6, 45);
    border-radius: 17px;
    width: 100%;
    height: 100%;
  }`;

export default PricingList;
