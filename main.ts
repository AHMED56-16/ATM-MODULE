import inquirer from "inquirer";

let myBalance:number = 5000;
let myPin=4321;

let pinAnswer=await inquirer.prompt(
    {
    name:"Pin",
    message:"Enter your pin.",
    type:"number",
}
);
if(pinAnswer.Pin === myPin){
    console.log("Correct Pin Code");

    let operationAns=await inquirer.prompt([{
        name:"operation",
        message:"Please select option",
        type:"list",
        choices:["withdraw","check balance","Withdraw 1000"]
    }])
    console.log(operationAns);

    if(operationAns.operation ==="withdraw"){
       let amountAns = await inquirer.prompt (
        [
            {
                name:"amount",
                message:"Enter your amount",
                type:"number"
            }
        ]
    );
    
    if(amountAns.amount > myBalance){
    console.log("Insufficient balance!")
}
else{
    myBalance -= amountAns.amount
    console.log(`Your remaining balance is ${myBalance}`);
}
    

        
    
}else if(operationAns.operation ==="check balance"){
    
    console.log(`Your balance is:${myBalance}`);
    
} else if(operationAns.operation ==="Withdraw 1000")
console.log(myBalance-1000);

}

else{
    console.log("invalid pin number");
    
}