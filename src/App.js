import React from "react";
import "./App.css";
import myimg from "./2.jpg";
const App = () => {
  return (
    <>
      <div style={{ border: "1px solid black", maxWidth: "100vw" }}>
        <h1 className="title red">Ibrahim</h1>
        <br />
        <img src={myimg} alt="myimg" />
        <br />
        <img src={"/1.jpg"} alt="myimg" />
      </div>
      <video
        src="myVideo.mp4"
        type="video/mp4"
        width="600"
        height="300"
        controls="controls"
        autoplay="true"
      />
    </>
  );
};

export default App;
