// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav =  document.getElementById('navbar');


if (bar){
    bar.addEventListener('click', () =>{ 
        nav.classList.add('active')
    })
}
if (close){
    close.addEventListener('click', () =>{ 
        nav.classList.remove('active')
    })
}

// Twitter Share Function
function shareOnTwitter() {
    // Replace the following variables with your own values
    var tweetText = encodeURIComponent("Check out this awesome post!");
    var tweetUrl = encodeURIComponent("https://your-website.com/your-post-url");
    var twitterShareUrl = "https://twitter.com/intent/tweet?text=" + tweetText + "&url=" + tweetUrl;

    // Open Twitter share popup
    window.open(twitterShareUrl, "_blank", "width=550,height=350");
}

// Attach click event to elements with the "twitter-share-button" class
var twitterShareButtons = document.getElementsByClassName('twitter-share-button');
for (var i = 0; i < twitterShareButtons.length; i++) {
    twitterShareButtons[i].addEventListener('click', function() {
        shareOnTwitter();
    });
}
function submitForm(event) {
        event.preventDefault(); // Prevents the default form submission behavior

        // You can add additional logic here to handle the form data, e.g., sending it to a server

        // Redirect to the success page
        window.location.href = 'success.html';
}
