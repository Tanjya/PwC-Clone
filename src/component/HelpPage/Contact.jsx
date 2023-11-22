import React from "react";

const Contact = () => {
  const submit = () => {
    const userInput = document.getElementById("userInput").value;
    window.alert("Thank you!");
    console.log(userInput);
  };
  return (
    <>
      <div className="px-20 text-center pb-20">
        <h1 className="text-2xl pb-4 font-bold">Ways to contact us:</h1>
        <div className="flex justify-center gap-5">
          <img
            className="w-10"
            src="https://img.icons8.com/?size=512&id=85500&format=png"
            alt=""
          />
          <img
            className="w-10"
            src="https://img.icons8.com/?size=512&id=13963&format=png"
            alt=""
          />
          <img
            className="w-10"
            src="https://img.icons8.com/?size=512&id=12921&format=png"
            alt=""
          />
        </div>
        <p className="pt-16 text-orange-800 font-semibold">
          Or send us a message below:
        </p>

        <textarea
          placeholder="  write a brief description of your case.."
          name=""
          id="userInput"
          cols="50"
          rows="6"
        ></textarea>
        <br />
        <button
          onClick={submit}
          className="border px-8 py-1 text-white font-bold bg-rose-400"
        >
          submit
        </button>
      </div>
    </>
  );
};

export default Contact;
