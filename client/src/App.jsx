import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Spinner from "./Components/Spinner";
const Login = lazy(() => import("./Pages/Login"));
const Home = lazy(() => import("./Pages/Home"));
import PrivateRoutes from "./Helpers/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <Login />
              </Suspense>
            }
          />
          <Route element={<PrivateRoutes />}>
            <Route
              path="/home"
              element={
                <Suspense fallback={<Spinner />}>
                  <Home />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
