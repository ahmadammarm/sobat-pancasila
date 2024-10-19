import React from 'react';

const About = () => {

    return (
        <div id='about' className='min-h-screen flex flex-col justify-center items-center p-5 py-20'>
            <div className='max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center'>
                
                {/* Image Content Start */}
                <div className='flex justify-center lg:w-1/2 p-4 mb-8 lg:mb-0'>
                    <img src="/banner1.webp" alt="lorem" className='w-full h-auto lg:w-full lg:h-auto rounded-md object-cover border-4 border-yellow-500' />
                </div>
                {/* Image Content End */}
                
                {/* Content Start */}
                <div className='lg:w-1/2 text-center lg:text-left p-4'>
                    <h2 className='text-yellow-700 font-medium mb-4'>PELAJARI TENTANG KAMI</h2>
                    <h1 className='text-4xl font-bold text-slate-800 mb-6' style={{ fontFamily: 'Pacifico, cursive' }}>Platform untuk Mendukung Pembelajaran dalam Mendalami Wilayah Indonesia</h1>
                    <p className='text-gray-700 mb-6 font-serif'>
                        <span className="font-bold text-yellow-800">Lentara</span> merupakan website yang menyediakan informasi seputar wilayah NKRI Indonesia. <span className="font-bold text-yellow-800">Lentara</span> berasal dari kalimat <span className="italic">&quot;Learn About Nusantara&quot;</span>. <span className="font-bold text-yellow-800">Lentara</span> menyediakan informasi seputar sejarah, peta, dan lainnya yang dapat membantu Anda dalam mendalami wilayah NKRI Indonesia.
                    </p>
                    <div className='flex flex-col md:flex-row'>
                        <img src="/banner2.jpg" alt="lorem" className='w-full h-full md:w-36 md:h-24 rounded-md border-4 border-yellow-600 mr-4' />
                        <ul className='text-gray-700 items-start mt-5 md:mt-0'>
                            <li className='mb-2'>✔ Peta dengan Linimasa</li>
                            <li className='mb-2'>✔ Pembelajaran Sejarah Dilengkapi dengan Video</li>
                            <li className='mb-2'>✔ Penjelasan Konflik dan Sejarah dengan Flipbook</li>
                            <li className='mb-2'>✔ Pembelajaran Kebudayaan di Indonesia</li>
                        </ul>
                    </div>
                </div>
                {/* Content End */}
                
            </div>
        </div>
    );
}

export default About;
