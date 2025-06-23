const employees = [
    {
        ID: "EMP001",
        email: "john.doe@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Prepare Q2 Report",
                taskDescription: "Compile and analyze sales data for Q2.",
                taskDate: "2025-06-21",
                category: "Analytics"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Team Meeting",
                taskDescription: "Weekly team sync-up for project updates.",
                taskDate: "2025-06-18",
                category: "Meetings"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Submit Budget Proposal",
                taskDescription: "Missed deadline for submitting budget doc.",
                taskDate: "2025-06-15",
                category: "Finance"
            }
        ]
    },
    {
        ID: "EMP002",
        email: "jane.smith@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Design Homepage UI",
                taskDescription: "Create responsive UI for homepage.",
                taskDate: "2025-06-22",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Fix Bug #224",
                taskDescription: "Resolved login redirect issue.",
                taskDate: "2025-06-17",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Code Review",
                taskDescription: "Reviewed PRs for the billing module.",
                taskDate: "2025-06-19",
                category: "Code Review"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Client Feedback Report",
                taskDescription: "Didn’t submit feedback summary on time.",
                taskDate: "2025-06-14",
                category: "Client Work"
            }
        ]
    },
    {
        ID: "EMP003",
        email: "mike.jordan@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "API Endpoint Setup",
                taskDescription: "Set up user profile endpoints.",
                taskDate: "2025-06-23",
                category: "Backend"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Write Unit Tests",
                taskDescription: "Write tests for new services.",
                taskDate: "2025-06-21",
                category: "Testing"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Refactor Login Flow",
                taskDescription: "Improved login efficiency by 25%.",
                taskDate: "2025-06-18",
                category: "Development"
            }
        ]
    },
    {
        ID: "EMP004",
        email: "lisa.wong@example.com",
        password: "123",
        tasks: [
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Marketing Campaign",
                taskDescription: "Executed email marketing campaign.",
                taskDate: "2025-06-16",
                category: "Marketing"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Create Social Media Plan",
                taskDescription: "Design social posts for July campaign.",
                taskDate: "2025-06-23",
                category: "Social Media"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Upload Blog Article",
                taskDescription: "Missed deadline for blog upload.",
                taskDate: "2025-06-14",
                category: "Content"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Design Newsletter",
                taskDescription: "Designed and scheduled monthly newsletter.",
                taskDate: "2025-06-19",
                category: "Email"
            }
        ]
    },
    {
        ID: "EMP005",
        email: "rahul.kumar@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Client Presentation",
                taskDescription: "Prepare deck for upcoming client meeting.",
                taskDate: "2025-06-23",
                category: "Client Work"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Product Demo",
                taskDescription: "Presented product features to stakeholders.",
                taskDate: "2025-06-20",
                category: "Sales"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Training Session",
                taskDescription: "Attended training on project management tools.",
                taskDate: "2025-06-18",
                category: "Training"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Submit Feedback Form",
                taskDescription: "Forgot to submit post-training feedback.",
                taskDate: "2025-06-15",
                category: "HR"
            }
        ]
    }
];

const admin = [
    {
        ID: "ADM001",
        email: "admin.master@example.com",
        password: "123"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return { employees, admin };
}