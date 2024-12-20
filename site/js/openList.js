function openList(x){
    const text={};
    text.oneTitle='Оплата:';
    text.oneArticle='Оплатить можно наличными в тенге или по карте виза, мастеркард, американ экспресс.';

    text.twoTitle='Что включено в стоимость номера/места?';
    text.twoArticle='В хостеле предосталяется все самое необходимое: Свежее послельное белье, уютное место, душ, ванная комната, кухня ';

    text.threeTitle='Стирка';
    text.threeArticle='В хостеле 17 есть возможность постирать вещи в стиральной машине со своим порошком. Стоимость стирки 450 тенге.';

    text.fourArticle='Какие документы необходимы для заселения в хостел 17?';
    text.fourTitle='Для заселения необходимо показать документ удостоверяющий личность.';

    text.fiveTitle='Можно ли заселиться с домашними животными.';
    text.fiveAritcle='С домашними животными заселяться не получится. Т.к. они могут мешать другим.';

    text.sixTitle='Можно ли заехать в хостел если мне меньше 18?';
    text.sixAritle='Заехать можно с писменного разрешения родителей.';

    text.sevenTitle='Можно приехать группой?';
    text.sevenArticle='Да, можно приехать групой, зараннее забронировав места, при их наличае.';

    text.eightTitle='Можно приходить и уходить ночью?';
    text.eightArticle='Приходить и уходить ночью можно, для этого есть ключ.';

    document.querySelector('#one').innerHTML=`${text.oneTitle}`;
    document.querySelector('#two').innerHTML=`${text.twoTitle}`;
    document.querySelector('#three').innerHTML=`${text.threeTitle}`;
    document.querySelector('#four').innerHTML=`${text.fourTitle}`;
    document.querySelector('#five').innerHTML=`${text.fiveTitle}`;
    document.querySelector('#six').innerHTML=`${text.sixTitle}`;
    document.querySelector('#seven').innerHTML=`${text.sevenTitle}`;
    document.querySelector('#eight').innerHTML=`${text.eightTitle}`;
    if(x==3){
        document.querySelector('.openingList').style.overflow=`hidden`;
        // console.log('3 ====== Ok');
        document.querySelector('#eight').innerHTML=`${text.eightTitle}`;
        document.querySelector('#seven').innerHTML=`${text.sevenTitle}`;
        document.querySelector('#six').innerHTML=`${text.sixTitle}`;
        document.querySelector('#five').innerHTML=`${text.fiveTitle}`;
        document.querySelector('#four').innerHTML=`${text.fourTitle}`;
        document.querySelector('#three').innerHTML=`${text.threeTitle}`;
        document.querySelector('#two').innerHTML=`${text.twoTitle}`;
        document.querySelector('#one').innerHTML=`${text.oneTitle}` +'<br>'+`${text.oneArticle}`;
    }else if(x==4){
        // console.log('777 '+`${x}`);
        document.querySelector('#eight').innerHTML=`${text.eightTitle}`;
        document.querySelector('#seven').innerHTML=`${text.sevenTitle}`;
        document.querySelector('#six').innerHTML=`${text.sixTitle}`;
        document.querySelector('#five').innerHTML=`${text.fiveTitle}`;
        document.querySelector('#four').innerHTML=`${text.fourTitle}`;
        document.querySelector('#three').innerHTML=`${text.threeTitle}`;
        document.querySelector('#two').innerHTML=`${text.twoTitle}`+'<br>'+`${text.twoArticle}`;
        document.querySelector('#one').innerHTML=`${text.oneTitle}`;
    }else if(x==5){
        // console.log('777 '+`${x}`);
        document.querySelector('#eight').innerHTML=`${text.eightTitle}`;
        document.querySelector('#seven').innerHTML=`${text.sevenTitle}`;
        document.querySelector('#six').innerHTML=`${text.sixTitle}`;
        document.querySelector('#five').innerHTML=`${text.fiveTitle}`;
        document.querySelector('#four').innerHTML=`${text.fourTitle}`;
        document.querySelector('#three').innerHTML=`${text.threeTitle}`+'<br>'+`${text.threeArticle}`;
        document.querySelector('#two').innerHTML=`${text.twoTitle}`;
        document.querySelector('#one').innerHTML=`${text.oneTitle}`;
    }else if(x==6){
        // console.log('777 '+`${x}`);
        document.querySelector('#eight').innerHTML=`${text.eightTitle}`;
        document.querySelector('#seven').innerHTML=`${text.sevenTitle}`;
        document.querySelector('#six').innerHTML=`${text.sixTitle}`;
        document.querySelector('#five').innerHTML=`${text.fiveTitle}`;
        document.querySelector('#four').innerHTML=`${text.fourTitle}`+"<br>"+`${text.fourArticle}`;
        document.querySelector('#three').innerHTML=`${text.threeTitle}`;
        document.querySelector('#two').innerHTML=`${text.twoTitle}`;
        document.querySelector('#one').innerHTML=`${text.oneTitle}`;
    }else if(x==7){
        // console.log('777 '+`${x}`);
        document.querySelector('#eight').innerHTML=`${text.eightTitle}`;
        document.querySelector('#seven').innerHTML=`${text.sevenTitle}`;
        document.querySelector('#six').innerHTML=`${text.sixTitle}`;
        document.querySelector('#five').innerHTML=`${text.fiveTitle}`+"<br>"+`${text.fiveAritcle}`;
        document.querySelector('#four').innerHTML=`${text.fourTitle}`;
        document.querySelector('#three').innerHTML=`${text.threeTitle}`;
        document.querySelector('#two').innerHTML=`${text.twoTitle}`;
        document.querySelector('#one').innerHTML=`${text.oneTitle}`;
    }else if(x==8){
        // console.log('777 '+`${x}`);
        document.querySelector('#eight').innerHTML=`${text.eightTitle}`;
        document.querySelector('#seven').innerHTML=`${text.sevenTitle}`;
        document.querySelector('#six').innerHTML=`${text.sixTitle}`+"<br>"+`${text.sixAritle}`;
        document.querySelector('#five').innerHTML=`${text.fiveTitle}`;
        document.querySelector('#four').innerHTML=`${text.fourTitle}`;
        document.querySelector('#three').innerHTML=`${text.threeTitle}`;
        document.querySelector('#two').innerHTML=`${text.twoTitle}`;
        document.querySelector('#one').innerHTML=`${text.oneTitle}`;
    }else if(x==9){
        // console.log('777 '+`${x}`);
        document.querySelector('#eight').innerHTML=`${text.eightTitle}`;
        document.querySelector('#seven').innerHTML=`${text.sevenTitle}`+"<br>"+`${text.sevenArticle}`;
        document.querySelector('#six').innerHTML=`${text.sixTitle}`;
        document.querySelector('#five').innerHTML=`${text.fiveTitle}`;
        document.querySelector('#four').innerHTML=`${text.fourTitle}`;
        document.querySelector('#three').innerHTML=`${text.threeTitle}`;
        document.querySelector('#two').innerHTML=`${text.twoTitle}`;
        document.querySelector('#one').innerHTML=`${text.oneTitle}`;
    }else if(x==10){
        // console.log('777 '+`${x}`);
        document.querySelector('#eight').innerHTML=`${text.eightTitle}`+"<br>"+`${text.eightArticle}`;
        document.querySelector('#seven').innerHTML=`${text.sevenTitle}`;
        document.querySelector('#six').innerHTML=`${text.sixTitle}`;
        document.querySelector('#five').innerHTML=`${text.fiveTitle}`;
        document.querySelector('#four').innerHTML=`${text.fourTitle}`;
        document.querySelector('#three').innerHTML=`${text.threeTitle}`;
        document.querySelector('#two').innerHTML=`${text.twoTitle}`;
        document.querySelector('#one').innerHTML=`${text.oneTitle}`;
    }else{
        // console.log('ELSE')
    }
    // return document.querySelector('p.openingList:nth-child('+`${x}`+')').addEventListener('click',()=>{
    //     if(x==3){
    //         console.log('777 '+`${x}`);
            
    //     }else if(x==4){
    //         console.log('777 '+`${x}`);
    //         document.querySelector('#two').innerHTML=`${text.twoTitle}`;
    //     }else if(x==5){
    //         console.log('777 '+`${x}`);
    //         document.querySelector('#three').innerHTML=`lorem text and all take
    //         sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
    //         sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
    //         sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
    //         sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j lorem text and all take
    //         sfhoiewahigfnhdsoivga ewoirgtaewiurogftewaf;oiewjpfo j`;
    //     }else{
    //         console.log('ELSE')
    //     }
    // });
    // console.log('list oK');
    
}
openList();