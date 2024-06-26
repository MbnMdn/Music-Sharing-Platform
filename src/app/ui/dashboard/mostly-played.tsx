import React from 'react';
import MusicPic from './assets/music-pic.jpg'

export default function MostlyPlayed() {

    const bands = [
        {
            id: 1,
            name: 'Ice Nine Kills',
            subscribers: '432k subscribers',
            image: 'url-to-ice-nine-kills-image',
        },
        {
            id: 2,
            name: 'Bloodywood',
            subscribers: '31k subscribers',
            image: 'url-to-bloodywood-image',
        },
        {
            id: 3,
            name: 'Bad Omens',
            subscribers: '183k subscribers',
            image: 'url-to-bad-omens-image',
        },
        {
            id: 4,
            name: 'Lorna Shore',
            subscribers: '108k subscribers',
            image: 'url-to-lorna-shore-image',
        },
        {
            id: 5,
            name: 'Annisokay',
            subscribers: '79k subscribers',
            image: 'url-to-annisokay-image',
        },
    ];

    return (
        <div className="bg-black text-white min-h-screen grid  items-center py-10">
            {bands.map((band) => (
                // eslint-disable-next-line react/jsx-key
                // <div className="grid grid-cols-3 gap-4">
                //     <div key={band.id} className="flex items-center w-80 mb-6">
                //         <div className="text-6xl font-bold mr-4">{band.id}</div>
                //         <div className="flex items-center space-x-4">
                //             <img src={MusicPic.src} alt={band.name} className="w-16 h-16 object-cover rounded"/>
                //             <div>
                //                 <div className="text-lg font-semibold">{band.name}</div>
                //                 <div className="text-sm">{band.subscribers}</div>
                //             </div>
                //         </div>
                //     </div>
                // </div>
                <div className="grid gap-4 grid-cols-[200px_auto_auto]">
                    <div className=" text-6xl font-bold mr-4">{band.id}</div>
                    <div className="">
                        <img src={MusicPic.src} alt={band.name} className="w-16 h-16 object-cover rounded"/>
                    </div>
                    <div className="">
                        <div className="text-lg font-semibold">{band.name}</div>
                        <div className="text-sm">{band.subscribers}</div>
                    </div>



                </div>

            ))}


            {/*<div className="flex mb-4">*/}
            {/*    <div className="w-1/3 bg-gray-400 h-12">1</div>*/}
            {/*    <div className="w-1/3 bg-gray-500 h-12">2</div>*/}
            {/*    <div className="w-1/3 bg-gray-400 h-12">3</div>*/}
            {/*</div>*/}



            {/*<div className="grid grid-cols-3 gap-4">*/}
            {/*    <div>01</div>*/}
            {/*    <div>02</div>*/}
            {/*    <div>03</div>*/}
            {/*    <div>04</div>*/}
            {/*    <div>05</div>*/}
            {/*    <div>06</div>*/}
            {/*    <div>07</div>*/}
            {/*    <div>08</div>*/}
            {/*    <div>09</div>*/}
            {/*    <div>01</div>*/}
            {/*    <div>02</div>*/}
            {/*    <div>03</div>*/}
            {/*    <div>04</div>*/}
            {/*    <div>05</div>*/}
            {/*    <div>06</div>*/}

            {/*</div>*/}
        </div>
    );
}









