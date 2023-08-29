import {
  MiddleDataData,
  MiddleDataSection,
  MiddleDataStyled,
  MiddleDataStyledLeft,
  MiddleDataStyledRight,
  MiddleDataTitle,
} from "./MiddleData.styled";

const MiddleData = () => {
  return (
    <MiddleDataSection>
      <MiddleDataStyledLeft>
        <MiddleDataTitle>IP ADDRESS</MiddleDataTitle>
        <MiddleDataData>123,456,789</MiddleDataData>
      </MiddleDataStyledLeft>
      <MiddleDataStyled>
        <MiddleDataTitle>LOCATION</MiddleDataTitle>
        <MiddleDataData>Alabama,1001</MiddleDataData>
      </MiddleDataStyled>
      <MiddleDataStyled>
        <MiddleDataTitle>TIMEZONE</MiddleDataTitle>
        <MiddleDataData>UTC 05:00</MiddleDataData>
      </MiddleDataStyled>
      <MiddleDataStyledRight>
        <MiddleDataTitle>ISP</MiddleDataTitle>
        <MiddleDataData>Something</MiddleDataData>
      </MiddleDataStyledRight>
    </MiddleDataSection>
  );
};

export default MiddleData;
