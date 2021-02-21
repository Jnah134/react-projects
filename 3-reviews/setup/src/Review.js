import React, { useState } from 'react';
import people from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Review = () => {
  const [index, setindex] = useState(0);
  const { image, name, job, text } = people[index];

  // My code
  // const prevPerson = () => {
  //   if (index < people.length) {
  //     setindex(index - 1);
  //   }

  //   if (index === 0) {
  //     setindex(3);
  //   }
  // };

  // const nextPerson = () => {
  //   setindex(index + 1);
  //   if (index >= 3) {
  //     setindex(0);
  //   }
  // };

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setindex((index) => {
      const newPerson = index + 1;
      return checkNumber(newPerson);
    });
  };

  const prevPerson = () => {
    setindex((index) => {
      const newPerson = index - 1;
      return checkNumber(newPerson);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomPerson === index) {
      return index - 1;
    }
    setindex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <BsChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <BsChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
