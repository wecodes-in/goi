import React from "react";
import { Routes, Route } from "react-router-dom";
import WebsitePolicies from "./components/WebsitePolicies";
import Help from "./components/Help";
import ScreenReaderAccess from "./components/ScreenReaderAccess";
import ContactUs from "./components/ContactUs";
import Feedback from "./components/FeedBack";
import Archives from "./components/Archives";
import OnlineServices from "./components/OnlineServices";
import VisitorAnalytics from "./components/VisitorAnalytics";
import WebInformationManager from "./components/WebInformationManager";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
    
     <Route path="/" element={<Home />} />
      <Route path="/website-policies" element={<WebsitePolicies />} />
      <Route path="/help" element={<Help />} />
      <Route path="/screen-reader-access" element={<ScreenReaderAccess />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/archives" element={<Archives />} />
      <Route path="/online-services" element={<OnlineServices />} />
      <Route path="/visitor-analytics" element={<VisitorAnalytics/>} />
      <Route path="/web-information-manager" element={<WebInformationManager />} />

      
      
    </Routes>
  );
};

export default AppRoutes;
