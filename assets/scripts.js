// Accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const item = this.parentElement;
        const isActive = item.classList.contains('active');
        // Close all accordions
        document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
        // Open clicked accordion if it was not already open
        if (!isActive) {
            item.classList.add('active');
        }
    });
});
