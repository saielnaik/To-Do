import React, { useState } from 'react';

export default function Tasks({ bgColor, title, description, indexNumber, todo, setTask }) {
  const [color, setColor] = useState(bgColor);

  const deleteTask = () => {
    let finalData = todo.filter((v, index) => index!==indexNumber);
    setTask(finalData);
  }

  const chColor = (colour) => {
    if(colour === color){
        setColor("bg-red-500");
    }else{
        setColor(colour);
    }
    
  }

  return (
    <div className={`p-4 rounded-lg shadow-md ${color} `} onClick={() => chColor("bg-green-500")}>
        <div className='flex justify-between items-start'>
            <div>
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
            {/* <div className="">
                <div>
                <button onClick={() => setColor("bg-green-500")}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="size-6 bg-green-500 rounded-xl p-1"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                </button>
                </div>
                <button onClick={() => setColor("bg-red-500")}> 
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="size-6 bg-red-500 rounded-xl p-1"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </button>
            </div> */}
      </div>
      <button className='w-full bg-red-400 rounded-lg text-center mt-2 p-1 hover:bg-red-500 text-white' onClick={deleteTask}>Delete</button>
    </div>
  );
}
