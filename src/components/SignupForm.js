import React from "react";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const SignupForm = ({ isLoggedIn, setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [icon1, setIcon1] = useState(eyeOff);
  const [icon2, setIcon2] = useState(eyeOff);
  const [type1, setType1] = useState("password");
  const [type2, setType2] = useState("password");
  const [accountType, setAccountType] = useState("student");

  const navigate = useNavigate();

  function changeHandler(event) {
    event.preventDefault();
    const { name, value } = event.target;
    return setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleToggle1() {
    if (type1 === "password") {
      setIcon1(eye);
      setType1("text");
    } else {
      setIcon1(eyeOff);
      setType1("password");
    }
  }
  function handleToggle2() {
    if (type2 === "password") {
      setIcon2(eye);
      setType2("text");
    } else {
      setIcon2(eyeOff);
      setType2("password");
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
    if (formData.password !== formData.confirmPassword) {
      toast.error("password doesn't match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("account created successfully");
    navigate("/dashboard");
  }
  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
        <button
          onClick={() => {
            setAccountType("student");
          }}
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Student
        </button>
        <button
          onClick={() => {
            setAccountType("instructor");
          }}
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          }py-2 px-5 rounded-full transition-all`}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex justify-between items-center">
          <div>
            <label htmlFor="firstName" className="flex flex-row">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                First Name <sup className="text-pink-200">*</sup>
              </p>
            </label>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="flex flex-row">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Last Name <sup className="text-pink-200">*</sup>
              </p>
            </label>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </div>
        </div>

        <br />
        <label htmlFor="email" className="flex flex-row">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address
            <sup className="text-pink-200">*</sup>
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
        <br />

        <div className="flex justify-between items-center">
          <div className="relative">
            <label htmlFor="password" className="flex flex-row">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Create Password
                <sup className="text-pink-200">*</sup>
              </p>
            </label>
            <input
              required
              type={type1}
              name="password"
              onChange={changeHandler}
              value={formData.password}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 "
            />
            <span
              className="flex justify-around items-center"
              onClick={handleToggle1}
            >
              <Icon
                className="absolute right-2 bottom-3"
                icon={icon1}
                size={25}
              />
            </span>
          </div>

          <div className="relative">
            <label htmlFor="confirmPassword" className="flex flex-row">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Confirm Password
                <sup className="text-pink-200">*</sup>
              </p>
            </label>
            <input
              required
              type={type2}
              name="confirmPassword"
              onChange={changeHandler}
              value={formData.confirmPassword}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
            <span
              className="flex justify-around items-center"
              onClick={handleToggle2}
            >
              <Icon
                className="absolute right-2 bottom-3"
                icon={icon2}
                size={25}
              />
            </span>
          </div>
        </div>

        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
