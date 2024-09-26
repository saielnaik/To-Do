import { useState } from 'react';
import './App.css';
import Tasks from './Tasks';

function App() {
  const d = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const formattedDate = d.toLocaleDateString('en-IN', options);
  
  const [task, setTask] = useState([]); 

  const getRandomBgColor = () => {
    const colors = [
      'bg-blue-300',
      'bg-green-300',
      'bg-red-300',
      'bg-yellow-300',
      'bg-purple-300',
      'bg-pink-300',       
      'bg-teal-300',       
      'bg-indigo-300',     
      'bg-orange-300',    
      'bg-gray-300',       
      'bg-emerald-300',   
      'bg-lime-300',      
      'bg-sky-300',       
      'bg-fuchsia-300',   
      'bg-rose-300',      
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const addTask = (event) => {
    event.preventDefault();

    const newTask = {
      title: event.target.title.value,
      description: event.target.description.value,
      bgColor: getRandomBgColor(),
    }
    
    if (newTask.title) { 
      setTask([...task, newTask]);
      event.target.title.value = ''; 
      event.target.description.value = ''; 
    }
  }

  return (
    <div>
      <div className="bg-slate-100 font-mono lg:ml-[10%] lg:mr-[10%] ml-[2%] mr-[2%] min-h-screen flex flex-col">
        <div className='p-[5%] flex-grow'>
          <h1 className="text-5xl font-semibold mb-4">Today's <span className="text-blue-500">Task</span></h1>
          <p className='text-slate-500 mb-10 text-2xl'>{formattedDate}</p>
          <form onSubmit={addTask}>
            <div className="lg:flex">
              <input placeholder='Title' type="text" name="title" className="block w-full p-2.5 rounded-lg mr-2 mt-2 mb-2 lg:mb-0" />
              <input placeholder='Description' type="text" name="description" className="block w-full p-2.5 rounded-lg mr-2 mt-2 mb-2 lg:mb-0" />
              <button className=" bg-blue-200 border border-blue-300 lg:w-[10%] w-[100%] p-2 flex justify-center items-center rounded-lg ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="blue" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          </form>
          <div className="flex flex-wrap mt-4">
            {task.map((value, i) => (
              <div key={i} className="w-full sm:w-1/2 md:w-1/3 p-2">
                <Tasks key={i} bgColor={value.bgColor} title={value.title} description={value.description} indexNumber={i} todo={task} setTask={setTask} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
