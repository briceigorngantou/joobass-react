import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppContext from "./configs/appContext";
import Login from "./views/auth/login/Login";
import RegisterStep1 from "./views/auth/register/RegisterStep1";
import Home from "./views/home/Home";
import Notfound from "./views/errors/Notfound";
import Jobs from "./views/jobs/Jobs";
import Services from "./views/services/Services";
import Pricing from "./views/pricing/Pricing";
import Recruiter from "./views/recruiter/Recruiter";
import AboutUs from "./views/aboutus/AboutUs";
import Faq from "./views/faq/Faq";
import Contact from "./views/contact/Contact";
import "./style.css";

function App() {
  return (
    <AppContext.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          {/* Website routes */}
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          {/* authentication routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterStep1 />} />
          {/* Not found routes */}
          <Route path="/notfound" element={<Notfound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
