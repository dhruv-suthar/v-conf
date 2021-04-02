import { Badge } from "@material-ui/core";
import { ChatOutlined, PeopleAltOutlined } from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div className="top_header">
      <div className="top-header-item">
        <Badge badgeContent={2}>
          <PeopleAltOutlined />
        </Badge>
      </div>

      <div className="top-header-item second-item">
        <ChatOutlined />
      </div>

      <div className="top-header-item video_item">
        <video className="top_header_video" autoPlay={true} />
      </div>
    </div>
  );
};

export default TopHeader;
