var slideLength=4;
function slide(old,incoming){
    //document.getElementById(old).classList.add('close');
    document.getElementById(old).classList.remove('show')
    document.getElementById(old).classList.add('slide')
    var incoming=document.getElementById(incoming).classList.add('show');
    document.getElementById(incoming).classList.remove('slide')
    console.log("Changing")
}