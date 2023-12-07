"use client";

import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [tasks, setTasks] = useState([]);

  const submitList = (e) => {
    e.preventDefault();

    const allTasks = [...tasks, { title, desc }];

    setTasks(allTasks);
    console.log(allTasks);

    setTitle("");
    setDesc("");
  };

  let renderTask = <h1>No task are available</h1>;

  if (tasks.length > 0) {
    renderTask = tasks.map((t, i) => {
      return (
        <li className="flex items-center jutsify-between">
          <div className="flex items-center justify-between w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl">{t.desc}</h6>
          </div>
          <button className="bg-red-800 text-white px-6 py-4">Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white text-4xl font-bold text-center p-4 ">
        Todo List
      </h1>

      <form onSubmit={submitList}>
        <input
          type="text"
          className="border-2 border-zinc-800 p-2 text-lg m-4"
          placeholder="Enter the title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          className="border-2 border-zinc-800 p-2 text-lg m-4"
          placeholder="Enter the description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button className="px-6 py-2 bg-black text-white rounded-md cursor-pointer">
          Add Task
        </button>
      </form>

      <div className="bg-slate-500 text-white p-6">
        <ul>
          <li>{renderTask}</li>
        </ul>
      </div>
    </>
  );
};

export default page;
