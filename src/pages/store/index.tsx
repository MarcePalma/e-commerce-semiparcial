import { Product } from "@/types/component.types";
import Productos from "@/components/Products/Productos";
import Header from "@/components/Header/Header";


export default function Page({ products }: { products: Product[] }) {

    return (
        <>
            <Header />
            <Productos />
        </>
    );
}

export async function getServerSideProps(context: any) {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    return {
        props: {
            products,
        },
    };
}

