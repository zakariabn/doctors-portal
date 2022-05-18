import React from "react";


import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { photo, name, email } = user;

  function handelMakeAdmin() {
    fetch(`/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("You don't have permission to make an admin");
        }
        return res.json()
      })
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          toast.success(`Make ${name} is an admin`)
          refetch();
        }
      })
      .catch((error) => console.dir(error));
  }

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-80">Bangladesh</div>
          </div>
        </div>
      </td>
      <td>
        {email}
        <span
          className={`btn btn-xs badge-ghost badge-sm ml-1 ${
            user.role ? "inline-block" : "hidden"
          }`}>
          {user.role}
        </span>
      </td>

      <td>
        {!user.role && (
          <button className="btn btn-xs bg-accent" onClick={handelMakeAdmin}>
            Make Admin
          </button>
        )}
      </td>

      <td>
        <button className="btn btn-xs bg-red-400 text-black hover:bg-red-900 hover:text-white border-none">
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
