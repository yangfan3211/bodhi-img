import { useEffect, useState } from "react";
import { NextPage } from "next";
import { ImgShow } from "~~/components/ImgShow";

const ETHSpace: NextPage = () => {
  // State to store the array of images
  const [images, setImages] = useState([]);

  // Fetch images from your backend
  const fetchImages = async () => {
    try {
      const response = await fetch("https://bodhi-data.deno.dev/imgs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      // Assuming the data format matches what the ImgShow component expects
      const formattedImages = data.images.map(img => ({
        image: img.link,
        link: "https://bodhi.wtf/" + img.id_on_chain
      }));
      setImages(formattedImages);
    } catch (error) {
      console.error("Failed to fetch images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return <ImgShow images={images} />;
};

export default ETHSpace;
