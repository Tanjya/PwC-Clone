import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="border border-none bg-error-page mt-12 mx-80 p-10 text-white">
        <h1 className="font-bold italic  errorH1-style">
          The requested page could not be <br /> found...
        </h1>
        <div className="space-y-5">
          <p>
            The page you requested could not be found. If you are looking for
            information around a specific topic then please Go back to{" "}
            <Link to="" className="underline font-medium">
              home.
            </Link>
          </p>
          <p>
            If you want to talk to someone at PwC about a current business
            issue, or find out more information about a particular topic or{" "}
            <Link to="/about" className="underline">
              about PwC
            </Link>{" "}
            and the services we provide, you can call our main switchboard
            number on{" "}
            <span className="font-semibold"> +44 (0) 20 7583 5000.</span>
          </p>
          <p>
            There is an overview of all our UK office locations, including local
            telephone numbers.
          </p>
          <p>
            If you're interested in working for PwC, please visit our{" "}
            <Link to="/career" className="underline">
              {" "}
              Careers website.{" "}
            </Link>
          </p>
        </div>
      </div>
      <img
        className="pl-52 pt-10"
        src="http://www.pwc.com/etc/designs/pwc/css_common/image/404.gif"
        alt="PwC logo"
      />
    </>
  );
};

export default PageNotFound;

// font-family: Arial, Helvetica, sans-serif;
