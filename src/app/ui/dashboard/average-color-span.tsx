import {useEffect, useState} from 'react';

// Assuming getAverageColor is an existing function that calculates the average color of an image
import {getAverageColor} from './get-average-color';

export default function AverageColorSpan({imageUrl}: { imageUrl: any }) {

    const [averageColor, setAverageColor] = useState('');

    useEffect(() => {
        const fetchAverageColor = async () => {
            if (imageUrl) {
                const color = await getAverageColor(imageUrl);
                // @ts-ignore
                setAverageColor(color);
            }
        };

        fetchAverageColor();
    }, [imageUrl]);

    return (
        <span
            className="absolute bottom-[50%] right-[-20%] h-60 w-60 rounded-full shadow-lg blur-3xl"
            style={{backgroundColor: averageColor}}
        ></span>
    );
};

