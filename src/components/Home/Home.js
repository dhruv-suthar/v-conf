import React from "react";
import { Button, Divider, InputAdornment, TextField } from "@material-ui/core";
import { Keyboard, VideoCallOutlined } from "@material-ui/icons";
import "./Home.css";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  // const handleMeetingCodeChange = (e) => {
  //   setMeetingCode(e.target.value);
  // };
  const history = useHistory();

  const startCall = () => {
    const meetingCode = uuidv4();
    history.push(`/${meetingCode}`);
  };

  return (
    <div className="hero">
      <div className="hero__left">
        <div className="hero__featureText">
          <h1 className="hero__title">Connect to people remotely.</h1>
        </div>

        <div className="hero__buttons">
          <Button
            color="primary"
            variant="contained"
            className="hero__createBTN"
            onClick={startCall}
          >
            <VideoCallOutlined />
            <p>New Meeting</p>
          </Button>

          <TextField
            className="hero__input"
            variant="outlined"
            placeholder="Enter a code or a link"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Keyboard className="icon" />
                </InputAdornment>
              ),
            }}
          />

          <Button className="hero__joinBTN">Join</Button>
        </div>

        <Divider />

        <p className="hero__learnMore">Learn more about V-Conf.</p>
      </div>
    </div>
  );
};

export default Home;
