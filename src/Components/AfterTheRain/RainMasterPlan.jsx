import { Tab } from "bootstrap";
import React, { useState } from "react";
import { Tabs } from "react-bootstrap";
import Rain3BHKFloorImages from "./Rain3BHKFloorImages";
import Rain4BHKImages from "./Rain4BHKImages";
import RainFloorImages from "./RainFloorImages";
import RainMasterPlanImages from "./RainMasterPlanImages";

const RainMasterPlan = () => {
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
          <RainFloorImages />
        </Tab>
        <Tab eventKey="matster-plan" title="Master Plan" className="text-dark">
          <RainMasterPlanImages />
        </Tab>
        <Tab eventKey="matster-plan1" title="3 Bedroom" className="text-dark">
          <Rain3BHKFloorImages />
        </Tab>
        <Tab eventKey="matster-plan2" title="4 Bedroom" className="text-dark">
          <Rain4BHKImages />
        </Tab>
      </Tabs>
    </div>
  );
};

export default RainMasterPlan;
