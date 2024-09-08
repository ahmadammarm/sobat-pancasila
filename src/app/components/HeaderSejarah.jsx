import React from 'react';

const HeaderSejarah = (props) => {
    return (
        <div>
            <div className="relative w-full h-[500px] md:h-[400px] lg:h-[500px] overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-full h-full parallax"
                    style={{ backgroundImage: `url(${props.bgImage})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-80"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                        <div className='mb-10 bg-white p-3 rounded-lg'>
                            <a
                                href={props.href}
                                className=" text-yellow-900 text-lg font-bold transition-all ease-in-out duration-200 font-serif mr-2"
                            >
                                {props.link}
                            </a>
                            <span className='text-black font-serif font-bold text-lg'>
                                /  {props.subtitle}
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
                            {props.title}
                        </h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSejarah;
