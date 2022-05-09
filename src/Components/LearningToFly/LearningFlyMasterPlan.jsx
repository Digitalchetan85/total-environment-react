import { Tab } from 'bootstrap';
import React, { useState } from 'react'
import { Tabs } from 'react-bootstrap';
import PursuitFloorImages from './LearningFlyFloorImages';

const LearningFlyMasterPlan = () => {
    
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
        <Tab eventKey="all" title="Master Plan" className="text-dark">
          {/* <LearningFlyMasterPlanImages /> */}
        </Tab>
        <Tab eventKey="matster-plan" title="Floor Plan" className="text-dark">
        < PursuitFloorImages/>
        </Tab>
      </Tabs>
    </div>
  )
}

export default LearningFlyMasterPlan