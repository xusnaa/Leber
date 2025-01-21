import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tables from "./pages/Tables";
import Home from "./pages/Home";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
