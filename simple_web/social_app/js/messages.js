function sendMessage(){}
function receiveMessage(){}

function simulateMessage(){}


//components
var chatPage=new Vue('#chatpage',{
    data:{
        receiverName:'Test User',
        messages:[
            {'sender':'userB','message':'Hello World','time':'12:02pm'},
            {'sender':'userB','message':'Hello World','time':'12:02pm'},
            {'sender':'userB','message':'Hello World','time':'12:02pm'},
            {'sender':'userB','message':'Hello World','time':'12:02pm'},
            {'sender':'userB','message':'Hello World','time':'12:02pm'},
            {'sender':'userB','message':'Hello World','time':'12:02pm'}
        ]
    }
});

Vue.component('senderMessage',{
    props:[message,time],
    template:`
        <span class='senderMessage'>
            ${this.message}<small>${this.time}</small>
        </span>
    `
})

Vue.component('receiverMessage',{
    props:[message,time],
    template:`
        <span class='receiverMessage'>
            ${this.message}<small>${this.time}</small>
        </span>
    `
})