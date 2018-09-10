var patate = prompt("Hey mon ami ! Tu aimes ça les patates ?") ;

if ((patate == "Oui")  || (patate == "OUI") || (patate == "oui"))
{
    var tasPatates = "#";
    for (var i = 0; i < 7; i++)
    {
        console.log(tasPatates);
        tasPatates = tasPatates + "#"
    }
} else {
    alert("Ohhh mais c'est pas possiiiible !");
}