import FlechaParaAbajo from "../svg/flechaAbajo.svg";
import Interogacion from "../svg/informacion.svg";
import Lupa from "../svg/lupa.svg";
import AjustesBusqueda from "../svg/ajustes.svg";
import Ajustes from "../svg/gestion.svg";
import Lapiz from "../svg/lapiz.svg";
import Check from "../svg/check.svg";
import NuevePuntos from "../svg/nuevePuntos.svg";
import Prohibido from "../svg/prohibido.svg";
import Reloj from "../svg/reloj.svg";
import Delete from "../svg/cruz.svg";
import Calendario from "../svg/calendario.svg"

export default function Search({
  vistaEstado,
  setVistaEstado,
  vistaSearch,
  setVistaSearch,
  vistaSearchSetting,
  setVistaSearchSetting,
}) {
  return (
    <header className="flex w-full h-16 max-h-[4rem]">
      <Busqueda
        setVistaSearch={setVistaSearch}
        vistaSearch={vistaSearch}
        vistaSearchSetting={vistaSearchSetting}
        setVistaSearchSetting={setVistaSearchSetting}
      />
      <div className="w-[150px] h-full flex flex-col justify-center items-center">
        <div
          className="h-12 flex items-center rounded-3xl px-[15px] bg-slate-200 hover:cursor-pointer hover:bg-slate-300"
          onClick={(e) => {
            e.preventDefault();
            setTimeout(() => setVistaEstado(!vistaEstado) , 0);
          }}>
          <span className="bg-green-700 w-[14px] h-[14px] rounded-full me-[3px]"></span>
          <p className="text-sm mx-[3px]">Activo</p>
          <FlechaParaAbajo className="ms-[3px] w-[10px]" />
        </div>
        {vistaEstado && <Opciones />}
      </div>
      <div className="w-[60px] h-full flex justify-center items-center ms-2">
          <div className="h-8 w-8 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-slate-300">
                <Interogacion className="h-5" />
          </div>
      </div>
      <div className="w-[60px] h-full flex justify-center items-center">
          <div className="h-8 w-8 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-slate-300">
                <Ajustes className="h-5" />
          </div>
      </div>
      <div className="w-[60px] h-full flex justify-center items-center">
          <div className="h-8 w-8 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-slate-300">
                <NuevePuntos className="h-6" />
          </div>
      </div>
      <div className="w-[60px] h-full flex justify-center items-center me-2">
          <div className="h-8 w-8 rounded-full flex justify-center items-center">
                <div className="h-full w-full">
          </div>
          <img
            className="h-full w-full rounded-full"
            src="https://lh3.googleusercontent.com/ogw/AOLn63EUTrdOh7yjkP9MP1TmGIwbNT-G_z36SmmGOunp5Q=s32-c-mo"
          />
        </div>
      </div>
    </header>
  );
}

export const Opciones = () => {
  return (
    <span className="absolute top-14 right-6 w-[270px] bg-white shadow-lg shadow-black opacity-50 rounded-lg">
      <ul className="flex flex-col items-center w-full p-0 m-0">
        <li className="flex justify-between items-center p-2 w-[100%] hover:bg-slate-200 hover:rounded-t-lg">
          <div className="w-1/6 p-0 m-0 flex justify-center items-center">
            <span className="h-[12px] w-[12px] bg-green-700 rounded-full"></span>
          </div>
          <div className="w-full flex flex-col p-0 px-2 m-0 justify-center">
            <p className="text-sm font-bold">Automatico</p>
            <p className="text-xs">Segun la actividad del chat</p>
          </div>
          <div className="w-1/6 p-0 m-0 flex justify-center items-center">
            <Check />
          </div>
        </li>
        <li className="flex justify-between items-center p-2 w-[100%] hover:bg-slate-200">
          <div className="w-1/6 p-0 m-0 flex justify-center items-center">
            <Prohibido />
          </div>
          <div className="w-full flex flex-col p-0 px-2 m-0 justify-center">
            <p className="text-sm font-bold">No molestar</p>
            <p className="text-xs">Silenciar las notificaciones del chat</p>
          </div>
          <div className="w-1/6 p-0 m-0 flex justify-center items-center"></div>
        </li>
        <li className="flex justify-between items-center p-2 w-[100%] hover:bg-slate-200">
          <div className="w-1/6 p-0 m-0 flex justify-center items-center">
            <span className="h-[12px] w-[12px] rounded-full border-2 border-black"></span>
          </div>
          <div className="w-full flex flex-col p-0 px-2 m-0 justify-center">
            <p className="text-sm font-bold">Establece como ausente</p>
          </div>
          <div className="w-1/6 p-0 m-0 flex justify-center items-center">
            <img
              src=""
              alt=""
            />
          </div>
        </li>
        <li className="flex justify-between items-center px-2 py-4 w-[100%] border-t-2 hover:bg-slate-200">
          <div className="w-1/6 p-0 m-0 flex justify-center items-center">
            <Lapiz />
          </div>
          <div className="w-full flex flex-col p-0 px-2 m-0 justify-center">
            <p className="text-sm font-bold">Añadir un estado</p>
          </div>
          <div className="w-1/6 p-0 m-0 flex justify-center items-center"></div>
        </li>
        <li className="flex justify-between items-center p-2 w-[100%] border-t-2 hover:bg-slate-200 hover:rounded-b-lg">
          <div className="w-1/6 p-0 m-0 flex justify-center items-center">
            <span></span>
          </div>
          <div className="w-full flex flex-col p-0 px-2 m-0 justify-center">
            <p className="text-sm font-bold">
              Ajustes de notificaciones del chat
            </p>
          </div>
          <div className="w-1/6 p-0 m-0 flex justify-center items-center"></div>
        </li>
      </ul>
    </span>
  );
};

