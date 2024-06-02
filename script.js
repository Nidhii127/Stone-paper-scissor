console.log("hello");
// let rock=document.querySelector("#rock");
// rock.addEventListener("click",()=>
// {
//     console.log("you selected rock");
// })

// let paper=document.querySelector("#paper");
// paper.addEventListener("click",()=>
// {
//     console.log("you selected paper");
// })

// let scissor=document.querySelector("#scissor");
// scissor.addEventListener("click",()=>
// {
//     console.log("you selected scissor");
// })
let userChoice;
let computerChoice;

let userScore=document.querySelector("#user-score");
let comScore=document.querySelector("#com-score");


const optionArray=["rock","paper","scissor"];
const compChoice=(()=>{
    let arrayId=Math.floor(Math.random()*3);
    computerChoice =optionArray[arrayId];
    console.log("computer selected ",computerChoice);
    gameFlow();
})

let options=document.querySelectorAll(".option");
options.forEach((option)=>{
    option.addEventListener("click",()=>{
        let optionId =option.getAttribute("id");
        userChoice=optionId;
        console.log("user selected",userChoice);
        compChoice();
    })
})

let Us=0;
let Cs=0;
let message=document.querySelector(".msg");
const gameFlow=(()=>{
    

    if (userChoice==computerChoice){
        console.log("its a draw");
        message.innerHTML="It's a draw";

    }
    else if(userChoice=="rock" && computerChoice=="paper"){
        console.log("computer is winner");
        Cs++;
        comScore.innerHTML=Cs;
        message.innerHTML=" Paper beats rock , Computer is the winner";
    

    }
    
    else if(userChoice=="rock" && computerChoice=="scissor"){
        console.log("user is winner");
        Us++;
        userScore.innerHTML=Us
        message.innerHTML=" Rock beats scissor , User is the winner";
    }
     
    else if(userChoice=="paper" && computerChoice=="scissor"){
        console.log("computer is winner");
        Cs++;
        comScore.innerHTML=Cs;
        message.innerHTML=" Scissor beats paper , Computer is the winner";
    }
    else if(userChoice=="paper" && computerChoice=="rock"){
        console.log("user is winner");
        Us++;
        userScore.innerHTML=Us;
        message.innerHTML="Paper beats rock, User is the winner";}

    else if(userChoice=="scissor" && computerChoice=="rock"){
        console.log("computer is winner");
        Cs++;
        comScore.innerHTML=Cs;
        message.innerHTML=" Scissor beats rock , Computer is the winner";}
     
    else {
        console.log("User is the winner") ;
        Us++;
        userScore.innerHTML=Us;
        message.innerHTML="User is the winner";}    
 
 
 
 })

let resetButton=document.querySelector("#reset-btn");
resetButton.addEventListener("click",()=>
    {
       Us=0;
       Cs=0;
       userScore.innerHTML=0;
       comScore.innerHTML=0;

       message.innerHTML="Let's start the game !";
    }
)





