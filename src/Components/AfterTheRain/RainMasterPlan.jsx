import { Tab } from 'bootstrap';
import React, { useState } from 'react'
import { Tabs } from 'react-bootstrap';
import RainFloorImages from './RainFloorImages';

const RainMasterPlan = () => {
    
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
        <Tab eventKey="matster-plan" title="Floor Plan" className="text-dark">
        < RainFloorImages/>
        </Tab>
      </Tabs>
    </div>
  )
}

export default RainMasterPlan