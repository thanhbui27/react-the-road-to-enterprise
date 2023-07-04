import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App mx-auto max-w-6xl text-center my-8">
        <h1 className="font-semibold text-2xl">
          React - The Road To Enterprise
        </h1>
      </div>
    </QueryClientProvider>
  );
}

export default App;
