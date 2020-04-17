const hex = '0123456789ABCDEF'

function randomColors() {
    var colors = []
    for (var i = 0; i < 12; i++) {
        var j=0;var col="";
        while(j<6){
            col+=hex.charAt(Math.floor(Math.random() * hex.length))
            j++;
        }
        colors.push(col)
    }
    colors.forEach(color => {
        console.log("#" + color)
        addColor("#"+color)
    })
}

function addColor(color){
    var parent=document.getElementById("random")
    var col_temp=document.createElement("div")
    col_temp.classList.add("color")
    col_temp.style.background=color
    col_temp.innerHTML="<p class='color_text'>"+color+"</p>"
    parent.appendChild(col_temp)
}


randomColors()
