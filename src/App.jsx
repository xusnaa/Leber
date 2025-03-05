import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tables from "./pages/Tables";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Person from "./pages/Person";
import Dashboard from "./pages/Dashboard";
import TableExam from "./Components/tables/tableExam";
import Weather from "./pages/Weather";

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
          <Route path="/weather" element={<Weather />} />
          <Route path="/user/:id" element={<Person />} />
          <Route path="/user/exam" element={<TableExam />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
