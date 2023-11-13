import { Product } from "@/types/component.types";
import Productos from "@/components/Products/Productos";


export default function Page({ products }: { products: Product[] }) {

    return (
        <>
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

