import { Tab } from 'bootstrap';
import React, { useState } from 'react'
import { Tabs } from 'react-bootstrap';
import Pursuit4BHKImages from './Pursuit4BHKImages';
import PursuitFloorImages from './PursuitFloorImages';
import PursuitMasterPlanImages from './PursuitMasterPlanImages';

const PursuitMasterPlan = () => {
    
  const [key, setKey] = useState("all");
  return (
    <div>
      <h2 className="pt-2 pb-2 text-center fs-4">
        Master & Floor Plans
      </h2>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 text-dark"
      >
        <Tab eventKey="all" title="All" className="text-dark">
          <PursuitMasterPlanImages />
        </Tab>
        <Tab eventKey="matster-plan" title="3 Bedroom" className="text-dark">
        < PursuitFloorImages />
        </Tab>
        <Tab eventKey="matster-plan1" title="4 Bedroom" className="text-dark">
        < Pursuit4BHKImages />
        </Tab>
      </Tabs>
    </div>
  )
}

export default PursuitMasterPlan