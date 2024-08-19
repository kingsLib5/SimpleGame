import React, { useState, useRef } from 'react';

function Guessnumber() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const randomNumber = useRef(Math.floor(Math.random() * 101)); // Random number between 0-100

  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);

    if (isNaN(userGuess)) {
      setMessage('Please enter a valid number!');
      return;
    }

    if (userGuess === randomNumber.current) {
      setMessage('You Win!');
      // Generate a new random number after the correct guess
      randomNumber.current = Math.floor(Math.random() * 101);
      setGuess(''); // Clear the input after a correct guess
    } else if (userGuess > randomNumber.current) {
      setMessage('Too high! Try again.');
    } else {
      setMessage('Too low! Try again.');
    }
  };

  return (
    <>
      <div className="h-screen grid bg-[white] items-center justify-items-center">
        <div className="bg-blue-600 flex flex-col h-[60%] w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] items-center justify-center gap-10 p-6 rounded-md">
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-2xl sm:text-3xl text-white font-semibold">Guess A Number</h1>
            </div>
            <div>
              <h3 className="text-white text-center text-base sm:text-lg">Guess a number from 0-100</h3>
            </div>
          </div>
          <div className="w-full">
            <input
              type="number"
              placeholder="Guess A Number"
              className="w-full py-2 px-4 rounded border border-gray-300"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div>
              <p className="text-green-300 font-medium text-center">{message}</p>
            </div>
            <div>
              <button
                className="bg-green-500 hover:bg-green-700 text-white py-2 px-6 rounded transition duration-300"
                onClick={handleGuess}
              >
                Guess
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Guessnumber;
