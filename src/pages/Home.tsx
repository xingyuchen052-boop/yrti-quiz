import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-white">
      {/* 淡淡的天蓝色光晕，模拟窗外的天空 */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-sky-100 rounded-full blur-[120px]" />
      
      <div className="z-10 text-center px-4">
        <h1 className="text-6xl font-extralight tracking-[0.8em] mb-4 text-slate-800 translate-x-[0.4em]">
          YRTI
        </h1>
        <p className="text-[11px] mb-24 text-slate-400 tracking-[0.5em] uppercase font-light">
          That's why I gave up on music / 记忆是蓝色的
        </p>
        
        <button 
          onClick={() => navigate('/quiz')}
          className="group relative px-20 py-5 border border-slate-200 hover:border-slate-800 transition-all duration-1000 overflow-hidden"
        >
          <span className="relative z-10 text-[11px] tracking-[0.8em] text-slate-500 group-hover:text-white transition-colors duration-500">
            开始记录
          </span>
          {/* 墨水填充效果 */}
          <div className="absolute inset-0 bg-slate-800 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />
        </button>
      </div>

      <footer className="fixed bottom-12 text-[10px] text-slate-300 tracking-[0.6em] uppercase">
        "Elma, I'm writing this for you"
      </footer>
    </div>
  );
};

export default Home;