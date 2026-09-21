import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import patients from "../assets/patients.png";
import arrow from "../assets/arrow.png";

const specialists = [
  { title: "Cardiology", image: card1 },
  { title: "Pulmonary", image: card2 },
  { title: "Medicine", image: card3 },
  { title: "Neurology", image: card4 },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 sm:mb-12 sm:text-3xl lg:text-4xl">
          Our Consulting Specialists
        </h2>

        {/* Specialist Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specialists.map((specialist) => (
            <div
              key={specialist.title}
              className="group rounded-xl border border-gray-200 p-5 text-center shadow-sm transition duration-300 hover:bg-[#0366d6] hover:text-white hover:shadow-lg sm:p-6"
            >
              <img
                src={specialist.image}
                alt={specialist.title}
                className="mx-auto mb-4 h-14 w-14 rounded-full bg-[#a2cdfd] p-3 transition group-hover:bg-white sm:h-16 sm:w-16"
              />

              <h3 className="text-xl font-semibold sm:text-2xl">
                {specialist.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 transition group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam quod vitae saepe consectetur repellat ex veritatis.
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 flex flex-col items-center gap-8 lg:mt-20 lg:flex-row lg:gap-12">
          <div className="w-full lg:w-1/2">
            <img
              src={patients}
              alt="Patients receiving medical care"
              className="w-full rounded-xl object-cover"
            />
          </div>

          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
              Why You Choose Us?
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
              velit viverra amet faucibus.
            </p>

            <ul className="mt-5 space-y-3 text-left font-semibold text-gray-800">
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-sm text-[#0366d6]">
                  ✓
                </span>
                24/7 Emergency Support
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-sm text-[#0366d6]">
                  ✓
                </span>
                100+ Expert Doctors
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-sm text-[#0366d6]">
                  ✓
                </span>
                Latest Technology
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-sm text-[#0366d6]">
                  ✓
                </span>
                Affordable Prices
              </li>
            </ul>

            <button className="group mt-7 inline-flex items-center gap-2 rounded-full px-2 py-2 font-semibold text-[#0366d6] transition hover:bg-[#0366d6] hover:px-6 hover:text-white">
              Learn More
              <img
                src={arrow}
                alt=""
                className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-rotate-45"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;