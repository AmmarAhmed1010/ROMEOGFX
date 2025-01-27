"use client"
import React from "react";
import styled from "styled-components";

interface BtnProps {
  text: string;
}

const Btn: React.FC<BtnProps> = ({ text }) => {
  return (
    <StyledWrapper>
      <button className="Btn" data-text={text}>
        <span>{text}</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Btn {
    width: 140px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(
      to right,
      #30d6f374,
      #30D6F3,
      #30d6f374,
      #30d6f374,
      #30D6F3,
      #30d6f374
    );
    background-size: 250%;
    background-position: left;
    color: #ffd277; /* Button text color */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 1s;
    overflow: hidden;
  }

  .Btn span {
    z-index: 1; /* Ensures the text stays above the ::before pseudo-element */
    color: white; /* Explicit text color for visibility */
  }

  .Btn::before {
    position: absolute;
    content: attr(data-text); /* Dynamic text from props */
    color: #ffd277; /* Text color inside the pseudo-element */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97%;
    height: 90%;
    border-radius: 8px;
    transition-duration: 1s;
    background-color: rgba(0, 0, 0, 0.842); /* Background color for hover effect */
    background-size: 200%;
  }

  .Btn:hover {
    background-position: right;
    transition-duration: 1s;
  }

  .Btn:hover::before {
    background-position: right;
    transition-duration: 1s;
  }

  .Btn:active {
    transform: scale(0.95);
  }
`;

export default Btn;
