import CardHistory from "../../Cards/CardHistory";


export default function () {
    return (
        <div className="bg-gray-800 w-260 h-auto  rounded-2xl border border-gray-600 flex flex-col items-start justify-center gap-4 pl-10 ">
            <div>
                <h1 className="text-gray-500">Historico - 9 registros</h1>
            </div>

            <div className="">
                <CardHistory/>
            </div>
        </div>
    ); 
}