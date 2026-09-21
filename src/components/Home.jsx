import doctor from "../assets/doctor.png";
import dr from "../assets/dr.png";
import Vector3 from "../assets/Vector-3.png";
import Vector2 from "../assets/Vector-2.png";
import search from "../assets/search.png";
import location from "../assets/location.png";
import Ellipse14 from "../assets/Ellipse-14.png";

const Home = () => {
  return (
    <section className="overflow-hidden bg-[#EAF2FF]">
      {/* Hero section */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 pt-10 sm:px-6 md:pt-14 lg:flex-row lg:px-8 lg:pt-0">
        {/* Text content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold leading-tight text-gray-800 sm:text-5xl lg:text-6xl">
            Find & Search Your{" "}
            <br className="hidden sm:block" />
            <span className="border-b-4 border-[#2563EB] text-[#2563EB]">
              Favourite
            </span>{" "}
            Doctor
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br className="hidden sm:block" />
            Sem velit viverra amet faucibus.
          </p>

          {/* Search box */}
          <div className="mt-7 hidden w-full rounded-full bg-white p-2 shadow-lg sm:flex sm:items-center">
            <div className="flex flex-1 items-center gap-2 border-r border-gray-200 px-3 py-2 text-sm text-gray-500">
              <img src={dr} alt="" className="h-5 w-5 object-contain" />
              <span className="flex-1">Doctor's Name</span>
              <img src={Vector2} alt="" className="h-4 w-4 object-contain" />
            </div>

            <div className="flex flex-1 items-center gap-2 px-3 py-2 text-sm text-gray-500">
              <img src={location} alt="" className="h-5 w-5 object-contain" />
              <span className="flex-1">Location</span>
              <img src={Vector3} alt="" className="h-4 w-4 object-contain" />
            </div>

            <button
              type="button"
              aria-label="Search doctor"
              className="ml-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-white transition hover:bg-blue-700"
            >
              <img src={search} alt="" className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Doctor image */}
        <div className="relative -mb-8 flex w-full justify-center self-end sm:-mb-10 lg:mb-0 lg:w-1/2 lg:justify-end">
          <img
            src={Ellipse14}
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 w-[115%] max-w-155"
          />

          <img
            src={doctor}
            alt="Doctor"
            className="relative z-10 w-full max-w-125 object-contain sm:max-w-145 lg:max-w-162.5"
          />
        </div>
      </div>

      {/* Statistics - doctor image ke bilkul saath attached */}
      <div className="relative z-20 bg-[#2563EB] py-7 text-white sm:py-9">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-2 px-3 text-center sm:gap-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold sm:text-4xl">24/7</h2>
            <p className="mt-1 text-xs sm:text-base">Online Support</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold sm:text-4xl">100+</h2>
            <p className="mt-1 text-xs sm:text-base">Doctors</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold sm:text-4xl">1M+</h2>
            <p className="mt-1 text-xs sm:text-base">Active Patients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;