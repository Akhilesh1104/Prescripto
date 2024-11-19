import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p className="text-xl md:text-2xl text-neutral-700 font-semibold">
          CONTACT US
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src='https://i.imghippo.com/files/Payr5266xlA.png'
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            00000 Willms Station <br />
            Suite 078, New Delhi, India
          </p>
          <p className="text-gray-500">
            Tel: +91 923XXXXXXXX <br />
            Email: prescripto@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">
            CAREERS AT PRESCRIPTO
          </p>
          <p lassName="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:text-white transition-all duration-300 hover:bg-black">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
