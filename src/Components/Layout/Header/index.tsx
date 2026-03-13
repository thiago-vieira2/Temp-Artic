

export default function Header() {
    return (
        <div className="flex justify-between items-center w-full h-14 md:h-16 bg-gray-900 px-4 md:px-8 lg:px-12">
            
            <h1 className='text-white font-bold text-base md:text-lg lg:text-xl'>
                Tinta<span className='text-blue-500 font-extrabold'>Negra</span>
            </h1>

            <div className="flex gap-3 md:gap-6 lg:gap-10">
                <button className="text-white text-sm md:text-base">JSON</button>
                <button className="text-white text-sm md:text-base">Recomeçar</button>
            </div>

        </div>
    );
}