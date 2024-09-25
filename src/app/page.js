"use client"
import Image from "next/image";
import jesus from "@/app/public/jesus2.jpg"
import { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import familia from "@/app/public/familia.jpg"
import vitoria from "@/app/public/vitoria2.jpg"
import doutrina from "@/app/public/biblia.jpg"
import { createClient } from '@supabase/supabase-js'


export default function Home() {

  const supabaseLogin = "https://rntbzvmnnrestpcjnpew.supabase.co"  
  const supabase = createClient(supabaseLogin, `${process.env.SUPABASE_KEY}`)
  const fetchProgramacao = async () => {
    const { data, error } = await supabase.from('programacao').select();
    if (error) {
        console.log("Erro ao buscar programação:", error);
    } else {
        setProgramacao(data);
        console.log("Programação:", data);
    }
};
  useEffect(() => {
    fetchProgramacao();
  }, [])
  
  const [horarios, setHorarios] = useState([{name: "Culto da vitória", horario: 19, type: vitoria},{name: "Culto de doutrina", horario: 19, type: doutrina}, {name: "Culto da familia", horario: 16, type: familia}]);
  const [programacao, setProgramacao] = useState([{name: "Escola Biblica Dominical", horario: 16, dia: "Domingo"}])
  return (
    <div>
      <Header/>
      <Image className="w-full max-h-[600px]" src={jesus} />
      <div id="horarios" className="flex flex-col mb-20 mt-10">
        <h1 className="self-center text-3xl p-2">Horario de cultos</h1>
        <div className="flex lg:flex-row gap-16 flex-col text-xl self-center text-center p-4 justify-center">
          {horarios.map(e => <div key={e.name} className="flex flex-col justify-between gap-4">
            <h1>{e.name}</h1>
            <Image className="max-w-36 max-h-36 self-center rounded-full" src={e.type} />
            <h3>{e.horario}h</h3>
          </div>)}
        </div>
      </div>
      <div id="horarios" className="flex flex-col mb-40">
        <h1 className="self-center text-3xl p-2">Programações da igreja</h1>
        <div className="flex lg:flex-row gap-10 flex-col text-xl self-center text-center p-4 justify-center">
          {programacao.map(e => <div key={e.name} className="flex flex-col gap-4">
            <h1>{e.name}</h1>
            <h3>{e.dia} às {e.horario}h</h3>
          </div>)}
        </div>
      </div>
      <div id="sobre" className="w-4/5 mx-auto text-xl gap-3 text-justify flex flex-col flex-grow p-8">
                <h1 className="self-center text-4xl mb-4">Sobre nós</h1>
                <h2 className="text-3xl mb-2 self-center">Igreja Evangélica Fonte de Água Viva é o Senhor.</h2>
                <p className="mb-4">
                    É uma organização religiosa sem fins lucrativos com a finalidade:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Pregar o evangelho de nosso Senhor e Salvador Jesus Cristo a todos os seres humanos;</li>
                    <li>
                        Ter comunhão entre todos os congregados e levar aos membros e frequentadores o estudo da
                        Bíblia Sagrada, para viverem de forma sadia, moral e eticamente de acordo com os
                        ensinamentos bíblicos.
                    </li>
                    <li>
                        Praticar a assistência aos pobres, enfermos, órfãos, viúvas, idosos, enfim, a todos quanto
                        estiverem necessitados e socialmente desamparados.
                    </li>
                    <li>Expandir o evangelho de nosso Senhor Jesus Cristo em todo território nacional e exterior.</li>
                </ul>
            </div>
      <div className="p-10 flex flex-col items-center gap-6 text-3xl">
        <h1>Onde nos encontrar</h1>
        <iframe className="w-4/5 mx-auto h-96 lg-h-[500px] border-none" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d553.2127722426536!2d-38.51840541009436!3d-3.8113573938164986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74f2882476cb9%3A0x933edb03d31a6ffc!2sIgreja%20Assembl%C3%A9ia%20De%20Deus%20Fonte%20de%20%C3%81gua%20Viva%20%C3%A9%20o%20Senhor!5e0!3m2!1spt-BR!2sbr!4v1726777674748!5m2!1spt-BR!2sbr"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Footer />
    </div>
  );
}
