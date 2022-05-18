import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // email login
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function onSubmit(data) {
    signInWithEmailAndPassword(data.email, data.password);
  }

  // Google login
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  function handelGoogleSignIn() {
    signInWithGoogle();
  }

    // verifying user with jwt token
    const [token] = useToken(user || googleUser);

  // redirection user
  let from = location.state?.from?.pathname || "/";
  
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  // handling firebase error
  let firebaseError;
  if (error || googleError) {
    firebaseError = error.code || googleError.code;
  }

  if (loading || googleLoading) {
    return <Loading></Loading>;
  }


  return (
    <div className="flex h-[80vh] md:h-[70vh] justify-center items-center">
      <div className=" shadow-xl rounded-2xl p-4">
        <div className="card-body">
          <h2 className="card-title justify-center text-black text-2xl mb-5">
            Login
          </h2>
          <form className="text-accent" onSubmit={handleSubmit(onSubmit)}>
            {/* email input with validation  */}
            <div className="form-control w-full">
              <label className="label mb-[-.5rem]">
                <span className="label-text text-black font-medium">Email</span>
              </label>
              <input
                name="email"
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: "Provide a valid email",
                  },
                })}
                className="input input-bordered w-full max-w-xs border border-gray-400 md:w-[300px]"
              />

              {/* error message form email */}
              <label className="label text-orange-600">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            {/* password input with validation  */}
            <div className="form-control w-full  mb-2">
              <label className="label mb-[-.5rem]">
                <span className="label-text text-black font-medium">
                  Password
                </span>
              </label>
              <input
                name="password"
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
                className="input input-bordered w-full max-w-xs border border-gray-400 md:w-[300px]"
              />

              {/* error message for password */}
              <label className="label ">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors?.password.message}
                  </span>
                )}

                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors?.password.message}
                  </span>
                )}
              </label>
            </div>

            <div className="mb-[-1rem]">
              <span className="ml-2 hover:cursor-pointer label-text mt-[-.4rem] text-black font-medium hover:text-secondary duration-100">
                Forgot password?
              </span>
            </div>

            {/* firebase error showing */}
            <span className="text-red-500 ml-4">
              {firebaseError && firebaseError}
            </span>

            <div>
              <input
                type="submit"
                value="Login"
                className="btn w-full bg-accent text-white text-lg font-thin hover:bg-transparent hover:text-accent"></input>
            </div>
          </form>
          <div className="mt-2 text-center text-accent">
            <p className="text-sm">
              New to doctors portal?{" "}
              <Link
                to="/sign-up"
                className="text-secondary hover:text-blue-500 hover:cursor-pointer duration-150">
                Create new account
              </Link>
            </p>
          </div>

          {/* divider */}
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
