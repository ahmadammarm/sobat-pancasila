import React from 'react';

const About = () => {

    return (
        <div id='about' className='min-h-screen flex flex-col justify-center items-center p-5 py-20'>
            <div className='max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center'>
                
                {/* Image Content Start */}
                <div className='flex justify-center lg:w-1/2 p-4 mb-8 lg:mb-0'>
                    <img src="/about-1.jpg" alt="lorem" className='w-full h-auto lg:w-full lg:h-auto rounded-md object-cover border-4 border-yellow-500' />
                </div>
                {/* Image Content End */}
                
                {/* Content Start */}
                <div className='lg:w-1/2 text-center lg:text-left p-4'>
                    <h2 className='text-yellow-700 font-medium mb-4'>PELAJARI TENTANG KAMI</h2>
                    <h1 className='text-4xl font-bold text-slate-800 mb-6'>Platform untuk Mendukung Pembelajaran dalam Mendalami Wilayah NKRI Indonesia</h1>
                    <p className='text-gray-700 mb-6'>
                        <span className="font-bold text-yellow-800">Lentara</span> merupakan website yang menyediakan informasi seputar wilayah NKRI Indonesia. <span className="font-bold text-yellow-800">Lentara</span> berasal dari kalimat <span className="italic">'Learn About Nusantara'</span>. <span className="font-bold text-yellow-800">Lentara</span> menyediakan informasi seputar sejarah, peta, dan lainnya yang dapat membantu Anda dalam mendalami wilayah NKRI Indonesia.
                    </p>
                    <div className='flex items-center'>
                        <img src="/about-2.jpg" alt="lorem" className='w-30 h-24 rounded-md border-4 border-yellow-600 mr-4' />
                        <ul className='text-gray-700'>
                            <li className='mb-2'>✔ Peta Interaktif</li>
                            <li className='mb-2'>✔ Pembelajaran Sejarah Dilengkapi dengan Video</li>
                            <li className='mb-2'>✔ Suku</li>
                            <li className='mb-2'>✔ Karakteristik</li>
                        </ul>
                    </div>
                </div>
                {/* Content End */}
                
            </div>
        </div>
    );
}

export default About;
