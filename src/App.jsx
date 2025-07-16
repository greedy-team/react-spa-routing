import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Loading from "./components/Loading";

const NewsList = lazy(() => import("./components/newsList"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <NewsList />
              </Suspense>
            }
          />
          <Route
            path=":category"
            element={
              <Suspense fallback={<Loading />}>
                <NewsList />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
