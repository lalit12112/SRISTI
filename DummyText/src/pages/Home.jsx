import React, { useState } from "react";
import img from "/img.png";
import "./home.css";

export default function Home() {
  const [selectedInput, setSelectedInput] = useState("image");
  const [previewSrc, setPreviewSrc] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviewSrc(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviewSrc("");
    }
  };

  return (
    <>
      <img id="img1" src={img} alt="Default" />
      <div id="inner">
      <div id="rusthandler">
        <h2 id="h2hide">Unlocking health insights with precision and innovation—Medilyzer, your gateway to advanced medical analytics</h2>
      </div>
        <button id="getstarted" className="bg-emerald-500">
          <a
            href="https://medilyzer-4sjappxjwjxxvdntjsnmgqf.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </button>
      </div>
    </>
  );
}
