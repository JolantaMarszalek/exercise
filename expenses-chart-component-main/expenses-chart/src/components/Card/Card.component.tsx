import {
  CardSection,
  CardSectionBottomDescribe,
  CardSectionText,
  CardSectionTopTitle,
  CardSectionBottomPrice,
  CardSectionTop,
  CardSectionMiddle,
  CardSectionBottom,
  CardSectionBottomPercent,
  CardSectionMiddleSection,
  CardSectionMiddleSingleLineGraph,
  Bar,
} from "./Card.styled";
import jsonData from "./../../../../data.json";
import { useState } from "react";

export const Card = () => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const graphComponents = jsonData.map((item, index) => (
    <CardSectionMiddleSingleLineGraph key={index}>
      {" "}
      {/* <div className="value">{hoveredValue}</div> */}{" "}
      {hoveredValue === item.amount && (
        <div className="value">{hoveredValue}</div>
      )}
      <Bar
        height={item.amount * 5}
        onMouseEnter={() => setHoveredValue(item.amount)}
        onMouseLeave={() => setHoveredValue(null)}
      />{" "}
      {/* <div>{item.amount}</div> */}
      <div>{item.day}</div>
    </CardSectionMiddleSingleLineGraph>
  ));

  return (
    <CardSection>
      <CardSectionTop>
        <CardSectionText>
          <CardSectionTopTitle>Spending - Last 7 days</CardSectionTopTitle>
        </CardSectionText>
      </CardSectionTop>
      <CardSectionMiddle>
        <CardSectionMiddleSection> {graphComponents}</CardSectionMiddleSection>
      </CardSectionMiddle>
      <CardSectionBottom>
        <CardSectionText>
          <CardSectionBottomDescribe>
            Total this month
          </CardSectionBottomDescribe>
          <CardSectionBottomPrice>$478.33</CardSectionBottomPrice>
        </CardSectionText>
        <CardSectionText>
          <CardSectionBottomPercent>+2.4%</CardSectionBottomPercent>
          <CardSectionBottomDescribe>from last month</CardSectionBottomDescribe>
        </CardSectionText>
      </CardSectionBottom>
    </CardSection>
  );
};
