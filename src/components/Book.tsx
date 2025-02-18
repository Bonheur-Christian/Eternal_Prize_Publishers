import Image from "next/image";
import Link from "next/link";

export default function Books() {
  const Book = [
    {
      book: "/images/pathway.jpg",
      BookName: "Pathway",
      author: "Jimmy MUYANGO",
      price: "$20",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      book: "/images/pathway.jpg",
      BookName: "Pathway",
      author: "Jimmy MUYANGO",
      price: "$20",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      book: "/images/pathway.jpg",
      BookName: "Pathway",
      author: "Jimmy MUYANGO",
      price: "$20",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      book: "/images/pathway.jpg",
      BookName: "Pathway",
      author: "Jimmy MUYANGO",
      price: "$20",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      book: "/images/pathway.jpg",
      BookName: "Pathway",
      author: "Jimmy MUYANGO",
      price: "$20",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      book: "/images/pathway.jpg",
      BookName: "Pathway",
      author: "Jimmy MUYANGO",
      price: "$20",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-12 ml-6">
      {Book.map((book, index) => (
        <div
          key={index}
          className="rounded-xl hover:-translate-y-5 duration-700"
        >
          <Image src={book.book} alt={book.BookName} width={350} height={600} />
          <div className="py-5">
              <Link href="" className="text-lg font-bold text-gray-700">{book.BookName}</Link>
              <p className="text-lg text-gray-500 cursor-pointer">{book.author}</p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-gray-700">{book.price}</p>
                <div className="flex items-center gap-2">
                  <p>{book.rating}</p>
                  <p className="text-sm text-gray-300">902 reviews</p>
                </div>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
}
