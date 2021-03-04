Object.defineProperty(exports, "__esModule", { value: true });
exports.projectData = [
    {
        TaskId: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2020'),
        EndDate: new Date('04/21/2020'),
        subtasks: [
            { TaskId: 2, TaskName: 'Identify Site location', StartDate: new Date('04/06/2020'), Duration: 4, Progress: 50 },
            { TaskId: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/10/2020'), Duration: 4, Progress: 50, Predeceesor:"2FS" },
            { TaskId: 4, TaskName: 'Soil test approval', StartDate: new Date('04/12/2020'), Duration: 4, Progress: 50 },
        ]
    },
    {
        TaskId: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2020'),
        EndDate: new Date('04/21/2020'),
        subtasks: [
            { TaskId: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/03/2020'), Duration: 3, Progress: 50 },
            { TaskId: 7, TaskName: 'List materials', StartDate: new Date('04/04/2020'), Duration: 3, Progress: 50 },
            { TaskId: 8, TaskName: 'Estimation approval', StartDate: new Date('04/08/2020'), Duration: 3, Progress: 50 }
        ]
    },
];

exports.SelfRefData = [
    { TaskId: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    { TaskId: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, ParentId: 1 },
    { TaskId: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, ParentId: 1 },
    { TaskId: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, ParentId: 1, Predecessor: "1FS" },
    { TaskId: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    { TaskId: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, ParentId: 5 },
    { TaskId: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, ParentId: 5 },
    { TaskId: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, ParentId: 5 }
];