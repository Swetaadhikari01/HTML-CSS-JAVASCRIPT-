 let userScore=0;
 let compScore=0;

 const choices = document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg");
 const userScorePara=document.querySelector("#user-score");
 const compScorePara=document.querySelector("#comp-score");


 const genCompChoice=()=>{
    //GENERATE RANDOM NUMBER FOR COMPUTER CHOICE
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
 }

const showWinner =(userwin,userChoice,compChoice)=>{
    if(userwin){
        //WIN GAME
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win!:) your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        //LOSE GAME
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lose:/ ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

 const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    //Generate computer choice
    const compChoice=genCompChoice();

    console.log("comp choice =",compChoice);
     
    //ALL CONDITIONS FOR CHECK 

    if(userChoice==compChoice){
        //DRAW GAME
        msg.innerText="Draw match,Play Again";
        msg.style.backgroundColor="#081b31";
    }
    else
    {
        let userwin=true;
        if(userChoice=="rock"){
            //scissor,paper
            userwin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock,scissor
            userwin=compChoice==="scissors"?false:true;
        }else{
            //rock ,paper
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userwin,userChoice,compChoice);
    }
 };

 choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        });
 });