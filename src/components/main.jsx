import FlechaParaAbajo from "../svg/flechaAbajo.svg";
import FlechaParaArriba from "../svg/flechaArriba.svg";
import Recargar from "../svg/recargar.svg";
import TresPuntos from "../svg/tresPuntos.svg";
import Estrella from "../svg/estrella.svg";
import Importante from "../svg/importantes.svg";
import Enviar from "../svg/enviar.svg";


export default function Main() {
    return (
        <main className="h-full w-full flex items-center">
            <div className="h-[98%] w-full bg-white me-3 rounded-2xl" >
                <header className="flex justify-between items-center w-full h-[55px]">
                    <div className="flex w-[93%]">
                        <div className="flex mx-4 items-center">
                            <input className="h-[15px] w-[15px] me-2" type="checkbox" name="selectFiltro" />
                            <button className="h-[14px]" type="button">
                                <FlechaParaAbajo className="h-full" />
                            </button>
                        </div>
                        <div className="flex mx-4 items-center">
                            <button type="button">
                                <Recargar />
                            </button>
                        </div>
                        <div className="flex mx-4 items-center">
                            <button type="button">
                                <TresPuntos />
                            </button>
                        </div>
                    </div>
                    <div className="flex w-[7%]">
                        <p className="me-2">Es</p>
                        <button>
                            <FlechaParaAbajo />
                        </button>
                    </div>
                </header>
                <div className="flex flex-col w-full h-auto">
                    <div className="w-full flex justify-between h-[50px] border-b border-slate-300">
                        <div className="flex mx-4 items-center">
                            <FlechaParaArriba className="me-4" />
                            <p>No leidos</p>
                        </div>
                        <div className="flex mx-8 items-center">
                            <p className="text-sm me-4">1-25 de 941</p>
                            <TresPuntos />
                        </div>
                    </div>
                    <ul className="w-full flex flex-col border-b border-slate-300"> 
                        <li className="w-auto h-[40px] flex mx-4">
                            <div className="min-w-[110px] flex items-center">
                                <input className="mx-2" type="checkbox" name="" id="" />
                                <Estrella className="mx-2" />
                                <Importante className="mx-2 h-[15px] w-[15px]" />
                            </div>
                            <div className="min-w-[170px] flex items-center">
                                <p className="decoration-black">Discord</p>
                            </div>
                            <div className="w-[100%] max-w-[100%] me-[3%] flex items-center">
                                <p className="break-words whitespace-pre-wrap text-justify truncate">
                                    lorem dasbduabsdas asd asd asd asd s ssds dasdasd asdadasda lorem... 
                                </p>
                            </div>
                            <div className="min-w-[50px] flex items-center justify-end">
                                <p>23:33</p>
                            </div>
                        </li>
                    </ul>
                    <div className="w-full flex justify-between border-b">
                        <button className="flex justify-center items-center gap-5 mx-2 mt-3 mb-1 hover:bg-slate-100 rounded-md p-2">
                            <FlechaParaAbajo />
                            <p>
                                Todo lo demás
                            </p>
                        </button>
                        <div className="flex justify-center items-center mx-8 mt-3">
                            <TresPuntos />
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row items-center md:justify-between mx-4 h-[350px]">
                        <div className="flex w-full md:w-[24%] mx-[1%] flex-col items-center justify-around h-[50px]">
                            <span className="h-[5px] w-[90%] bg-gray-300"></span>
                            <span className="w-[90%] flex">
                                <a className="text-xs text-gray-500 w-auto" href="#">0,21 GB ocupados 15 GB</a>
                                <Enviar className="w-[20px]" />
                            </span>
                        </div>
                        <div className="flex justify-center gap-2 w-full md:w-[35%] mx-[1%] h-[50px]">
                            <a className="text-xs text-gray-500" href="#">Términos</a>
                            <a className="text-xs text-gray-500" href="#">Privacidad</a>
                            <a className="text-xs text-gray-500" href="#">Política del programa</a>
                        </div>
                        <div className="flex flex-col items-end w-full md:w-[35%] me-[3%] h-[50px]">
                            <p className="text-xs text-gray-500">Úñtima actividad de la cuenta: hace 23 horas</p>
                            <a className="text-xs text-gray-500" href="#">Detalles</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
