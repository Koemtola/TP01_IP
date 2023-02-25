const results=document.getElementById("results");
const row=document.getElementById("row");
const reaction=document.getElementById("reaction");
const loading=document.getElementById("loading");
function fetchNewHome() {
    var inputName=document.getElementById("myText").value;
    loading.hidden=false;
    guessHome(inputName);
    reaction.innerHTML="";
}
function guessHome(inputName) {
    let baseURL="https://api.nationalize.io?name=";
    let url=`${baseURL}${inputName}`;
    fetch(url).then(async(res)=>{
        let data=await res.json();
        let resultsArray="";
        loading.hidden=true;
        for(var i=0; i<data.country.length;i++){
            resultsArray=resultsArray+`
            <div id="row">
                <div id="country">${data.country[i].country_id}</div>
                <div id="probability">${(data.country[i].probability*100).toFixed(2)}%</div>
            </div> 
            `
        }
        // two digit using toFixed
        if (inputName=="") {
            reaction.innerHTML="❌"+`<br><div id="reaction-2">Please input your name</div>`;
        }else{
            results.innerHTML=resultsArray;
        }
    })
}