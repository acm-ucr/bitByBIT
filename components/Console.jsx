import React, { useContext } from "react";
// import { RxCaretUp } from "react-icons/rx";
import { useState } from "react";
import axios from "axios";
import CodeContext from "../components/CodeContext";
import Results from "../components/Results";
import TestCases from "../components/TestCases";

const ConsoleStateToggle = ({ state, onUpdateState }) => {
  return (
    <>
      <div className="flex flex-row gap-4 font-normal">
        <div
          className={`${
            state === 0
              ? "underline underline-offset-4 cursor-pointer"
              : "cursor-pointer"
          }`}
          onClick={() => onUpdateState(0)}
        >
          Testcase
        </div>
        <div
          className={`${
            state === 1
              ? "underline underline-offset-4 cursor-pointer"
              : "cursor-pointer"
          }`}
          onClick={() => onUpdateState(1)}
        >
          Result
        </div>
      </div>
    </>
  );
};

const Console = ({ problem }) => {
  const [state, setState] = useState(0);
  const { language, code } = useContext(CodeContext);

  const [isRunning, setIsRunning] = useState(false);
  const [running, setRunning] = useState(false);
  const [isRunningCalled, setIsRunningCalled] = useState(false);

  if (isRunning && !isRunningCalled) {
    setRunning(true);
    setIsRunningCalled(true);
  }

  const handleExecute = async () => {
    setIsRunning(true);
    axios
      .post("/api/execute", {
        source_code: code.toString("base64"),
        language_id: language.id,
        stdin: null,
      })
      .then((response) => {
        console.log("BHELLO", response.data);
      })
      .finally(() => {
        setIsRunning(false);
      });
  };

  const handleSubmit = async () => {
    setIsRunning(true);
    axios
      .post("/api/execute", {
        source_code: code.toString("base64"),
        language_id: language.id,
        stdin: null,
      })
      .then((response) => {
        console.log("BHELLO", response.data);
      })
      .finally(() => {
        setState(1);
        setIsRunning(false);
      });
  };

  return (
    <div className="flex flex-col p-2.5 h-full text-code-white font-readex bg-code-darkerpurple">
      <ConsoleStateToggle state={state} onUpdateState={setState} />
      {state === 0 && (
        <div className="h-full">
          <TestCases problem={problem} />
        </div>
      )}
      {state === 1 && (
        <div className="h-full">
          <Results running={running} />
        </div>
      )}
      <div className="flex flex-row justify-end">
        <div className="flex text-code-black gap-2">
          <button
            disabled={isRunning}
            onClick={handleExecute}
            className={`rounded-full bg-code-white font-bold px-3 ${
              isRunning ? `cursor-not-allowed` : `cursor-pointer`
            }`}
          >
            Run
          </button>
          <button
            disabled={isRunning}
            className={`rounded-full bg-code-lime font-bold px-3 ${
              isRunning ? `cursor-not-allowed` : `cursor-pointer`
            }`}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Console;
