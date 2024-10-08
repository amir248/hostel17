const siteStatus={};
siteStatus.click=+0;// mabe it's non have
// siteStatus.oKclick='true';
document.querySelector('#menuSh').addEventListener('click',()=>{
    
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

});
// document.querySelector('#plus').addEventListener('click',openList(x));.

function openList(x){
    if(x==3){
        console.log('3 ====== Ok');
        document.querySelector('#eight').innerHTML=`lorem text and all take`;
        document.querySelector('#seven').innerHTML=`lorem text and all take`;
        document.querySelector('#six').innerHTML=`lorem text and all take`;
        document.querySelector('#five').innerHTML=`lorem text and all take`;
        document.querySelector('#four').innerHTML=`lorem text and all take`;
        document.querySelector('#three').innerHTML=`lorem text and all take`;
        document.querySelector('#two').innerHTML=`lorem text and all take`;
        document.querySelector('#one').innerHTML=`lorem text and all take
            sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
            sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
            sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
            sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
            sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j`;
    }else if(x==4){
        console.log('777 '+`${x}`);
        document.querySelector('#eight').innerHTML=`lorem text and all take`;
        document.querySelector('#seven').innerHTML=`lorem text and all take`;
        document.querySelector('#six').innerHTML=`lorem text and all take`;
        document.querySelector('#five').innerHTML=`lorem text and all take`;
        document.querySelector('#four').innerHTML=`lorem text and all take`;
        document.querySelector('#three').innerHTML=`lorem text and all take`;
        document.querySelector('#two').innerHTML=`lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j`;
        document.querySelector('#one').innerHTML=`lorem text and all take`;
    }else if(x==5){
        console.log('777 '+`${x}`);
        document.querySelector('#eight').innerHTML=`lorem text and all take`;
        document.querySelector('#seven').innerHTML=`lorem text and all take`;
        document.querySelector('#six').innerHTML=`lorem text and all take`;
        document.querySelector('#five').innerHTML=`lorem text and all take`;
        document.querySelector('#four').innerHTML=`lorem text and all take`;
        document.querySelector('#three').innerHTML=`lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j`;
        document.querySelector('#two').innerHTML=`lorem text and all take`;
        document.querySelector('#one').innerHTML=`lorem text and all take`;
    }else if(x==6){
        console.log('777 '+`${x}`);
        document.querySelector('#eight').innerHTML=`lorem text and all take`;
        document.querySelector('#seven').innerHTML=`lorem text and all take`;
        document.querySelector('#six').innerHTML=`lorem text and all take`;
        document.querySelector('#five').innerHTML=`lorem text and all take`;
        document.querySelector('#four').innerHTML=`lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j`;
        document.querySelector('#three').innerHTML=`lorem text and all take`;
        document.querySelector('#two').innerHTML=`lorem text and all take`;
        document.querySelector('#one').innerHTML=`lorem text and all take`;
    }else if(x==7){
        console.log('777 '+`${x}`);
        document.querySelector('#eight').innerHTML=`lorem text and all take`;
        document.querySelector('#seven').innerHTML=`lorem text and all take`;
        document.querySelector('#six').innerHTML=`lorem text and all take`;
        document.querySelector('#five').innerHTML=`lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j`;
        document.querySelector('#four').innerHTML=`lorem text and all take`;
        document.querySelector('#three').innerHTML=`lorem text and all take`;
        document.querySelector('#two').innerHTML=`lorem text and all take`;
        document.querySelector('#one').innerHTML=`lorem text and all take`;
    }else if(x==8){
        console.log('777 '+`${x}`);
         document.querySelector('#eight').innerHTML=`lorem text and all take`;
        document.querySelector('#seven').innerHTML=`lorem text and all take`;
        document.querySelector('#six').innerHTML=`lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j`;
        document.querySelector('#five').innerHTML=`lorem text and all take`;
        document.querySelector('#four').innerHTML=`lorem text and all take`;
        document.querySelector('#three').innerHTML=`lorem text and all take`;
        document.querySelector('#two').innerHTML=`lorem text and all take`;
        document.querySelector('#one').innerHTML=`lorem text and all take`;
    }else if(x==9){
        console.log('777 '+`${x}`);
        document.querySelector('#eight').innerHTML=`lorem text and all take`;
        document.querySelector('#seven').innerHTML=`lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j`;
        document.querySelector('#six').innerHTML=`lorem text and all take`;
        document.querySelector('#five').innerHTML=`lorem text and all take`;
        document.querySelector('#four').innerHTML=`lorem text and all take`;
        document.querySelector('#three').innerHTML=`lorem text and all take`;
        document.querySelector('#two').innerHTML=`lorem text and all take`;
        document.querySelector('#one').innerHTML=`lorem text and all take`;
    }else if(x==10){
        console.log('777 '+`${x}`);
        document.querySelector('#eight').innerHTML=`lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
        sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j`;
        document.querySelector('#seven').innerHTML=`Text from seven`;
        document.querySelector('#six').innerHTML=`lorem text and all take`;
        document.querySelector('#five').innerHTML=`lorem text and all take`;
        document.querySelector('#four').innerHTML=`lorem text and all take`;
        document.querySelector('#three').innerHTML=`lorem text and all take`;
        document.querySelector('#two').innerHTML=`lorem text and all take`;
        document.querySelector('#one').innerHTML=`lorem text and all take`;
    }else{
        console.log('ELSE')
    }
    return document.querySelector('p.openingList:nth-child('+`${x}`+')').addEventListener('click',()=>{
        if(x==3){
            console.log('777 '+`${x}`);
            
        }else if(x==4){
            console.log('777 '+`${x}`);
            document.querySelector('#two').innerHTML=`lorem text and all take
            sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
            sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
            sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
            sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
            sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j`;
        }else if(x==5){
            console.log('777 '+`${x}`);
            document.querySelector('#three').innerHTML=`lorem text and all take
            sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
            sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
            sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
            sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
            sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j`;
        }else{
            console.log('ELSE')
        }
    });
    console.log('list oK');
    
}
// openList();