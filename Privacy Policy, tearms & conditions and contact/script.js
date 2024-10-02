document.addEventListener("DOMContentLoaded", function() {
    const smoothScroll = (target, duration) => {
        const element = document.querySelector(target);
        const startPosition = window.pageYOffset;
        const targetPosition = element.getBoundingClientRect().top;
        const startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    };

    const links = document.querySelectorAll('.btn');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                smoothScroll(this.hash, 1000);
            }
        });
    });
});
