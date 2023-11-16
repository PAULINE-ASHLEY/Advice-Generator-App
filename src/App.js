import { Component } from 'react';
import axios from 'axios';
import divider from './divider.svg';
import dice from './dice.svg';

class App extends Component {
  state = {
    advice: '',
    id: '',
  };

  componentDidMount() {
    this.allAdvices();
  }
  // Making a get request to pull the data from the API
  allAdvices = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((res) => {
        const { id, advice } = res.data.slip;
        this.setState({
          advice: advice,
          id: id,
        });
        console.log(res.data.slip);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { id, advice } = this.state;
    // className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 md:mx-20"
    return (
      <div className="flex flex-row">
        <div className="w-[20%]">
          {/* This is the first column on the grid */}
        </div>
        {/* This is the second column on the grid */}
        <div className="w-[60%]">
          <div className="text-center mt-20 font-[Manrope] font-[800] bg-[#323a49] p-10 rounded-xl">
            {/* The advice id will be displayed here */}
            <h1 className="text-[#52ffa8] text-[14px]">ADVICE #{id}</h1>
            {/* The advice text will be displayed here */}
            <q className="text-[#cee3e9] text-[20px] mt-10">{advice}</q>
            <img src={divider} alt="logo" className="mx-auto mt-8" />
          </div>
          {/* This is the third column on the grid and where the button is located */}
          <div className="flex justify-center items-center">
            {/* When the button is clicked the random advices are fetched */}
            <div>
              <button
                className="bg-[#52ffa8] p-4 rounded-full mt-[-20px]"
                onClick={this.allAdvices}
              >
                <img src={dice} alt="logo" width={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[20%]"></div>
      </div>
    );
  }
}

export default App;
