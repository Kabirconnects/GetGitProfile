import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import correct components
import Page2 from "./Pages/Page2"; // Adjust import if necessary
import Page1 from "./Pages/Page1";  // Correct case and path

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the main page */}
        <Route path="/" element={<Page1 />} />

        {/* Dynamic Route for the GitHub search results */}
        <Route path="/sData/:find" element={<Page2 />} /> {/* ':find' is a URL parameter */}
      </Routes>
    </Router>
  );
}

export default App;
