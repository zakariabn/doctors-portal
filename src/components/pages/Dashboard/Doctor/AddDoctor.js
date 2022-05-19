import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../../Shared/Loading/Loading";

const AddDoctor = () => {
  const [serviceName, setServiceName] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    const updatingDoctorToast = toast.loading("Please wait...");

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    toast.update(updatingDoctorToast, {
      render: "Adding a new doctor",
      type: "loading",
      isLoading: true,
    });
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const imageUrl = result?.data?.image?.url;

          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: imageUrl,
          };

          fetch("/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("AccessToken")}`
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((serverData) => {
              if (serverData.insertedId) {
                toast.update(updatingDoctorToast, {
                  render: "A new Doctor successfully added",
                  type: "success",
                  isLoading: false,
                  autoClose: 2500,
                  closeOnClick: true,
                });
                reset();
              } else {
                toast.update(updatingDoctorToast, {
                  render: "Failed to add the doctor",
                  type: "error",
                  isLoading: false,
                  autoClose: 2500,
                  closeOnClick: true,
                });
              }
            });
        }
      });
  }

  // const { data, isLoading } = useQuery("services", () => {
  //   fetch("/services").then((res) => res.json());
  // });

  // console.log(data);

  // if (isLoading) {
  //   return <Loading />;
  // }

  useEffect(() => {
    fetch("/services")
      .then((res) => res.json())
      .then((data) => setServiceName(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-2xl text-center  mb-10">Add a new doctor</h2>
      </div>
      <form className="text-accent" onSubmit={handleSubmit(onSubmit)}>
        {/* name input with validation  */}
        <div className="form-control w-full">
          <label className="label mb-[-.5rem]">
            <span className="label-text text-black font-medium">Dr. Name</span>
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
            <span className="label-text text-black font-medium">Dr. Email</span>
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
        <div className="form-control w-full mb-5">
          <label className="label mb-[-.5rem]">
            <span className="label-text text-black font-medium">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select w-full max-w-xs border-gray-400 focus:outline-none ">
            {serviceName?.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        {/* images file input */}
        <div className="form-control w-full">
          <input
            name="image"
            type="file"
            {...register("image", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
            className="input  input-bordered w-full max-w-xs border border-gray-400 md:w-[300px] pt-1.5"
          />

          {/* error message form file input */}
          <label className="label text-orange-600">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div>
          <input
            type="submit"
            value="Add Doctor"
            className="btn w-full bg-accent text-white font-thin hover:bg-transparent hover:text-accent"></input>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
