import Logo from '../../../assets/IMG/Logo.svg?url';

export default function Header() {
    return (
        <div className="flex justify-between items-center w-full h-14 md:h-16 bg-[#212529] px-4 md:px-8 lg:px-12">
            
               <img src={Logo} alt="Logo" />
            
            <div className="flex gap-3 md:gap-6 lg:gap-10">
                <button className="text-white text-sm md:text-base">JSON</button>
                <button className="text-white text-sm md:text-base">Recomeçar</button>
            </div>

        </div>
    );
}