import { Circle, RatingSection } from "./Rating.styled";

import React, { useContext, createContext, useState, ReactNode } from "react";

interface RatingContextType {
  selectedNumber: number | null;
  setSelectedNumber: React.Dispatch<React.SetStateAction<number | null>>;
}

export const RatingContext = createContext<RatingContextType | undefined>(
  undefined
);

export const useRatingContext = (): RatingContextType => {
  const context = useContext(RatingContext);
  if (!context) {
    throw new Error(
      "useRatingContext must be used within a RatingContextProvider"
    );
  }
  return context;
};

interface RatingContextProviderProps {
  children: ReactNode;
}

export const RatingContextProvider: React.FC<RatingContextProviderProps> = ({
  children,
}) => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  return (
    <RatingContext.Provider value={{ selectedNumber, setSelectedNumber }}>
      {children}
    </RatingContext.Provider>
  );
};

export const Rating = () => {
  const {
    // selectedNumber,
    setSelectedNumber,
  } = useRatingContext();

  const [numbers, setNumbers] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const handleClick = (num: number) => {
    setNumbers((prevNumbers) => ({
      ...prevNumbers,
      [num]: !prevNumbers[num as keyof typeof prevNumbers],
    }));
    setSelectedNumber(num);
  };

  return (
    <RatingSection>
      <Circle clicked={numbers[1]} onClick={() => handleClick(1)}>
        1
      </Circle>
      <Circle clicked={numbers[2]} onClick={() => handleClick(2)}>
        2
      </Circle>
      <Circle clicked={numbers[3]} onClick={() => handleClick(3)}>
        3
      </Circle>
      <Circle clicked={numbers[4]} onClick={() => handleClick(4)}>
        4
      </Circle>
      <Circle clicked={numbers[5]} onClick={() => handleClick(5)}>
        5
      </Circle>
    </RatingSection>
  );
};
