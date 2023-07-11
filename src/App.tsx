import { Suspense, lazy, useEffect } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner";
import { useUserStore } from "./store/userStore";
import Permission from "./components/common/permission/Permission";
const queryClient = new QueryClient();
const About = lazy(() => import("./views/About"));
const Contact = lazy(() => import("./views/Contact"));
const Home = lazy(() => import("./views/Home"));
const Admin = lazy(() => import("./views/Admin"));
const Forbidden = lazy(() => import("./views/Forbidden"));
const Moderator = lazy(() => import("./views/Moderator"));
function App() {
  const setUser = useUserStore((store) => store.setUser);
  useEffect(() => {
    setUser({
      id: "1",
      name: "Thomas",
      roles: [],
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App mx-auto max-w-6xl text-center my-8">
        <h1 className="font-semibold text-2xl">
          React - The Road To Enterprise
        </h1>
        <div className="my-8">
          <nav className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/moderator">Moderator</Link>
          </nav>
        </div>
        <Suspense
          fallback={
            <div className="flex justify-center">
              <Spinner show delay={500} />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/admin"
              element={
                <Permission
                  roles={["admin"]}
                  noAccess={<Navigate to="/forbidden" />}
                >
                  <Admin />
                </Permission>
              }
            />
            <Route
              path="/moderator"
              element={
                <Permission
                  roles={["moderator", "admin"]}
                  noAccess={<Navigate to="/forbidden" />}
                >
                  <Moderator />
                </Permission>
              }
            />
            <Route path="/forbidden" element={<Forbidden />} />
          </Routes>
        </Suspense>
      </div>
    </QueryClientProvider>
  );
}

export default App;
