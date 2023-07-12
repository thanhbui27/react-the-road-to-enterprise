import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Accordion from "./components/accordion/Accordion";
const queryClient = new QueryClient();
const items = [
  {
    heading: "Heading one",
    content: "Content one",
  },
  {
    heading: "Heading two",
    content: "Content two",
  },
  {
    heading: "Heading three",
    content: "Content three",
  },
];
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App mx-auto max-w-6xl text-center my-8">
        <h1 className="font-semibold text-2xl">
          React - The Road To Enterprise
        </h1>
        <Accordion items={items} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
