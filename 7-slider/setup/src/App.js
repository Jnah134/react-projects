import React, { useState, useEffect } from 'react';
import data from './data';
import Title from './title';
import Persons from './persons/person';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let lastIndex = people.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <Title />
      <Persons people={people} index={index} setIndex={setIndex} />
    </section>
  );
}

export default App;
