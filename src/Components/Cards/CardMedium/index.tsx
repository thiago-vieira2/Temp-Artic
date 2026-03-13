export default function Card_Mediun() {
    return (

        <div className="flex flex-col sm:flex-row lg:flex-row gap-4 md:gap-6 w-full justify-center items-center">

            <div className="flex flex-col px-4 md:px-6 justify-center w-full max-w-sm sm:max-w-xs md:w-72 lg:w-80 h-20 bg-gray-800 rounded-xl border border-gray-600">
                <p className="text-blue-500 text-sm md:text-base">Minima</p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-blue-500">
                    14.5 <span className="text-lg md:text-xl lg:text-2xl">°C</span>
                </h1>
            </div>

            <div className="flex flex-col px-4 md:px-6 justify-center w-full max-w-sm sm:max-w-xs md:w-72 lg:w-80 h-20 bg-gray-800 rounded-xl border border-gray-600">
                <p className="text-red-500 text-sm md:text-base">Maxima</p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-red-500">
                    14.5 <span className="text-lg md:text-xl lg:text-2xl">°C</span>
                </h1>
            </div>

            <div className="flex flex-col px-4 md:px-6 justify-center w-full max-w-sm sm:max-w-xs md:w-72 lg:w-80 h-20 bg-gray-800 rounded-xl border border-gray-600">
                <p className="text-amber-500 text-sm md:text-base">Media</p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-amber-500">
                    14.5 <span className="text-lg md:text-xl lg:text-2xl">°C</span>
                </h1>
            </div>

        </div>
    );
}