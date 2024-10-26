const siteStatus={}; //this object has never been used! 
siteStatus.click=+0;// mabe it's non have

window.addEventListener('DOMContentLoaded',openList);
function openList(){
    return new Promise((resolve)=>{
        function listOk(){
            const openListQuestion=document.createElement('script');
            openListQuestion.src='site/js/openList.js';
            document.querySelector('body').append(openListQuestion);
        };
        resolve(listOk());
    });
};//openList();

function newDate(){
    return new Promise((resolve)=>{
        function okDate(){
            const d = new Date();
            document.querySelector('#year').innerHTML=  `${d.getFullYear()}`;
        }
        setTimeout(()=>{
            resolve(okDate());
        });
    });
};//newDate();
function menu(){
    return new Promise((resolve) => {
            function openMenu(){
                const menu=document.createElement('script');
                menu.src='site/js/menu.js';
                document.querySelector('body').append(menu);
                console.log('0000000000');
            }
        setTimeout(()=>{
            resolve(openMenu());
        },0);
    });
};//menu();

window.addEventListener('DOMContentLoaded',mainFunction);
async function mainFunction(){
    await menu();
    await openListQuestion();

    await newDate();
}//async