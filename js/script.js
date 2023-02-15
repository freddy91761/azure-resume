window.addEventListener('DOMContentLoaded', (event)=>{
    message();
    getVisitCount();
})

const functionApi = 'http://localhost:7071/api/GetResumeCounter';


const getVisitCount = () => {
    let count = 30;
    console.log("I am working");
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
        console.log("I am working");
    }).catch(function(error){
        console.log(error);
    });
    return count;
}

const message = () =>{
    console.log("I am working");
}


