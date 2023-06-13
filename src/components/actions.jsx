import { useState } from "react";

import Lapiz from "../svg/lapiz.svg";
import Mas from "../svg/mas.svg";
import Recibidos from "../svg/cajaDeResibos.svg";
import Estrella from "../svg/estrella.svg";
import Reloj from "../svg/reloj.svg";
import Enviados from "../svg/enviados.svg";
import Borradores from "../svg/borrador.svg";
import FlechaAbajo from "../svg/flechaAbajo.svg"
import FlechaArriba from "../svg/flechaArriba.svg"
import Importantes from "../svg/importantes.svg"
import Programados from "../svg/enviarProgramado.svg"
import Todos from "../svg/todos.svg"
import Spam from "../svg/spam.svg"
import Papelera from "../svg/papelera.svg";
import Gestion from "../svg/gestion.svg"

export default function Actions() {
  return (
    <div className="flex w-1/4">
      <section className="flex flex-col w-[95%] h-auto">
        <div className="my-2 ms-5">
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
            alt=""
            aria-hidden="true"
            role="presentation"
            style={{ width: "109px", height: "40px" }}
          />
        </div>
        <div className="flex items-center mt-7 mb-2">
          <BtnRedactar />
        </div>
        <div className="overflow-y-hidden overflow-x-hidden h-auto mt-2 ">
          <Actiones />
          <div className="flex items-center justify-between mx-3 mt-2">
            <p className="text-lg">Etiquetas</p>
            <Mas />
          </div>
        </div>
      </section>
    </div>
  );
}

export const BtnRedactar = () => {
  return (
    <button
      type="button"
      style={{ backgroundColor: "#c2e7ff", border: "solid 1px #c2e7ff" }}
      className="ms-3 border-solid border-2 rounded-xl p-2 flex hover:shadow-md hover:shadow-gray-400 duration-100"
    >
      <Lapiz className="m-2" />
      <p className="m-1 text-md">Redactar</p>
    </button>
  );
};

export const Actiones = () => {
  return (
    <ul className="flex flex-col w-full h-auto">
      <li className="flex justify-between ms-5 hover:bg-slate-200 rounded-xl p-1">
        <Recibidos className="w-1/5 my-1" />
        <h5 className="w-3/5">Recibidos</h5>
        <p className="w-1/5">841</p>
      </li>
      <li className="flex justify-between ms-5 hover:bg-slate-200 rounded-xl p-1">
        <Estrella className="w-1/5 my-1" />
        <h5 className="w-3/5">Destacados</h5>
        <p className="w-1/5"></p>
      </li>
      <li className="flex justify-between ms-5 hover:bg-slate-200 rounded-xl p-1">
        <Reloj className="w-1/5 my-1" />
        <h5 className="w-3/5">Pospuestos</h5>
        <p className="w-1/5"></p>
      </li>
      <li className="flex justify-between ms-5 hover:bg-slate-200 rounded-xl p-1">
        <Enviados className="w-1/5 my-1" />
        <h5 className="w-3/5">Enviados</h5>
        <p className="w-1/5"></p>
      </li>
      <li className="flex justify-between ms-5 hover:bg-slate-200 rounded-xl p-1">
        <Borradores className="w-1/5 my-1" />
        <h5 className="w-3/5">Borradores</h5>
        <p className="w-1/5"></p>
      </li>
      <DropdownMenu />
    </ul>
  );
};

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <li className="flex justify-between ms-5 hover:bg-slate-200 rounded-xl p-1" onClick={toggleMenu}>
        {isOpen ?
          <>
            <FlechaArriba className="w-1/5 my-1" />
            <h5 className="w-4/5">Menos</h5>
          </> :
          <>
            <FlechaAbajo className="w-1/5 my-1" />
            <h5 className="w-4/5">Más</h5>
          </>}  
      </li>
      {isOpen && (
        <>
          <li className="flex justify-between ms-5 hover:bg-slate-200 rounded-xl p-1">
            <Importantes className="w-1/5 h-8" />
            <h5 className="w-3/5 my-1">Importantes</h5>
            <p className="w-1/5"></p>
          </li>
          <li className="flex justify-between ms-5 hover:bg-slate-200 rounded-xl p-1">
            <Programados className="w-1/5 my-1" />
            <h5 className="w-3/5">Programados</h5>
            <p className="w-1/5"></p>
          </li>
          <li className="flex justify-between ms-5 hover:bg-slate-200 rounded-xl p-1">
            <Todos className="w-1/5 my-1" />
            <h5 className="w-3/5">Todos</h5>
            <p className="w-1/5"></p>
          </li>
          <li className="flex justify-between ms-5 hover:bg-slate-200 rounded-xl p-1">
            <Spam className="w-1/5 my-1" />
            <h5 className="w-3/5">Spam</h5>
            <p className="w-1/5"></p>
          </li>
          <li className="flex justify-between ms-5 hover:bg-slate-200 rounded-xl p-1">
            <Papelera className="w-1/5 my-1" />
            <h5 className="w-3/5">Papelera</h5>
            <p className="w-1/5"></p>
          </li>
          <li className="flex justify-between ms-5 hover:bg-slate-200 rounded-xl p-1">
            <Gestion className="w-1/5 my-1" />
            <h5 className="w-4/5">Gestionar etiquetas</h5>
            <p className="w-0"></p>
          </li>
          <li className="flex justify-between ms-5 hover:bg-slate-200 rounded-xl p-1">
            <Mas className="w-1/5 my-1" />
            <h5 className="w-3/5">Nueva etiqueta</h5>
            <p className="w-1/5"></p>
          </li>
        </>
      )}
    </div>
  );
};
