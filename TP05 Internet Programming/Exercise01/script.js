
    const img=document.getElementById("img");
    const activityName=document.getElementById("title");
    const activityType=document.getElementById("type");
    const activityParticpant=document.getElementById("particpants");
    const activityPrice=document.getElementById("price");
    const activityLink=document.getElementById("link");
    const loading=document.getElementById("loading");
    function fetchActivity() {
        loading.hidden=false;
        img.innerHTML="😔";
        activityName.innerHTML="";
        activityType.innerHTML="";
        activityParticpant.innerHTML="";
        activityPrice.innerHTML="";
        activityLink.innerHTML="";
        fetchOpen();
    }
    function fetchOpen() {
        fetch("https://www.boredapi.com/api/activity").then(async(res)=>{
            loading.hidden=true;
            let data = await res.json();
            img.innerHTML="😜";
            activityName.innerHTML=data.activity;
            activityType.innerHTML="+ Type: "+data.type;
            activityParticpant.innerHTML="+ Particpant: "+data.participants;
            activityPrice.innerHTML="+ Price: "+data.price+"$";
            if(data.link===""){
                activityLink.innerHTML="+ Link: "+"Null";
            }else{
                activityLink.innerHTML="+ Link: "+data.link;
            }
        })
    }