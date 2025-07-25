import React, { useState } from "react";
import Header from "./header";

const Login = () => {

  const [isSignIn, setIsSignIN] = useState(true);
  const handleSignIn = () => {
      setIsSignIN(!isSignIn);
  }
  return (
    <div className="relative">
      <Header />
      <div>
        <img className="absolute inset-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="bg-img"
        ></img>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full px-4 inset-y-32">
        <form className="bg-black bg-opacity-80 text-white max-w-md w-full p-8 rounded-md space-y-4">
          <h1 className="text-3xl font-bold mb-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && <input
            type="text"
            placeholder="Full name"
            className="w-full p-3 rounded text-white bg-transparent border-2 white"
          />}
          <input
            type="text"
            placeholder="Email or Mobile number"
            className="w-full p-3 rounded text-white bg-transparent border-2 white"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded text-white bg-transparent border-2 white"
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold"
          >
            {isSignIn ? "Sign In" : "Get started"}
          </button>

          <h2 className="text-center text-gray-400">OR</h2>

          <button
            type="button"
            className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded font-semibold"
          >
            Use a sign-in code
          </button>

          <p className="text-sm text-right text-blue-500 cursor-pointer hover:underline">
            Forgot password?
          </p>

          <div className="flex items-center text-sm text-gray-400">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <div className="text-sm text-gray-400">
            <span>{isSignIn ? "New to Netflix? " : "Already memeber !"} </span>
            <span className="text-white hover:underline cursor-pointer" onClick={handleSignIn}>
              {isSignIn ? "Sign up now." : " Sign in now"}
            </span>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Learn more.
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
