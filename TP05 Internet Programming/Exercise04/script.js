    const demo=document.getElementById("demo");
    const loading=document.getElementById("loading");
    function display() {
        var nameCountry=document.getElementById("name-country").value;
        fetchUniversity(nameCountry);  
        loading.hidden=false;
        demo.innerHTML="";
    }
    function fetchUniversity(counties) {
        let baseURL="http://universities.hipolabs.com/search?country=";
        let url=`${baseURL}${counties}`;
        fetch(url).then(async(res)=>{
            loading.hidden=true;
            let data=await res.json();
            let link="";
            let resultsArray="";
            for(var i=0; i<data.length;i++){
                link=data[i].web_pages;
                resultsArray=resultsArray+`
                <div class="list-wrapper">
                    <div id="name-university">${data[i].name}</div>
                    <div id="country">(${data[i].country}-${data[i].alpha_two_code})</div>
                    <a id="web-page" href="${link}" target="_blank">🌍 ${data[i].web_pages}</a>
                </div>
                `
            }
            demo.innerHTML=resultsArray;
        })
    }