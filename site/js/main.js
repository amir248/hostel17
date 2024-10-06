const siteStatus={};
siteStatus.click=+0;
document.querySelector('#menuSh').addEventListener('click',()=>{
    console.log('oK'+ siteStatus.click);
    siteStatus.click++;
    if(siteStatus.click==1){
        document.querySelector('body').style.cssText='overflow:hidden;';
        document.querySelector('#menuSh > span:nth-child(2)').style.cssText="opacity:0;display:none;transition:ease-out 1s;";
        document.querySelector('#menuSh > span:nth-child(1)').style.cssText="margin:3,4px; transform:rotate(35deg);transition:ease-out 1s;";
        document.querySelector('#menuSh > span:nth-child(3)').style.cssText="margin-top:3,5px;transform:rotate(-35deg);transition:ease-out 1s;";
    let openMenuSh=document.createElement('div');
    openMenuSh.style.cssText=`
        display:flex;
        width:100%;
        height:100vh;
        background:rgba(255,255,255,0.5);
        position:fixed;
        justify-content:center;
        align-items:center;
        font-size:30px;
        z-index:99;
        top:0;
        transition:ease-out 1s;
        flex-direction:column;
    `;
    openMenuSh.setAttribute('id','menuShOpening');
    openMenuSh.innerHTML='There will be a menu here<br><a href="/">home</a> <a href="/#oK">first Link</a>';
    document.querySelector('main').prepend(openMenuSh);
    document.querySelector('#menuShOpening').addEventListener('click',()=>{
        document.querySelector('body').style.cssText=`overflow:auto;`;
        document.querySelector('#menuShOpening').remove();
        siteStatus.click=0;
        document.querySelector('#menuSh > span:nth-child(2)').style.cssText=`
        display:block;
        transition:ease-out 1s;
        opacity:1;
        `;
        document.querySelector('#menuSh > span:nth-child(1)').style.cssText="margin:3,4px; transform:rotate(0deg);transition:ease-out 1s;";
        document.querySelector('#menuSh > span:nth-child(3)').style.cssText="margin-top:3,5px;transform:rotate(0deg);transition:ease-out 1s;";
    });

    }else if(siteStatus.click==2){
        console.log('two');
        // let newLine=document.createElement('span');
        // document.querySelector('#menuSh > span:nth-child(1)').append(newLine);
    }
})