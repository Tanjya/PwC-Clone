import React from "react";

const FAQs = () => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl">
        Frequently Asked Questions
      </h1>
      <div className="collapse bg-base-200  my-2">
        <input type="checkbox" />
        <div className="collapse-title text-center   font-semibold">
          I’m a first year student, what opportunities are available to me?
        </div>
        <div className="collapse-content">
          <p>
            Women in business - During this three-day paid programme you’ll get
            an insight into what a career at PwC could look like. You’ll meet
            mentors and buddies who’ll represent the variety of opportunities
            available across PwC. You’ll meet some of our Female colleagues to
            hear about their own personal career journeys, as well as from some
            of our networks focussed on Diversity and Inclusion.
            <br />
            Black Talent in Business - During this three-day paid programme
            you’ll get an insight into what a career at PwC could look like,
            you’ll meet mentors and buddies who’ll represent the variety of
            opportunities available across PwC. You’ll meet some of our Black
            colleagues to hear about their own personal career journeys, as well
            as from some of our networks focussed on Diversity and Inclusion.
          </p>
        </div>
      </div>
      {/* second FAQs */}
      <div className="collapse bg-base-200  my-2">
        <input type="checkbox" />
        <div className="collapse-title text-center   font-semibold">
          I’m a penultimate year student, what opportunities are available to
          me?
        </div>
        <div className="collapse-content">
          <p>
            Summer internships - Build your skills and confidence by working
            alongside specialists in your chosen business during the summer.
            You'll get a real taste of life at the heart of PwC, working
            alongside graduate trainees and experienced professionals on live
            and interesting client projects. You’ll be doing real work on real
            clients so be prepared to get stuck in.
          </p>
        </div>
      </div>
      {/* third FAQs */}
      <div className="collapse bg-base-200 my-2">
        <input type="checkbox" />
        <div className="collapse-title text-center   font-semibold">
          I'm concerned I won't be in the country for my interview, what shall I
          do?
        </div>
        <div className="collapse-content">
          <p>
            Please call our student helpline on freephone 0808 100 1500 or email
            PwCStudentRecruitment@hccs.pwc.co.ukwith your candidate reference
            number explaining your situation and a member of our team will be in
            contact with you shortly.
          </p>
        </div>
      </div>
      {/* last FAQs */}
      <div className="collapse bg-base-200  my-2">
        <input type="checkbox" />
        <div className="collapse-title text-center  font-semibold">
          When will I hear back about how I’ve done?
        </div>
        <div className="collapse-content">
          <p>
            We aim to get back to you as soon as possible, for our deadline
            driven roles, the key dates are advertised on our website. For all
            other roles, you’ll be able to access feedback on your performance
            at the online stages.
          </p>
        </div>
      </div>
    </>
  );
};

export default FAQs;
