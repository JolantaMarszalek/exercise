import {
  MiddleDataData,
  MiddleDataSection,
  MiddleDataStyled,
  MiddleDataTitle,
} from "./MiddleData.styled";

const MiddleData = () => {
  return (
    <MiddleDataSection>
      <MiddleDataStyled>
        <MiddleDataTitle>IP ADDRESS</MiddleDataTitle>
        <MiddleDataData>123,456,789</MiddleDataData>
      </MiddleDataStyled>
      <MiddleDataStyled>
        <MiddleDataTitle>LOCATION</MiddleDataTitle>
        <MiddleDataData>Alabama,1001</MiddleDataData>
      </MiddleDataStyled>
      <MiddleDataStyled>
        <MiddleDataTitle>TIMEZONE</MiddleDataTitle>
        <MiddleDataData>UTC 05:00</MiddleDataData>
      </MiddleDataStyled>
      <MiddleDataStyled>
        <MiddleDataTitle>ISP</MiddleDataTitle>
        <MiddleDataData>Something</MiddleDataData>
      </MiddleDataStyled>
    </MiddleDataSection>
  );
};

export default MiddleData;
