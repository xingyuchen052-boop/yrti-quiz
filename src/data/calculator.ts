import { questions } from './questions';
import { songResults } from './songs';

export const calculateResult = (answers: number[]) => {
  const scores: Record<string, number> = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  answers.forEach((answerIndex, qIndex) => {
    const type = questions[qIndex]?.options[answerIndex]?.type;
    if (type) scores[type]++;
  });

  const getDim = (a: string, b: string) => (scores[a] >= scores[b] ? a : b);

  const code = [
    getDim('E', 'I'),
    getDim('S', 'N'),
    getDim('T', 'F'),
    getDim('J', 'P')
  ].join('');

  return { code, ...songResults[code as keyof typeof songResults] };
};