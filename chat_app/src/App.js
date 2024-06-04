import React from "react"
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Join from "./Components/Join";
import Chat from "./Components/Chat";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/Chat" element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
