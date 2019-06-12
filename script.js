

function func(element) {
    $('#seat-view').css('display', 'block');
}

$(document).click(function(event) {
    console.log(event);
    if (event.target.id === 'seat-view') {
        $('#seat-view').css('display', 'none');
    }
});