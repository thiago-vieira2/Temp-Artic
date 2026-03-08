export default function Card_Mediun() {
    return (


        <div className="flex flex-row gap-46">
            <div className="flex flex-col pl-6 items-start justify-center w-80 h-20  bg-gray-800  rounded-xl border border-gray-600">
                <div className="">
                    <p className="text-blue-500">Minima</p>
                </div>

                <h1 className="text-4xl text-blue-500">14.5 <span className="text-2xl">°C</span></h1>
            </div>

            <div className="flex flex-col pl-6 items-start justify-center w-80 h-20  bg-gray-800  rounded-xl border border-gray-600">
                <div className="">
                    <p className="text-red-500">Maxima</p>
                </div>

                <h1 className="text-4xl text-red-500">14.5 <span className="text-2xl">°C</span></h1>
            </div>

            <div className="flex flex-col pl-6 items-start justify-center w-80 h-20  bg-gray-800  rounded-xl border border-gray-600">
                <div className="">
                    <p className="text-amber-500">Media</p>
                </div>

                <h1 className="text-4xl text-amber-500">14.5 <span className="text-2xl">°C</span></h1>
            </div>

         
        </div>
    );
}