$(document).ready(function() {
    
    // configure popover for group mode
    var options = {
        container: 'body',
        html: true,
        title: 'Split class into groups',
        content: 
        `<div class="container d-flex">
        <span>Number of Groups:</span>
        <select class="custom-select ml-2" id="groupModeSelect">
        <option value="2">2</option>
        <option value="3" selected>3</option>
        <option value="4">4</option>
        </select>
        </div>
        <div class="container d-flex justify-content-center mt-4">
        <button type="button" class="btn btn-primary" title="Start group mode with specified number of groups" id="startGroupBtn">Start Group Mode</button>
        </div>
        `,
        placement: 'top',
        trigger: 'click'
    };
    $('#groupModeBtn').popover(options);

    $('[data-toggle="tooltip"]').tooltip() // enable all bootstrap tooltips
});


$('#confirmEndClassBtn').on('click', () => window.location.href = "index.html");

$('i.video-icon.fa-ellipsis-h').on('click', (evt) => {
    evt.preventDefault();
    let e = $(this);
    let modal = $('#studentOptionsModal');

    let studentName = e.parent().siblings().children('.participant-name').text();
    modal.find('.modal-title').html(studentName);
    modal.modal('show');
});

$('body').on('click', '#startGroupBtn', () => {
    // window.location.href = "group_mode.html";
    let select = $('#groupModeSelect');
    switch (select.val()) {
        case '2':
            window.location.href = 'group_mode2.html';
            break;
        case '3':
            window.location.href = 'group_mode3.html';
            break;
        case '4':
            window.location.href = 'group_mode4.html';
            break;
        default:
            break;
    }
});
