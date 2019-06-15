$(function() {
    var isMobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
    if (isMobile) {
        $('.modal-content').css('margin', '35% auto');
    }
});

$(document).click(function(event) {
    if (event.target.id === 'seat-view') {
        $('#seat-view').css('display', 'none');
    }
});

function displaySeatView(section) {
    $('#seat-view').css('display', 'block');
    
    var images = SEATVIEW_MAP[section]; 
    if (images === null || images === undefined) {
        var html = getNotAvailableHtml();
        $('#carousel-images').html(html);
        return;
    }

    var html = getImageHtml(getImagePath(section, images[0].filename), images[0].source, true);
    for (var i = 1; i < images.length; i++) {
        html += getImageHtml(getImagePath(section, images[i].filename), images[i].source, false);
    }

    $('#carousel-images').html(html);
}

function getImagePath(section, filename) {
    return './media/seat-view/' + section + '/' + filename;
}

function getImageHtml(link, source, isActive) {
    var html = '<div class="carousel-item';
    html += isActive ? ' active">' : '">';
    html += '<img class="w-70" src="' + link + '" /><br />';
    html += '<span style="color:white;font-family:Verdana;font-size:20px;">Source: ';
    html += '<a href="' + source + '">' + source + '</a></span>';
    html += '</div>';
    return html;
}

function getNotAvailableHtml() {
    var html = '<div style="color:white;font-family:Verdana;font-size:20px;text-align:center;">View not available</div>';
    return html;
}