import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center gap-20 m-12 mb-40">
        <img
          className="w-3/12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/1200px-PricewaterhouseCoopers_Logo.svg.png"
          alt=""
        />
        <h1 className="text-center pt-20 font-bold text-4xl ">
          Building relationships, creating value.
        </h1>
      </div>
      <div className="background-home">
        <h1 className="text-4xl text-white p-64 text-center pl-4">
          Our Purpose, Values and Culture Our purpose is why we exist.
          <br /> Our values define how we behave. <br /> Our culture reflects
          who we are.
        </h1>
      </div>
      {/* //!our values */}

      <div className="p-12 text-slate-500 flex justify-center gap-4">
        <div>
          <h1 className="font-bold text-3xl py-4">Our Beliefs</h1>
          <p className="text-xl">
            While we come from different backgrounds and cultures, our values
            are what we have in common. They capture our shared aspirations and
            expectations, and guide how we make decisions and treat others.
          </p>
          <p className="text-xl py-4">
            Our values hold us accountable to be the best we can be, to act with
            integrity and to take personal responsibility for our actions. The
            work that we do makes a difference and through working together we
            can reimagine the possible. They guide how we work with and care for
            our clients, our communities and each other.{" "}
          </p>
          <p className="text-xl">
            While we come from different backgrounds and cultures, our values
            are what we have in common. They capture our shared aspirations and
            expectations, and guide how we make decisions and treat others.
          </p>
        </div>
        <img
          className="w-6/12 "
          src="../../../public/Questions-to-Ask-an-Accounting-Firm-before-Working-Together.png"
          alt=""
        />
      </div>
      {/* //!Kevin Ellis, Chairman, */}
      <div className="flex p-12 gap-6 pb-36">
        <img
          className="w-4/12"
          src="https://prod-upp-image-read.ft.com/662a6690-0dd8-11e6-ad80-67655613c2d6"
          alt=""
        />
        <h1 className=" text-center pt-8">
          <span className="text-2xl font-bold text-orange-600">
            “Keeping our purpose front of mind helps us to learn from our
            experiences and to get better at what we do.”
          </span>

          <br />
          <span className="text-sm ">Kevin Ellis, Chairman, PwC UK</span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
