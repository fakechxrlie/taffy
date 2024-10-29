// Open the "How It Works" popup
document.getElementById('info-button').addEventListener('click', function () {
    openPopup('how-it-works-popup');
});

// Open the "Go" popup and validate input
document.getElementById('go-button').addEventListener('click', function () {
    const selectedSite = document.getElementById('site-selector').value;
    const linkInput = document.getElementById('link-input').value;

    if (!selectedSite || !linkInput) {
        alert('Please select a site and enter a link.');
        return;
    }

    if (linkInput.includes(selectedSite)) {
        openPopup('go-popup');
        enableNextButtonAfterDelay();
    } else {
        alert('The link must match the selected site.');
    }
});

// Function to open a specific popup by ID
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'block';

    // Close the popup when the close button is clicked
    popup.querySelector('.close-button').addEventListener('click', function () {
        popup.style.display = 'none';
    });

    // Close the popup if the user clicks outside the content
    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
}

// Enable the "Next" button after a 10-second delay
function enableNextButtonAfterDelay() {
    const nextButton = document.getElementById('next-button');
    nextButton.disabled = true;

    setTimeout(() => {
        nextButton.disabled = false;
        nextButton.addEventListener('click', redirectToWebsite);
    }, 10000);
}

// Redirect to the appropriate website page based on the selected site
function redirectToWebsite() {
    const selectedSite = document.getElementById('site-selector').value;
    const url = `https://taffy-amber.vercel.app/${selectedSite}.html`;
    window.location.href = url;
}
