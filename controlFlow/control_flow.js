let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// practice task
let userAccess = 'Employee';
let accessMsg;

if (userAccess == 'Employee'){
    accessMsg = 'You are authorized to access "Dietary Services".';
}else if (userAccess == 'Enrolled Member'){
    accessMsg = 'You are authorized to access "Dietary Services" and one-on-one interaction with a Dietician';
}else if (userAccess == 'Enrolled Member'){
    accessMsg = 'You are partially authorized to access "Dietary Services" only.';
}else{
    accessMsg = 'Please enroll or subscribee to avail this facility'
}

console.log("Access status:", accessMsg);