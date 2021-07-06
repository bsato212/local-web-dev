document.getElementById("submitbutton").onclick = function popup() {
    //alert("Form submitted successfully!");
    if(confirm("Submit form?")) {
        alert("Form submitted successfully!");
    } else {
        lert("Form not submitted.");
    }
}