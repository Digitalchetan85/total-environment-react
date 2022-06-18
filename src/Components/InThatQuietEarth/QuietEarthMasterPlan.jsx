import { Tab } from "bootstrap";
import React, { useState } from "react";
import { Tabs } from "react-bootstrap";
import QuietEarth3BHKImages from "./QuietEarth3BHKImages";
import QuietEarth4BHKImages from "./QuietEarth4BHKImages";
import QuietEarthFloorImages from "./QuietEarthFloorImages";
import QuietEarthMasterPlanImages from "./QuietEarthMasterPlanImages";
import QuietEarthVillaImages from "./QuietEarthVillaImages";

const QuietEarthMasterPlan = () => {
  const [key, setKey] = useState("all");
  return (
    <div>
      <h2 className="pt-2 pb-2 text-center fs-4">Master & Floor Plans</h2>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 text-dark"
      >
        <Tab eventKey="all" title="All" className="text-dark">
          <QuietEarthMasterPlanImages />
        </Tab>
        <Tab eventKey="matster-plan" title="Master Plan" className="text-dark">
          <QuietEarthFloorImages />
        </Tab>
        <Tab eventKey="2bhk" title="2BHK" className="text-dark">
          <QuietEarthFloorImages />
        </Tab>
        <Tab eventKey="3bhk" title="3BHK" className="text-dark">
          <QuietEarth3BHKImages />
        </Tab>
        <Tab eventKey="4bhk" title="4BHK" className="text-dark">
          <QuietEarth4BHKImages />
        </Tab>
        <Tab eventKey="villa" title="Villa" className="text-dark">
          <QuietEarthVillaImages />
        </Tab>
      </Tabs>
    </div>
  );
};

export default QuietEarthMasterPlan;
