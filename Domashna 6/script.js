function insertRow()
{
var x=document.getElementById('sampleTable').insertRow(0);
var y = x.insertCell(0);
var z = x.insertCell(1);
y.innerHTML="Что-то здесь";
z.innerHTML="Что-то тут";
}