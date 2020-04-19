const Debug=true
var baseUrl=""
//settings
if(Debug==true){
    baseUrl="http://192.168.0.134:5500/"
}else{
    console.log("Please set the live url")
}

//random colors
const hex = '0123456789ABCDEF'
function randomColors() {
    var colors = []
    for (var i = 0; i < 24; i++) {
        var j=0;var col="";
        while(j<6){
            col+=hex.charAt(Math.floor(Math.random() * hex.length))
            j++;
        }
        colors.push(col)
    }
    colors.forEach(color => {
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



//template colors
function templates(){
    //fetch json data of the templates
    fetchData(baseUrl+"templates.json",(data)=>{
        if(data!=undefined && data!=null){
            data.templates.forEach(color=>{
                addTemplate(color.template)
            });
        }else{
            errorMessage("Error while fetching data from server")
        }
    })
}

function addTemplate(template){
    var parent=document.getElementById("templates")
    var template_div=document.createElement("div")
    template_div.classList.add("template")
    template.forEach(color=>{
        color_div=document.createElement("div")
        color_div.classList.add("template_color")
        color_div.style.background=color.color
        color_div.innerHTML="<p class='color_text'>"+color.color+"</p>"
        template_div.appendChild(color_div)
    });
    parent.appendChild(template_div)
}
templates()


//popular colors
function popularColors(){
    fetchData(baseUrl+"templates.json",(data)=>{
        if(data!=undefined && data!=null){
            data.popular.forEach(color=>{
                addPopular(color)
            });
        }else{
            errorMessage("Error while fetching data from server")
        }
    })

}
function addPopular(color){
    var parent=document.getElementById("popular");
    var col=document.createElement("div")
    col.classList.add("color");
    col.style.background=color.color
    parent.appendChild(col)
}
popularColors()

//sect:services
//func:fetch data from server
function fetchData(url,fn){
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        fn(data)
    })
}

//func:error messages
function errorMessage(message){
    console.log(message)
}

//func:success message
function successMessage(message){
    console.log(message)
}

//endsect