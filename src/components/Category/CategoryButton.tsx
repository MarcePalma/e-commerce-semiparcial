import Link from "next/link";

export default function CategoryButtons() {
  const categories = [
    {
      name: "Women's clothing",
      path: "women's clothing",
    },
    {
      name: "Men's clothing",
      path: "men's clothing",
    },
    {
      name: "Electronics",
      path: "electronics",
    },
    {
      name: "Jewelery",
      path: "jewelery",
    },
  ];

  return (
    <ul className="min-w-full px-6 flex gap-2 overflow-x-auto">
      {categories.map((category, index) => (
        <li key={index}>
          <Link href={`/store/categories/${category.path}`} className="bg-[#e7e7e7] p-4 whitespace-nowrap rounded-lg overflow-hidden text-black">
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
