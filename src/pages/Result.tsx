import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { calculateResult } from '../data/calculator';

const Result: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const answers = state?.answers as number[];
  
  if (!answers) return (
    <div className="flex flex-1 items-center justify-center min-h-screen">
      <button onClick={() => navigate('/')} className="text-gray-400">Error: Return</button>
    </div>
  );
  
  const res = calculateResult(answers);

  return (
    /* 核心布局：垂直水平全居中，背景纯白 */
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white px-6 py-12">
      
      {/* 结果容器：
          1. max-w-md 限制宽度，让两边留白更多（大气感的核心）
          2. px-10 内部间距，让文字不贴边 
      */}
      <div className="w-full max-w-md flex flex-col items-center text-center">
        
        {/* 顶部标题装饰 */}
        <div className="text-[12px] tracking-[0.4em] text-gray-300 mb-2 uppercase">
          Memory of Summer
        </div>
        <div className="text-[12px] tracking-[0.2em] text-gray-300 mb-12">
          记录的残骸
        </div>
        
        {/* 歌曲主标题：加大字间距 */}
        <h1 className="text-3xl font-bold mb-3 tracking-[0.2em] text-black">
          {res.nameJP}
        </h1>
        
        {/* 副标题 */}
        <p className="text-[14px] text-gray-400 mb-12 tracking-wide">
          —— {res.nameCN}
        </p>
        
        {/* 分隔线 */}
        <div className="h-[1px] w-8 bg-gray-100 mb-12"></div>
        
        {/* 感性分析：
            leading-relaxed 增加行高，
            text-left 或 text-justify 让长文本更规整 
        */}
        <div className="text-[15px] leading-relaxed text-gray-600 mb-12 text-justify px-2 font-light">
          {res.analysis}
        </div>
        
        {/* 歌词引用：使用引用样式 */}
        <div className="text-[13px] text-indigo-400/80 mb-20 tracking-wide leading-loose italic">
          “ {res.lyric} ”
        </div>
        
        {/* 重新测试按钮：复刻小程序风格的圆角按钮 */}
        <button 
          onClick={() => navigate('/')} 
          className="w-full py-4 px-8 border border-gray-200 rounded-[12px] 
                     text-[15px] text-black hover:bg-gray-50 active:scale-[0.98] transition-all"
        >
          重新记录 / RE-RECORD
        </button>

        {/* 底部脚注 */}
        <div className="mt-12 text-[11px] text-gray-200 tracking-[0.3em] uppercase">
          8.31 / Farewell
        </div>
      </div>
    </div>
  );
};

export default Result;