import React from "react";
import Colors from "./theme/colors/Colors";
import "./App.css";
import Header from "./views/Header";
import Main from "./views/Main";

function App() {
  return (
    <main className="App">
      <Header />
      <Main />
    </main>
  );
}

export default App;
