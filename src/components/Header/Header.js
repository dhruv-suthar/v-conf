import React from "react";
import "./Header.css";
import "./PopoverStyles.css";
import {
  Apps,
  CameraAltOutlined,
  FeedbackOutlined,
  HelpOutline,
  PersonOutlined,
  Settings,
} from "@material-ui/icons";
import { Avatar, Badge, Button, makeStyles, Popover } from "@material-ui/core";
import { useState, useEffect } from "react";
import { auth } from "./../../firebase";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Header = ({ currentUser }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <div className="header__logoContainer">
        <p>V-Conf.</p>
      </div>

      <div className="header__icons">
        <Avatar className="header__avatar" onClick={handleClick} />
        <Popover
          open={open}
          id={id}
          onClose={handleClose}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
          }}
        >
          <div className="home__popoverContainer">
            <div className="home__popover__top">
              <Badge
                overlap="circle"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <div className="home__badge">
                    <CameraAltOutlined className="home__camera" />
                  </div>
                }
              >
                <Avatar className={classes.large} />
              </Badge>

              <div className="home__text">
                <div className="home__displayName">
                  {currentUser?.displayName}
                </div>

                <div className="home__mail">{currentUser?.email}</div>
              </div>

              <div className="home__btn">Manage your Google Account</div>
            </div>

            <div className="home__popover__btm">
              <div className="home__addBtn">
                <PersonOutlined className="home__addIcon" />
                <p>Add another account</p>
              </div>

              <Button
                variant="outlined"
                className="home__signOut"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </Button>

              <div className="home__popover__footer">
                <p>Privacy policy</p>
                <span>•</span>
                <p>Terms of service</p>
              </div>
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
