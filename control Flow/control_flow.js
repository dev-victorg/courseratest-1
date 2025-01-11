let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No acess granted";
}

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";

    }  else {
        usermessage = "Welcome, User!";

    }
} else {
    userMessage = "Please log in to access the system.";
}

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

//let isAuthenticated = true;

//let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";


let employeeStatus = "Employee";
let dietaryAccess;

if (employeeStatus === "Employee") {
    dietaryAccess = "You have access to Dietary Services!"
} else if (employeeStatus === "Enrolled Member") {
    dietaryAccess = "You have the highest access! Dietary Services and One-on-One with our custom dietician!"
} else if (employeeStatus === "Subscriber") {
    dietaryAccess = "You have partial access to our Dietary Services";
} else {
    dietaryAccess = "Please subscribe to our services to Receive Dietary Services!";
}
