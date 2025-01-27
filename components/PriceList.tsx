
"use client"
import React from 'react';
import styled from 'styled-components';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const PriceList: React.FC = () => {
   useEffect(() => {
     AOS.init({ duration: 1000,  offset: 50 });
     
 }, []);
  return (
   <>
   <h1 id='priceList'  className='text-yellow-100'>Price List</h1>
   <div className='grid grid-cols-1  gap-6 md:grid-cols-3 '>
  <StyledWrapper  data-aos="fade-up-right" className='w-full'>
    <div className="card">
      <div className="card__border" />
      <div className="card_title__container">
     <div className='flex justify-between items-center'>
     <div>
        <span className="card_title">Thumbnail</span>
        <p className="card_paragraph">Custom YouTube thumbnails</p>
        </div>
        <h1 className='text-white text-xl'>Rs:300</h1>
     </div>
      </div>
     
      <hr className="line" />
     
    </div>
  </StyledWrapper>
  <StyledWrapper  data-aos="fade-up-right" className='w-full'>
    <div className="card">
      <div className="card__border" />
      <div className="card_title__container">
     <div className='flex justify-between items-center'>
     <div>
        <span className="card_title">Logo</span>
        <p className="card_paragraph">Unique logo designs</p>
        </div>
        <h1 className='text-white text-xl'>Rs:500</h1>
     </div>
      </div>
     
      <hr className="line" />
     
    </div>
  </StyledWrapper>
  <StyledWrapper  data-aos="fade-up-right" className='w-full'>
    <div className="card">
      <div className="card__border" />
      <div className="card_title__container">
     <div className='flex justify-between items-center'>
     <div>
        <span className="card_title">Banner</span>
        <p className="card_paragraph">Custom banners</p>
        </div>
        <h1 className='text-white text-xl'>Rs:600</h1>
     </div>
      </div>
     
      <hr className="line" />
     
    </div>
  </StyledWrapper>
  <StyledWrapper  data-aos="fade-up-right" className='w-full'>
    <div className="card">
      <div className="card__border" />
      <div className="card_title__container">
     <div className='flex justify-between items-center'>
     <div>
        <span className="card_title">Overlay</span>
        <p className="card_paragraph">Stream overlay designs</p>
        </div>
        <h1 className='text-white text-xl'>Rs:800/1800</h1>
     </div>
      </div>
     
      <hr className="line" />
     
    </div>
  </StyledWrapper>
  <StyledWrapper  data-aos="fade-up-right" className='w-full'>
    <div className="card">
      <div className="card__border" />
      <div className="card_title__container">
     <div className='flex justify-between items-center'>
     <div>
        <span className="card_title">Posters</span>
        <p className="card_paragraph">Creative poster designs</p>
        </div>
        <h1 className='text-white text-xl'>Rs:1000</h1>
     </div>
      </div>
     
      <hr className="line" />
     
    </div>
  </StyledWrapper>
  <StyledWrapper  data-aos="fade-up-right" className='w-full'>
    <div className="card">
      <div className="card__border" />
      <div className="card_title__container">
     <div className='flex justify-between items-center'>
     <div>
        <span className="card_title">FB Banner</span>
        <p className="card_paragraph">Facebook banner designs</p>
        </div>
        <h1 className='text-white text-xl'>Rs:800</h1>
     </div>
      </div>
     
      <hr className="line" />
     
    </div>
  </StyledWrapper>
  <StyledWrapper  data-aos="fade-up-right" className='w-full'>
    <div className="card">
      <div className="card__border" />
      <div className="card_title__container">
     <div className='flex justify-between items-center'>
     <div>
        <span className="card_title">Intro/Outro</span>
        <p className="card_paragraph">Dynamic video intros/outros</p>
        </div>
        <h1 className='text-white text-xl'>Rs:800</h1>
     </div>
      </div>
     
      <hr className="line" />
     
    </div>
  </StyledWrapper>
  <StyledWrapper  data-aos="fade-up-right" className='w-full'>
    <div className="card">
      <div className="card__border" />
      <div className="card_title__container">
     <div className='flex justify-between items-center'>
     <div>
        <span className="card_title">Jersey Shirts</span>
        <p className="card_paragraph">Custom jersey designs</p>
        </div>
        <h1 className='text-white text-xl'>Rs:2000</h1>
     </div>
      </div>
     
      <hr className="line" />
     
    </div>
  </StyledWrapper>
  </div>
   </>
  );
};

const StyledWrapper = styled.div`
  .card {
    --white: hsl(0, 0%, 100%);
    --black: hsl(240, 15%, 9%);
    --paragraph: hsl(0, 0%, 83%);
    --line: hsl(240, 9%, 17%);
    --primary: hsl(189, 92%, 58%);

    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;
    
    background-color: hsla(240, 15%, 9%, 1);
    background-image: radial-gradient(
        at 88% 40%,
        hsla(240, 15%, 9%, 1) 0px,
        transparent 85%
      ),
      radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 0% 64%, hsl(189, 99%, 26%) 0px, transparent 85%),
      radial-gradient(at 41% 94%, hsl(189, 97%, 36%) 0px, transparent 85%),
      radial-gradient(at 100% 99%, hsl(188, 94%, 13%) 0px, transparent 85%);

    border-radius: 1rem;
    box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
  }

  .card .card__border {
    overflow: hidden;
    pointer-events: none;

    position: absolute;
    z-index: -10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background-image: linear-gradient(
      0deg,
      hsl(0, 0%, 100%) -50%,
      hsl(0, 0%, 40%) 100%
    );

    border-radius: 1rem;
  }

  .card .card__border::before {
    content: "";
    pointer-events: none;

    position: fixed;
    z-index: 200;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%), rotate(0deg);
    transform-origin: left;

    width: 200%;
    height: 10rem;
    background-image: linear-gradient(
      0deg,
      hsla(0, 0%, 100%, 0) 0%,
      hsl(189, 100%, 50%) 40%,
      hsl(189, 100%, 50%) 60%,
      hsla(0, 0%, 40%, 0) 100%
    );

    animation: rotate 8s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  .card .card_title__container .card_title {
    font-size: 1.5rem;
    color: var(--white);
  }

  .card .card_title__container .card_paragraph {
    margin-top: 0.25rem;


    font-size: 1rem;
    color: var(--paragraph);
  }

  .card .line {
    width: 100%;
    height: 0.1rem;
    background-color: var(--line);

    border: none;
  }

  .card .card__list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card .card__list .card__list_item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .card .card__list .card__list_item .check {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1rem;
    height: 1rem;
    background-color: var(--primary);

    border-radius: 50%;
  }

  .card .card__list .card__list_item .check .check_svg {
    width: 0.75rem;
    height: 0.75rem;

    fill: var(--black);
  }

  .card .card__list .card__list_item .list_text {
    font-size: 0.75rem;
    color: var(--white);
  }

  .card .button {
    cursor: pointer;

    padding: 0.5rem;
    width: 100%;
    background-image: linear-gradient(
      0deg,
      hsl(189, 92%, 58%),
      hsl(189, 99%, 26%) 100%
    );

    font-size: 0.75rem;
    color: var(--white);

    border: 0;
    border-radius: 9999px;
    box-shadow: inset 0 -2px 25px -4px var(--white);
  }`;

export default PriceList;


