import Header from "../components/header";

export default function About(){
    return(
        <div>
        <Header/>
        <h1>Sobre nós</h1>
        <div className="w-4/5 mx-auto text-lg text-inherit flex flex-col content-center border-2 border-black">
        <h1 className="text-2xl">Igreja Evangélica Fonte de Água Viva é o Senhor.</h1>
        É uma organização religiosa sem fins lucrativos com a finalidade:<br></br>
        - Pregar o evangelho de nosso Senhor e Salvador Jesus Cristo a todos os seres humanos; <br></br>
        - Ter comunhão entre todos os congregados e levar aos membros e frequentadores o estudo da bíblia sagrada, para viverem de forma sadia, moral e eticamente de acordo com os ensinamentos bíblicos.<br></br>
        - Praticar a assistência aos pobres, enfermos, órfãos, viúvas, idosos, enfim, a todos quanto estiverem necessitados e socialmente desamparados.<br></br>
        - Expandir o evangelho de nosso Senhor Jesus Cristo em todo território nacional e exterior.
        </div>
        </div>
    )
}