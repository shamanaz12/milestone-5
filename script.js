// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    // Get form elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var jobTitleElement = document.getElementById('jobTitle');
    var companyElement = document.getElementById('company');
    var jobDescriptionElement = document.getElementById('jobDescription');
    var resumeOutputElement = document.getElementById('resumeOutput');
    // Check if elements are present
    if (!nameElement || !emailElement || !phoneElement || !jobTitleElement || !companyElement || !jobDescriptionElement || !resumeOutputElement) {
        console.error('One or more elements are missing from the HTML document.');
        return;
    }
    // Collect form data
    var name = nameElement.value;
    var email = emailElement.value;
    var phone = phoneElement.value;
    var jobTitle = jobTitleElement.value;
    var company = companyElement.value;
    var jobDescription = jobDescriptionElement.value;
    // Generate resume output
    var resume = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Job Experience</h3>\n        <p><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n        <p><strong>Company:</strong> ").concat(company, "</p>\n        <p><strong>Job Description:</strong> ").concat(jobDescription, "</p>\n    ");
    // Display resume output
    resumeOutputElement.innerHTML = resume;
}
// Add event listener to form
var form = document.getElementById('resumeForm');
if (form) {
    form.addEventListener('submit', handleFormSubmit);
}
else {
    console.error('The form element is missing from the HTML document.');
}
