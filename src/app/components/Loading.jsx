import React from 'react';
import './loading.css';
import Image from 'next/image';

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <Image src="/logo.png" alt="logo" width={300} height={400} />
                <div className="loader"></div>
            </div>
        </div>
    );
};

export default Loading;
