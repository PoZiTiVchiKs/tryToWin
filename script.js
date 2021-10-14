function game(){
    let randNum = parseInt(Math.random() *(100-1) + 1);
    let attemp = 10;
    trying();
    function trying(){
        let userNum = prompt("Введите число.","");
        function checkNum(){
            if(parseFloat(userNum)){
                return Number(userNum);
            } else{
                userNum = prompt("Вы ввели не число. Повторите ввод, сударь","");
                checkNum();

            }
        }
        userNum = checkNum();

        if(userNum > randNum){
            alert("Ваше число больше загаданного, сударь.");
        }else if(userNum < randNum){
            alert("Ваше число меньше загаданного, сударь.");
        }else{
            alert("Ура! Ты победил.");
            return;
        }
        if(attemp == 1){
            alert("У вас кончились попытки. Вы проиграли =(. Попуск");
            if(confirm("Хотите сыграть еще раз?")){
                game();
            }else{
                return;
            }
        }
        alert("У вас осталось " + (--attemp) + " попыток.");
        trying();
    }
}
game();