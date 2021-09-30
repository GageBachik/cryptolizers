import type { NextPage } from "next";
import { useState, useEffect, useRef } from "react";
import Wave from "cryptolizers";

const LogoViz: NextPage = () => {
  const [clickCount, setClickCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function startViz() {
    setClickCount(clickCount + 1);
    if (clickCount === 1) {
      audioRef.current?.play();
    }
  }
  useEffect(() => {
    console.log("useEffect Ran");
    const wave = new Wave();
    let combo = ["shine", "#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
    wave.fromElement(audioRef.current?.id, canvasRef.current?.id, {
      type: combo[0],
      colors: [combo[2], combo[3], combo[4]],
      stroke: 1,
    });
    containerRef.current?.click();
  }, []);
  return (
    <div id="logo" ref={containerRef} onClick={startViz}>
      <audio
        id="logo_audio"
        ref={audioRef}
        className="hidden"
        src="song.mp3"
        controls
      />
      <canvas id="logo_canvas" ref={canvasRef} height="400" width="400" />
    </div>
  );
};

export default LogoViz;
