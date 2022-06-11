import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Browse from "./components/browse/Browse";
import Header from "./components/layout/Header";
import Menu from "./components/layout/Menu";
import NotFound from "./components/layout/NotFound";

function App() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-2">
          <Menu />
        </div>
        <div className="col-10">
          <Routes>
            <Route
              exact={true}
              path="/"
              element={<Navigate to="/browse" replace />}
            />
            <Route path="/browse" element={<Browse />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
