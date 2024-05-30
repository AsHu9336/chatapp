import React from "react"
import {browser as  Router, Route} from 'react-router-dom'
import Join from "./Components/Join";
import Chat from "./Components/Chat";


function App() {
  return (
    <>
    <Router>
      <Route path="/"  element = {<Join/>}/>
      <Route path="/Chat" element = {<Chat/>}/>

    </Router>
    </>
  );
}

export default App;
