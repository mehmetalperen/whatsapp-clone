import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./componenets/Chat";
import Sidebar from "./componenets/Sidebar";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  console.log(messages);

  useEffect(() => {
    //listener for the pusher
    const pusher = new Pusher("b23f5e99ce5b8bebe530", {
      cluster: "us3",
    });
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMsg) => {
      setMessages([...messages, newMsg]);
    });

    return () => {
      //this way we wont get infinite useeffect, since we are listenig mesagges, and chaning messages here. once we change it, we dont want a chain reaction of calling useeffect
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
