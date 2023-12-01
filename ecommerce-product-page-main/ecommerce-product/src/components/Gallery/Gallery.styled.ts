import styled from "styled-components";

export const GalleryContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const Thumbnail = styled.img`
  width: 80px;
  height: auto;
  cursor: pointer;
`;

export const MainImage = styled.img`
  width: 300px;
  height: auto;
  display: block;
  margin: 0 auto;
  cursor: pointer;
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-color: #fff;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
`;

export const LeftArrow = styled(Arrow)`
  left: 10px;
`;

export const RightArrow = styled(Arrow)`
  right: 10px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;
