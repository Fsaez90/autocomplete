import React, { useState } from "react";
import Autocomplete from "./Autocomplete";

export default function Form({ name }) {
  const [coordinates, setCoordinates] = useState("");
  const [country, setCountry] = useState("");
  const [formattedAddress, setFormattedAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");

  return (
    <div style={{ padding: "5%" }}>
      <h2>Hello {name}, enter your address:</h2>
      <Autocomplete
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        setCountry={setCountry}
        setFormmattedAddress={setFormattedAddress}
        setPostalCode={setPostalCode}
        username={name}
      />
      {coordinates ? <p>Coordinates: {coordinates}</p> : null}
      {country ? <p>Country: {country}</p> : null}
      {formattedAddress ? <p>Address: {formattedAddress}</p> : null}
      {postalCode ? <p>Postcode: {postalCode}</p> : null}
    </div>
  );
}
