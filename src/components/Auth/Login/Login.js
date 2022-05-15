import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Login = () => {
  // Google login
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  function handelGoogleSignIn() {
    signInWithGoogle();
  }

  return (
    <div className="flex h-[80vh] md:h-[70vh] justify-center items-center">
      <div className=" shadow-xl rounded-2xl p-4">
        <div className="card-body">
          <h2 className="card-title justify-center text-black text-2xl mb-5">
            Login
          </h2>
          <form className="text-accent">
            <div className="form-control w-full">
              <label className="label mb-[-.5rem]">
                <span className="label-text text-black font-medium">Email</span>
              </label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full max-w-xs border border-gray-400 md:w-[300px]"
              />
            </div>
            <div className="form-control w-full  mb-2">
              <label className="label mb-[-.5rem]">
                <span className="label-text text-black font-medium">Password</span>
              </label>
              <input
                name="password"
                type="password"
                className="input input-bordered w-full max-w-xs border border-gray-400 md:w-[300px]"
              />
              <label className="label ml-2">
                <span className="label-text text-xs mt-[-.4rem] text-black font-medium">
                  Forgot password?
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="btn w-full bg-accent text-white text-lg font-thin hover:bg-transparent hover:text-accent">
              Submit
            </button>

            <div className="mt-2 text-center">
              <p className="text-sm">
                New to doctors portal?{" "}
                <span className="text-secondary">Create new account</span>
              </p>
            </div>
          </form>
          <div className="divider before:bg-accent before:opacity-50 after:bg-accent after:opacity-50">
            OR
          </div>

          <button
            className="uppercase w-full btn text-accent hover:bg-accent hover:text-white"
            onClick={handelGoogleSignIn}>
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
