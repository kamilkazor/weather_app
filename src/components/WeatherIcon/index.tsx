import React from "react";
import styled from "styled-components";
import getIconSrc from "../../utils/getIconSrc";

const IconWrapper = styled.div`
  position: relative;
  &::before {
    content: "";
    z-index: -1;
    display: block;
    background-color: hsla(0, 0%, 0%, 0.1);
    position: absolute;
    width: 1px;
    height: 1px;
    top: 50%;
    left: 50%;
    box-shadow: 0 0 50px 50px hsla(0, 0%, 0%, 0.1);
  }
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

interface Props {
  weatherCode: number;
  night?: boolean;
  className?: string;
}

const WeatherIcon: React.FC<Props> = (props) => {
  return (
    <IconWrapper className={props.className}>
      <img src={getIconSrc(props.weatherCode, props.night)} alt="" />
    </IconWrapper>
  );
};

export default WeatherIcon;
