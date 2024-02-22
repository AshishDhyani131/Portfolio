import React from "react";
import Heading from "./Heading";
export default function Contact() {
  return (
    <section className="pt-40 pb-20 bg-grey-50 footer-clip" id="contact">
      <Heading color="white">contact</Heading>
      <p className="mt-10 text-center text-xs font-semibold text-primary-100">
        Have a question or want to work together?
      </p>
      <form action="" className="flex flex-col gap-1 mt-8 p-6 lg:px-80">
        <input
          type="text"
          name="name"
          id="name"
          className="bg-grey-100 pl-2 py-1 focus:outline-none placeholder:text-neutral-500 caret-white"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          id="email"
          className="bg-grey-100 pl-2 py-1 focus:outline-none placeholder:text-neutral-500 caret-white"
          placeholder="Email"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          className="bg-grey-100 pl-2 py-1 focus:outline-none placeholder:text-neutral-500 caret-white"
          placeholder="Your Message"
        ></textarea>
        <button
          type="button"
          className="border-2 border-solid text-white border-white inline-block font-semibold px-4 py-2 mt-5 uppercase  "
        >
          Submit
        </button>
      </form>
    </section>
  );
}
