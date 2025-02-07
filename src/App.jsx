import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tables from "./pages/Tables";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Person from "./pages/Person";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forms" element={<Home />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<Person />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
