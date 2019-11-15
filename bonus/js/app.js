$.ajax({
    dataType: "json",
    key: value
});

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.name;
    }
};
xmlhttp.open("GET", "http://cp202-server.appspot.com/keys/180424190", true);
xmlhttp.send();