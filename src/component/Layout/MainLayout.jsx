import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header className="flex justify-between p-6 bg-slate-600">
        <h1 className="font-bold">PwC UK</h1>

        <nav className="flex gap-16 ">
          <NavLink className={`hover:text-orange-100 font-bold`} to="/">
            Home
          </NavLink>
          <NavLink className={`hover:text-orange-100 font-bold`} to="/about">
            About
          </NavLink>
          <NavLink className={`hover:text-orange-100 font-bold`} to="/career">
            Career
          </NavLink>
          <NavLink className={`hover:text-orange-100 font-bold`} to="/help">
            Help
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <div className="bg-slate-700 flex justify-center gap-3 p-5">
          <h1 className="text-3xl text-white text-center ">Follow us</h1>
          <img
            className="w-10"
            src="https://yt3.googleusercontent.com/9XmuxL_LL7CxAOOlbBgTnJIo2uHpoLKHhWzlPt7O49ULQmvBSJlxk1RpX3pJ8jkRBkD6p9BIRg=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <img
            className="w-10"
            src="https://yt3.googleusercontent.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <img
            className="w-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png"
            alt=""
          />
        </div>
        <div className="bg-slate-500 p-16">
          <p className="text-white">
            © 2020 - 2023 PwC. All rights reserved. PwC refers to the PwC
            network and/or one or more of its member firms, each of which is a
            separate legal entity. <br /> Please see www.pwc.com/structure for
            further details.
          </p>
          <div className="flex gap-5 pt-3">
            <Link to="/privacy" className="hover:text-red-600">
              Privacy information
            </Link>
            <Link to="cookies" className="hover:text-red-600">
              Cookies information
            </Link>
            <Link to="legal" className="hover:text-red-600">
              Legal Disclaimer
            </Link>
            <Link to="diversity" className="hover:text-red-600">
              Diversity
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
