import styled from "styled-components";

export const GalleryContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 9999;
  position: absolute;
  background-color: hsla(0, 0%, 0%, 0.75);
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const Thumbnail = styled.img`
  width: 100px;
  height: auto;
  cursor: pointer;
  padding: 10px;
  border-radius: 20px;
`;

export const MainImage = styled.img`
  width: 500px;
  height: auto;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 10px;
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
  left: 250px;
  border-radius: 100px;
  width: 50px;
  height: 50px;
`;

export const RightArrow = styled(Arrow)`
  right: 250px;
  border-radius: 100px;
  width: 50px;
  height: 50px;
`;

// export const CloseButton = styled.button`
//   background: none;
//   border: none;
//   font-size: 20px;
//   cursor: pointer;
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   z-index: 10001;
//   color: #fff;
// `;
