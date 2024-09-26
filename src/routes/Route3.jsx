import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const islands = [
  {
    id: 1,
    name: "Jaya",
    questions: [
      {
        id: "jaya1",
        question: "Who did Luffy and Zoro meet in the bar in Mock Town?",
        options: ["Blackbeard", "Whitebeard", "Shanks", "Kaido"],
        correctAnswer: "Blackbeard"
      },
      {
        id: "jaya2",
        question: "What was Montblanc Cricket searching for?",
        options: ["One Piece", "Poneglyphs", "City of Gold", "Ancient Weapon"],
        correctAnswer: "City of Gold"
      }
    ]
  },
  {
    id: 2,
    name: "Skypiea",
    questions: [
      {
        id: "skypiea1",
        question: "Who was the 'God' of Skypiea?",
        options: ["Gan Fall", "Wyper", "Enel", "Conis"],
        correctAnswer: "Enel"
      },
      {
        id: "skypiea2",
        question: "What was Enel's Devil Fruit power?",
        options: ["Lightning", "Wind", "Fire", "Ice"],
        correctAnswer: "Lightning"
      }
    ]
  },
  {
    id: 3,
    name: "Upper Yard",
    questions: [
      {
        id: "upper1",
        question: "What was the name of the giant snake in Upper Yard?",
        options: ["Nola", "Kashigami", "Jormungandr", "Orochi"],
        correctAnswer: "Nola"
      },
      {
        id: "upper2",
        question: "What material was the City of Gold made of?",
        options: ["Gold", "Silver", "Bronze", "Platinum"],
        correctAnswer: "Gold"
      }
    ]
  },
  {
    id: 4,
    name: "Angel Beach",
    questions: [
      {
        id: "angel1",
        question: "What animal could Pierre, Gan Fall's steed, transform into?",
        options: ["Eagle", "Horse", "Pegasus", "Dragon"],
        correctAnswer: "Pegasus"
      },
      {
        id: "angel2",
        question: "What was the name of the Cloud Fox that the Straw Hats encountered?",
        options: ["Suu", "Coo", "Merry", "Gonbe"],
        correctAnswer: "Suu"
      }
    ]
  }
];

const Route3 = () => {
  const [currentIsland, setCurrentIsland] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCorrect, setIsCorrect] = useState(false);

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
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Map</Link>
      <h2 className="text-xl text-white mb-2">Route 3</h2>
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
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
          {isCorrect && currentIsland < islands.length - 1 && (
            <p className="mt-4 text-green-500">Correct! You can move to the next island.</p>
          )}
          {isCorrect && currentIsland === islands.length - 1 && (
            <p className="mt-4 text-green-500">Congratulations! You've completed Route 1!</p>
          )}
          {!isCorrect && <p className="mt-4 text-red-500">Some answers are incorrect. Try again!</p>}
        </div>
      )}
    </div>
  );
};

export default Route3;