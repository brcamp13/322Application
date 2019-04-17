
var VIDForm = document.getElementById("VIDForm");
$('#VIDForm').submit(function() {
    var text = VIDForm.elements[0].value;
    var VIDs = text.split(" ");
    for (vid of VIDs) {
        alert(vid);
    }
});
