import Link from 'next/link'
import React from 'react'

export default function Announcement() {
    return (
        <section className="bg-gradient-to-r from- px-4 py-3 text-white">
            <p className="bg-gradient-to-r br-gradient-to-r from-black via-slate-600 to-slate-900 text-center text-sm font-medium">
                ¿Quieres desbloquear todas las funciones de la pagina ?
                <Link href="#" className="inline-block underline">Inicia sesión!</Link>
            </p>
        </section>
    )
}
