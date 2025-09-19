export default function Profile() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div className="h-screen w-full overflow-y-auto bg-[#002E58] px-10 py-7 text-white sm:max-w-full md:w-[550px] lg:w-[450px]">
        {/* CONTACT */}
        <h6 className="inline-block pb-5 text-left text-2xl font-medium underline underline-offset-8 transition hover:text-black hover:decoration-black md:pb-4 md:text-2xl lg:pb-8 lg:text-[22px]">
          CONTACT
        </h6>
        <ul className="space-y-2 pb-8 text-xl md:text-2xl lg:text-sm">
          <li className="flex items-center gap-2 hover:text-blue-800">
            <i className="material-symbols-outlined !text-[20px] md:!text-[24px]">
              mail
            </i>
            <span className="lg:text-[18px]">adhikarishristi760@gmail.com</span>
          </li>
          <li className="flex items-center gap-2 hover:text-blue-800">
            <i className="material-symbols-outlined !text-[20px] md:!text-[24px]">
              mobile_3
            </i>
            <span className="lg:text-[18px]">+977 9869684228</span>
          </li>
          <li className="flex items-center gap-2 hover:text-blue-800">
            <i className="material-symbols-outlined !text-[20px] md:!text-[24px]">
              location_on
            </i>
            <span className="lg:text-[18px]">Kathmandu, Nepal</span>
          </li>
        </ul>

        {/* SKILLS */}
        <h6 className="inline-block pb-8 text-left text-2xl underline underline-offset-8 transition hover:text-black hover:decoration-black md:pb-4 md:text-2xl lg:pb-8 lg:text-[22px]">
          SKILLS
        </h6>

        <ul className="flex flex-wrap gap-8 space-y-1 pb-8 text-xl md:text-xl lg:gap-4 lg:pb-4 lg:text-[18px]">
          <li className="transform cursor-pointer rounded-2xl border-2 p-4 text-center transition-transform duration-200 ease-in-out hover:scale-111 hover:border-black hover:text-blue-800">
            HTML
          </li>

          <li className="transform cursor-pointer rounded-2xl border-2 p-4 text-center transition-transform duration-200 ease-in-out hover:scale-111 hover:border-black hover:text-blue-800">
            CSS
          </li>

          <li className="transform cursor-pointer rounded-2xl border-2 p-4 text-center transition-transform duration-200 ease-in-out hover:scale-111 hover:border-black hover:text-blue-800">
            JAVASCRIPT
          </li>

          <li className="transform cursor-pointer rounded-2xl border-2 p-4 text-center transition-transform duration-200 ease-in-out hover:scale-111 hover:border-black hover:text-blue-800">
            REACT JS
          </li>

          <li className="transform cursor-pointer rounded-2xl border-2 p-4 text-center transition-transform duration-200 ease-in-out hover:scale-111 hover:border-black hover:text-blue-800">
            BOOTSTRAP
          </li>

          <li className="transform cursor-pointer rounded-2xl border-2 p-4 text-center transition-transform duration-200 ease-in-out hover:scale-111 hover:border-black hover:text-blue-800">
            GIT
          </li>
        </ul>

        {/* LANGUAGES */}
        <h6 className="inline-block pb-6 text-left text-2xl underline underline-offset-8 transition hover:text-black hover:decoration-black md:pb-4 md:text-2xl lg:pb-8 lg:text-[22px]">
          LANGUAGES
        </h6>
        <ul className="list-disc space-y-1 pb-8 pl-6 text-xl md:text-xl lg:pb-4 lg:text-[18px]">
          <li>
            <span className="hover:text-blue-800"> Nepali </span>
          </li>
          <li>
            <span className="hover:text-blue-800"> English </span>
          </li>
        </ul>

        {/* HOBBIES */}
        <h6 className="inline-block pb-8 text-left text-2xl underline underline-offset-8 transition hover:text-black hover:decoration-black md:pb-4 md:text-2xl lg:pb-8 lg:text-[22px]">
          HOBBIES
        </h6>
        <ul className="list-disc space-y-1 pl-5 text-xl md:text-xl lg:pb-4 lg:text-[18px]">
          <li>
            <span className="hover:text-blue-800"> Sketching</span>
          </li>
          <li>
            <span className="hover:text-blue-800">Reading</span>{' '}
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="h-screen w-full overflow-y-auto bg-white p-6 shadow-2xl sm:max-w-full md:p-10">
        {/* NAME HEADER */}
        <div className="space-y-2 rounded-md bg-gray-100 p-4 text-center text-black md:p-6">
          <h1 className="text-xl font-semibold md:text-3xl lg:text-[22px]">
            SHRISTI ADHIKARI
          </h1>
          <hr className="mx-auto w-[100px] border border-black" />
          <h2 className="text-md text-gray-500 md:text-xl lg:text-[18px]">
            IT STUDENT
          </h2>
        </div>

        {/* SUMMARY */}
        <h6 className="inline-block pt-5 pb-5 text-left !text-2xl font-light text-[#002E58] underline decoration-black underline-offset-8 transition hover:text-blue-800 hover:decoration-blue-800 md:pt-12 md:text-3xl lg:pt-8 lg:pb-4 lg:text-[22px]">
          SUMMARY
        </h6>
        <p className="pb-4 text-[20px] leading-relaxed font-light md:text-xl md:leading-loose lg:text-[18px]">
          As a motivated IT student with a strong foundation in front-end
          development, I am eager to apply my knowledge of{' '}
          <span className="text-[#06336edf]"> HTML, CSS, and React-Js </span> to
          real-world projects. Although I do not have formal job experience, I
          have gained practical skills through coursework and personal projects,
          demonstrating my ability to build responsive and user-friendly web
          applications. Passionate about continuous learning and growth, I
          quickly adapt to new technologies and thrive in collaborative
          environments. With a strong interest in software development, I am
          committed to contributing effectively while expanding my technical
          expertise.
        </p>

        {/* EDUCATION */}
        <h6 className="inline-block pb-5 text-left text-2xl font-light text-[#002E58] underline decoration-black underline-offset-8 transition hover:text-blue-800 hover:decoration-blue-800 md:pt-12 md:text-3xl lg:pt-8 lg:pb-4 lg:text-[22px]">
          EDUCATION
        </h6>
        <ul className="pb-2 text-[20px] font-light md:text-xl lg:pb-3 lg:text-[18px]">
          <li>Bachelor of Engineering in Information Technology</li>
          <li>Everest Engineering College</li>
        </ul>
        <ul className="pb-5 text-[20px] font-light md:text-xl lg:pb-3 lg:text-[18px]">
          <li>+2, Science</li>
          <li>Kathmandu Model College</li>
        </ul>

        {/* PROJECT */}
        <h6 className="inline-block pb-3 text-left text-2xl font-light text-[#002E58] underline decoration-black underline-offset-8 transition hover:text-blue-800 hover:decoration-blue-800 md:pt-12 md:text-3xl lg:pt-8 lg:pb-4 lg:text-[22px]">
          PROJECT
        </h6>
        <ul className="pb-4 font-light md:text-xl lg:text-[18px]">
          <li>
            <h6 className="text-[20px] font-light">BUS RESERVATION SYSTEM</h6>
            <ul className="list-disc space-y-2 pb-2 pl-12 text-left text-[18px] text-black lg:text-base">
              <li>
                Real-time info on bus schedules, fares, and seat availability.
              </li>
              <li>USING: HTML, CSS, PHP</li>
            </ul>
          </li>
          <li>
            <h6 className="!text-[20px] font-light">E-LIBRARY SYSTEM</h6>
            <ul className="list-disc space-y-2 pl-12 text-left text-[18px] lg:text-base">
              <li>
                Provides convenient and secure access to digital resources with
                efficient management.
              </li>
              <li>USING: C</li>
            </ul>
          </li>
        </ul>

        <h6 className="inline-block pb-4 pl-0 text-left text-2xl font-light text-[#002E58] underline decoration-black underline-offset-8 transition hover:text-blue-800 hover:decoration-blue-800 md:pt-12 md:text-3xl lg:pt-8 lg:pb-4 lg:text-[22px]">
          ADDITIONAL INFORMATION
        </h6>
        <ul className="list-disc space-y-1">
          <li>
            <span className="text-xl font-normal">Languages: </span>
            <span className="text-lg font-light"> English, Nepali </span>
          </li>
          {/* <li>
                <span className="font-medium">Certificate:</span> —
              </li> */}
          <li>
            <span className="text-xl font-normal">Hobbies:</span>{' '}
            <span className="text-lg font-light"> Sketching, Reading </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
