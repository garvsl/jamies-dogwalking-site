import { useState, useEffect, useRef } from "react";

export default function OpenHours({ setDisplayHours, storeStatus }) {
  return (
    <>
      <div className="hourDay">
        <ul className="days">
          <li>Mon:</li>
          <li>Tue:</li>
          <li>Wed:</li>
          <li>Thu:</li>
          <li>Fri:</li>
          <li>Sat:</li>
          <li>Sun:</li>
        </ul>
        <ul className="hours">
          <li>8:00 AM – 8:00 PM</li>
          <li>8:00 AM – 8:00 PM</li>
          <li>8:00 AM – 8:00 PM</li>
          <li>8:00 AM – 8:00 PM</li>
          <li>8:00 AM – 8:00 PM</li>
          <li>8:00 AM – 8:00 PM</li>
          <li>8:00 AM – 8:00 PM</li>
        </ul>
      </div>
      <h1>{`Currently ${storeStatus}`}</h1>
      <button className="contactNum">
        <a href="tel:+1-310-948-2558">Call Now</a>
      </button>
    </>
  );
}
