import FlechaParaAbajo from "../svg/flechaAbajo.svg"
import Interogacion from "../svg/informacion.svg"
import Lupa from "../svg/lupa.svg"
import AjustesBusqueda from "../svg/ajustes.svg"
import Ajustes from "../svg/gestion.svg"
import NuevePuntos from "../svg/nuevePuntos.svg"

export default function Search() {
    return (
        <header className="flex w-full h-16">
            <div className="w-full h-full flex items-center">
                <div className="w-[95%] h-12 rounded-3xl flex justify-between items-center bg-slate-200">
                    <span className="w-[45px] h-[80%] flex items-center justify-center hover:bg-slate-300 rounded-3xl m-1">
                        <Lupa />
                    </span>
                    <input type="search" className="w-full h-[80%] bg-slate-200" placeholder="Buscar en el correo"/>
                    <span className="w-[45px] h-[80%] flex items-center justify-center hover:bg-slate-300 rounded-3xl m-1">
                        <AjustesBusqueda />
                    </span>
                </div>
            </div>
            <div className="w-[150px] h-full flex justify-center items-center">
                <div className="h-12 flex items-center rounded-3xl px-[15px] bg-slate-200">
                    <span className="bg-green-700 w-[14px] h-[14px] rounded-full me-[3px]"></span>
                    <p className="text-sm mx-[3px]">
                        Activo
                    </p>
                    <FlechaParaAbajo className="ms-[3px] w-[10px]" />
                </div>
            </div>
            <div className="w-[60px] h-full flex justify-center items-center ms-2">
                <Interogacion className="h-5" />
            </div>
            <div className="w-[60px] h-full flex justify-center items-center">
                <Ajustes className="h-5" />
            </div>
            <div className="w-[60px] h-full flex justify-center items-center">
                <NuevePuntos className="h-6"/>
            </div>
            <div className="w-[60px] h-full flex justify-center items-center me-2">
                <div className="h-8 w-8 rounded-full">
                    <img className="h-full w-full rounded-full" src="https://lh3.googleusercontent.com/ogw/AOLn63EUTrdOh7yjkP9MP1TmGIwbNT-G_z36SmmGOunp5Q=s32-c-mo"  />
                </div>
            </div>

        </header>
    );
  }
  