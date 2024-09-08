"use client"

import React, { useRef, useEffect } from 'react';
import './image.css';
import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react';

const ImageSlider = () => {
  const slideRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  useEffect(() => {
    const nextButton = nextRef.current;
    const prevButton = prevRef.current;

    const handleNextClick = () => {
      let items = slideRef.current.querySelectorAll('.item');
      slideRef.current.appendChild(items[0]);
      slideRef.current.style.transition = "transform 0.5s ease-in-out";
    };

    const handlePrevClick = () => {
      let items = slideRef.current.querySelectorAll('.item');
      slideRef.current.prepend(items[items.length - 1]);
      slideRef.current.style.transition = "transform 0.5s ease-in-out";
    };

    nextButton.addEventListener('click', handleNextClick);
    prevButton.addEventListener('click', handlePrevClick);

    return () => {
      nextButton.removeEventListener('click', handleNextClick);
      prevButton.removeEventListener('click', handlePrevClick);
    };
  }, []);

  return (
    <div className="container">
      <div className="slide" ref={slideRef}>
        <div className="item" style={{ backgroundImage: 'url(/agama/islam.jpg)' }}>
          <div className="content">
            <div className="name">Islam</div>
            <div className="des">
                Agama Islam adalah agama yang dianut oleh umat Islam. Islam adalah agama monotheisme yang mengimani Allah sebagai Tuhan tunggal dan Muhammad sebagai nabi terakhir.
            </div>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(/agama/kristen.jpg)' }}>
          <div className="content">
            <div className="name">Kristen</div>
            <div className="des">
            Agama Kristen adalah sebuah kepercayaan yang berdasar pada ajaran, hidup, sengsara, wafat dan kebangkitan Yesus Kristus atau Isa Almasih. Agama ini meyakini Yesus Kristus adalah Tuhan dan Mesias, juru selamat bagi seluruh umat manusia, yang menebus manusia dari dosa.
            </div>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(/agama/katolik.jpeg)' }}>
          <div className="content">
            <div className="name">Katolik</div>
            <div className="des">
                Agama Katolik adalah agama yang sama dengan agama Kristen, hanya saja terdapat perbedaan pada aspek kepercayaan, praktik keagamaan, dan struktur gerejawinya.
            </div>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(/agama/hindu.jpg)' }}>
          <div className="content">
            <div className="name">Hindu</div>
            <div className="des">
            Agama Hindu dapat didefinisikan sebagai kumpulan agama, budaya, dan filsafat India kuno . Agama ini dicirikan oleh kepercayaan pada reinkarnasi serta pada dewa atau entitas tertinggi yang disebut Brahman yang memiliki banyak manifestasi sebagai berbagai dewa.
            </div>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(/agama/buddha.webp)' }}>
          <div className="content">
            <div className="name">Buddha</div>
            <div className="des">
                Agama Buddha adalah agama yang tidak mengakui adanya dewa atau tuhan tertinggi. Sebaliknya, mereka berfokus pada pencapaian pencerahan—kondisi kedamaian dan kebijaksanaan batin
            </div>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(/agama/konghucu.png)' }}>
          <div className="content">
            <div className="name">Konghuchu</div>
            <div className="des">
            Agama Konghucu selalu mengupayakan dalam menegakkan akan keselarasan sosial, moralitas, dan kualitas kepemimpinan. Agama Konghucu memilki prinsip-prinsip yang terdiri dari ajaran akan kemanusiaan, ketertiban sosial, penghormatan kepada leluhur, kepatuhan terhadap otoritas, dan praktik kebajikan yang diajarkan oleh Nabi Kongzi.
            </div>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(/agama/kejawen.jpeg)' }}>
          <div className="content">
            <div className="name">Kepercayaan Lainnya</div>
            <div className="des">
                Kepercayaan Lainnya adalah agama yang tidak tergolong dalam agama-agama besar di Indonesia. Kepercayaan ini memiliki kepercayaan dan ajaran yang berbeda-beda.
            </div>
          </div>
        </div>
      </div>

      <div className="button">
        <button className="prev" ref={prevRef}></button>
        <button className="next" ref={nextRef}></button>
      </div>
    </div>
  );
};

export default ImageSlider;
