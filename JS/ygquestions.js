(function(){

    const titleQuestion = [...document.querySelectorAll('.questions_title')];
    /*titleQuestion.forEach */

    console.log(titleQuestion);

    titleQuestion.forEach(question =>{
        question.addEventListener('click', () =>{
         let height = 0;
         let answer = question.nextElementSibling;
         let addPAdding = question.parentElement.parentElement;

         addPAdding.classList.toggle('questions_padding--add');
         question.children[0].classList.toggle('questions_arrow--rotate');
         if(answer.clientHeight === 0){
            height = answer.scrollHeight;   
         }

         answer.style.height = `${height}px`;

        });
    });

})();