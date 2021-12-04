import React, { useState } from 'react';
import './style.css';
import Card from './Card';
import Data from './data';

export default function App() {
  const [data, setData] = useState(Data);

  return (
    <div>
      <h1>Flash Cards</h1>
      {data.map((word) => (
        <Card
          key={word.word}
          word={word.word}
          meaning={word.meaning}
          usage={word.usage}
        />
      ))}
    </div>
  );
}
