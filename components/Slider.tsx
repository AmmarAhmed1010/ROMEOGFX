import React from 'react';
import "./slider.css";
import Image from 'next/image';

type SliderProps = {
  quantity: number;
  width: string;
  height: string;
  reverse?: boolean;
};

const SliderList: React.FC<SliderProps> = ({ quantity, width, height, reverse }) => {
  return (
    <div
      className="slider"
      data-reverse={reverse || undefined}
      style={
        {
          '--width': width,
          '--height': height,
          '--quantity': quantity,
        } as React.CSSProperties
      }
    >
      <div className="list">
        {Array.from({ length: quantity }).map((_, index) => (
          <div
            className="item"
            key={index + 1}
            style={{ '--position': index + 1 } as React.CSSProperties}
          >
            <Image
              src={`/thumbnail/thumbnail (${index + 1}).jpg`}
              alt={`Slider item ${index + 1}`}
              height="400"
              width="400"
              className="object-contain rounded-3xl"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Slider: React.FC = () => {
  return (
    <main>
      {/* Second Slider */}
      <SliderList quantity={9} width="200px" height="200px" reverse />
    </main>
  );
};

export default Slider;
