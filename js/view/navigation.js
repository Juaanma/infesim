// Navigation isn't split into MVC, since the logic is quite simple and doesn't have a model associated

// Selects default section in case the current one isn't valid
function checkCurrentSection() {
    const section = window.location.hash;

    const sectionLinks = $(`.nav-header a[href="${section}"]`);
    if (sectionLinks.length == 0) {
        window.location.hash = '#intro';
    }
}

// Updates header according to current section
function updateSectionLinks() {
    const sectionLinks = $('.nav-header a');
    sectionLinks.removeClass('active');

    const section = window.location.hash;
    const sectionNavLink = sectionLinks.filter(`[href="${section}"]`);
    sectionNavLink.addClass('active');
}

// Checks if current section is valid and updates header
function initializeNavigation() {
    checkCurrentSection();
    updateSectionLinks();

    // On section change, checks validity and updates UI
    $(window).on('hashchange', function() {
        checkCurrentSection();
        updateSectionLinks();
    });
}

export { initializeNavigation };