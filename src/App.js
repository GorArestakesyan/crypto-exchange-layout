import "./App.css";
import Body from "./body/Body";
import Header from "./header/Header";
import SideBar from "./sideBar/SideBar";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="bodySidebarContainer">
        <SideBar />
        <Body />
      </div>
    </div>
  );
}

export default App;
