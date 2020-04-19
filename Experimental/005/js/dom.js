var mode="default"
const modes=[
    {"darkmode":[
        {"type":"text","class":".title","color":"#2EC6F0"},
        {"type":"text","class":".text","color":"#3498DB"},
        {"type":"element","class":"div.topnav","color":"#2c3e50"},
        {"type":"element","class":"div.navbar","color":"#2c3e50"},
        {"type":"element","class":"body","color":"#2c3e50"},


    ]},
    {"default":[
        {"type":"text","class":".title","color":"white"},
        {"type":"text","class":".text","color":"#2980b9"},
        {"type":"element","class":"div.topnav","color":"#3498DB"},
        {"type":"element","class":"div.navbar","color":"whitesmoke"},
        {"type":"element","class":"body","color":"whitesmoke"},
    ]}
]
function changeContrast(){
    if(mode=="default"){
        mode="darkmode"
        darkMode()
    }else{
        mode="default"
        defaultMode()
    }
}
function darkMode(){
    modes[0]["darkmode"].forEach(colorTag=>{
        if(colorTag.type=="text"){
            changeTextElements(colorTag.class,colorTag.color)
        }else{
            changeBackground(colorTag.class,colorTag.color)
        }
    });
}
function defaultMode(){
    modes[1]["default"].forEach(colorTag=>{
        console.log(colorTag.class)
        console.log(colorTag.color)
        if(colorTag.type=="text"){
            changeTextElements(colorTag.class,colorTag.color)
        }else{
            changeBackground(colorTag.class,colorTag.color)
        }
    });
}


//change text color elements by class
function changeTextElements(className,color){
    var elements=document.querySelectorAll(className);
    elements.forEach(element=>{
        element.style.color=color
    })
}
//change dom background elements by class
function changeBackground(className,color){
    var elements=document.querySelectorAll(className)
    elements.forEach(element=>{
        element.style.background=color
        console.log(element)
        if(className=="body"){
            element.style.backgroundImage="url('../Images/bg_light.png')";
        }
    })
}
