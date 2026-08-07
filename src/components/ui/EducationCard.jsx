/* eslint-disable react/prop-types */
function EducationCard({ school, type, period, location, image }) {
  return (
    <div className="w-full relative transition-transform mb-2">
      <div className="border-slate-200 w-full relative bg-transparent rounded-xl p-6 flex flex-col border hover:border-green-500 transition-colors h-full">
        <div className="flex justify-center mb-4">
          <img
            src={image}
            alt={school}
            className="w-24 h-24 object-contain rounded-xl  p-2"
          />
        </div>
        <h4 className="font-bold text-xl text-slate-900 text-center">{school}</h4>
        <span className="font-semibold text-base text-green-500 text-center">
          {type}
        </span>
        <div className="flex flex-col gap-1 mt-2 text-slate-500 text-sm lg:text-base text-center">
          <span>{location}</span>
          <span>{period}</span>
        </div>
      </div>
    </div>
  )
}

export default EducationCard
