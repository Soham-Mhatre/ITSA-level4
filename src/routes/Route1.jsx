import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const islands = [
  {
    id: 1,
    name: "Foosha Village",
    questions: [
      {
        id: "foosha1",
        question: "Who gave Luffy his straw hat?",
        options: ["Gol D. Roger", "Shanks", "Garp", "Ace"],
        correctAnswer: "Shanks"
      },
      {
        id: "foosha2",
        question: "What did Luffy eat that gave him his powers?",
        options: ["Mera Mera no Mi", "Gomu Gomu no Mi", "Hito Hito no Mi", "Yami Yami no Mi"],
        correctAnswer: "Gomu Gomu no Mi"
      }
    ]
  },
  {
    id: 2,
    name: "Shells Town",
    questions: [
      {
        id: "shells1",
        question: "Who was the Marine captain controlling Shells Town?",
        options: ["Morgan", "Smoker", "Hina", "Kuro"],
        correctAnswer: "Morgan"
      },
      {
        id: "shells2",
        question: "How long was Zoro tied up without food?",
        options: ["3 days", "9 days", "2 weeks", "1 month"],
        correctAnswer: "9 days"
      }
    ]
  },
  {
    id: 3,
    name: "Orange Town",
    questions: [
      {
        id: "orange1",
        question: "Who was the clown pirate that Luffy fought in Orange Town?",
        options: ["Buggy", "Alvida", "Kuro", "Don Krieg"],
        correctAnswer: "Buggy"
      },
      {
        id: "orange2",
        question: "What was the name of Nami's special attack using her staff?",
        options: ["Thunderbolt Tempo", "Mirage Tempo", "Cyclone Tempo", "Clima-Tact"],
        correctAnswer: "Clima-Tact"
      }
    ]
  },
  {
    id: 4,
    name: "Syrup Village",
    questions: [
      {
        id: "syrup1",
        question: "Who joined the Straw Hat crew in Syrup Village?",
        options: ["Nami", "Zoro", "Usopp", "Sanji"],
        correctAnswer: "Usopp"
      },
      {
        id: "syrup2",
        question: "What was the name of Usopp's pirate crew in his village?",
        options: ["Usopp Pirates", "Veggie Pirates", "Syrup Bandits", "Little Pirates"],
        correctAnswer: "Usopp Pirates"
      }
    ]
  },
  {
    id: 5,
    name: "Baratie",
    questions: [
      {
        id: "baratie1",
        question: "Who was the head chef at the Baratie?",
        options: ["Sanji", "Zeff", "Patty", "Carne"],
        correctAnswer: "Zeff"
      },
      {
        id: "baratie2",
        question: "Which pirate attacked the Baratie?",
        options: ["Arlong", "Buggy", "Don Krieg", "Kuro"],
        correctAnswer: "Don Krieg"
      }
    ]
  }
];

const Route1 = () => {
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
      <h2 className="text-xl mb-2">Route 1</h2>
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-300 transform -translate-y-1/2"></div>
        <div className="flex justify-between items-center relative z-10">
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

export default Route1;