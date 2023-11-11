import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import FirstContent from "./Components/FirstContent";

function App() {
  return (
    <>
      <div className="h-screen w-screen p-0 m-0">
        <div className='bg-[url("https://sxcontent9668.azureedge.us/cms-assets/assets/mission_launches_3575_Desktop_f4868ac3c6.jpg")] h-screen w-screen bg-cover'>
          <Header />
          <FirstContent />
        </div>
      </div>
    </>
  );
}

export default App;
