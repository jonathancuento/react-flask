import { React } from "react";
import { Content } from "./components/Content";
import { Menu } from "./components/Menu";
function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <Menu />
        <Content />
      </div>
    </div>
  );
}

export default App;
