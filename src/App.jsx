import React from "react"
import { useState }  from "react"
import NavBar from "./components/navbar"
import Actions from "./components/actions"
import Search from "./components/search"
import Main from "./components/main"
import Chat from "./svg/chat.svg"
import Mas from "./svg/mas.svg"

function App() {
  const [hoversChat , setHoversChat] = useState(false)
  const [hoversSpaces , setHoversSpaces] = useState(false)

  return (
    <div style={{backgroundColor: "#f6f8fc"}} className="flex min-w-100vw h-screen">
      <NavBar 
        setHoversChat={setHoversChat} 
        setHoversSpaces={setHoversSpaces}
      />
      <div className="flex w-screen">
        <Actions />
        <div className="flex w-full">
          <Search />
          <Main />
        </div>
      </div>
      {hoversChat && 
        <NewChat 
          setHovers={setHoversChat} 
          setControHover={setHoversSpaces} 
      />}
      {hoversSpaces && 
        <Spaces 
          setHovers={setHoversSpaces}  
          setControHover={setHoversChat} 
      />}
    </div>
  )
}

export default App

export const NewChat = ({setHovers , setControHover}) => {
  return (
    <span 
      className="absolute top-20 left-20 h-4/5 w-60 bg-white rounded-lg shadow-md shadow-gray-400"
      onMouseEnter={e => {e.preventDefault() ;setHovers(true) ; setControHover(false)}}
      onMouseLeave={e => {e.preventDefault() ;setHovers(false) ; setControHover(false) }}
    >
      <div className="p-6 bg-slate-100 rounded-t-lg flex justify-center items-center">
        <Chat className="mx-3 h-5" />
        <p className="w-full">
          Nuevo chat
        </p>
      </div>
      <div className="h-5/6 w-full flex flex-col justify-center items-center p-4">
        <Chat className="my-2 h-10 m-0 p-0" /> 
        <p className="w-full text-center">No hay conversaciones</p>
        <a className="my-1 w-[100px] text-center text-sky-700 text-sm" href="#">Buscar un chat</a>
      </div>
    </span>
  ) 
};

export const Spaces = ({setHovers , setControHover}) => {
  return (
    <span 
      className="absolute top-20 left-20 h-4/5 w-60 bg-white rounded-lg shadow-md shadow-gray-400"
      onMouseEnter={e => {e.preventDefault() ;setHovers(true) ; setControHover(false)}}
      onMouseLeave={e => {e.preventDefault() ;setHovers(false) ; setControHover(false)}}
    >
      <div className="p-6 bg-slate-100 rounded-t-lg flex justify-center items-center">
        <Mas className="mx-3 h-6" />
        <p className="w-full">
          Espacio nuevo
        </p>
      </div>
      <div className="h-5/6 w-full flex flex-col justify-center items-center p-4">
        <p className="w-full text-center">Aún no hay espacios</p>
        <a className="my-1 w-[100%] text-center text-sky-700 text-sm" href="#">Encuentra un espacio al que unirte</a>
      </div>
    </span>
  ) 
};