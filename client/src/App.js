import { Routes, Route } from "react-router-dom"
import Signin from "./sign-in"
import Producer from "./producer"
import Warehouse from "./warehouse"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Signin/>} />
        <Route exact path="/producer" element={<Producer/>}/>
        <Route exact path="/warehouse" element={<Warehouse/>}/>
     
      </Routes>
    </div>
  );
}

export default App;
