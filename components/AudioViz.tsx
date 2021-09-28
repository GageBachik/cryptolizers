import type { NextPage } from "next";
import { useEffect } from "react";
import Wave from "cryptolizers";

const AudioViz: NextPage = () => {
  useEffect(() => {
    const main = document.getElementById("main");
    let colors = [
      // mint a genesis batch with NO colors here (they look sick) :D
      // good pallettes
      //
      // '#403F3D',
      // '#737272',
      // '#F2ECE9',
      // '#BFBCBA',
      // '#0D0D0D'
      //
      // '#740001',
      // '#AE0001',
      // '#EEBA30',
      // '#D3A625',
      // '#000000'
      //
      // '#FF0000',
      // '#BF0000',
      // '#800000',
      // '#400000',
      // '#000000'
      //
      "#D0D058",
      "#A0A840",
      "#708028",
      "#405010",
      //
      // '#555568',
      // '#8E9191',
      // '#EEB9C7',
      // '#F3EDED',
      // '#B9EEDC',
      // '#FFB3D9',
      // '#B9FFB3',
      // '#FFFFB3',
      // '#22212C',
      // '#302F3D'
      //
      // '#F28C18',
      // '#CA710C',
      // '#6D3A9C',
      // '#532C77',
      // '#FFFFFF',
      // '#000000'
      //
      // '#FFFFFF',
      // '#DCA54C',
      // '#171618',
      // '#09090B'
      //
      // '#D1C1D7',
      // '#F6CBD1',
      // '#70ABC7',
      // '#B4E9D6',
      // '#FFFFFF',
      // '#000000'
      //
      // '#0BD3D3',
      // '#F890E7',
      // '#FFFFFF',
      // '#D0D0D0',
      // '#000000'
      //
      // '#F0FF4F',
      // '#EC1B4D',
      // '#32C2F2',
      // '#F0FF4F'
      //
      // '#1EB854',
      // '#1FD65F',
      // '#D99330',
      // '#110E0E',
      // '#171212'
      //
      // '#FF7597',
      // '#75D1F0',
      // '#C07EEC',
      // '#423F00',
      // '#FFEE00'
      //
      // '#EF9A95',
      // '#A4CBB4',
      // '#EBDC99',
      // '#7D7259',
      // '#E4D8B4'
      //
      // '#F9D72F',
      // '#E0A82E',
      // '#181830',
      // '#181830',
      // '#FFFFFF'
      //
      // '#FFFFFF',
      // '#04C4C7',
      // '#FF86FA',
      // '#8200FF',
      // '#F9EB6E',
      // '#000000'
      //
      // '#D73D6C',
      // '#D57276',
      // '#D6C2BC',
      // '#C0CCCC',
      // '#65B2C6'
      //
      // color wheeled
      // '#B526AE',
      // '#751971',
      // '#F533EB',
      // '#360B33',
      // '#D62ECF',
      // '#FFFFFF',
      // '#000000',
      //
      // '#B5211F',
      // '#751614',
      // '#F52D2A',
      // '#360A09',
      // '#D62824',
      // '#FFFFFF',
      // '#000000'
      //
      // '#B54410',
      // '#752C0B',
      // '#F55D16',
      // '#361405',
      // '#D65314',
      // '#FFFFFF',
      // '#000000'
      //
      // '#B59624',
      // '#756117',
      // '#F5CA31',
      // '#362C0B',
      // '#D6B22A',
      // '#FFFFFF',
      // '#000000',
      //
      // '#3BB52D',
      // '#26751D',
      // '#50F53D',
      // '#11360D',
      // '#46D635',
      // '#FFFFFF',
      // '#000000'
      //
      // '#2A99B5',
      // '#1B6375',
      // '#38CFF5',
      // '#0C2D36',
      // '#32B5D6',
      // '#FFFFFF',
      // '#000000'
      //
      // '#1B30B5',
      // '#121F75',
      // '#2540F5',
      // '#080E36',
      // '#2039D6',
      // '#FFFFFF',
      // '#000000'
      //
    ];
    let visuals = [
      "bars",
      "bars blocks",
      "big bars",
      "cubes",
      "dualbars",
      "dualbars blocks",
      "fireworks",
      "flower",
      "flower blocks",
      "orbs",
      "ring",
      "rings",
      "round wave",
      "shine",
      "shine rings",
      "shockwave",
      "star",
      "static",
      "stitches",
      "web",
      "wave",
    ];
    const wave = new Wave();

    const combos = [
      ["bars", "#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
      ["bars", "#FFFFFF", "#000000", "#000000", "#000000"],
    ];

    combos.forEach((combo, i) => {
      let div = document.createElement("div");
      div.className = "container";
      // make sure bg color isn't the same as something moving
      div.style.backgroundColor = combo[1];

      let canvas = document.createElement("canvas");
      let id = `canvas_${i}`;
      canvas.id = id;

      div.appendChild(canvas);
      main?.appendChild(div);

      wave.fromElement("audio", id, {
        type: combo[0],
        colors: [combo[2], combo[3], combo[4]],
        stroke: 1,
      });
    });
  }, []);
  return (
    <div id="main">
      <audio id="audio" src="song.mp3" controls />
      <canvas id="output" height="500" width="500" />
    </div>
  );
};

export default AudioViz;
