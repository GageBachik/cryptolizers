import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Wave from "@foobar404/wave";

const AudioViz: NextPage = () => {
  let [wave] = useState(new Wave());
  useEffect(() => {
    // const player: any = document.getElementById("stream");
    // let wave = new Wave();
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
      })
      .then(function (stream) {
        console.log("stream started");
        try {
          // player.src = stream;
          wave.source = {};
          wave.fromStream(stream, "output", {
            type: "star",
            // colors: ["red", "white", "blue"],
            // context: new AudioContext(),
          });
        } catch (error) {
          console.log(error);
        }
      })
      .catch(function (err) {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <canvas id="output" height="500" width="500" />
      <audio id="stream" src="" controls></audio>
    </>
  );
};

export default AudioViz;
