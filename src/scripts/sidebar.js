$(document).ready(function () {

    $('#sidebarToggle').on('click', function () {
        $(this).toggleClass('active');
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $('.dropdown-toggle').click(function () {
       $(this).next().collapse('toggle');
       $(this).attr('aria-expanded', $(this).attr('aria-expanded') === "true" ? "false" : "true")
    });
});
