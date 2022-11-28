import { Routes, Route } from "react-router-dom"
import Signin from "./sign-in"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Signin/>}/>
      </Routes>
    </div>
  );
}

export default App;
