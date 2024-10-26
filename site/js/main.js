const siteStatus={}; //this object has never been used! 
siteStatus.click=+0;// mabe it's non have

// window.addEventListener('DOMContentLoaded',openList);
function openList(){
    return new Promise((resolve)=>{
        function listOk(){
            const openListQuestion=document.createElement('script');
            openListQuestion.src='site/js/openList.js';
            document.querySelector('body').append(openListQuestion);
        };
        setTimeout(()=>{
          resolve(listOk());
        },0);
    });
};//openList();

function newsDate(){
    return new Promise((resolve)=>{
        function okDate(){
                // console.log('oK Date here');
            const d = new Date();
            document.querySelector('#year').innerHTML=  `${d.getFullYear()}`;
            // console.log('vLog!!!!!');
        }
        setTimeout(()=>{
            resolve(okDate());
        },3000);
    });
};//newDate();
            // const d = new Date();
            // document.querySelector('#year').innerHTML=  `${d.getFullYear()}`;
function menu(){
    return new Promise((resolve) => {
            function openMenu(){
                const menu=document.createElement('script');
                menu.src='site/js/menu.js';
                document.querySelector('body').append(menu);
            }
        setTimeout(()=>{
            resolve(openMenu());
        },0);
    });
};//menu();

window.addEventListener('DOMContentLoaded',mainFunction);
async function mainFunction(){
    await menu();
    await openList();

    await newsDate();
}//async