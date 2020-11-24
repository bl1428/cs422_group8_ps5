function myFunction() {
    var $label = $("<label>").text('Message Sent').addClass("label").attr('id', 'labels');;
    $("#cool").append($label);
    setTimeout(300);
    //document.getElementById('labels').remove();
    setTimeout(function () { document.getElementById('labels').remove(); }, 3000);
}

function myFunction1() {
    var $label = $("<label>").text('Message Sent').addClass("label").attr('id', 'labels2');;
    $("#cools").append($label);
    setTimeout(300);
    //document.getElementById('labels').remove();
    setTimeout(function () { document.getElementById('labels2').remove(); }, 3000);
}

$('#startClassButton').on('click', () => window.location.href = "classroom.html");

$('[data-toggle="tooltip"]').tooltip() // enable all bootstrap tooltips