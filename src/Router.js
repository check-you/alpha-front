import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound";
import LinkedAccounts from "./pages/LinkedAccounts";
import Signup from "./pages/Signup";
import SignupA from "./pages/SignupA";
import SignupB from "./pages/SignupB";
import SignupC from "./pages/SignupC";
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
        <Route path="/signupa" element={<SignupA />} />
        <Route path="/signupb" element={<SignupB />} />
        <Route path="/signupc" element={<SignupC />} />
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
