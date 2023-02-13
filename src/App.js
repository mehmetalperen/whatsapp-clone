import "./App.css";
import Chat from "./componenets/Chat";
import Sidebar from "./componenets/Sidebar";

function App() {
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
