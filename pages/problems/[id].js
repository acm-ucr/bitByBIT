import ProblemDescription from "@/components/ProblemDescription";
import ProblemSolution from "@/components/ProblemSolution";
import ProblemStateToggle from "@/components/ProblemStateToggle";
import ProblemSubmission from "@/components/ProblemSubmission";
import CodeEditor from "@/components/CodeEditor";
import Console from "@/components/Console";

import { useState } from "react";

const Problems = () => {
  const [state, setState] = useState(0);

  return (
    <div className=" flex">
      <div className="w-1/2">
        <ProblemStateToggle state={state} onUpdateState={setState} />
        {state === 0 && (
          <ProblemDescription
            name="TEST"
            difficulty="HARD"
            tags={["arrays", "hashmap"]}
            description="TEST DESCRIPTION"
            example="TEST EXAMPLE"
            constraints={["constrain 1", "constrain 2"]}
          />
        )}
        {state === 1 && (
          <ProblemSolution
            entries={[
              {
                methodName: "TEST METHOD",
                description: "TEST DESCRIPTION",
                implementation: "TEST IMPLEMENTATION",
                timeComplexity: "TEST TIME COMPLEXITY",
                spaceComplexity: "TEST SPACE COMPLEXITY",
              },
            ]}
          />
        )}
        {state === 2 && <ProblemSubmission />}
      </div>
      <div className="w-1/2">
        <CodeEditor />
        <Console />
      </div>
    </div>
  );
};

export default Problems;
