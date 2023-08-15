import { useState } from "react";

export const useFetchGift = ({ category }) => {
    const { image, setImages } = useState([]);
    const [isLoading, setisLoading] = useState( true );

    const getImages = async () => {
        const newImages = await getGifts(category);//llamada api
        setImages(newImages);
        setisLoading(false);

    }

    useEffect(() => {
        getImages();
    }, []);


    return {
        image,//es6  equivale a image:image
        isLoading
    };
}
const {images,isLoading} = useFetchGift(category);