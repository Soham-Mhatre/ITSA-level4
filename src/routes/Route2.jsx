import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const islands = [
  {
    id: 1,
    name: "Whiskey Peak",
    questions: [
      {
        id: "whiskey1",
        question: "What organization did Miss Wednesday and Mr. 9 belong to?",
        options: ["Baroque Works", "CP9", "Revolutionary Army", "Marines"],
        correctAnswer: "Baroque Works"
      }
    ]
  },
  {
    id: 2,
    name: "Little Garden",
    questions: [
      {
        id: "garden1",
        question: "What type of dinosaurs were Dorry and Brogy?",
        options: ["T-Rex", "Triceratops", "Giants", "Brachiosaurus"],
        correctAnswer: "Giants"
      }
    ]
  },
  {
    id: 3,
    name: "Drum Island",
    questions: [
      {
        id: "drum1",
        question: "Who joined the Straw Hat crew on Drum Island?",
        options: ["Robin", "Franky", "Chopper", "Brook"],
        correctAnswer: "Chopper"
      }
    ]
  },
  {
    id: 4,
    name: "Alabasta",
    questions: [
      {
        id: "alabasta1",
        question: "Who was the princess of Alabasta?",
        options: ["Vivi", "Rebecca", "Shirahoshi", "Hancock"],
        correctAnswer: "Vivi"
      }
    ]
  }
];

const Route2 = () => {
  const [currentIsland, setCurrentIsland] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCorrect, setIsCorrect] = useState(false);
  const [isLocked, setIsLocked] = useState(false); // Added isLocked state

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allCorrect = islands[currentIsland].questions.every(q => answers[q.id] === q.correctAnswer);
    setIsCorrect(allCorrect);
    if (allCorrect && currentIsland < islands.length - 1) {
      setCurrentIsland(currentIsland + 1);
      setAnswers({});
      setIsCorrect(false);
    }
  };

  return (
    <div>
      <Link to="/" className="text-blue-500 mb-4 inline-block fall-back">
        &larr; Back to Map
      </Link>
      <h2 className="text-xl mb-2 font-bold">Route 2</h2>
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-300 transform -translate-y-1/2"></div>
        <div className="flex justify-between text-white items-center relative z-10">
          {islands.map((island, index) => (
            <div
              key={island.id}
              className={`flex flex-col items-center cursor-pointer ${
                index <= currentIsland ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                index === currentIsland
                  ? 'bg-yellow-300'
                  : index < currentIsland
                  ? 'bg-green-300'
                  : 'bg-gray-300'
              }`}>
                <MapPin size={24} className="text-gray-700" />
              </div>
              <span className="text-sm mt-1">{island.name}</span>
            </div>
          ))}
        </div>
      </div>
      {currentIsland < islands.length && (
        <div className="mt-8 p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-semibold mb-2">{islands[currentIsland].name}</h3>
          <form onSubmit={handleSubmit}>
            {islands[currentIsland].questions.map(q => (
              <div key={q.id} className="mb-4">
                <p className="font-medium">{q.question}</p>
                {q.options.map(option => (
                  <label key={option} className="block mt-2">
                    <input
                      type="radio"
                      name={q.id}
                      value={option}
                      onChange={() => handleAnswerChange(q.id, option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            ))}
            <button 
              className="custom-button" 
              type="submit" 
              disabled={isLocked} // Correctly references isLocked
            >
              <span className="button_top">Submit</span>
            </button>
          </form>
          {isCorrect && currentIsland < islands.length - 1 && (
            <p className="mt-4 text-green-500">Correct! You can move to the next island.</p>
          )}
          {isCorrect && currentIsland === islands.length - 1 && (
            <p className="mt-4 text-green-500">Congratulations! You've completed Route 2!</p> 
          )}
          {!isCorrect && <p className="mt-4 text-red-500">.</p>}
        </div>
      )}
    </div>
  );
};

export default Route2;
