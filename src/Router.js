import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound";
import LinkedAccounts from "./pages/LinkedAccounts";
import SignUp from "./pages/SignUp/signup.jsx";
import SignUp2 from "./pages/SignUp2/signup2.jsx";
import SignUp3 from "./pages/SignUp3/signup3.jsx";
import SignUp4 from "./pages/SignUp4/signup4.jsx";

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
        <Route path="/linkedaccounts" element={<LinkedAccounts />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup2" element={<SignUp2 />} />
        <Route path="/signup3" element={<SignUp3 />} />
        <Route path="/signup4" element={<SignUp4 />} />

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
