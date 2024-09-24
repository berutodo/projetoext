import Link from "next/link";
import logo from "@/app/public/logo.png"
import Image from "next/image";

export default function Header(){
    return(
    <header className="flex items-center justify-around gap-40 p-4">
        <Link href="/"><Image src={logo} width={80} height={80} /></Link>
        <div className="flex text-lg gap-10">
        <Link className="hover:underline" href="#horarios">Horarios</Link>
        <Link className="hover:underline" href="#sobre">Sobre</Link>
        </div>
        
    </header>
        )
}