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