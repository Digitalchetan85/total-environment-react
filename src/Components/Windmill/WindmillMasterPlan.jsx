import { Tab } from 'bootstrap';
import React, { useState } from 'react'
import { Tabs } from 'react-bootstrap';
import PursuitFloorImages from './WindmillFloorImages';
import WindmillMasterPlanImages from './WindmillMasterPlanImages';

const WindmillMasterPlan = () => {
    
  const [key, setKey] = useState("matster-plan");
  return (
    <div>
      <h2 className="pt-2 pb-2 text-center fs-4">
        Windmill Floor Plans
      </h2>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 text-dark justify-content-center"
      >
        {/* <Tab eventKey="all" title="Master Plan" className="text-dark">
          <WindmillMasterPlanImages />
        </Tab> */}
        <Tab eventKey="matster-plan" title="Floor Plan" className="text-dark">
        < PursuitFloorImages/>
        </Tab>
      </Tabs>
    </div>
  )
}

export default WindmillMasterPlan