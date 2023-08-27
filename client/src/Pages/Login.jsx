import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "../api/axios";
import requests from "../api/request";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    if (!value.includes("@")) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    if (value.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };

  const handleLogin = async () => {
    if (email === "" || password === "") {
      return;
    }

    try {
      const response = await axios.post(requests.login, {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);

        navigate("/home");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred");
    }
  };

  return (
    <div className="w-[1890px] h-[600px] flex-col justify-start items-center inline-flex">
      <div className="pl-[110px] bg-white border-b border-gray-200 justify-end items-center gap-[1325.48px] inline-flex">
        <img
          className="w-[120.16px] h-[120px]"
          src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1692956487/White_Black_Minimalist_Modern_Capture_Photo_Studio_Logo-removebg-preview_1_bhydqt.png"
        />
        <div className="w-[430.36px] h-16 relative flex-col justify-start items-start flex">
          <div className="px-4 py-1.5 rounded-lg justify-center items-center gap-2 inline-flex">
            <div className="py-[3px] justify-start items-start flex">
              <div className="w-3.5 h-3.5 pr-[5.25px] py-[4.38px] justify-start items-start flex" />
            </div>
          </div>
        </div>
      </div>
      {errors.password && <div className="text-red-500">{errors.password}</div>}
      {errors.email && <div className="text-red-500">{errors.email}</div>}
      <div className="self-stretch grow shrink basis-0 pt-[150.13px] pb-[150.14px] bg-gradient-to-r from-gray-50 via-gray-50 to-white justify-center items-center inline-flex">
        <div className="w-[554.39px] pl-20 py-6 bg-gray-50 justify-end items-center flex">
          <img
            className="w-[554.39px] h-[390.16px]"
            src="https://st1.zoom.us/fe-static/fe-signup-login-active/img/banner-step-1.2faf107a.png"
          />
        </div>
        <div className="w-[885.61px] h-[715.73px] relative">
          <div className="left-[389.40px] top-[24px] absolute text-center text-neutral-900 text-[32px] font-medium capitalize leading-[48px] tracking-wide">
            Sign In
          </div>
          <div className="w-[346px] h-[329.73px] left-[269.80px] top-[104px] absolute">
            <div className="pr-[216px] pb-[0.84px] left-[12px] top-[11px] absolute justify-start items-start inline-flex">
              <label
                htmlFor="email"
                className="text-gray-500 text-[15px] font-normal leading-[22.86px] tracking-wide"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-[346px] h-12 left-0 top-0 absolute bg-white rounded-lg border border-gray-500"
                placeholder="Enter your email"
                onChange={handleEmailChange}
              />
            </div>

            <div className="pr-[249px] pb-[0.84px] left-[12px] top-[83px] absolute justify-start items-start inline-flex">
              <label
                htmlFor="password"
                className="text-gray-500 text-[15px] font-normal leading-[22.86px] tracking-wide"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-[346px] h-12 left-0 top-0 absolute bg-white rounded-lg border border-gray-500"
                placeholder="Enter your password"
                onChange={handlePasswordChange}
              />
            </div>

            <div className="w-[346px]  left-1.5 top-[144px] absolute justify-between items-center gap-[169.08px] inline-flex">
              <div className="w-[346px] h-10  px-4 py-2 bg-blue-600 rounded-[10px] justify-center items-center inline-flex">
                <button
                  onClick={handleLogin}
                  className="text-center  px-20  text-white text-[15px] font-medium leading-normal tracking-wide"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
