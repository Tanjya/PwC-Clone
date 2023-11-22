import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center p-8">Help</h1>
      <p className="text-center font-semibold text-m text-orange-600">
        Here are some useful tools and FAQs
      </p>
      <div className="flex justify-around gap-10 p-14">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShfLIgBR8TybfBjoSjuJqQPNJ0u7047LUnfWgDHgsGaRc0d0bGs_oJcVF3sChVYR65Nak&usqp=CAU"
          alt=""
        />
        <div>
          <p className="font-semibold">
            If you have questions, we have our FAQs to help answer questions
            however if you require further help please let us know below
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            at vitae laboriosam ea delectus quo nemo labore expedita, dolorum
            veritatis numquam dolore reiciendis porro repudiandae cupiditate et
            error. Excepturi, quia temporibus pariatur eos fuga maiores quaerat
            ex? Quos magnam doloribus omnis! Eligendi nulla similique architecto
            officiis earum, atque, quia obcaecati quas sequi illo quidem facilis
            aliquid neque ducimus sint illum mollitia suscipit a quisquam
            praesentium error nam facere! Quia, ipsam quod! Eaque cupiditate qui
            placeat. Odio quos recusandae consequatur, nisi eius numquam totam
            ratione optio accusantium eveniet rem corrupti velit quas temporibus
            dolores repellendus ipsam voluptatibus id autem, voluptatem rerum?
          </p>
          <br />
          <div className="flex gap-14">
            <NavLink to="/help/faq">FAQs</NavLink>
            <NavLink to="/help/moreHelp">More Help</NavLink>
          </div>
        </div>
      </div>

      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default HelpLayout;
