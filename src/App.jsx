


function App() {


  return (
    <>
      <main className="z-[200] peer-hover cursor-pointer card-w h-[var(--card-h)] border-card  bg-[var(--pure-white)] drop-shadow">
        <div className="flex flex-col justify-between p-[24px] h-full">

          <svg className=" img-w rounded-[20px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 336 201"><g clipPath="url(#a)"><path fill="#F4D04E" d="M0 .5h336v200H0z" /><rect width="139" height="95" x="87.996" y="77.729" fill="#fff" rx="47.5" transform="rotate(-45 87.996 77.729)" /><rect width="139" height="95" x="54.055" y="77.729" fill="#111" rx="47.5" transform="rotate(-45 54.055 77.729)" /><path fill="#111" d="M234.864 209.036 451.4-7.5l67.175 67.175-216.536 216.536z" /><rect width="139" height="95" x="20.114" y="77.729" fill="#fff" rx="47.5" transform="rotate(-45 20.114 77.729)" /><rect width="204.19" height="270.554" fill="#111" rx="102.095" transform="scale(-1 1) rotate(45 -103.887 14.564)" /><path stroke="#fff" strokeWidth="3" d="m6.69-357.5 135.583 135.727c12.481 12.494 12.481 32.737 0 45.231L-45.544 11.475c-12.481 12.494-12.481 32.737 0 45.23L107.088 209.5" /><path stroke="#111" strokeWidth="3" d="M69.965 71.719v23.334h23.334M136.079 52.273V28.94h-23.334M102.845 38.838v46.67M210.364-37.5l60.873 60.873c12.497 12.496 12.497 32.758 0 45.254l-77.745 77.746c-12.497 12.496-12.497 32.758 0 45.254l69.872 69.873" /><path stroke="#111" strokeWidth="3" d="m253.339 149.574-12.144 12.145 14.256 14.257v12.672h12.673l13.729 13.729 12.145-12.145M278.685 124.228l-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145M304.031 98.883l-12.145 12.144 14.257 14.257v12.673h12.673l13.729 13.729 12.144-12.145M329.376 73.537l-12.145 12.145 14.257 14.257v12.672h12.673l13.729 13.729 12.145-12.144" /><path stroke="#fff" strokeWidth="5" d="m354.722 48.191-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145" /><mask id="b" width="285" height="285" x="234" y="-8" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }}><path fill="#111" d="M234.864 209.036 451.4-7.5l67.175 67.175-216.536 216.536z" /></mask><g stroke="#fff" mask="url(#b)"><path strokeWidth="3" d="m253.339 149.574-12.144 12.145 14.256 14.257v12.672h12.673l13.729 13.729 12.145-12.145M278.685 124.228l-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145M304.031 98.883l-12.145 12.144 14.257 14.257v12.673h12.673l13.729 13.729 12.144-12.145M329.376 73.537l-12.145 12.145 14.257 14.257v12.672h12.673l13.729 13.729 12.145-12.145" /><path strokeWidth="5" d="m354.722 48.191-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145" /></g></g><defs><clipPath id="a"><path fill="#fff" d="M0 .5h336v200H0z" /></clipPath></defs></svg>

          <div className="text-small  bg-[var(--yellow)] w-fit px-[12px] py-[4px] rounded-[4px] font-[800]">
            Learning
          </div>

          <div className="text-small">
            Published 21 Dec 2023
          </div>

          <h1 className="  font-[800] text-large   ">
            HTML & CSS foundations
          </h1>

          <p className="text-medium text-[var(--grey)]">
            These languages are the backbone of every website, defining structure, content, and presentation.
          </p>

          <span className="font-[800] gap-[12px] flex  items-center">

            <img className="w-[32px] h-[32px] inline-block" src="./images/image-avatar.webp" />
            Greg Hooper

          </span>

        </div>
      </main>
      {/* <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </>
  )
}

export default App
