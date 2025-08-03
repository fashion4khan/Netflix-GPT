import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo } from "./constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user.uid;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="absolute flex top-0 justify-between left-0 w-full px-8 py-4 bg-gradient-to-b from-black z-10">
      <img
        className="w-44 md:w-52"
        src={Logo}
        alt="logo-img"
      />
      <button type="button">
        <span className="border-2 white text-white py-2 px-6 m-12 rounded-md">
          English
        </span>
        <span
          className="text-white bg-red-600 py-2 px-4 m-12 rounded-md"
          onClick={handleSignOut}
        >
          Sign Out
        </span>
      </button>
    </div>
  );
};

export default Header;
