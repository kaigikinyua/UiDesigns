const windows=['landing','about']
var curr_window="landing"
window.onload=()=>{
window.onscroll=function(){
        var index=0
        windows.forEach(wind=>{
            if(this.curr_window==wind){
                var curr=""
                if(index+1==windows.length){
                    curr=document.getElementById(windows[0])
                }else{
                    curr=document.getElementById(windows[0])
                }
                curr.classList.remove('deactive')
                curr.classList.add('active')
            }
            else{
                var w=document.getElementById(wind)
                w.classList.remove('active')
                w.classList.add('deactive')
            }
            index+=1
        })
    }
}

function curr_slide(){
    var cards=document.querySelectorAll('.card_i')
    for(var i=0;i<cards.length;i++){
        cards[i].addEventListener("mouseover",(e)=>{
            console.log(e.target)
            var landing=document.getElementById('h_image')
            landing.style.backgroundImage="url("+e.target.src+")"      
        });
    }
}

curr_slide()

function openSideNav(){
    var sidenav=document.getElementById('sidenav');
    sidenav.classList.add('full_sidenav')
    sidenav.classList.remove('min_sidenav')
}
function closeSideNav(){
    var sidenav=document.getElementById('sidenav');
    sidenav.classList.remove('full_sidenav')
    sidenav.classList.add('min_sidenav')
}