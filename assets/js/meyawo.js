/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// portfolio row
var currentStep = 0;  // Keeps track of how many rows are visible
document.getElementById("view-more-btn").addEventListener("click", function() {
    currentStep++;
    
    if (currentStep === 1) {
        // Show the second row
        document.getElementById("row-2").classList.remove("hidden");
    } else if (currentStep === 2) {
        // Show the third row and hide the button
        document.getElementById("row-3").classList.remove("hidden");
        this.style.display = "none";  // Hide the button
    }
});

function scrollToPortfolio() {
    const portfolioSection = document.querySelector('#portfolio');
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
}


