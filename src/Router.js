import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound";
import LinkedAccounts from "./pages/LinkedAccounts";
import Signup from "./pages/Signup/signup.jsx";
import SignupA from "./pages/SignupA/signupa";
import SignupB from "./pages/SignupB/signupb";
import SignupC from "./pages/SignupC/signupc";
import SignIn from "./pages/SignIn";
import AddAccount from "./pages/AddAccount/addaccount.jsx";
import AddAccount2 from "./pages/AddAccount/addaccount2.jsx";
import AddAccount3 from "./pages/AddAccount/addaccount3.jsx";
import Transaction from "./pages/Transaction";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/linkedaccounts" element={<LinkedAccounts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup1" element={<SignupA />} />
        <Route path="/signup2" element={<SignupB />} />
        <Route path="/signup3" element={<SignupC />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/addaccount" element={<AddAccount />} />
        <Route path="/addaccount2" element={<AddAccount2 />} />
        <Route path="/addaccount3" element={<AddAccount3 />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
