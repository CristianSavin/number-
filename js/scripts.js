let save = 500.00;
let money = prompt("How much money?");
let money_float = parseFloat(money);
let result = save - money_float;


if(isNaN(money)){
    alert("Suma introdusa de dvs nu este acceptabila");
}
else if(money == "" || isNaN(money) || money === null){
    alert("Tranzactie anulata!");
}
else if(money_float <= 0){
    alert("Suma introdusa de dvs nu este acceptabila");
}
else{
    if(money <= save){
        alert("Suma extrasa este" + " " + money_float + " \n" +
            "suma ramasa in cont este" + " " + result
        );
    }
    else if(money_float > save){
        alert("Suma pentru extragere este prea mare");
    }
}