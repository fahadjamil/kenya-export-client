import React from "react";

import { useAuth } from "./shared/hooks/auth-hook";
import { AuthContext } from "./shared/context/auth-context";
import AppRouter from "./router";
import "./App.css";

function App() {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      <div className="App">
        <AppRouter />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
