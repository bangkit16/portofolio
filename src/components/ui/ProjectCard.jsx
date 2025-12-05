/* eslint-disable react/prop-types */
function ProjectCard({ nama, gambar, tool, deskripsi, link }) {
  return (
    <>
      <div className="w-full lg:w-1/3 relative  transition-transform">
        <div className=" border-slate-200 w-full h-[500px] relative bg-transparent rounded-xl m-2 p-4 flex flex-col">
          <div className="w-full h-[13rem]  overflow-hidden flex rounded-md">
            <img
              className=" object-cover w-full object-top hover:scale-110 transition"
              src={gambar}
              alt=""
            />
          </div>

          <h4 className="mt-4 font-bold text-lg">{nama}</h4>
          <span className="font-semibold text-base text-green-500">
            {tool}
          </span>
          <p className="text-base  h-auto text-slate-600 pr-3">{deskripsi}</p>
          <a
            href={link}
            target="blank"
            className="border-green-500 border-[3px] w-fit justify-self-end  text-green-500 font-semibold bottom-0 mb-0 lg:mt-auto mt-2  rounded-full px-5 py-2"
          >
            Visit {'</> '}
          </a>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
