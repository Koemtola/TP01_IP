const scrollerElement = document.getElementById("scrollable-wrapper");
const demo=document.getElementById("demo");
const loading=document.getElementById("loader");
const loadingUP=document.getElementById("loader-up");
const page=document.getElementById("page");
let currPageNum=0;
let sizeOfPage=10;
loading.hidden=false;
fetchAPI(currPageNum,sizeOfPage);
function fetchAPI(currPageNum,sizeOfPage) {
    return new Promise((reslove, reject) => {
        fetch(`https://api.instantwebtools.net/v1/passenger?page=${currPageNum}&size=${sizeOfPage}`).then(async(response)=>{
            let resdata=await response.json();
            let result="";
            for(var i=0 ;i<resdata.data.length;i++){
                result+=`
                    <div id="content">
                        <div id="airline-company-name">🚁: ${resdata.data[i].airline[0].name} - ${resdata.data[i].airline[0].country}</div>
                        <div id="passenge-img">😁:<span id="passenger-name"> ${resdata.data[i].name}</span></div>
                    </div>
                `;
            }
            if(currPageNum+1<10){
                page.innerHTML="Page: 0"+(currPageNum+1);
            }else{
                page.innerHTML="Page: "+(currPageNum+1);
            }
            demo.innerHTML=result;
            loading.hidden=true;
        })
    });
}
function onScroll() {
    if (Math.ceil(scrollerElement.scrollTop + scrollerElement.clientHeight) == scrollerElement.scrollHeight){
    //to fetch next page from api
        if(currPageNum<=1850){
            fetchAPI(currPageNum,sizeOfPage) ;
            currPageNum=currPageNum+1;
            sizeOfPage=sizeOfPage+10;
            loadingUP.hidden=false;
        }else{
            loadingUP.hidden=false;
        }
    }
}