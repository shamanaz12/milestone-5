// Function to handle form submission
function handleFormSubmit(event: Event): void {
    event.preventDefault();

    // Get form elements
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const jobTitleElement = document.getElementById('jobTitle') as HTMLInputElement;
    const companyElement = document.getElementById('company') as HTMLInputElement;
    const jobDescriptionElement = document.getElementById('jobDescription') as HTMLTextAreaElement;
    const resumeOutputElement = document.getElementById('resumeOutput');

    // Check if elements are present
    if (!nameElement || !emailElement || !phoneElement || !jobTitleElement || !companyElement || !jobDescriptionElement || !resumeOutputElement) {
        console.error('One or more elements are missing from the HTML document.');
        return;
    }

    // Collect form data
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const jobTitle = jobTitleElement.value;
    const company = companyElement.value;
    const jobDescription = jobDescriptionElement.value;

    // Generate resume output
    const resume = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Job Experience</h3>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Job Description:</strong> ${jobDescription}</p>
    `;

    // Display resume output
    resumeOutputElement.innerHTML = resume;
}

// Add event listener to form
const form = document.getElementById('resumeForm');
if (form) {
    form.addEventListener('submit', handleFormSubmit);
} else {
    console.error('The form element is missing from the HTML document.');
}