function sanitizePathname(path) {
    var paginationRegex = /(?:page\/)(\d)(?:\/)$/i;

    // remove hash params from path
    path = path.replace(/#(.*)$/g, '').replace('////g', '/');

    // remove pagination from the path and replace the current pages
    // with the actual requested page. E. g. `/page/3/` indicates that
    // the user actually requested page 3, so we should request page 4
    // next, unless it's the last page already.
    if (path.match(paginationRegex)) {
        currentPage = parseInt(path.match(paginationRegex)[1]);

        path = path.replace(paginationRegex, '');
    }

    return path;
}

function loadPage(pageNumber, pathname) {
    // make an AJAX request to the server to fetch the data for the specified page
    // replace "url" with the URL of your server endpoint that returns the data for the specified page
    $.get(`${pathname}page/${pageNumber}`, function (data) {
        // update the content of the item container with the new data
        var $data = $(data);
        var $myContent = $data.find('#item-container');
        if ($myContent) {
            $('#item-container').html($myContent.html());
            $('#pagination div').click(function (event) {
                var pageNumber = $(this).data('page'); // get the page number from the link's data-page attribute
                if (!pageNumber) {
                    return;
                }
                var pathname = window.location.href;
                pathname = sanitizePathname(pathname);
                event.preventDefault(); // prevent the default behavior of the link
                loadPage(pageNumber, pathname); // load the data for the specified page
            });
        }
    });
}

$('#pagination div').click(function (event) {
    var pageNumber = $(this).data('page'); // get the page number from the link's data-page attribute
    if (!pageNumber) {
        return;
    }

    var pathname = window.location.href;
    pathname = sanitizePathname(pathname);
    event.preventDefault(); // prevent the default behavior of the link
    loadPage(pageNumber, pathname); // load the data for the specified page
});

$(function () {
    'use strict';
    offCanvas();
});

function offCanvas() {
    'use strict';
    var burger = $('.burger');
    var sideMenu = $('#side-menu');
    var canvasClose = $('.canvas-close');

    burger.on('click', function () {
        $('html').toggleClass('canvas-opened');
        sideMenu.toggleClass('canvas-opened');
        $('html').addClass('canvas-visible');
        dimmer('open', 'medium');
    });

    canvasClose.on('click', function () {
        if ($('html').hasClass('canvas-opened')) {
            $('html').removeClass('canvas-opened');
            sideMenu.removeClass('canvas-opened');
            dimmer('close', 'medium');
        }
    });

    $('.dimmer').on('click', function () {
        if ($('html').hasClass('canvas-opened')) {
            $('html').removeClass('canvas-opened');
            sideMenu.removeClass('canvas-opened');
            dimmer('close', 'medium');
        }
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27 && $('html').hasClass('canvas-opened')) {
            $('html').removeClass('canvas-opened');
            sideMenu.removeClass('canvas-opened');
            dimmer('close', 'medium');
        }
    });
}

function dimmer(action, speed) {
    'use strict';
    var dimmer = $('.dimmer');

    switch (action) {
        case 'open':
            dimmer.fadeIn(speed);
            break;
        case 'close':
            dimmer.fadeOut(speed);
            break;
    }
}
