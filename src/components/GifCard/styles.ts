import styled from 'styled-components';

export const Container = styled.button`
  position: relative;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 140px;
  height: 140px;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  padding: 0;
  border: 4px solid ${(props) => props.theme.palette.primary.main};
  transition: 0.2s ease-in-out all;
  &:hover {
    scale: 1.2;
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const GifGradient = styled.div`
  position: absolute;
  bottom: 0;
  height: 120px;
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), rgba(20, 20, 20, 1));
`;

export const GifImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const GifTitle = styled.p`
  font-size: 11px;
  color: ${(props) => props.theme.palette.common.white};
  position: absolute;
  z-index: 5;
  left: 8px;
  text-align: left;
  opacity: 0.8;
  font-weight: bold;
  bottom: 8px;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
