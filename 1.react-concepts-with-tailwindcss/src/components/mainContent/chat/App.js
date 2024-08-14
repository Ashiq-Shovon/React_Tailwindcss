import React, { useEffect, useState } from "react";
import { createConnection } from "./chat";
export function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("localhost:3000//web.com");
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);
  return (
    <>
      <p>ServerUrl:</p> <input value={serverUrl} className="px-3 py-2 outline" onChange={(e) => setServerUrl(e.target.value)}></input>
      <br />
      {serverUrl}
      <h1 className="text-2xl font-bold text-blue-950">Welcome to the {roomId} chat room</h1>
    </>
  );
}
const App = () => {
  const [roomId, setRoomId] = useState();
  const [show, setShow] = useState(false);
  return (
    <div>
      <label>slect the room</label>
      <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
        <option value="general">general</option>
        <option value="travel">travel</option>
        <option value="music">music</option>
      </select>
      <button onClick={() => setShow((pre) => !pre)}>
        {show ? "close" : "open"}
      </button>
      {show && <ChatRoom roomId={roomId} />}
    </div>
  );
};

export default App;
