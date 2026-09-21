import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/hero";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col flex-1">
        <Navbar />
        <div className="grow flex items-center justify-center px-4">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/"
              element={
                <ProtectedRoute>
                  <Hero />
                </ProtectedRoute>}
            />
            <Route
              path="/hero"
              element={
                <ProtectedRoute>
                  <Hero />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
