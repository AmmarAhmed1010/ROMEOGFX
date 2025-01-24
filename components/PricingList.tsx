"use client"; 
import React from 'react';
import styled from 'styled-components';

const PricingList = () => {
  return (
    <>
     <h1 id='packages' className='text-[hsl(189,92%,58%)] text-3xl md:text-5xl mb-6 underline font-semibold mt-10 '>Packages</h1>
     <div className='grid grid-cols-2 pb-20 gap-6 md:grid-cols-4 '>
     <StyledWrapper>
      <div className="card">
        <div className="card__content">
        </div></div>
    </StyledWrapper>
    <StyledWrapper>
      <div className="card">
        <div className="card__content">
        </div></div>
    </StyledWrapper>
    <StyledWrapper>
      <div className="card">
        <div className="card__content">
        </div></div>
    </StyledWrapper>
    <StyledWrapper>
      <div className="card">
        <div className="card__content p-6">
          <h1>hello</h1>
        </div>
        </div>
    </StyledWrapper>
     </div>
    </>
  
  );
}

const StyledWrapper = styled.div`
  .card {
    
    height: 254px;
    border-radius: 20px;
    padding: 5px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  }

  .card__content {
    background: rgb(5, 6, 45);
    border-radius: 17px;
    width: 100%;
    height: 100%;
  }`;

export default PricingList;
