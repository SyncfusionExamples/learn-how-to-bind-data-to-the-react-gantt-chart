import React from 'react';
import './App.css';
import { GanttComponent, TaskFieldsModel, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
// import { SelfRefData } from './data';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
function App() {
  const taskValues: TaskFieldsModel = {
    id: "TaskId",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "SubTasks"
    //To use self-referential data, uncomment below code and import the SelfRefData from data.js file and use it in Gantt dataSource property.
    // parentID: "ParentId"
  }
  // To use self-referential data, comment out data manager related code
  const remoteData: DataManager = new DataManager({
    url: "https://ej2services.syncfusion.com/production/web-services/api/GanttData",
    adaptor: new WebApiAdaptor
  });
  return (
    <div>
      <GanttComponent dataSource={remoteData} taskFields={taskValues}>
        <ColumnsDirective>
          <ColumnDirective field="TaskId" headerText="ID"></ColumnDirective>
          <ColumnDirective field="TaskName" headerText="Name"></ColumnDirective>
          <ColumnDirective field="StartDate" format="dd-MMM-yy"></ColumnDirective>
          <ColumnDirective field="Duration" textAlign="Right"></ColumnDirective>
        </ColumnsDirective>
      </GanttComponent>
    </div>
  );
}

export default App;
