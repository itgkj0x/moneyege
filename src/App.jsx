import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./page/Home"
import Login from "./page/Login"
import NotFound from "./page/NotFound"
import NotLogin from "./page/NotLogin"
import { CircularProgress } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getCurrentUser } from "./supabase/supabaseAuth"
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    const { data, error } = await getCurrentUser();
    if (data?.user) {
      setUser(data.user);
    } else {
      setUser(null);
      if(error){
        console.log("LoginError:", error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress size="150px" />
      </div>
    );
  }

  return (
    <BrowserRouter>
    <Header user={user}/>
    <Routes>
      <Route path="/" element={user ? <Home user={user} /> : <NotLogin />} />
      <Route path="/login" element={<Login user={user} setUser={setUser} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App
