import Link from "next/link";

export default function Header() {
    return (
        <section>
            <h1 className="flex items-center justify-center text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                <Link href="/" className="bg-gradient-to-r br-gradient-to-r from-black via-slate-600 to-slate-900 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                    TIENDA SHOPIX
                </Link>
            </h1>
            <p className="flex justify-center items-center mx-auto mt-4 max-w-xl sm:text-xl/relaxed">Descubre Tu Estilo!</p>
        </section>
    )
}