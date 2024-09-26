import React from 'react';
import { Link } from 'react-router-dom';

const routes = [
  { id: 'route1', name: 'Route 1', color: 'purple' },
  { id: 'route2', name: 'Route 2', color: 'blue' },
  { id: 'route3', name: 'Route 3', color: 'green' },
  { id: 'route4', name: 'Route 4', color: 'red' },
  { id: 'route5', name: 'Route 5', color: 'yellow' },
];

const OnePieceMap = () => {
  return (
    <div>
      <h2 className="text-xl mb-2">Select a Route:</h2>
      <div className="flex flex-wrap gap-2">
        {routes.map(route => (
          <Link
            key={route.id}
            to={`/${route.id}`}
            className={`px-4 py-2 rounded text-white ${
              route.color === 'purple' ? 'bg-purple-500' :
              route.color === 'blue' ? 'bg-blue-500' :
              route.color === 'green' ? 'bg-green-500' :
              route.color === 'red' ? 'bg-red-500' :
              'bg-yellow-500'
            }`}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OnePieceMap;