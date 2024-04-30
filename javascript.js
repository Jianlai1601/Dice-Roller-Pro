function rolling(){
    const diceNum = document.getElementById("diceNum").value;
    const result = document.getElementById("result");
    const diceImages = document.getElementById("diceImages");
    const results = [];
    const images = [];
    if(diceNum > 6 | diceNum < 1){
        result.textContent = `Nice try but it won't work`
        diceImages.innerHTML = `<img id="stopIt" src="images/stop_it.gif">`;
        document.getElementById("stopIt").style.width = "350px";
    }
    else{
        for (i=0; i<diceNum; i++){
            const randomNum = Math.floor(Math.random() * 6) + 1;
            results.push(randomNum);
            images.push(`<img src="images/${randomNum}.jpg" alt="Dice ${randomNum}">`);
        }
    
        result.textContent = `Dice: ${results.join(`, `)}`;
        diceImages.innerHTML = images.join(``);
    }
    
}