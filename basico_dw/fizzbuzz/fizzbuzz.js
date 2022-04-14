let nums = 100;
//usando una bandera divisible
//let divisible = false;

for(let i = 1; i <= 100; i++){
    //divisible = false;

    if(esDivisible(i,3) /* i % 3 == 0 */){
        document.write("Fizz ");
        //divisible = true;
    }
    if(esDivisible(i,5) /* i % 5 == 0 */){
        document.write("Buzz");
        //divisible = true;
    }
    if(!esDivisible(i,3) && !esDivisible(i,5) /* i % 3 != 0 && i % 5 != 0 */ /*!divisible*/){
        document.write(i);
    }
    document.write("<br>");
}

function esDivisible(nums, divisor){
    if(nums % divisor == 0){
        return true;
    }else{
        return false;
    }
}