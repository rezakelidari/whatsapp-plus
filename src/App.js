import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./providers/AuthProvider";
import Login from "./pages/Login/Login";
import Chats from "./pages/Chats/Chats";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chats" element={<Chats />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
