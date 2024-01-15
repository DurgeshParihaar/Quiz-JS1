
const correctanswers = ["Mumbai","Bhopal","Gandhinagar","Bangalore"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const question = document.querySelectorAll(".questions");

form.addEventListener("submit", event => {
    event.preventDefault();
    
    const useranswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    console.log(useranswers);
    let score = 0;

    useranswers.forEach((answer, index) => {
        if(answer === correctanswers[index]){
            score = score + 1;
            question[index].classList.add("correct");

        }else{
            question[index].classList.add("wrong");
        }
    });
    console.log(score);

    scrollTo(0,0);
    result.classList.remove("hide");
    const ptag = result.querySelector("p");
    ptag.textContent = `You've Scored ${score}/4`;
    


})