import React from "react";
import Template from "../components/Template";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="h-[120vh] bg-richblack-900">
      <Template
        title="Welcome Back"
        desc1="Build skills for today, tomorrow and beyond"
        desc2="Education to future proof your career"
        formType="login"
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Login;
