import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SurveyPage from "./pages/SurveyPage";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-xxl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/survey" element={<SurveyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

