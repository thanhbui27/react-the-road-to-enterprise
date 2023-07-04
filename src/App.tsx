import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import DisplayBlogPosts from "./components/hocs/DisplayBlogPosts";
import DisplayUsers from "./components/render-props/DisplayUsers";
import WrapperComponent from "./components/wrapper/WrapperComponent";
import PolymorphicComponents from "./components/polymorphic/PolymorphicComponents";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App mx-auto max-w-6xl text-center my-8">
        <h1 className="font-semibold text-2xl">
          React - The Road To Enterprise
        </h1>
        <DisplayBlogPosts />
        <DisplayUsers />
        <WrapperComponent />
        <PolymorphicComponents />
      </div>
    </QueryClientProvider>
  );
}

export default App;
