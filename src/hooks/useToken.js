import { useEffect, useState } from "react";
// import placeHolderAvatar from "../asset/images/placeholder/user-account-img-placeholder.png"

const useToken = (user) => {
  const [token, setToken] = useState('');
  const placeHolderAvatar = "https://i.ibb.co/xL8gGf7/user-account-img-placeholder.png"

  useEffect(() => {
    if (user) {
      const {email, displayName, photoURL} = user.user;

      const userData = {
        name: displayName || "User",
        photo: photoURL || placeHolderAvatar,
      }

      const url = `/user/${email}`;
      fetch (url, {
        method: "PUT", 
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(userData)
      })
      .then (res => res.json())
      .then (data => {
        if (data.accessToken) {
          setToken(data.accessToken);
          localStorage.setItem('AccessToken', data.accessToken);
        }
      })
      .catch (error => console.dir(error));
    }
  }, [user]);
  return [token];
};

export default useToken;