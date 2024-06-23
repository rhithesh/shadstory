"use client";
import Image from "next/image";

import { useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  const [open, setopen] = useState(false);
  const [openu, setopenu] = useState(false);

  const [cut, setcut] = useState("");

  const [todos, settodo] = useState([]);

  function submit() {
    settodo((a) => {
      var b = [...a, cut];

      return b;
    });

    setcut("");
    setopen(false);
  }

  function update() {
    settodo((e) => {
      const o = e.map((item, index) => (index === openu ? cut : item));
      return o;
    });
    setopenu(false);
  }

  function del(key) {
    settodo((prevTodos) => {
      const newTodos = prevTodos.filter((_, index) => index !== key);
      console.log(newTodos);
      return newTodos;
    });
  }
  return (
    <>
      <div className=" flex   w-screen h-[100vh]   justify-center  items-center  border border-black ">
        <AnimatedCursor />

        <div className=" basis-[20%]"></div>
        <div className="    w-[400px] h-[400px] border basis-[30%]  border-black  space-y-4">
          <h1 className=" mx-auto bg-blue-300 text-zinc-400 inline text-2xl ">
            {" "}
            Todos{" "}
          </h1>

          <div className=" h-[300px] overflow-y-scroll  flex flex-col ">
            {todos?.length != 0 ? (
              todos.map((e, index) => {
                return (
                  <>
                    <div className=" bg-blue-100 bordr border-black py-3 px-10 flex">
                      <button
                        className="  bg-red-700 ml-3 mr-1 hover:bg-red-800 "
                        onClick={(e) => {
                          del(index);
                        }}
                      >
                        {" "}
                        Delete
                      </button>
                      <button
                        className="   bg-green-700 mr-1 hover:bg-green-800   "
                        onClick={() => {
                          setopenu(index);
                          console.log(openu);
                        }}
                      >
                        {" "}
                        Update
                      </button>

                      <h1 className=" " key={index}>
                        Task: <span className=" underline "> {e} </span>
                      </h1>
                    </div>
                  </>
                );
              })
            ) : (
              <>
                <div className="  ">
                  <p className=" ">No Todos! Please Add</p>
                </div>
              </>
            )}
          </div>
          <button
            className=" px-4  rounded-sm border-2 border-black bg-gray-50"
            onClick={() => {
              setopen(!open);
            }}
          >
            Add
          </button>
        </div>
        <div className=" basis-[30%] w-[400px] h-[400px] border ">
          {open ? (
            <div className=" flex  items-end flex-col">
              <h3 className="  mx-auto"> Add a to-do</h3>
              <input
                className="  border border-gray-600 text-center mx-auto"
                value={cut}
                onChange={(e) => {
                  setcut(e.target.value);
                }}
              ></input>
              <button className="   mx-auto" onClick={submit}>
                submit!!
              </button>
            </div>
          ) : (
            <></>
          )}

          {typeof openu === "number" ? (
            <div className=" flex  items-end flex-col">
              <h3 className="  mx-auto">
                {" "}
                Update a to-do {"   "}
                {todos[openu]}
              </h3>
              <input
                className="  border border-gray-600 text-center mx-auto"
                value={cut}
                onChange={(e) => {
                  setcut(e.target.value);
                }}
              ></input>
              <button className="   mx-auto" onClick={update}>
                submit!!
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className=" basis-[20%]"></div>
      </div>
    </>
  );
}
