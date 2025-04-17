import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const LoginForm = ({ isLoggedIn, setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [icon, setIcon] = useState(eyeOff);
  const [type, setType] = useState("password");

  const navigate = useNavigate();

  function changeHandler(event) {
    event.preventDefault();
    return setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: [event.target.value],
    }));
  }

  function handleToggle() {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  }
  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("logged in successfully");
    navigate("/dashboard");
  }
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
      >
        <label htmlFor="email" className="flex flex-row">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            {" "}
            Email Address
          </p>
        </label>
        <input
          required
          type="email"
          name="email"
          onChange={changeHandler}
          value={formData.email}
          className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
        />
        <label htmlFor="password" className="w-full relative">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            {" "}
            Password{" "}
          </p>
          <input
            required
            type={type}
            name="password"
            onChange={changeHandler}
            value={formData.password}
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
          />

          <span
            className="flex justify-around items-center"
            onClick={handleToggle}
          >
            <Icon className="absolute right-2 top-9" icon={icon} size={25} />
          </span>

          <Link to="#">
            <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
              Forgot Password
            </p>
          </Link>
        </label>

        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
