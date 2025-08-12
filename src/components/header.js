import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo, Supported_lang } from "./constants";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { toggleSearchBox } from "../utils/gptSlice";
import lang from "./langConstants";
import { changeLanguage } from "../utils/ConfigSlice";

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
  const handleSearchBox = () => {
    dispatch(toggleSearchBox());
  };
  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const GptShowLang = useSelector((store) => store.gpt.showGPTsearch);
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
      <img className="w-44 md:w-52" src={Logo} alt="logo-img" />

      <div className="flex items-center gap-2 px-6 py-2">
        <button onClick={handleSearchBox}>
          {GptShowLang ? (
            <span
              className="text-white bg-red-600 py-2 px-4 rounded-md cursor-pointer"
            >
              Home page
            </span>
          ) : (
            <MagnifyingGlassIcon className="h-8 w-8 text-white" />
          )}
        </button>
        <div className="flex items-center px-6 gap-8">
          {GptShowLang && (
            <select
              onChange={handleLanguage}
              className="border-2 py-2 px-6 rounded-md text-black"
            >
              {Supported_lang.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          {!GptShowLang &&  <span
            className="text-white bg-red-600 py-2 px-4 rounded-md cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </span>}
        </div>
      </div>
    </div>
  );
};

export default Header;
