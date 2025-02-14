import { useEffect, useState } from 'react';

const ValentinesMessage = () => {
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const text = [
        "MEELIA!",
        ".Happy Valentine's Day, my love! I'm so lucky to call you my girlfriend.",
        ".I love you so much!",
        ".Click to see some of my favorite photos of you...",
    ]

    let lineIndex = 0;
    let charIndex = 0;

    const interval = setInterval(() => {
        if (lineIndex < text.length) {

          if (charIndex < text[lineIndex].length - 1) {
            setMessage((prev) => prev + text[lineIndex][charIndex]);
            charIndex++;
          } else {
            setMessage((prev) => prev + ' \n ');
            lineIndex++;
            charIndex = 0;
          }
        } else {
          clearInterval(interval);
        }
      }, 70);
  
      return () => clearInterval(interval);
    }, []);
  
    const handleClick = () => {
        setIsFading(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 500);
    };
  
    if (!isVisible) return null;
  
    return (
      <div
        className={`fixed inset-0 bg-red-900 flex justify-center items-center text-white text-4xl font-bold 
            text-center p-8 cursor-pointer z-50 transition-opacity duration-500 ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
        onClick={handleClick}
      >
        <div className="whitespace-pre-line overflow-hidden h-92">
          <div className="leading-[5rem] animate-[scrollUp_10s_linear] font-yellowtail">{message}</div>
        </div>
      </div>
    );
  };

export default ValentinesMessage;