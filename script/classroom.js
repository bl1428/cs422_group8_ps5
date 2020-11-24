var cntMute = 1;
var cntHide = 1;
var cntMuteSelf = 1;
var cntHideSelf = 1;

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

// show student options modal
$('i.video-icon.fa-ellipsis-h').on('click', function(evt) {
    evt.preventDefault();
    let e = $(this);
    let modal = $('#studentOptionsModal');

    let studentName = e.parent().siblings().children('span').text();    // for modal controls

    if (!studentName) { // for participant list
        studentName = e.parent().text().replace(' Options', '');
    }
    modal.find('.modal-title').html(studentName);
    modal.modal('show');
});

// link to group mode
$('body').on('click', '#startGroupBtn', () => {
    let select = $('#groupModeSelect');
    switch (select.val()) {
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

// helper for button toggling
function setToggleBtnText(button, onText, onTooltip, offText, offTooltip) {
    let curr = button.text().trim();

    if (curr === onText) {
        button.text(offText);
        button.tooltip('hide')
            .attr('data-original-title', offTooltip)
            .tooltip('show');
    } else {
        button.text(onText);
        button.tooltip('hide')
            .attr('data-original-title', onTooltip)
            .tooltip('show');
    }
}

// toggle mute self btn
$('#muteSelfBtn').on('click', function() {
    setToggleBtnText($(this), 'Mute Self', 'Mute your audio', 'Unmute Self', 'Unmute your audio');
    if(cntMuteSelf % 2 != 0) {
        $('.teacher-video-pane .fa-volume-up').removeClass('fa-volume-up').addClass('fa-volume-mute');
        cntMuteSelf += 1;
    }else{
        $('.teacher-video-pane .fa-volume-mute').removeClass('fa-volume-mute').addClass('fa-volume-up');
        cntMuteSelf += 1;
    }
});

// toggle hide self btn
$('#hideSelfBtn').on('click', function() {
    setToggleBtnText($(this), 'Hide Self', 'Stop your video', 'Show Self', 'Start your video');
    if(cntHideSelf % 2 != 0) {
        $('.teacher-video-pane .fa-video').removeClass('fa-video').addClass('fa-video-slash');
        cntHideSelf += 1;
    }else{
        $('.teacher-video-pane .fa-video-slash').removeClass('fa-video-slash').addClass('fa-video');
        cntHideSelf += 1;
    }
});

// toggle mute all btn
$('#muteAllBtn').on('click', function() {
    setToggleBtnText($(this), 'Mute All', 'Mute audio for all students', 'Unmute All', 'Unmute audio for all students');
    if(cntMute % 2 != 0) {
        $('.video-pane .fa-volume-up').removeClass('fa-volume-up').addClass('fa-volume-mute');
        cntMute += 1;
    }else{
        $('.video-pane .fa-volume-mute').removeClass('fa-volume-mute').addClass('fa-volume-up');
        cntMute += 1;
    }
});

// toggle hide all btn
$('#hideAllBtn').on('click', function() {
    setToggleBtnText($(this), 'Hide All', 'Stop video for all students', 'Show All', 'Start video for all students');
    if(cntHide % 2 != 0) {
        $('.video-pane .fa-video').removeClass('fa-video').addClass('fa-video-slash');
        cntHide += 1;
    }else{
        $('.video-pane .fa-video-slash').removeClass('fa-video-slash').addClass('fa-video');
        cntHide += 1;
    }
});

$('body').on('click', '#msgGuardianBtn', function() {
    let optModal = $('#studentOptionsModal');
    const studentName = optModal.find('.modal-title').text();
    $('#studentOptionsModal').modal('hide');    // hide student options modal

    let msgModal = $('#msgGuardianModal');
    msgModal.find('.modal-title').html('Message to ' + studentName + "'s guardian");
    msgModal.find('textarea').val('');
    msgModal.modal('show');

});

function searchFilter() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("span")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }