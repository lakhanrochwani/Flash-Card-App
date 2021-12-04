import React, { useState } from 'react';

const Card = ({ word, usage, meaning }) => {
  const [visible, setVisible] = useState(false);

  function handleChange() {
    setVisible(!visible);
  }

  return (
    <div className="flash-card" onClick={handleChange}>
      {!visible && <p>{word}</p>}
      {visible && (
        <div>
          <p>{meaning}</p>
          <p>{usage}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