export const Busqueda = ({
  setVistaSearch,
  vistaSearch,
  vistaSearchSetting,
  setVistaSearchSetting,
}) => {
  return (
    <div
      className={`w-full h-auto flex flex-col ${
        !vistaSearch ? "justify-center" : "justify-start"
      }`}>
      <div
        className={`w-[95%] h-12 rounded-3xl flex flex-col bg-slate-200
            ${
              vistaSearch
                ? "z-10 min-h-[35vh] h-auto translate-y-2 bg-white border-2"
                : vistaSearchSetting 
                ? "bg-white"
                : "justify-center"
            }`}>
        <div className="w-full flex justify-between items-center">
          <span className="w-[45px] h-[40px] flex items-center justify-center hover:bg-slate-300 rounded-3xl m-1">
            <Lupa />
          </span>
          <input
            onClick={(e) => {
              e.preventDefault();
              setTimeout(() => setVistaSearch(!vistaSearch), 0);
            }}
            type="search"
            className={`
                        w-full h-[40px] bg-slate-200 focus:shadow-none focus:outline-none
                        ${!vistaSearch && !vistaSearchSetting ? "items-center" : "bg-white"}
                    `}
            placeholder="Buscar en el correo"
          />
          <span
            className={`w-[45px] h-[40px] flex items-center justify-center hover:bg-slate-300 rounded-3xl m-1 
            ${vistaSearchSetting ? "hover:bg-white" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setTimeout(() => setVistaSearchSetting(!vistaSearchSetting) , 0);
            }}>
            {!vistaSearchSetting && !vistaSearchSetting && <AjustesBusqueda />}
          </span>
        </div>

        {vistaSearch && (
          <div className="w-full flex flex-col justify-center">
            <div className="h-[50px] py-2 border-y-2 flex items-center">
              <button className="border border-black rounded-lg my-[5px] ms-3 hover:bg-slate-200">
                <p className="px-2 py-1 text-sm">Contiene archivos adjuntos</p>
              </button>
              <button className="border border-black rounded-lg my-[5px] ms-3 hover:bg-slate-200">
                <p className="px-2 py-1 text-sm">Últimos 7 dias</p>
              </button>
              <button className="border border-black rounded-lg my-[5px] ms-3 hover:bg-slate-200">
                <p className="px-2 py-1 text-sm">Remitidos por mi</p>
              </button>
            </div>
            <ul className="w-full h-auto flex flex-col justify-center pb-4">
              <li className="flex items-center justify-between p-3 hover:bg-slate-200 hover:border-s-2 hover:border-blue-600 ">
                <Reloj className="pe-4 ps-2 w-1/12" />
                <p className="w-10/12">UTN</p>
                <Delete className="ps-4 pe-2 w-1/12" />
              </li>
              <li className="flex items-center justify-between p-3 hover:bg-slate-200  hover:border-s-2 hover:border-blue-600">
                <Reloj className="pe-4 ps-2 w-1/12" />
                <p className="w-10/12">Amaro Cattarozzi</p>
                <Delete className="ps-4 pe-2 w-1/12" />
              </li>
            </ul>
          </div>
        )}
      </div>
    {vistaSearchSetting && <Settings />}
    </div>
  );
};

export const Settings = () => {
  return (
    <div className="absolute min-h-[45vh] w-[55vw] translate-y-56 bg-white border shadow-sm">
        <form className="h-full w-full p-6">
            <div className="mb-3 w-full flex justify-between">
                <label className="p-0 m-0 text-sm">De</label>
                <input type="text" className="text-sm border-b w-[75%] p-0 m-0 focus:border-b focus:border-blue-600 focus:shadow-none focus:outline-none" />
            </div>
            <div className="mb-3 w-full flex justify-between">
                <label className="p-0 m-0 text-sm">Para</label>
                <input type="text" className="text-sm border-b w-[75%] p-0 m-0 focus:border-b focus:border-blue-600 focus:shadow-none focus:outline-none" />
            </div>
            <div className="mb-3 w-full flex justify-between">
                <label className="p-0 m-0 text-sm">Asunto</label>
                <input type="text" className="text-sm border-b w-[75%] p-0 m-0 focus:border-b focus:border-blue-600 focus:shadow-none focus:outline-none" />
            </div>
            <div className="mb-3 w-full flex justify-between">
                <label className="p-0 m-0 text-sm">Contiene las palabras</label>
                <input type="text" className="text-sm border-b w-[75%] p-0 m-0 focus:border-b focus:border-blue-600 focus:shadow-none focus:outline-none" />
            </div>
            <div className="mb-3 w-full flex justify-between">
                <label className="p-0 m-0 text-sm">No contiene</label>
                <input type="text" className="text-sm border-b w-[75%] p-0 m-0 focus:border-b focus:border-blue-600 focus:shadow-none focus:outline-none" />
            </div>
            <div className="mb-3 w-full flex justify-between">
                <label className="p-0 m-0 text-sm">Tamaño</label>
                <select className="text-sm border-b w-[35%] p-0 m-0 bg-white hover:bg-slate-200 focus:bg-slate-200 rounded-sm">
                    <option className="p-1 bg-white"  selected>Mayor que</option>
                    <option className="p-1 bg-white" >Menor que</option>
                </select>
                <input type="text" className="text-sm border-b w-[20%] p-0 m-0 focus:border-b focus:border-blue-600 focus:shadow-none focus:outline-none" />
                <select className="text-sm border-b w-[10%] p-0 m-0 bg-white hover:bg-slate-200 focus:bg-slate-200 rounded-sm">
                    <option selected>MB</option>
                    <option>KB</option>
                    <option>bytes</option>
                </select>
            </div>
            <div className="mb-3 w-full flex justify-between">
                <label className="p-0 m-0 text-sm">Intervalo de fechas</label>
                <select className="text-sm border-b w-[35%] p-0 m-0 bg-white hover:bg-slate-200 focus:bg-slate-200 rounded-sm">
                    <option selected>1 dia</option>
                    <option>3 dias</option>
                    <option>1 semana</option>
                    <option>2 semanas</option>
                    <option>1 mes</option>
                    <option>2 meses</option>
                    <option>6 meses</option>
                    <option>1 año</option>
                </select>
                <input type="time" className="text-sm border-b w-[25%] p-0 m-0 focus:border-b focus:border-blue-600 focus:shadow-none focus:outline-none"/>
                <Calendario />
            </div>
            <div className="mb-3 w-full flex justify-between">
                <label className="p-0 m-0 text-sm">Buscar</label>
                <select className="text-sm border-b w-[75%] p-0 m-0 bg-white hover:bg-slate-200 focus:bg-slate-200 rounded-sm">
                    <option selected>Todos los correos</option>
                    <option>Recibidos</option>
                    <option>Destacados</option>
                    <option>Enviados</option>
                    <option>Borrados</option>
                    <option>Chats</option>
                    <option>Spam</option>
                    <option>Papelera</option>
                    <option>Mensaje, Spam y Papelera</option>
                    <option>Mensajes leidos</option>
                    <option>Mensajes no leidos</option>
                    <option>Social</option>
                    <option>Notificaciones</option>
                    <option>Foros</option>
                    <option>Promociones</option>
                </select>
            </div>
            <div className="mb-3">
                <input type="checkbox" className="me-7" />
                <label className="text-sm">Contiene archivos adjuntos</label>
            </div>
            <div className="w-full flex justify-end">
                <button className="rounded-lg mx-1 py-2 px-5 text-slate-400">Crear filtro</button>
                <button className="rounded-lg mx-1 py-2 px-5 bg-blue-500 text-white">Buscar</button>
            </div>
        </form>
    </div>
    );
};
