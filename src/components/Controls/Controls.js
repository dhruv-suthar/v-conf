import {
  CallEnd,
  ExpandLess,
  MicNone,
  MicOffOutlined,
  MoreVert,
  VideocamOffOutlined,
  VideocamOutlined,
} from "@material-ui/icons";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import React from "react";
import "./Controls.css";
import { useClipboard } from "use-clipboard-copy";

import { useEffect, useReducer, useState } from "react";

const Controls = ({ rName }) => {
  const [videoON, setVideoON] = useState(false);
  const [audioON, setAudioON] = useState(false);
  const [roomName, setRoomName] = useState();

  return (
    <>
      <div className="controls">
        <div className="details_control">
          <p>
            {rName} <p>meeting Id 👆</p>
          </p>

          <FileCopyIcon />
        </div>

        <div className="video-audio_controls">
          <div className={`control_btnContainer ${!audioON && "red-bg"}`}>
            {audioON ? (
              <MicNone className="control-icon" />
            ) : (
              <MicOffOutlined className="control-icon" />
            )}
          </div>
          <div className="control_btnContainer">
            <CallEnd className="control-icon end-meet" />
          </div>

          <div className={`control_btnContainer ${!videoON && "red-bg"}`}>
            {videoON ? (
              <VideocamOutlined className="control-icon" />
            ) : (
              <VideocamOffOutlined className="control-icon" />
            )}
          </div>
        </div>
        <MoreVert className="more-icon" />
      </div>
    </>
  );
};

export default Controls;
