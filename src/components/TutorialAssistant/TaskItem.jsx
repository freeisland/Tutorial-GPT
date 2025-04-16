import React from 'react';

const TaskItem = ({ task, isChecked, onToggle }) => {
  return (
    <li className="flex items-start p-2 rounded-md hover:bg-gray-100 transition-colors">
      <label className="flex items-center cursor-pointer w-full">
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={onToggle}
          className="mr-3 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className={`text-gray-800 ${isChecked ? 'line-through text-gray-500' : ''}`}>
          {task.text}
        </span>
      </label>
    </li>
  );
};

export default TaskItem; 