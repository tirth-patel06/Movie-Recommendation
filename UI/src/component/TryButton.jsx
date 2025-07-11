import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Button = () => {
    const navigate = useNavigate();

  return (
    <StyledWrapper>
      <button className="button" onClick={()=>{
        navigate('/', {});
      }}>
        Refine the Taste
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    position: relative;
    width: 220px;
    height: 40px;
    background-color: #000;
    display: flex;
    align-items: center;
    color: white;
    flex-direction: column;
    justify-content: center;
    border: none;
    padding: 12px;
    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
  }

  .button::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -4px;
    top: -1px;
    margin: auto;
    width: 228px;
    height: 48px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% );
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .button::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .button:hover::after {
    filter: blur(30px);
  }

  .button:hover::before {
    transform: rotate(-180deg);
  }

  .button:active::before {
    scale: 0.7;
  }`;

export default Button;
