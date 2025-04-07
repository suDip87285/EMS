const employees = [
  {
    "id": 1,
    "firstname": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Design Homepage",
        "taskDescription": "Create a responsive homepage design.",
        "task_date": "2025-04-01",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Update Logo",
        "taskDescription": "Revise company logo with new branding colors.",
        "task_date": "2025-04-02",
        "category": "Branding",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "SEO Optimization",
        "taskDescription": "Improve website SEO ranking.",
        "task_date": "2025-04-03",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Write Blog Post",
        "taskDescription": "Write an article on digital marketing trends.",
        "task_date": "2025-04-04",
        "category": "Content",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Rahul",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Client Meeting",
        "taskDescription": "Discuss project scope with the client.",
        "task_date": "2025-04-05",
        "category": "Meetings",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Fix Website Bugs",
        "taskDescription": "Resolve bugs reported in user feedback.",
        "task_date": "2025-04-06",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Database Optimization",
        "taskDescription": "Improve database performance.",
        "task_date": "2025-04-07",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Suresh",
    "email": "employee5@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Social Media Strategy",
        "taskDescription": "Plan the next month’s social media content.",
        "task_date": "2025-04-08",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": true
      },
      {
        "taskTitle": "Product Research",
        "taskDescription": "Analyze competitors’ new products.",
        "task_date": "2025-04-09",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  }
];

  
const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
]

export const setLocalStorage = ()=> {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=> {
    const employees = JSON.parse(localStorage.getItem('employees')); 
    const admin = JSON.parse(localStorage.getItem('admin')); 

    return {employees, admin}
}



