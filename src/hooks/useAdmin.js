import { useEffect, useState } from "react";

const useAdmin = (user ) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading ] = useState(true);

  useEffect(() => {
    if (user) {
      const email = user?.email;
      const url = `/admin/${email}`;
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setAdmin(data.admin))
        .then (data => setAdminLoading(false))
        .catch((error) => console.dir(error));
    }
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;
