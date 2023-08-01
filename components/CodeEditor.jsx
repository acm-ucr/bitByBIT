import React from "react";
import CodeContext from "./CodeContext";
import { useContext, useCallback, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
// import { javascript } from "@codemirror/lang-javascript";
// import { python } from "@codemirror/lang-python";
import { aura } from "@uiw/codemirror-theme-aura";

const CodeEditor = ({ problem }) => {
  const { code, setCode } = useContext(CodeContext);

  useEffect(() => {
    if (problem) {
      /* When a problem is selected, set the code editor content to the function header */
      problem.functionHeader =
        "def " + problem.title.toLowerCase().replaceAll(" ", "_") + "(nums): ";
      setCode(problem.functionHeader);
    }
  }, [problem, setCode]);
  const onChange = useCallback(
    (value) => {
      setCode(value);
    },
    [setCode]
  );

  return (
    <div className="bg-code-darkerpurple h-full">
      <CodeMirror
        extensions={[cpp()]}
        // extensions={[python()]}
        // extensions={[javascript({ jsx: true })]}
        value={code}
        onChange={onChange}
        theme={aura}
      />
    </div>
  );
};

export default CodeEditor;
