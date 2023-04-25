import Filters from "@/components/Filters";
import Problems from "@/components/Problems";
import Progress from "@/components/Progress";
import Search from "@/components/Search";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const dashboard = () => {
  const [filtered, setFiltered] = useState([]);
  return (
    <div className="bg-code-black pt-16 min-h-screen">
      <Row className="bg-code-black w-screen mb-0">
        <Col xl={4} className="flex gap-4 justify-center items-center flex-col">
          <Filters filtered={filtered} setFiltered={setFiltered}/>
          <Progress
            variablesProgress={5}
            arraysProgress={6}
            conditionalsProgress={8}
            loopsProgress={7}
            functionsProgress={5}
            total={15}
          />
        </Col>
        <Col xl={8} className="flex justify-center items-left flex-col">
          <Search />
          <Problems filtered={filtered}/>
        </Col>
      </Row>
    </div>
  );
};

export default dashboard;
