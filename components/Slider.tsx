import React from 'react';
import "./slider.css";

const Slider: React.FC = () => {
  return (
    <>
      <main>
        {/* First Slider */}
        <div
          className="slider"
          style={{
            '--width': '100px',
            '--height': '50px',
            '--quantity': 10,
          } as React.CSSProperties}
        >
          <div className="list">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                className="item"
                key={index + 1}
                style={{ '--position': index + 1 } as React.CSSProperties}
              >
                <img
                  src={`/thumbnail/thumbnail (${index + 1}).jpg`}
                  alt={`Slider 1 item ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Slider */}
        <div
          className="slider"
          data-reverse="true"
          style={{
            '--width': '200px',
            '--height': '200px',
            '--quantity': 9,
          } as React.CSSProperties}
        >
          <div className="list">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                className="item"
                key={index + 1}
                style={{ '--position': index + 1 } as React.CSSProperties}
              >
                <img
                  src={`/thumbnail/thumbnail (${index + 1}).jpg`}
                  alt={`Slider 2 item ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Slider;
