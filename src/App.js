// import React, { useState, useEffect } from 'react';
import React from 'react';
// import axios from 'axios';
import divider from './divider.svg';
import dice from './dice.svg';

function App() {
  const Advices = [
    {
      id: '117',
      advice:
        'It is easy to sit up and take notice, whats difficult is getting up and taking action.',
    },
    {
      id: '91',
      advice:
        'It is easy to sit up and take notice, whats difficult is getting up and taking action.',
    },
    {
      id: '11',
      advice:
        'It is easy to sit up and take notice, whats difficult is getting up and taking action.',
    },
  ];

  const currentPage = 1;
  const postsPerPage = 1;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = Advices.slice(indexOfFirstPost, indexOfLastPost);

  return (
    // bg-[#4e5d73]
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 md:mx-20">
      <div></div>
      <div>
        {currentPosts.map((advice, index) => (
          <div key={index}>
            <div className="text-center mt-20 font-[Manrope] font-[800] bg-[#323a49] p-10 rounded-xl">
              <h1 className="text-[#52ffa8] text-[14px]">
                ADVICE #{advice.id}
              </h1>
              <q className="text-[#cee3e9] text-[22px] mt-10">
                {advice.advice}
              </q>
              <img src={divider} alt="logo" className="mx-auto mt-8" />
            </div>
          </div>
        ))}
        <div className="flex justify-center items-center">
          <div>
            <button className="bg-[#52ffa8] p-4 rounded-full mt-[-20px] hover:bg-white">
              <img src={dice} alt="logo" width={20} />
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
