import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex justify-center items-center h-screen m-0 text-gray-800 bg-gradient-to-br from-green-500 to-white font-inter">
      <div className="bg-white p-5 rounded-xl shadow-lg w-100 text-center transition-transform duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
        <h1 className="text-2xl mb-5 text-gray-700">React To-Do List</h1>
        <div className="flex gap-3 mb-5">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 p-3 border-2 border-gray-300 rounded-lg text-lg transition duration-300 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={addTask}
            className="bg-green-600 text-white border-none px-4 py-2 rounded-lg cursor-pointer text-lg transition duration-300 hover:bg-green-700 hover:scale-105 active:scale-100"
          >
            Add
          </button>
        </div>
        <ul className="list-none p-0 mt-5 animate-fadeIn">
          {tasks.map((task, index) => (
            <>
              {!task.completed ? (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-200 p-3 rounded-lg mt-2 cursor-pointer transition-transform duration-300 hover:bg-gray-300 hover:translate-x-1"
                >
                  <span onClick={() => toggleTask(index)}>{task.text}</span>
                  <button
                    onClick={() => deleteTask(index)}
                    className="bg-none border-none text-red-500 cursor-pointer text-xl transition duration-300 hover:text-red-400"
                  >
                    ❌
                  </button>
                </li>
              ) : (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-200 p-3 rounded-lg mt-2 cursor-pointer transition-transform duration-300 hover:bg-gray-300 hover:translate-x-1 completed text-gray-500 line-through"
                >
                  <span onClick={() => toggleTask(index)}>{task.text}</span>
                  <button
                    onClick={() => deleteTask(index)}
                    className="bg-none border-none text-red-500 cursor-pointer text-xl transition duration-300 hover:text-red-400"
                  >
                    ❌
                  </button>
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
