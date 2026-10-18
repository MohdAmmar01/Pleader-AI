import { Route, Routes } from "react-router-dom";
import Login from "screens/Auth/Login";
import SignUp from "screens/Auth/SignUp";
import contact from "screens/Contact";
import Features from "screens/Features";
import Home from "screens/Home";
import Pricing from "screens/Pricing";
import TermsandConditions from "screens/TermsandConditions";
import UploadPDF from "screens/AllChats";
import Chat from "screens/chat";
import Allchats from "screens/AllChats";
import Verify from "screens/Auth/Verify";
import ForgetPassword from "screens/Auth/ForgetPassword";
import ResetPassword from "screens/Auth/ResetPassword";

export const AppRoutes = {
  home: { path: "/", component: Home },
  signin: { path: "/signin", component: Login },
  verify: { path: "/verify/:id", component: Verify },
  signup: { path: "/signup", component: SignUp },
  forgetpassword: { path: "/forgetpassword", component: ForgetPassword },
  resetpassword: { path: "/resetpassword/:id", component: ResetPassword },
  features: { path: "/features", component: Features },
  pricing: { path: "/pricing", component: Pricing },
  Chat: { path: "/chat/:id", component: Chat },
  Chats: { path: "/chats", component: Allchats },
  termsandconditions: {
    path: "/terms-and-conditions",
    component: TermsandConditions,
  },
  contactus: { path: "/contact-us", component: contact },
};

const WebRoutes = () => {
  return (
    <Routes>
      {Object.keys(AppRoutes).map((route, index) => {
        const { path, component: Component } = AppRoutes[route];
        return (
          <Route
            key={`app-routes-${index}`}
            path={path}
            element={<Component />}
          />
        );
      })}
    </Routes>
  );
};

export default WebRoutes;
