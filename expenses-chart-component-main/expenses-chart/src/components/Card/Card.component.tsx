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
  CardSectionMiddleGraphTextUnder,
  CardSectionMiddleGraphTextAbove,
} from "./Card.styled";
import jsonData from "./../../../../data.json";
import { useState } from "react";

export const Card = () => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [clickedValue, setClickedValue] = useState<number | null>(null);

  const highestValue = Math.max(...jsonData.map((item) => item.amount));

  const handleGraphClick = (value: number) => {
    setClickedValue(value);
  };

  const graphComponents = jsonData.map((item, index) => (
    <CardSectionMiddleSingleLineGraph
      key={index}
      onClick={() => handleGraphClick(item.amount)}>
      {/* <div className="value">{hoveredValue}</div> */}{" "}
      {clickedValue === item.amount && (
        <CardSectionMiddleGraphTextAbove>
          <div className="value">${clickedValue}</div>
        </CardSectionMiddleGraphTextAbove>
      )}
      <Bar
        height={item.amount * 3}
        onMouseEnter={() => setHoveredValue(item.amount)}
        onMouseLeave={() => setHoveredValue(null)}
        isHighest={item.amount === highestValue}
        className={item.amount === highestValue ? "highestBar" : ""}
      />
      {/* <div>{item.amount}</div> */}
      <CardSectionMiddleGraphTextUnder>
        <div>{item.day}</div>
      </CardSectionMiddleGraphTextUnder>
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
