import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Loading } from "./components/common";
import { Navbar, Footer } from "./components";
import {
  Aboutpage,
  Blogspage,
  Explorepage,
  Homepage,
  Login,
  Signup,
  Testing,
  AuthenticatedPage,
} from "./pages";
import Contactpage from "./pages/Contactpage";

const App = () => {
  const [loading, setLoading] = useState(true); // Make this true
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(location);
  }, [location]);

  setTimeout(() => setLoading(false), 3000);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/explore" element={<Explorepage />} />
            <Route path="/blogs" element={<Blogspage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<AuthenticatedPage />} />
            <Route path="/testing" element={<Testing />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
