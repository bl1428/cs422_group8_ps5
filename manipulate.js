
$(document).ready(function()
{

    generate_table(2);
    $( "#studentGroup" ).addClass( "center" );
    addStHtml(0, 0);
    addStHtml(0, 1);
    addStHtml(1, 0);
    addStHtml(1, 1);



        $(document).on('click', '.btnDot', function (){


            var tdId = this.id.split('dotBtn');
            tdId = tdId[1];
            console.log(tdId);
            var imgId = "img"+ tdId;
            var modal = document.getElementById("myModal");
            // var btn = document.getElementById(btnId);
            var span = document.getElementsByClassName("close")[0];
            var stpVideo = document.getElementById("stopVid");
            var showVid = document.getElementById("showVid");


            modal.style.display = "block";

            span.onclick = function() {
                modal.style.display = "none";
            }

            var oldHtml = document.getElementById(imgId).innerHTML;
            stpVideo.onclick = function () {
                document.getElementById(imgId).style.display = "none";
                // $("#" + imgId).attr("src", "01.jpg")
                document.getElementById(tdId).append("Student" + tdId);
            };


            showVid.onclick = function () {
                document.getElementById(imgId).style.display = "inline-block"
            };

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        });




});

function popWindow(id){
    document.getElementById(id).innerHTML = '<div class="popup" onclick="myFunction()"> Click me!\n' +
        '        <span class="popuptext" id="myPopup">Popup text...</span>\n' +
        '    </div>'
}






function addStHtml(i, j) {
    var id = i.toString() + j.toString();
    var fileName = id;
    document.getElementById(id).innerHTML = '            <div class="containerSt">\n' +
        '                <img src= "'+ fileName +'.jpg" id="'+ "img" + id + '"  alt="crawford" style="width:100%">\n' +
        '                <button class="btnDot" name="dotBtn" id="'+ "dotBtn" + id + '">\n' +
        '                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
        '                        <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>\n' +
        '                    </svg>\n' +
        '                </button>\n' +
        '            </div>'


    // document.getElementById('foo').innerHTML = '<img src="img/apple_' + total + '.png" id="imageBox"/>'
}



function generate_table(table_size) {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
    var mainColumn = document.getElementById("mainColumn")

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    var rowText;

    tbl.setAttribute("id", "studentGroup")

    // creating all cells
    for (var i = 0; i < table_size; i++) {
        // creates a table row
        var row = document.createElement("tr");
        rowText = String.fromCharCode(97 + i);

        for (var j = 0; j < table_size; j++) {
            var id = i.toString() + j.toString();
            var cell = document.createElement("td");
            cell.setAttribute("id", id);
            cell.setAttribute("class", "tableTd");
            $(".cell").css({"text-align": "center"
            });
            cell.append(rowText + (j + 1).toString());
            row.appendChild(cell);
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);
        tbl.setAttribute("border", "transparent");
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <mainColumn>
    mainColumn.appendChild(tbl);
    //ref: mozilla
}