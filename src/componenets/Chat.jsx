import { Avatar, Icon, IconButton } from "@mui/material";
import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import "./Chat.css";
import MicIcon from "@mui/icons-material/Mic";

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar></Avatar>

        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Mehmet</span>
          This is a message.
          <span className="chat_timestamp">{new Date().toISOString()}</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Mehmet</span>
          This is a message.
          <span className="chat_timestamp">{new Date().toISOString()}</span>
        </p>
        <p className="chat_message chat_reciever">
          <span className="chat_name">Mehmet</span>
          This is a message.
          <span className="chat_timestamp">{new Date().toISOString()}</span>
        </p>
        <p className="chat_message chat_reciever">
          <span className="chat_name">Mehmet</span>
          This is a message.
          <span className="chat_timestamp">{new Date().toISOString()}</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Mehmet</span>
          This is a message.
          <span className="chat_timestamp">{new Date().toISOString()}</span>
        </p>
      </div>

      <div className="chat_footer">
        <IconButton>
          <SentimentSatisfiedAltIcon />
        </IconButton>

        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
