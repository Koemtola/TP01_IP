const scrollerElement = document.getElementById("scrollable-wrapper");
const demo=document.getElementById("demo");
const loading=document.getElementById("loader");
const loadingUP=document.getElementById("loader-up");
loading.hidden=false;
let currData=1;
let currPageNum=0;
let sizeOfPage=10;
onLoadData(currPageNum,sizeOfPage);
function onLoadData(currPageNum,sizeOfPage){
    return new Promise((reslove, reject) => {
        let key="data";
        fetch(`https://api.instantwebtools.net/v1/passenger?page=${currPageNum}&size=${sizeOfPage}`).then(async(response)=>{
            let resdataFromAPI=await response.json();

            //convert array from API to a string
            let data=JSON.stringify(resdataFromAPI.data);
            localStorage.setItem(key,data);
        })
        if(currPageNum+1<0){
            page.innerHTML="Page: 0"+(currPageNum+1);
        }else{
            page.innerHTML="Page: "+(currPageNum+1);
        }
        dataFromLocalStorage();
    });
}
function dataFromLocalStorage() {
    for(var k=0 ;k<localStorage.length;k++){
        //call data from local storeage
        let key=localStorage.key(k);
        let value=localStorage.getItem(key);

        //convert string back to an array
        dataConvert=JSON.parse(value);

        let result="";
        for(var i=0 ;i<dataConvert.length;i++){
            result+=`
                <div id="content">
                    <div id="airline-company-name">🚁: ${dataConvert[i].airline[0].name} - ${dataConvert[i].airline[0].country}</div>
                    <div id="passenge-img">😁:<span id="passenger-name"> ${dataConvert[i].name}</span></div>
                </div>
            `;
        }
        demo.innerHTML=result;
        console.log(result);
        loading.hidden=true;
    }
}
function onScroll(){
    if (Math.ceil(scrollerElement.scrollTop + scrollerElement.clientHeight)==scrollerElement.scrollHeight) {
    //to fetch next page from api
        if(currPageNum<=1850){
            onLoadData(currPageNum,sizeOfPage) ;
            dataFromLocalStorage();
            currPageNum=currPageNum+1;
            sizeOfPage=sizeOfPage+10;
            loadingUP.hidden=false;
        }else{
            loadingUP.hidden=false;
        }
    }
}