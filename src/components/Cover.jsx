import React, { useState, useEffect } from "react";
import "./Cover.css";
import vid1 from "../assets/videos/vid1.mp4";

const Cover = () => {
  const fullTextLine1 = "VRRV";
  const fullTextLine2 = "Seecurity!";
  const typingSpeed = 150; // Adjust typing speed in milliseconds

  const [displayTextLine1, setDisplayTextLine1] = useState(""); // For Line 1
  const [displayTextLine2, setDisplayTextLine2] = useState(""); // For Line 2

  useEffect(() => {
    let index1 = 0;

    // Typing interval for Line 1 (VRV)
    const typingInterval1 = setInterval(() => {
      if (index1 < fullTextLine1.length) {
        setDisplayTextLine1((prev) => prev + fullTextLine1.charAt(index1));
        index1++;
      } else {
        clearInterval(typingInterval1); // Stop when Line 1 is typed
        startSecondLine(); // Start typing Line 2 after Line 1
      }
    }, typingSpeed);

    // Function to start typing Line 2 (Security!)
    const startSecondLine = () => {
      let index2 = 0;

      // Typing interval for Line 2 (Security!)
      const typingInterval2 = setInterval(() => {
        if (index2 < fullTextLine2.length) {
          setDisplayTextLine2((prev) => prev + fullTextLine2.charAt(index2));
          index2++;
        } else {
          clearInterval(typingInterval2); // Stop when Line 2 is typed
        }
      }, typingSpeed);
    };

    return () => {
      clearInterval(typingInterval1);
    }; // Cleanup interval on component unmount
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className="cover">
      <video className="background-video" src={vid1} autoPlay loop muted />
      <div className="typing-text">
        <div className="line">{displayTextLine1}</div>
        <div className="line">{displayTextLine2}</div>
      </div>
    </div>
  );
};

export default Cover;
