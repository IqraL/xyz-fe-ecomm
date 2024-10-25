import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { HomePage } from "./components/HomePage";
import { CategoryPage } from "./components/CategoryPage";
import { Cart } from "./components/Cart";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 8fr",
          }}
        >
          <Sidebar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
