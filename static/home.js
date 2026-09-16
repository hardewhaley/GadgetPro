const saleEndTime = new Date().getTime() + (2 * 60 * 60 * 1000) + (14 * 60 * 1000) + (36 * 1000);

const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = saleEndTime - now;

    if (distance <= 0) {
        clearInterval(countdown);

        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}, 1000);


const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
        const faqItem = this.parentElement;

        faqItem.classList.toggle("active");
    });
});