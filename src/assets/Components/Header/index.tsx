import './index.css'

export default function Header() {
    return (
        <div className="flex justify-around max-w h-12 bg-gray-900 items-center">
            <h1 className='text-white font-bold' >Tinta<span className='text-blue-500 font-extrabold' >Negra</span></h1>
            <div className="flex gap-12">
                <button className="text-white">JSON</button>
                <button className=" text-white">Recomeçar</button>
            </div>
        </div>
    );
}