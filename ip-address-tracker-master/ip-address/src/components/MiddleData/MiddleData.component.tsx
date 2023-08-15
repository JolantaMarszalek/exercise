import {
  MiddleDataIPAddress,
  MiddleDataISP,
  MiddleDataLocation,
  MiddleDataSection,
  MiddleDataTimezone,
} from "./MiddleData.styled";

const MiddleData = () => {
  return (
    <MiddleDataSection>
      <MiddleDataIPAddress>IP ADDRESS</MiddleDataIPAddress>
      <MiddleDataLocation>LOCATION</MiddleDataLocation>
      <MiddleDataTimezone>TIMEZONE</MiddleDataTimezone>
      <MiddleDataISP>ISP</MiddleDataISP>
    </MiddleDataSection>
  );
};

export default MiddleData;
