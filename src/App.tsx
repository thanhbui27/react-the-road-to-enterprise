import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./views/dashboard/Dashboard";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Products from "./components/products/Products";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App mx-auto max-w-6xl text-center my-8">
          <h1 className="font-semibold text-2xl">
            React - The Road To Enterprise
          </h1>
          <nav className="my-8 space-x-4">
            <Link to="/">Dashboard</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
          <div>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
        <main>
          <Products />
        </main>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
