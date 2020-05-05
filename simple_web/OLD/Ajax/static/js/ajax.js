//to get the particulat json data use the name of the json element you want to access

function getData(url,fn){
    fetch(url)
    .then(res=>res.json())
    .then(myjson=>{fn(myjson)})
}

function getContacts(){
    console.log("loading contacts")
    getData("http://127.0.0.1:4000/",contacts=>{
        console.log(contacts.contacts)
    })
}
getContacts()