import Image from "next/image";
import React from "react";

function page() {
  return (
    <section className="flex items-center justify-center bg-[#ebfeff] py-20 md:py-32">
      <div className="flex flex-col justify-center items-center space-y-16 sm:space-y-20 flex-wrap">
        <h1 className="font-semibold text-2xl sm:text-[32px] text-[#457B9D]">
          Skills
        </h1>
        <h1 className="font-bold text-4xl sm:text-5xl text-center">
          What I am capable of?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-16 sm:gap-10 pace-x-20">
          <Image src={"/Image/html logo.png"} alt="" width={100} height={100} />
          <Image src={"/Image/css logo.png"} alt="" width={100} height={100} />
          <Image src={"/Image/js logo.png"} alt="" width={100} height={100} />
          <Image
            src={"/Image/tailwind logo.png"}
            alt=""
            width={100}
            height={100}
          />
          <Image
            src={"/Image/nextjs logo.jpg"}
            alt=""
            width={100}
            height={100}
          />
          <Image
            src={"/Image/react logo.png"}
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}

export default page;
