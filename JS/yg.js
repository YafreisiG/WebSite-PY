(function(){

    const yg = [...document.querySelectorAll('.opinion_body')];
    const  buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
   let value;

   buttonNext.addEventListener('click', ()=>{
    changePosition(1);

   });

   buttonBefore.addEventListener('click', ()=>{
    changePosition(-1);

   });

   const changePosition = (add)=>{
    const currentopinion = document.querySelector('.opinion_body--show').dataset.id;
    value = Number(currentopinion);
    value += add;

    yg[Number(currentopinion)-1].classList.remove('opinion_body--show');
    if(value=== yg.length+1 || value === 0){
        value = value === 0  ? yg.length : 1;
    }

    yg[value-1].classList.add('opinion_body--show');
   }

})();

