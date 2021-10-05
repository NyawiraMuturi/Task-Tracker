import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState(
    [
        { 
            id: 1,
            title: 'Do dishes',
            day: 'Monday',
            reminder:true,  
        },
        {
            id: 2,
            title: 'Eat food',
            day: 'Monday',
            reminder:true, 
        },
        {
            id: 3,
            title: 'Go to the gym',
            day: 'Monday',
            reminder:false, 
        }
    ]
)

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
