$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip() // enable all bootstrap tooltips
});

$('#confirmEndClassBtn').on('click', () => window.location.href = "index.html");

$('i.video-icon.fa-ellipsis-h').on('click', function(evt) {
    evt.preventDefault();
    let e = $(this);
    let modal = $('#studentOptionsModal');

    let studentName = e.parent().siblings().children('.participant-name').text();
    modal.find('.modal-title').html(studentName);
    modal.modal('show');
});