import Footer from "../components/footer";
import Header from "../components/header";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="w-4/5 mx-auto text-xl gap-3 text-inherit flex flex-col flex-grow border-2 border-black p-4">
                <h1 className="self-center text-4xl mb-4">Sobre nós</h1>
                <h2 className="text-3xl mb-2">Igreja Evangélica Fonte de Água Viva é o Senhor.</h2>
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
            <Footer />
        </div>
    );
}
