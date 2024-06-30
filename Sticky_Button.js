document.addEventListener("DOMContentLoaded", function () {
    var stickyATC = document.getElementById('stickyATC');
    var hidestickyATC = document.getElementById('hidestickyATC');

    // Initial state: hide stickyATC
    stickyATC.classList.add('hidden');

    var options = {
        root: null,
        threshold: 0
    };

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Hide stickyATC when hidestickyATC is visible
                stickyATC.classList.remove('visible');
                stickyATC.classList.add('hidden');
            } else {
                // Show stickyATC when hidestickyATC is not visible
                stickyATC.classList.remove('hidden');
                stickyATC.classList.add('visible');
            }
        });
    }, options);

    observer.observe(hidestickyATC);
});
