import Image from "next/image";
import React from "react";

function page() {
  return (
    <section className="md:flex items-center justify-between py-20 md:py-0 space-y-20 md:space-y-0 px-5 lg:px-16">
      <Image
        src={"/Image/About.png"}
        alt="About Image"
        width={600}
        height={100}
      />
      {/* LEFT */}
      <div className="md:w-[564px] space-y-5">
        <h1 className="text-[#457B9D] font-semibold text-2xl">About</h1>
        <h1 className="font-bold text-5xl ">About Me?</h1>
        <p className="font-normal text-xl leading-[25.2px]">
          I am a passionate and detail-oriented Frontend Developer with a proven
          ability to craft visually stunning and user-friendly web applications.
          With a strong foundation in HTML, CSS, JavaScript, React, and
          TypeScript, NextJS. I specialize in creating responsive, interactive,
          and accessible interfaces that deliver seamless user experiences. My
          expertise extends to leveraging modern tools and frameworks.
        </p>
      </div>
    </section>
  );
}

export default page;
