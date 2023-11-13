// Announcement.tsx
import React, { useContext } from 'react';
import Link from 'next/link';
import { UserContext } from '@/context/UserContext';

const Announcement = () => {
    const { user } = useContext(UserContext) || { user: { authorized: false } };

    return (
        <section className="bg-gradient-to-r from- px-4 py-3 text-white w-full">
            {user.authorized ? (
                // Si el usuario ha iniciado sesión, no mostrar el anuncio
                null
            ) : (
                // Si el usuario no ha iniciado sesión, mostrar el anuncio
                <p className="bg-gradient-to-r br-gradient-to-r from-black via-slate-600 to-slate-900 text-center text-sm font-medium">
                    ¿Quieres desbloquear todas las funciones de la pagina ?
                    <Link href="/auth/login" className="inline-block underline"> Inicia sesión!</Link>
                </p>
            )}
        </section>
    );
};

export default Announcement;

