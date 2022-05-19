import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import UserRow from "../Users/UserRow"


const AllUsers = () => {
  // const [user] = useAuthState();

  const { data: users, isLoading, refetch } = useQuery("users", () =>
    fetch("/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="text-accent ">
      <div className="overflow-x-auto w-full ">
        <table className="table w-full ">
          <thead className="table-heading">
            <tr className="">
              <th className="">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => {
              return (
                <UserRow
                  key={user._id}
                  user ={user}
                  refetch={refetch}
                ></UserRow>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
