import React from "react";

const Career = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center p-8">Career page</h1>
      <p className="text-center font-semibold text-m text-orange-600">
        At PwC, we have a vast career range available from interns,
        apprenticeships and after graduation
      </p>

      <p className="text-center font-semibold text-m text-orange-600">
        Be a part of The New Equation
      </p>
      <div className="flex justify-center p-14">
        <div>
          <h1 className="text-4xl">Join our human-led, tech-powered team</h1>
          <br />
          <p className="pt-12">
            When we combine the passion and expertise of our people with the
            right technology, we can solve problems, unlock opportunities and
            create value for our clients and society. That’s why we’re committed
            to building diverse teams and investing in skills and technologies.
            Join us to see how you can put your skills to use in unexpected and
            exciting ways to realise your full potential. Be a part of The New
            Equation.
          </p>
          <br />
          <p>
            As part of our overall deal we offer you a competitive package. This
            includes your personal financial reward plus access to a wide range
            of both financial and non financial benefits. In addition, you can
            expect regular feedback and support to help you develop and progress
            in your career with us. Your reward package is there to grow with
            your career.
          </p>
        </div>
        <img
          src="https://img.freepik.com/premium-photo/smiling-businesswoman-looking-camera-make-conference-business-call-recording-video-blog-talking-with-client_484651-18469.jpg"
          alt=""
        />
      </div>
      {/* countries */}
      <div className="bg-slate-200">
        <h1 className="font-bold text-3xl p-14">Spotlight on...</h1>
        <div className="grid grid-cols-3 p-14 gap-3">
          <div>
            <img
              src="https://www.pwc.co.uk/careers/images/spotlight-1.jpg"
              alt=""
            />
            <p className=" py-3 font-bold text-2xl">Belfast</p>
            <button className="border px-8 py-1 text-white font-bold bg-rose-400">
              Apply
            </button>
          </div>
          <div>
            <img
              src="https://www.pwc.co.uk/careers/assets-2023/images/manchester-spotlight.jpeg"
              alt=""
            />
            <p className=" py-3 font-bold text-2xl">Manchester</p>
            <button className="border px-8 py-1 text-white font-bold bg-rose-400">
              Apply
            </button>
          </div>
          <div>
            <img
              src="https://www.pwc.co.uk/careers/images/spotlight-1.jpg"
              alt=""
            />
            <p className="py-3 font-bold text-2xl">Tech opportunities</p>
            <button className="border px-8 py-1 text-white font-bold  bg-rose-400">
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
