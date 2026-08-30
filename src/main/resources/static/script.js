// ===============================
// LOGIN FORM
// ===============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;

        if (email === "" || password === "") {
            alert("Please fill all fields.");
            return;
        }

        const user = {
            email: email,
            password: password
        };

        try {

            const response = await fetch("/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            const result = await response.text();

            if (response.ok && result === "Login successful") {

                alert("Login successful!");

                window.location.href = "index.html";

            } else {

                alert("Invalid email or password.");

            }

        } catch (error) {

            console.error(error);

            alert("Cannot connect to the backend.");

        }

    });
}


// ===============================
// REGISTER FORM
// ===============================

const registerForm =
    document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const name =
            document.getElementById("fullName").value.trim();

        const email =
            document.getElementById("registerEmail").value.trim();

        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const skills =
            document.getElementById("skills").value.trim();

        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }

        if (
            name === "" ||
            email === "" ||
            password === "" ||
            skills === ""
        ) {

            alert("Please fill all fields.");

            return;
        }

        const user = {

            fullName: name,
            email: email,
            password: password,
            skills: skills

        };

        try {

            const response = await fetch("/api/users/register", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(user)

            });

            if (response.ok) {

                alert("Registration successful!");

                registerForm.reset();

                window.location.href = "login.html";

            } else {

                alert("Registration failed. Please try again.");

            }

        } catch (error) {

            console.error(error);

            alert("Cannot connect to the backend.");

        }

    });
}


// ===============================
// JOB SEARCH
// ===============================

function searchJobs() {

    const searchInput =
        document.getElementById("jobSearch")
        .value
        .toLowerCase();

    const location =
        document.getElementById("locationFilter")
        .value
        .toLowerCase();

    const jobs =
        document.querySelectorAll(".job-card");

    jobs.forEach(function(job) {

        const jobText =
            job.innerText.toLowerCase();

        const matchesSearch =
            jobText.includes(searchInput);

        const matchesLocation =
            location === "" ||
            jobText.includes(location);

        if (matchesSearch && matchesLocation) {

            job.style.display = "flex";

        } else {

            job.style.display = "none";

        }

    });
}


// ===============================
// APPLY BUTTON
// ===============================


async function applyJob(jobId, jobTitle) {

    const applicantName = prompt("Enter your name:");
    const email = prompt("Enter your email:");

    if (!applicantName || !email) {
        alert("Please enter your name and email.");
        return;
    }

    try {

        const response = await fetch("/api/applications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                applicantName: applicantName,
                email: email,
                jobId: jobId,
                jobTitle: jobTitle
            })
        });

        if (response.ok) {
            alert("Application submitted successfully! 🎉");
        } else {
            alert("Failed to submit application.");
        }

    } catch (error) {
        console.error(error);
        alert("Unable to connect to server.");
    }
}
function viewJob(jobId) {

    if (jobId === 1) {
        alert(
            "Java Developer\n\n" +
            "Company: TCS\n" +
            "Location: Chennai\n" +
            "Experience: Fresher\n" +
            "Skills: Java, Spring Boot, MySQL"
        );
    }

    else if (jobId === 2) {
        alert(
            "Software Engineer\n\n" +
            "Company: Infosys\n" +
            "Location: Bangalore\n" +
            "Experience: Fresher\n" +
            "Skills: Java, Python, SQL"
        );
    }

    else if (jobId === 3) {
        alert(
            "Web Developer\n\n" +
            "Company: Wipro\n" +
            "Location: Hyderabad\n" +
            "Experience: Fresher\n" +
            "Skills: HTML, CSS, JavaScript"
        );
    }
}