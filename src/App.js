import "./App.css";
import Chat from "./componenets/Chat";
import Sidebar from "./componenets/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
