        const guessName=document.getElementById("name");
        const guessGender=document.getElementById("gender");
        const guessProbability=document.getElementById("probability");
        const img=document.getElementById("img");
        const loading=document.getElementById("loading");
        function fetchNewGender(){
            loading.hidden=false;
            img.innerHTML="🔍";
            guessName.innerHTML="";
            guessGender.innerHTML="";
            guessProbability.innerHTML="";
            var inputData=document.getElementById("myText").value;
            guessTheGender(inputData);
        }
        function guessTheGender(inputData) {
            /* ------------------------------- combian url ------------------------------ */
            let baseURL="https://api.genderize.io?name=";
            let dataFromInput=inputData;
            let url=`${baseURL}${dataFromInput}`;
            // using URL
            fetch(`https://api.genderize.io?name=${inputData}`).then(async(res)=>{
                loading.hidden=true;
                let data=await res.json();
                //famula 
                let probability=100*data.probability;
                
                if(data.gender=="female"){
                    img.innerHTML="👩";
                    guessName.innerHTML=data.name;
                    guessGender.innerHTML=data.gender;
                    guessProbability.innerHTML=probability+"%";
                }else if(data.gender=="male"){
                    img.innerHTML="👦";
                    guessName.innerHTML=data.name;
                    guessGender.innerHTML=data.gender;
                    guessProbability.innerHTML=probability+"%";
                }else{
                    img.innerHTML="❌";
                    guessGender.innerHTML="Please enter your name!";
                }
                
            })
        }