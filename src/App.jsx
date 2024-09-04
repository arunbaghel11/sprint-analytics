// import logo from './logo.svg';
import './App.css';
import './index.css';
import { useState } from 'react';
import { AiFillAccountBook } from "react-icons/ai";
import Commit  from './component/commit';
import  Analytics  from './component/analytics';
import  Upgrade  from './component/upgrade';

function App() {
  const [active, setActive] = useState('commit');

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <button
        onClick={()=>setActive('commit')}
        className='text-2xl  px-4 bg-red-600 '
        >
          commit
          </button>
          <button
        onClick={()=>setActive('analytics')}
        className='text-2xl  px-4 bg-red-600 '
        >
          analytics
          </button>
          <button
        onClick={()=>setActive('upgrade')}
        className='text-2xl  px-4 bg-red-600 '
        >
          upgrade
          </button>

      </div>
      <div className="flex flex-col items-center justify-center w-full ">
      {active === 'commit' && <Commit />}
      {active === 'analytics' && <Analytics />}
      {active === 'upgrade' && <Upgrade />}

      </div>
    </div>
  );
}

export default App;
