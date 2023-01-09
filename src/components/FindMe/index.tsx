import React from "react";
import { Place } from "../../pages/HomePage";
import styled from "styled-components";

const FindMeButton = styled.button`
  font-size: 2rem;
  margin-left: 1rem;
  color: var(--complementaryColor);
`;

interface Props {
  setPlace: React.Dispatch<React.SetStateAction<Place>>;
}

const FindMe: React.FC<Props> = (props) => {
  function successCallback(position: GeolocationPosition) {
    props.setPlace({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      name: "YOUR LOCATION",
    });
  }
  function errorCalback() {
    window.alert("The website has no access to your localization");
  }

  function findMeHandler() {
    navigator.geolocation.getCurrentPosition(successCallback, errorCalback);
  }
  return (
    <FindMeButton onClick={findMeHandler}>
      <i className="bi bi-geo-alt"></i>
    </FindMeButton>
  );
};

export default FindMe;
