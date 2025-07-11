import React from 'react';

const Card = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Avatar in center */}
      <img
        src="/avatar.jpg"
        alt="Avatar"
        className="w-40 h-40 rounded-full object-cover z-10"
      />

      {/* Rotating circular container for tech icons */}
      <div className="absolute w-72 h-72 flex items-center justify-center animate-spin-slow">
        <div className="w-full h-full border-2 border-dashed rounded-full border-gray-400/50 flex items-center justify-center">
          {/* React */}
          <button className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow">
            <img src="/svg/react.svg" alt="React" className="w-8 h-8" />
          </button>

          {/* Next.js */}
          <button className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow">
            <img src="/svg/next.svg" alt="Next.js" className="w-8 h-8" />
          </button>

          {/* FastAPI */}
          <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 p-2 bg-white rounded-full shadow">
            <img src="/svg/FastAPI.svg" alt="FastAPI" className="w-8 h-8" />
          </button>

          {/* PostgreSQL */}
          <button className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow">
            <img src="/svg/javaScript.svg" alt="PostgreSQL" className="w-8 h-8" />
          </button>

          {/* Tailwind CSS */}
          <button className="absolute top-10 left-1/4 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow">
            <img src="/svg/tailwindcss.svg" alt="Tailwind CSS" className="w-8 h-8" />
          </button>

          {/* TypeScript */}
          <button className="absolute top-10 right-1/4 transform translate-x-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow">
            <img src="/svg/nodejs.svg" alt="TypeScript" className="w-8 h-8" />
          </button>

          {/* Vercel */}
          <button className="absolute bottom-10 left-1/4 transform -translate-x-1/2 translate-y-1/2 p-2 bg-white rounded-full shadow">
            <img src="/svg/Python.svg" alt="Vercel" className="w-8 h-8" />
          </button>

          {/* GitHub */}
          <button className="absolute bottom-10 right-1/4 transform translate-x-1/2 translate-y-1/2 p-2 bg-white rounded-full shadow">
            <img src="/svg/typeScript.svg" alt="GitHub" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
