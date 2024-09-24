"use client"
import Image from "next/image";
import jesus from "@/app/jesus2.jpg"
import { useState } from "react";
import Link from "next/link";
import Header from "./components/header";


export default function Home() {

  const [horarios, setHorarios] = useState([{name: "Culto da vitória", horario: 19},{name: "Culto de doutrina", horario: 19}, {name: "Culto da familia", horario: 16}]);

  return (
    <div>
      <Header/>
      <Image className="w-full max-h-[600px]" src={jesus} />
      <div className="flex flex-col">
        <h1 className="self-center text-xl p-2">Horario de cultos</h1>
        <div className="flex flex-col self-center text-center justify-center">
          {horarios.map(e => <div>
            <h1>{e.name}</h1>
            <h3>{e.horario}h</h3>
          </div>)}
        </div>
      </div>
      <div className="p-10">
        <h1>Onde nos encontrar</h1>
        <iframe className="w-4/5 mx-auto h-96 lg-h-[500px] border-none" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d553.2127722426536!2d-38.51840541009436!3d-3.8113573938164986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74f2882476cb9%3A0x933edb03d31a6ffc!2sIgreja%20Assembl%C3%A9ia%20De%20Deus%20Fonte%20de%20%C3%81gua%20Viva%20%C3%A9%20o%20Senhor!5e0!3m2!1spt-BR!2sbr!4v1726777674748!5m2!1spt-BR!2sbr"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <footer className="p-4 bg-black">
      </footer>
    </div>
  );
}
