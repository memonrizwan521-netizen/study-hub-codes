/* ===================================
   MOBILE MENU
=================================== */

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("show");

}


/* ===================================
   STUDY TIP
=================================== */

function showTip() {

    const tip = document.getElementById("studyTip");

    tip.classList.toggle("show");

}


/* ===================================
   CONTACT FORM VALIDATION
=================================== */

const contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();

        const formMessage =
            document.getElementById("formMessage");


        if (name === "" || email === "" || message === "") {

            formMessage.textContent =
                "Please fill in all fields.";

            formMessage.style.color = "#d9534f";

            return;

        }


        if (!email.includes("@")) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.style.color = "#d9534f";

            return;

        }


        formMessage.textContent =
            "✓ Thank you! Your message has been submitted.";

        formMessage.style.color = "#2d8c89";


        contactForm.reset();

    });

}
