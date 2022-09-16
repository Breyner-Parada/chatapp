import React from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import { Infobar } from "./Infobar";
import "../Styles/Chat.css";

let socket;

export const Chat = () => {
  const [name, setName] = React.useState("");
  const [room, setRoom] = React.useState("");
  const [message, setMessage] = React.useState([]);
  const [messages, setMessages] = React.useState([]);
  const location = useLocation();
  const endpoint = "http://localhost:3001";

  React.useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(endpoint);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [endpoint, location.search]);

  React.useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerCotainer">
      <div className="container">
        <Infobar room={room} />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessages(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />
      </div>
    </div>
  );
};
