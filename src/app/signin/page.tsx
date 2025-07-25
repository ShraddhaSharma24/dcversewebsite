import { FC } from "react";
import Image from "next/image";

const SignIn: FC = () => {
  return (
    <div className="flex h-screen text-white bg-black">
      {/* Left Video Section */}
      <div className="flex flex-1 items-center justify-center bg-[#1e1e1e] text-center">
        <video
          className="w-full h-full object-cover"
          src="/AD-LinkedIn.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      {/* Right Sign-In Section */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-80 text-center">
          {/* Logo */}
          <div className="mb-4 ml-18 gap-4 align-center content-center flex flex-row">
            <Image
              src="/Dcverse_logo.png"
              alt="Logo"
              width={40}
              height={40}
              className=" mb-4"
            />
            <h1 className="text-4xl font-bold text-white mb-1 font-['Space_Mono']">
              Dcverse
            </h1>
          </div>

          <form className="flex flex-col gap-3 font-sans">
            {/* <div className="text-left">
              <label className="block text-sm mb-2 ml-2">Email</label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full rounded-full bg-[#2e2e2e] px-4 py-3 text-sm focus:outline-none"
              />
            </div>

            <div className="text-left">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm  mt-3 ml-2">Password</label>
                <a href="#" className="text-xs text-gray-400">
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full rounded-full bg-[#2e2e2e] px-4 py-3 text-sm focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#A3E8A5] text-black font-bold py-3 mt-2"
            >
              Login
            </button>

            <button
              type="button"
              className="w-full rounded-full border border-[#A3E8A5] text-[#A3E8A5] py-3"
            >
              Sign Up
            </button> */}

            {/* <p className="text-gray-400 text-sm">or</p> */}

            <button
              type="button"
              className="flex items-center justify-center gap-2 w-full rounded-full border border-[#A3E8A5] text-[#A3E8A5] py-3"
            >
              <img
                src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                alt="Google"
                className="w-4 h-4"
              />
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
