// JavaScript code for main.js

$(document).ready(function() {
    // When the logo is clicked, show an alert
    $('.logo').click(function(event) {
        event.preventDefault(); // Prevent the default action
        alert('Welcome to the Blog Collection!');
    });

    // Function to change the background image
    function changeBackgroundImage() {
        const images1 = [
            'images/about1.jpg',
            'images/about2.jpg', // Add more image paths as needed
            'images/about3.jpg'
        ];
        const images2 = [
            'images/banner.png',
            'images/banner2.png',
            'images/banner3.jpg',
            'images/banner4.jpg',
            'images/banner5.jpg'
        ];
        const backgroundImageElement = document.getElementById('backgroundImage');
        let currentImageIndex = 0;

        function changeBackgroundImage() {
            if (currentImageIndex < images1.length) {
                backgroundImageElement.style.backgroundImage = `url('${images1[currentImageIndex]}')`;
            } else {
                currentImageIndex = 0;
                backgroundImageElement.style.backgroundImage = `url('${images2[currentImageIndex]}')`;
            }
            currentImageIndex++;
        }

        // Change background image every 4 seconds
        setInterval(changeBackgroundImage, 4000);
}
});
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});

    