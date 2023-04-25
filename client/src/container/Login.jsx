import React, { useState } from "react";
import { LoginBg, Logo } from "../assets";
import { LoginInput } from "../components";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="w-screen h-screen relative overflow-hidden flex">
      {/*  background */}
      <img
        src={LoginBg}
        className="w-full h-full object-cover absolute"
        alt=""
      />

      {/*    content box*/}

      <div className="flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6">
        {/*    top logo section*/}
        <div className="flex items-center justify-start gap-4 w-full">
          <img src={Logo} className="w-8" alt="" />
          <p className="text-headingColor font-semibold text-2xl">TechHub</p>
        </div>

        {/*    welcome section*/}
        <p className="text-3xl font-semibold text-headingColor">Welcome Back</p>
        <p className="text-xl text-textColor -mt-6">Sign in with following</p>
        {/*    input section*/}
        <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
          <LoginInput
            placeHolder={"Email here"}
            icon=""
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
            isSignUp={isSignUp}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
