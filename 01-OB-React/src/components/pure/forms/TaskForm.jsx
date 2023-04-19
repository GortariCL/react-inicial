import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";
import { useState } from "react";

export const TaskForm = ({ add, length }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  const addTask = (e) => {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  };

  const options = [
    {
      value: LEVELS.NORMAL,
      label: "Normal",
    },
    {
      value: LEVELS.URGENT,
      label: "Urgent",
    },
    {
      value: LEVELS.BLOCKING,
      label: "Blocking",
    },
  ];

  const selectOptions = options.map((option) => (
    <option
      key={option.value}
      value={option.value}
      className={option.className}
    >
      {option.label}
    </option>
  ));

  return (
    <form
      onSubmit={addTask}
      className="d-flex justify-content-center align-items-center mb-4"
    >
      <div className="form-outline flex-fill">
        <input
          placeholder="Task name"
          ref={nameRef}
          id="inputName"
          type="text"
          className="form-control form-control-lg"
          required
          autoFocus
        />

        <input
          placeholder="Task description"
          ref={descriptionRef}
          id="inputDescription"
          type="text"
          className="form-control form-control-lg"
          required
        />
        <label htmlFor="selectLevel" className="sr-only">
          Priority
        </label>
        <select
          className="form-select form-select-lg mb-2"
          ref={levelRef}
          defaultValue={options[0].label}
          id="selectLevel"
        >
          {selectOptions}
        </select>
        <button type="submit" className="btn btn-success btn-lg ms-2">
          {length > 0 ? "Add New Task" : "Create Yout First Task"}
        </button>
      </div>
    </form>
  );
};

TaskForm.protoTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};
