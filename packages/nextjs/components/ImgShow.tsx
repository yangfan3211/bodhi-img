import Link from "next/link";

// Update the component to accept props
export function ImgShow({ images }) {
  return (
    <>
      <main className="grid grid-cols-3 gap-2 p-4 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
        {images.map((img, index) => (
          <div key={index} className="relative group overflow-hidden rounded-md">
            <Link 
              className="absolute inset-0 z-10" 
              href={img.link}
              target="_blank"  // Opens the link in a new tab
              rel="noopener noreferrer"  // Security measure for opening links in a new tab
            >
              <span className="sr-only">View</span>
            </Link>
            <img
              alt={`Image ${index + 1}`}
              className="aspect-square object-cover w-full h-full"
              height={400}
              src={img.image}
              width={400}
            />
          </div>
        ))}
      </main>
    </>
  );
}
