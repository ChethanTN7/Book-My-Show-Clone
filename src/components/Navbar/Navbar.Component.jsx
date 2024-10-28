import React, { useState } from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Bengaluru
            <BiChevronDown />
          </span>
        </div>
        <div className="w-16 h-8">
          {/* <BiSearch className="w-full h-full" /> */}
          <h2>Use App</h2>
        </div>
      </div>
    </>
  );
}

function NavMd() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  return (
    <>
      <div className="w-36 h-10">
        <Link to={"/"}>
          <img
            src="https://in.bmscdn.com/webin/common/icons/logo.svg"
            alt="logo"
            className="w-full h-full"
          />
        </Link>
      </div>
      <div className="w-full flex items-center gap-3 bg-white pl-3 pr-1.5 rounded-md">
        <BiSearch fontSize={25} />
        <input
          type="search"
          className="w-full bg-transparent border-none focus:outline-none"
          placeholder="Search for movies, events, plays, sports and activites"
          onInput={(e) => setInput(e.target.value.trim())}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              navigate(input === "" ? "" : `/search/${input}`);
            }
          }}
        />
        <Link to={input === "" ? "" : `/search/${input}`}>
          <button className="h-full bg-red-500 px-2 w-24 rounded text-white">
            Search
          </button>
        </Link>
      </div>
    </>
  );
}

function NavLg() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-36 h-10">
            <Link to={"/"}>
              <img
                src="https://in.bmscdn.com/webin/common/icons/logo.svg"
                alt="logo"
                className="w-full h-full"
              />
            </Link>
          </div>
          <div className="w-full flex items-center gap-3 bg-white pl-3 pr-1.5 py-1 rounded-md">
            <BiSearch fontSize={25} />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none "
              placeholder="Search for movies, events, plays, sports and activites"
              onInput={(e) => setInput(e.target.value.trim())}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  navigate(input === "" ? "" : `/search/${input}`);
                }
              }}
            />
            <Link to={input === "" ? "" : `/search/${input}`}>
              <button className="h-full w-24 bg-red-500 px-2 rounded text-white">
                Search
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Bengaluru
            <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white text-sm px-2 py-1 rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

const Navbar = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/* This is for Mobile Screen - NavBar */}
      <div className="md:hidden">
        <NavSm />
      </div>

      {/* This is for Medium/Tab Screen - NavBar */}
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>

      {/* This is for Large Screen - NavBar */}
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default Navbar;
