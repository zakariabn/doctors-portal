import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // email signup
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  async function onSubmit(data) {
    await createUserWithEmailAndPassword(data.email, data.password, {
      sendEmailVerification: true,
    });
    await updateProfile({ displayName: data.name });
  }

  // Google login
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  function handelGoogleSignUp() {
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
    firebaseError = error?.code || googleError?.code;
  }

  if (loading || googleLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex h-[80vh] md:h-[70vh] justify-center items-center">
      <div className=" shadow-xl rounded-2xl p-4">
        <div className="card-body">
          <h2 className="card-title justify-center text-black text-2xl mb-5">
            Sign Up
          </h2>
          <form className="text-accent" onSubmit={handleSubmit(onSubmit)}>
            {/* name input with validation  */}
            <div className="form-control w-full">
              <label className="label mb-[-.5rem]">
                <span className="label-text text-black font-medium">Name</span>
              </label>
              <input
                name="name"
                type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                className="input input-bordered w-full max-w-xs border border-gray-400 md:w-[300px]"
              />

              {/* error message form name */}
              <label className="label text-orange-600">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

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
            <div className="form-control w-full">
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

            {/* firebase error showing */}

            <div className="flex flex-col gap-3 mb-2 ">
              <span className="text-red-500 ml-4">
                {firebaseError && firebaseError}
              </span>

              <span className="ml-2 hover:cursor-pointer label-text mt-[-.4rem] text-black font-medium hover:text-secondary duration-100">
                Forgot password?
              </span>
            </div>

            <div>
              <input
                type="submit"
                value="Sign UP"
                className="btn w-full bg-accent text-white text-lg font-thin hover:bg-transparent hover:text-accent"></input>
            </div>
          </form>

          <div className="mt-2 text-center text-accent">
            <p className="text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-secondary hover:text-blue-500 hover:cursor-pointer duration-150">
                Please login
              </Link>
            </p>
          </div>

          {/* divider */}
          <div className="divider before:bg-accent before:opacity-50 after:bg-accent after:opacity-50">
            OR
          </div>

          <button
            className="uppercase w-full btn text-accent hover:bg-accent hover:text-white"
            onClick={handelGoogleSignUp}>
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
