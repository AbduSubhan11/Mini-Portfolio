import Image from "next/image";

export default function Home() {
  return (
      <section className="md:flex items-center justify-between md:space-y-0 space-y-28 px-5 lg:px-16 py-20 md:py-32 bg-[#ebfeff]">
        {/* LEFT */}
        <div className="space-y-5">
          <p className="text-[#457B9D] text-2xl ">Hi Everyone, I am</p>
          <h1 className="font-bold text-5xl ">Abdu Subhan</h1>
          <p className="text-xl leading-6">
            Explore my projects, skills, and journey as I strive to merge
            creativity with code to deliver exceptional results. Let’s build
            something amazing together!
          </p>
          {/* BUTTONS */}
          <div className="sm:flex items-center space-y-6 sm:space-y-0 space-x-0 sm:space-x-5">
            <button className="flex items-center text-xl gap-3 bg-[#457B9D] text-white px-4 sm:px-8 py-4 rounded-lg shadow-md hover:bg-[#365d73] transition-colors duration-300">
              Download CV
              <svg
                className="h-8 w-8 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16a5 5 0 01-.916-9.916 5.002 5.002 0 019.832 0A5.002 5.002 0 0116 16m-7 3l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
            </button>
            <button className="text-[#457B9D] bg-[#daf1f5] border border-[#457B9D] text-xl px-10 sm:px-10 py-4 rounded-lg shadow-md hover:bg-[#c3e5ea] transition-colors duration-300">
              Explore More
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center">
          <Image
            src={"/Image/Rectangle.png"}
            alt="Hero Image Shadow"
            width={800}
            height={100}
            className="h-auto "
          />
          <img src="https://img.freepik.com/premium-photo/bright-closeup-portrait-picture-happy-businessman_380164-21621.jpg?w=740" className="absolute top-0 w-[60%] "/>
        </div>
      </section>
  );
}
