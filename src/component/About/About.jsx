import React from "react";
import {
  LineChart,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Line,
  Legend,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const About = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center p-8">About us</h1>
      <p className="text-center font-semibold text-m text-orange-600">
        At PwC, our purpose is to build trust in society and solve important
        problems. It is this focus which informs the services we provide and the
        decisions we make.
      </p>
      <div className="flex justify-center gap-6 p-12 text-slate-800 ">
        <div>
          <p>
            At PwC, our purpose is to build trust in society and solve important
            problems. It is this focus which informs the services we provide and
            the decisions we make.{" "}
          </p>
          <br />
          <p>
            Demonstrating genuine leadership is more important to us than size
            or short term revenue growth.
          </p>
          <br />
          <p>
            Our strategy positions us as the leading firm; the most trusted,
            relevant choice for our clients and their stakeholders and the
            leading employer for the best people in the market. It is built
            around five priorities:{" "}
          </p>
          <br />
          <ol>
            <li>1. Leveraging technology</li>
            <li>2. Delivering exceptional client outcomes</li>
            <li>3. Empowering our people </li>
            <li>4. Committed to high quality </li>
            <li>5. Sustainable profitable growth</li>
          </ol>
          <br />
          <p>
            The graph on the right shows our growth compared to our competition
          </p>
        </div>
        <div>
          <LineChart width={500} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
      <div className="flex justify-between p-10 gap-16 bg-slate-100">
        <img
          className="w-4/12"
          src="https://www.pwc.co.uk/who-we-are/purpose/strategy-wheel-20.png"
          alt=""
        />
        <div>
          <h1 className="text-3xl font-bold pb-10">
            We have 21,955 employees and 914 partners in the UK
          </h1>
          <p>
            As a professional services provider, we're uniquely placed to help
            organisations around the world to reduce risk, seize opportunities,
            and to become more sustainable, through the many services we provide
            every day.
          </p>
          <br />
          <p>
            Working with purpose also means using our research and thought
            capital to explore and share our perspectives on the future world of
            work, anticipating and raising awareness of important problems where
            business can play a positive role, fostering inclusive growth and
            shaping an agenda that helps to deliver sustainable development.
          </p>
          <br />
          <p>
            This applies to our core services too. We’ve long supported measures
            to improve tax transparency and maintain an effective fiscal system,
            and our Paying for tomorrow campaign looks at big questions about
            the UK tax system. Our audit practice is a vital part of our
            business and continues to play a key role in maintaining trust in
            capital markets. Given public interest in whether audit is meeting
            society's expectations, we’re also engaging with the public to
            understand different views on what the future of audit should be.
          </p>
        </div>
      </div>
      {/* code of conduct */}
      <h1 className="text-4xl font-bold text-center p-8 bg-red-200">
        Code of Conduct
      </h1>
      <div className="flex justify-between gap-6 p-12 pt-12 pb-44">
        <img
          className="w-6/12 "
          src="https://t4.ftcdn.net/jpg/04/16/09/03/360_F_416090335_wzqjnRu8oz9EPhgK9jD16dy3S48qAqAw.jpg"
          alt=""
        />

        <div>
          <p className="">
            Our Code of Conduct is based on the PwC Purpose (to build trust in
            society and solve important problems) and a core set of shared
            values.
          </p>
          <br />
          <p className="">
            {" "}
            The Code sets out a common framework around how we are expected to
            behave, do business and to do the right thing. This includes
            Speaking Up if we come across a situation that is inconsistent with
            the Code or our values. Knowing, understanding, and living the Code,
            is a fundamental part of who we are as PwC professionals, and what
            we stand for.
          </p>
          <br />
          <p>
            This applies to our core services too. We’ve long supported measures
            to improve tax transparency and maintain an effective fiscal system,
            and our Paying for tomorrow campaign looks at big questions about
            the UK tax system. Our audit practice is a vital part of our
            business and continues to play a key role in maintaining trust in
            capital markets. Given public interest in whether audit is meeting
            society's expectations, we’re also engaging with the public to
            understand different views on what the future of audit should be.
          </p>
          <br />
        </div>
      </div>

      <div className="bg-slate-100 mb-28">
        <p className="text-4xl font-bold text-center p-8">
          “I'm a greater believer in luck, and I find the harder I work, the
          more I have of it.”{" "}
        </p>
        <p className=" text-center p-3"> Thomas Jefferson. </p>
      </div>
    </div>
  );
};

export default About;
