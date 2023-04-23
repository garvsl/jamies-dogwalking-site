import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function GoogleMaps() {
  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <iframe
      id="Map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3307.4963620118633!2d-118.4488749!3d34.0054679!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbeaa7377d5d%3A0xd9e20bdc53f6b627!2sJamie&#39;s%20Dog%20Walking%20Services!5e0!3m2!1sen!2sus!4v1682283384081!5m2!1sen!2sus"
      width="600"
      height="450"
      style={{ border: 0, width: "100%", height: "100vh" }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
