import React, { useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { Map, APIProvider, AdvancedMarker } from "@vis.gl/react-google-maps";
import PlacesAutocomplete from "react-places-autocomplete";
const libraries = ["places"];

export default function Autocomplete({
  coordinates,
  setCoordinates,
  setCountry,
  setFormmattedAddress,
  setPostalCode,
  username
}) {
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState({});

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries,
  });

  const handleChangeAddress = (e) => {
    setAddress(e);
    setCoordinates("");
    setCountry("");
    setFormmattedAddress("");
    setPostalCode("");
  };

  const handleClearButton = () => {
    setCoordinates("");
    setCountry("");
    setFormmattedAddress("");
    setPostalCode("");
    setAddress("");
  };

  const handleOnSelect = async (e) => {
    const results = await geocodeByAddress(e);
    const addressCoordinates = await getLatLng(results[0]);
    const formattedAddress = results[0]?.formatted_address;
    const country = results[0]?.address_components.find((component) =>
      component.types.includes("country")
    )?.long_name;
    const postcode = results[0]?.address_components.find((component) =>
      component.types.includes("postal_code")
    )?.long_name;
    setCountry(country);
    setFormmattedAddress(formattedAddress);
    setCoordinates(`${addressCoordinates.lat}, ${addressCoordinates.lng}`);
    setPosition({ lat: addressCoordinates.lat, lng: addressCoordinates.lng });
    setPostalCode(postcode);
    setAddress(e);
    console.log("Name: ",username)
    console.log("Address: ",formattedAddress)
    console.log("Country: ",country)
    console.log("Coordinates: ", 'lat:', addressCoordinates.lat, 'lng:', addressCoordinates.lng)
    console.log("Postcode: ",postcode)
  };
  if (loadError)
    return <div>Error loading Google Maps API: {loadError.message}</div>;
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChangeAddress}
      onSelect={handleOnSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            style={{ width: "50%", marginTop: "5%", marginRight: "10px" }}
            {...getInputProps({
              placeholder: "Search for an address",
              className: "location-search-input",
            })}
          />
          <button className="clear-button" onClick={handleClearButton}>
            Clear
          </button>
          <div className="autocomplete-dropdown-container">
            {loading && (
              <div class="spinner-border spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            )}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              const { key, ...suggestionProps } = getSuggestionItemProps(
                suggestion,
                {
                  className,
                  style,
                }
              );
              return (
                <div key={suggestion.placeId} {...suggestionProps}>
                  <span className="suggestion">{suggestion.description}</span>
                </div>
              );
            })}
          </div>
          {coordinates ? (
            <APIProvider apiKey={process.env.REACT_APP_API_KEY}>
              <div
                style={{
                  height: "50vh",
                  width: "50%",
                  alignItems: "center",
                  marginTop: "5%",
                  marginBottom: "5%",
                }}
              >
                <Map
                  defaultZoom={16}
                  defaultCenter={position}
                  mapId={process.env.REACT_APP_MAP_ID}
                >
                  <AdvancedMarker position={position}></AdvancedMarker>
                </Map>
              </div>
            </APIProvider>
          ) : null}
        </div>
      )}
    </PlacesAutocomplete>
  );
}
