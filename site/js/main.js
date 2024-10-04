const siteStatus={};
siteStatus.click=+0;
document.querySelector('#menuSh').addEventListener('click',()=>{
    console.log('oK'+ siteStatus.click);
    siteStatus.click++;
    if(siteStatus.click==1){
        document.querySelector('#menuSh > span:nth-child(2)').style.cssText="display:none";
    document.querySelector('#menuSh > span:nth-child(1)').style.cssText="margin:3,4px";
    document.querySelector('#menuSh > span:nth-child(3)').style.cssText="margin-top:3,5px";

    }else if(siteStatus.click==2){
        console.log('two')
        document.querySelector('#menuSh > span:nth-child(2)').style.cssText="display:block";
        // let newLine=document.createElement('span');
        // document.querySelector('#menuSh > span:nth-child(1)').append(newLine);
        siteStatus.click=0;
    }
})