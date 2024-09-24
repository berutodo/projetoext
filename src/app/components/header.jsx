import Link from "next/link";
import logo from "@/app/logo.png"
import Image from "next/image";

export default function Header(){
    return(
    <header className="mb-4 flex items-center justify-around gap-40 p-4 border-2 border-black">
        <Link href="/"><Image src={logo} width={80} height={80} /></Link>
        <Link href="sobre">Sobre</Link>
    </header>
        )
}