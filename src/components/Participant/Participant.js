import React, { useRef, useState, useEffect } from "react";

const Participant = () => {
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);

  const videoRef = useRef();
  const audioRef = useRef();

  return (
    <div className={`participant`}>
      <p className="participant-name">"You"</p>
      <video ref={videoRef} autoPlay={true} />
      <audio ref={audioRef} autoPlay={true} muted={true} />
    </div>
  );
};

export default Participant;
