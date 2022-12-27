function flipColor(){
    const bodyClasses = document.querySelector("body").classList;
    if(bodyClasses.contains("red"))
    {
        bodyClasses.remove("red");
        bodyClasses.add("blue");
    }
    else
    {
        bodyClasses.remove("blue");
        bodyClasses.add("red");
    }
    document.getElementById("color").innerHTML=bodyClasses;
}