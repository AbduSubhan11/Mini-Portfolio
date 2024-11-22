import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <section className="flex flex-col items-center justify-center space-y-10 py-20">
      <h1 className="text-[#457B9D] font-semibold text-2xl sm:text-[32px]">
        Projects
      </h1>
      <h1 className="font-bold text-4xl sm:text-5xl ">What I have made?</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-20 sm:gap-36 px-4 sm:px-10">
        {/* PROJECT 1 */}
        <div className="max-w-[363px] h-[310px] rounded-xl border shadow-lg">
          <div className="h-[50%]">
            <Image
              src={"/Image/country.png"}
              alt="Countries Information"
              width={1000}
              height={100}
            />
          </div>
          <div className=" flex text-center items-center flex-col justify-center space-y-2 h-[50%]">
            <h1 className="font-semibold text-xl">The Countries Information</h1>
            <Link
              href={"https://all-rest-countries-info.netlify.app/"}
              target="_blank"
              className="text-[#457B9D] text-sm font-normal"
            >
              Live View
            </Link>
          </div>
        </div>
        {/* PROJECT 2 */}
        <div className="max-w-[363px] h-[310px] rounded-xl border shadow-lg">
          <div className="h-[50%]">
            <Image
              src={"/Image/Resume Generator.png"}
              alt=""
              width={1000}
              height={100}
            />
          </div>
          <div className=" flex text-center items-center flex-col justify-center space-y-2 h-[50%]">
            <h1 className="font-semibold text-xl">The Resume Generator</h1>
            <Link
              href={"https://subhan-dynamic-resume.netlify.app/"}
              target="_blank"
              className="text-[#457B9D] text-sm font-normal"
            >
              Live View
            </Link>
          </div>
        </div>
        {/* PROJECT 3 */}
        <div className="max-w-[363px] h-[310px] rounded-xl border shadow-lg">
          <div className="h-[50%]">
            <Image
              src={"/Image/e-commerce.png"}
              alt="E-commerce Web"
              width={1000}
              height={100}
            />
          </div>
          <div className=" flex text-center items-center flex-col justify-center space-y-2 h-[50%]">
            <h1 className="font-semibold text-xl">The E-commerce Web</h1>
            <Link
              href={"https://the-capitalshop.netlify.app/"}
              target="_blank"
              className="text-[#457B9D] text-sm font-normal"
            >
              Live View
            </Link>
          </div>
        </div>
        {/* PROJECT 4 */}
        <div className="max-w-[363px] h-[310px] rounded-xl border shadow-lg">
          <div className="h-[50%]">
            <Image
              src={"/Image/expense.png"}
              alt="Expense Tracker"
              width={1000}
              height={100}
            />
          </div>
          <div className=" flex text-center items-center flex-col justify-center space-y-2 h-[50%]">
            <h1 className="font-semibold text-xl">The Expense Tracker</h1>
            <Link
              href={"https://the-expense-tracker-pro.netlify.app/"}
              target="_blank"
              className="text-[#457B9D] text-sm font-normal"
            >
              Live View
            </Link>
          </div>
        </div>
        {/* PROJECT 5 */}
        <div className="max-w-[363px] h-[310px] rounded-xl border shadow-lg">
          <div className="h-[50%]">
            <Image
              src={"/Image/go-trip.png"}
              alt="Trip Booking Web"
              width={1000}
              height={100}
            />
          </div>
          <div className=" flex text-center items-center flex-col justify-center space-y-2 h-[50%]">
            <h1 className="font-semibold text-xl">The Trip Booking Web</h1>
            <Link
              href={"https://the-go-trip.netlify.app/"}
              target="_blank"
              className="text-[#457B9D] text-sm font-normal"
            >
              Live View
            </Link>
          </div>
        </div>
        {/* PROJECT 6 */}
        <div className="max-w-[363px] h-[310px] rounded-xl border shadow-lg">
          <div className="h-[50%]">
            <Image
              src={"/Image/blog.png"}
              alt="Blog Web"
              width={1000}
              height={100}
            />
          </div>
          <div className=" flex text-center items-center flex-col justify-center space-y-2 h-[50%]">
            <h1 className="font-semibold text-xl">The Blog Web</h1>
            <Link
              href={"https://the-dynamic-blog.netlify.app/"}
              target="_blank"
              className="text-[#457B9D] text-sm font-normal"
            >
              Live View
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
