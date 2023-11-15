// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import divider from './divider.svg';
import dice from './dice.svg';

function App() {
  // const Members = [
  //   {
  //     name: 'ADVICE #117',
  //     title: 'It is easy to sit up and take notice, whats difficult is getting up and taking action.',
  //   },
  // ];

  // const currentPage = 1;
  // const postsPerPage = 3;

  // // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = Members.slice(indexOfFirstPost, indexOfLastPost);

  return (
    // bg-[#4e5d73]
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 md:mx-20">
      <div></div>
      <div>
        <div className="text-center mt-20 font-[Manrope] font-[800] bg-[#323a49] p-10 rounded-xl">
          <h1 className="text-[#52ffa8] text-[14px]">ADVICE #117</h1>
          <q className="text-[#cee3e9] text-[20px] mt-10">
            It is easy to sit up and take notice, what's difficult is getting up
            and taking action.
          </q>
          <img src={divider} alt="logo" className="mx-auto mt-8" />
        </div>
        <div className="flex justify-center items-center">
          <div>
            <button className="bg-[#52ffa8] p-4 rounded-full mt-[-20px]">
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
