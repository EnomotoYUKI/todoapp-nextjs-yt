import { Task } from "@/pages/types";
import React from "react";
import { todo } from 'node:test';

interface TodoProps {	
	todo: Task;
}

const Todo = ({ todo }: TodoProps) => {
	return (
    (
      <ul className="space-y-3">
        <li
          key={todo.id}
          className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
        >
          <span>{todo.text}</span>
          <div>
            <button className="text-green-500 mr-3">Edit</button>
            <button className="text-red-500">Delete</button>
          </div>
        </li>
      </ul>
    )
  );
};

export default Todo;
