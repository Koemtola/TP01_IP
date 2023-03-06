const scrollerElement = document.getElementById("scrollable-wrapper");
const demo=document.getElementById("demo");
const demoTwo=document.getElementById("demo-2");
const loadingUP=document.getElementById("loader-up");
let currPageNum=1;
let sizeOfPage=10;
onLoadData(currPageNum,sizeOfPage);
function onLoadData(currPageNum,sizeOfPage) {
    let key="data"
    return new Promise((reslove, reject) => {
        fetch(`https://api.punkapi.com/v2/beers?page=${currPageNum}&per_page=${sizeOfPage}`).then(async(response)=>{
            let resdataFromAPI=await response.json();

            // convert array from API to a string in local storage
            let data=JSON.stringify(resdataFromAPI);
            localStorage.setItem(key,data);
        })
    dataFromLocalStorage();
    });
}
function dataFromLocalStorage() {
    for(var k=0 ;k<localStorage.length;k++){

        // call data from local storeage
        let key=localStorage.key(k);
        let value=localStorage.getItem(key);

        // convert string back to an array
        dataConvert=JSON.parse(value);

        let result="";
        for(var i=0 ;i<dataConvert.length;i++){
            // display only 50 charactor of a long string
            let str=`${dataConvert[i].description}`;
            if(str.length>10){
                str=str.substring(0,50)+" ..."
            }else{
                str=str;
            }
            result+=`
            <div id="content" onclick="whenOnclick(${i});">
                <div id="beer-img">🍻</div>
                <div>
                    <div id="beer-title">${dataConvert[i].name}</div>
                    <div id="beer-descrition">${str}</div>
                </div>
            </div>
            `;
        }
        demo.innerHTML=result;
    }
}
function whenOnclick(i){
    // console.log(id);
    for(var k=0 ;k<localStorage.length;k++){

    // call data from local storeage
    let key=localStorage.key(k);
    let value=localStorage.getItem(key);

    // convert string back to an array
    dataConvert=JSON.parse(value);
    // console.log(dataConvert[9].id); 
    let result="";
    if(dataConvert[i].id){
        result+=`
        <div class="content">
            <div class="img">
                <img id="img" src="${dataConvert[i].image_url}" alt="">        
            </div>
            <div id="title">${dataConvert[i].name}</div>
            <div id="first_brewed">${dataConvert[i].first_brewed}</div>
            <div id="description">${dataConvert[i].description}</div>
            <div id="contributed_by">Contibutor</div>
            <div id="name">${dataConvert[i].contributed_by}</div>
        </div>
        `;
    }
    demoTwo.innerHTML=result;
    }
} 
function onScroll(){
    if (Math.ceil(scrollerElement.scrollTop + scrollerElement.clientHeight)==scrollerElement.scrollHeight) {
    // to fetch next page from api
        loadingUP.hidden=false;
        if(currPageNum<=7){
            onLoadData(currPageNum,sizeOfPage) ;
            dataFromLocalStorage();
            currPageNum++;
            sizeOfPage=sizeOfPage+10;
        }else{
            loadingUP.hidden=false;
        }
    }
}