import Link from "next/link";
import React from "react";

function page() {
  return (
    <section className="px-5 lg:px-16 py-20">
      <form action="" className="space-y-10">
        <div className="grid  sm:grid-cols-2 gap-10">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-[#dae3e4] text-black pl-2 h-10 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-[#dae3e4] text-black pl-2  h-10 outline-none"
          />
        </div>
        <div className="flex flex-col space-y-10">
          <textarea
            name="subject"
            placeholder="Subject"
            className="bg-[#dae3e4] text-black pl-2  h-10 outline-none"
          ></textarea>
          <textarea
            name="message"
            placeholder="Message"
            className="bg-[#dae3e4] text-black pl-2 h-52 outline-none"
          ></textarea>
        </div>
        <div>
          <Link
            href={"/contact"}
            className="text-xl bg-[#457B9D] text-white px-8 py-4 rounded-lg shadow-md hover:bg-[#365d73] transition-colors duration-300"
          >
            Submit
          </Link>
        </div>
      </form>
    </section>
  );
}

export default page;
