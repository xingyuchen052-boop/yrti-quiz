import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';

const Quiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleSelect = (idx: number) => {
    const nextAns = [...ans, idx];
    if (step < questions.length - 1) {
      setAns(nextAns);
      setStep(step + 1);
    } else {
      navigate('/result', { state: { answers: nextAns } });
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
      setAns(ans.slice(0, -1));
    }
  };

  const progress = ((step + 1) / questions.length) * 100;

  return (
    /* 垂直居中对齐，背景纯白 */
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white relative px-6">
      
      {/* 1. 细长紫色进度条 */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gray-50 z-50">
        <div 
          className="h-full bg-[#6366f1] transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }} 
        />
      </div>

      {/* 2. 题号：右上角对齐 */}
      <div className="w-full max-w-lg absolute top-12 px-6 flex justify-end">
        <span className="text-[14px] text-gray-300 font-light">
          {step + 1}/{questions.length}
        </span>
      </div>

      {/* 3. 主体内容：居左对齐文字，全宽按键 */}
      <div className="w-full max-w-lg flex flex-col items-stretch">
        
        {/* 题目文本：纯黑，加粗感 */}
        <div className="text-[20px] font-medium mb-12 text-left text-slate-800 leading-relaxed px-2">
          {questions[step].text}
        </div>

        {/* 按钮组：垂直排列，gap-y-4 拉开间距 */}
        <div className="flex flex-col gap-y-4 w-full mb-12">
          {questions[step].options.map((opt, i) => (
            <button 
              key={i} 
              onClick={() => handleSelect(i)} 
              className="w-full py-5 px-6 transition-all duration-200 
                         bg-white hover:bg-gray-50
                         border border-gray-100 rounded-[12px] 
                         active:scale-[0.99] active:bg-gray-100 flex items-center justify-center shadow-sm"
            >
              <span className="text-[16px] font-normal text-slate-700">
                {opt.text}
              </span>
            </button>
          ))}
        </div>

        {/* 4. 返回按钮：灰色链接风格 */}
        {step > 0 && (
          <button 
            onClick={handleBack}
            className="flex items-center justify-center gap-1 text-[14px] text-gray-400 hover:text-gray-600 transition-colors py-4 w-full"
          >
            ← 上一题
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;