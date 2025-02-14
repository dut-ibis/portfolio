import { useState } from "react";

const LiarBox = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="w-1/3 flex justify-center">
      <div 
        className={`text-md font-pacifico bg-red-800/70 p-8 text-white rounded-lg cursor-pointer transition-all duration-300 transform ${
            revealed ? "" : "hover:scale-95"
        }`}
        onClick={() => setRevealed(true)}
      >
        <h1 className="mb-5">
          {revealed ? "Liar! Liar!" : "Click if you said no"}
        </h1>
      </div>
    </div>
  );
};

export default LiarBox;