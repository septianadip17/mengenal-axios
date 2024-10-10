import React from "react";
import "./App.css";
import DataFetch from "./components/DataFetch";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Axios with React and Vite
      </h1>
      <DataFetch />
    </div>
  );
}

export default App;
