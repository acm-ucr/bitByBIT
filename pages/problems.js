import ProblemDescription from "@/components/ProblemDescription";
import ProblemSolution from "@/components/ProblemSolution";
import ProblemStateToggle from "@/components/ProblemStateToggle";
import ProblemSubmission from "@/components/ProblemSubmission";
import React, { useState } from "react";

const Problems = () => {
  const [state, setState] = useState(0);

  return (
    <div className="pt-16">
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
      {state === 1 && <ProblemSolution />}
      {state === 2 && <ProblemSubmission />}
    </div>
  );
};

export default Problems;
