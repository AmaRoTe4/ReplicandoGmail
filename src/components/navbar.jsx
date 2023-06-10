import React from "react";
import Menu from "../svg/menu.svg";
import Gmail from "../svg/gmail.svg";
import Chat from "../svg/chat.svg";
import Spaces from "../svg/personas.svg";
import Meet from "../svg/camera.svg";

export default function NavBar({ setHovers, children }) {
  const handleHover = () => {
    setHovers([true]);
  };

  return (
    <div style={{ backgroundColor: "#eaf1fb" }} className="w-16">
      <nav className="w-full h-full">
        <div className="flex justify-center align-center">
          <Menu className="my-5" />
        </div>
        <div>
          <Elementos notificaciones="100" name="Mail">
            <Gmail className="h-5 p-5px mt-2" />
          </Elementos>

          <Elementos 
              notificaciones="" 
              name="Chat" 
              onMouseEnter={handleHover}
          >
            <Chat
              className="h-5 p-5px mt-2"
            />
          </Elementos>

          <Elementos notificaciones="" name="Spaces">
            <Spaces className="h-5 p-5px mt-2" />
          </Elementos>

          <Elementos notificaciones="" name="Meet">
            <Meet className="h-5 p-5px mt-2" />
          </Elementos>
        </div>
      </nav>
    </div>
  );
}

export const Elementos = ({ name, notificaciones, children , ...props}) => {
  return (
    <div 
      className="relative flex-1 justify-center align-center my-5 px-5"
      {...props}
    >
      <div className="-z-1 absolute top-0.5 right-1.5 bg-red-600 rounded-2xl px-1 text-white">
        <p className="text-xs">
          {Number(notificaciones) < 100 ? notificaciones : "99+"}
        </p>
      </div>
      <div className="h-full w-full flex justify-center align-center my-1">
        <div className="h-5 w-7 mt-2 absolute bg-transparent z-100 hover:scale-150 hover:bg-slate-300 rounded-full hover:animate-ping ease-in-out duration-300"></div>
        {children ?? ""}
      </div>
      <div className="m-0 p-0 w-full flex justify-center align-center">
        <p className="text-center text-xs m-0 p-0">{name}</p>
      </div>
    </div>
  );
};
