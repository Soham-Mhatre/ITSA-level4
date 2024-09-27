<<<<<<< HEAD
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const islands = [
  {
    id: 1,
    name: "Long Ring Long Land",
    questions: [
      {
        id: "long1",
        question: "What game did the Straw Hats play against Foxy's crew?",
        options: ["Davy Back Fight", "Poker", "Chess", "Capture the Flag"],
        correctAnswer: "Davy Back Fight"
      },
      {
        id: "long2",
        question: "Who was the admiral that appeared at the end of this arc?",
        options: ["Aokiji", "Kizaru", "Akainu", "Fujitora"],
        correctAnswer: "Aokiji"
      }
    ]
  },
  {
    id: 2,
    name: "Water 7",
    questions: [
      {
        id: "water1",
        question: "Who was the mayor of Water 7?",
        options: ["Iceburg", "Franky", "Tom", "Paulie"],
        correctAnswer: "Iceburg"
      },
      {
        id: "water2",
        question: "What was the name of Franky's gang?",
        options: ["Franky Family", "Water 7 Mob", "Galley-La", "Tom's Workers"],
        correctAnswer: "Franky Family"
      }
    ]
  },
  {
    id: 3,
    name: "Enies Lobby",
    questions: [
      {
        id: "enies1",
        question: "Who did Robin surrender herself to protect?",
        options: ["Luffy", "The Straw Hats", "Water 7", "Ohara"],
        correctAnswer: "The Straw Hats"
      },
      {
        id: "enies2",
        question: "What was Luffy's new technique to fight CP9?",
        options: ["Gear Second", "Gear Third", "Gear Fourth", "Haki"],
        correctAnswer: "Gear Second"
      }
    ]
  },
  {
    id: 4,
    name: "Post-Enies Lobby",
    questions: [
      {
        id: "post1",
        question: "Who joined the Straw Hat crew after Enies Lobby?",
        options: ["Robin", "Franky", "Brook", "Jinbe"],
        correctAnswer: "Franky"
      },
      {
        id: "post2",
        question: "What happened to the Going Merry?",
        options: ["It was sold", "It was stolen", "It was given a Viking funeral", "It was repaired"],
        correctAnswer: "It was given a Viking funeral"
      }
    ]
  }
];

const Route4 = () => {
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
      <h2 className="text-xl text-white mb-2">Route 4</h2>
      <div className="relative">
        <div className="absolute bg  top-1/2 text-white left-0 right-0 h-1 bg-blue-300 transform -translate-y-1/2"></div>
        <div className="flex justify-between text-white   items-center relative z-10">
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

export default Route4;
=======
import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import devilSmile from '../components/devilsmile.png'; // Add your image here

const islands = [
  {
    id: 1,
    name: "Sabaody Archipelago",
    questions: [
      {
        id: "sabaody1",
        question: 'What iconic landmark in Mumbai is known for its stunning Gothic architecture and serves as a major railway terminus?',
        options: ['Gateway of India', 'Chhatrapati Shivaji Maharaj Terminus (CST)', 'Marine Drive', 'Bandra-Worli Sea Link'],
        correctAnswer: 'Chhatrapati Shivaji Maharaj Terminus (CST)',
      }
    ]
  },
  {
    id: 2,
    name: "Amazon Lily",
    questions: [
      {
        id: "amazon1",
        question: 'Which famous sea-facing promenade in Mumbai is known for its stunning views and is a popular spot for evening strolls?',
        options: ['Juhu Beach', 'Marine Drive', 'Worli Seaface', 'Versova Beach'],
        correctAnswer: 'Marine Drive',
      }
    ]
  },
  {
    id: 3,
    name: "Impel Down",
    questions: [
      {
        id: "impel1",
        question: 'In the context of web development, which of the following is the most popular framework for building user interfaces?',
        options: ['Django', 'Flask', 'React', 'Spring'],
        correctAnswer: 'React',
      }
    ]
  },
  {
    id: 4,
    name: "Marineford",
    questions: [
      {
        id: "marine1",
        question: 'What is the primary function of a router in a computer network?',
        options: ['To store data', 'To connect different networks', 'To process requests', 'To secure the network'],
        correctAnswer: 'To connect different networks',
      }
    ]
  }
];

const Route4 = () => {
  const [currentIsland, setCurrentIsland] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes countdown

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLocked) return;

    const allCorrect = islands[currentIsland].questions.every(
      q => answers[q.id] === q.correctAnswer
    );
    setIsCorrect(allCorrect);

    if (allCorrect && currentIsland < islands.length - 1) {
      setCurrentIsland(currentIsland + 1);
      setAnswers({});
      setIsCorrect(false);
    } else if (!allCorrect) {
      setWrongAttempts(prev => prev + 1);
      if (wrongAttempts + 1 >= 3) {
        setIsLocked(true);
        setTimeLeft(180); // Start the 3 minutes countdown
      }
    }
  };

  useEffect(() => {
    let timer;
    if (isLocked) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsLocked(false);
            setWrongAttempts(0);
            setTimeLeft(180); // Reset time
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isLocked]);

  return (
    <div className="overflow-hidden h-screen">
    <Link to="/" className="text-blue-500 mb-4 inline-block fall-back">
      &larr; Back to Map
      </Link>
      <h2 className="text-xl mb-2 font-bold">Route 4</h2>
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
            <button className="custom-button" type="submit" disabled={isLocked}>
              <span className="button_top">Submit</span>
            </button>
          </form>
          {isCorrect && currentIsland < islands.length - 1 && (
            <p className="mt-4 text-green-500">Correct! You can move to the next island.</p>
          )}
          {isCorrect && currentIsland === islands.length - 1 && (
            <p className="mt-4 text-green-500">Congratulations! You've completed Route 4!</p>
          )}
          {!isCorrect && !isLocked && <p className="mt-4 text-red-500"></p>}
        </div>
      )}
      {isLocked && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <img src={devilSmile} alt="Devil Smile" className="w-25 h-27 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-red-600">You’ve put 3 wrong inputs!</h2>
            <p className="text-gray-700">Now wait for:</p>
            <p className="text-2xl font-bold text-blue-500">{`${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Route4;
>>>>>>> cd50d2635961f06d808150733a94051ca707c1bb
