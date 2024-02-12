import {
  CardSection,
  CardStyled,
  NumbersCard,
  SingleCardStyled,
  TextUnderCard,
} from "./Card.styled";
import { useState, useEffect } from "react";

export const Card = () => {
  const [days, setDays] = useState(14);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      const totalSeconds =
        days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
      if (totalSeconds > 0) {
        const remainingTime = totalSeconds - 1;
        setDays(Math.floor(remainingTime / (24 * 60 * 60)));
        setHours(Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60)));
        setMinutes(Math.floor((remainingTime % (60 * 60)) / 60));
        setSeconds(remainingTime % 60);
      } else {
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [days, hours, minutes, seconds]);

  return (
    <>
      <CardSection>
        <SingleCardStyled>
          <CardStyled>
            <NumbersCard>{days < 10 ? `0${days}` : days}</NumbersCard>
          </CardStyled>
          <TextUnderCard>DAYS</TextUnderCard>
        </SingleCardStyled>
        <SingleCardStyled>
          <CardStyled>
            <NumbersCard>{hours < 10 ? `0${hours}` : hours}</NumbersCard>
          </CardStyled>
          <TextUnderCard>HOURS</TextUnderCard>
        </SingleCardStyled>
        <SingleCardStyled>
          <CardStyled>
            <NumbersCard>{minutes < 10 ? `0${minutes}` : minutes}</NumbersCard>
          </CardStyled>
          <TextUnderCard>MINUTES</TextUnderCard>
        </SingleCardStyled>
        <SingleCardStyled>
          <CardStyled>
            <NumbersCard>{seconds < 10 ? `0${seconds}` : seconds}</NumbersCard>
          </CardStyled>
          <TextUnderCard>SECONDS</TextUnderCard>
        </SingleCardStyled>
      </CardSection>
    </>
  );
};
