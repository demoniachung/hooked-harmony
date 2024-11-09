// about.js

function sendComments() {
    const comments = document.getElementById('comments').value;
    const email = 'ceo@example.com'; // Replace with the CEO's email address
    const subject = 'Comment from Website';
    const body = encodeURIComponent(comments);

    if (comments) {
        const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        document.getElementById('comments').value = ''; // Clear the textarea after submission
    } else {
        alert('Please enter a comment before submitting.');
    }
}
