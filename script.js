function displaySeatView(section) {
    $('#seat-view').css('display', 'block');
    
    var images = SEATVIEW_MAP[section]; 
    var html = getImageHtml(getImagePath(section, images[0].filename), images[0].source, true);
    for (var i = 1; i < images.length; i++) {
        html += getImageHtml(getImagePath(section, images[i].filename), images[i].source, false);
    }

    $('#carousel-images').html(html);
}

$(document).click(function(event) {
    if (event.target.id === 'seat-view') {
        $('#seat-view').css('display', 'none');
    }
});

function getImagePath(section, filename) {
    return './media/seat-view/' + section + '/' + filename;
}

function getImageHtml(link, source, isActive) {
    console.log(isActive);
    var html = '<div class="carousel-item';
    html += isActive ? ' active">' : '">';
    html += '<img class="w-50" src="' + link + '" /><br />';
    html += '<span style="color:white;font-family:Verdana;font-size:15px;">Source: ';
    html += '<a href="' + source + '">' + source + '</a></span>';
    html += '</div>';
    return html;
}