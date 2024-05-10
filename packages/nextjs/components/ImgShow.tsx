import { useState } from "react";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";

// Update the component to accept props
export const ImgShow: React.FC<{ images: { link: string; image: string; category: string }[] }> = ({ images }) => {
  return (
    <>
      <main className="grid grid-cols-3 gap-2 p-4 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
        {images.map((img, index) => (
          <ImageShowItem key={index} image={img} />
        ))}
      </main>
    </>
  );
};

const ImageShowItem: React.FC<{ image: { link: string; image: string; category: string } }> = ({ image }) => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => setIsLiked(!isLiked);
  return (
    <div className="relative group overflow-hidden rounded-md">
      <div className="w-full h-[calc(100%-2rem)]">
        <Link
          className="absolute top w-full h-[calc(100%-2rem)] inset-0 z-10"
          href={image.link}
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security measure for opening links in a new tab
        >
          <span className="sr-only">View</span>
        </Link>
        <img
          alt={`Image`}
          className="aspect-square object-cover w-full h-full"
          height={400}
          src={image.image}
          width={400}
        />
      </div>

      <div className="px-2 h-8 w-full bg-sky-500 flex justify-between items-center">
        <div className="space-x-2">
          <div className="badge badge-outline">{image.category}</div>
        </div>
        <button onClick={toggleLike}>{isLiked ? <FaRegHeart /> : <FaHeart />}</button>
      </div>
    </div>
  );
};
