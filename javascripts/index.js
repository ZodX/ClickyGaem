var score = 19998;
var rabbitCount = 0;
var req_rabbit = 20;
var req_boostRabbit = 20000;
var multiple_rabbit = 1;
var click_val = 1;
var req_clickVal = 5000;

window.setInterval(function(){
    if (score < req_rabbit) {
        document.getElementById("rabbitButton").disabled = true;
    }
    else {
        document.getElementById("rabbitButton").disabled = false;
    }

    if (score < req_boostRabbit) {
        document.getElementById("boostRabbitButton").disabled = true;
    }
    else {
        document.getElementById("boostRabbitButton").disabled = false;
    }

    if (score < req_clickVal) {
        document.getElementById("boostClickButton").disabled = true;
    }
    else {
        document.getElementById("boostClickButton").disabled = false;
    }

    score += parseInt(parseInt(rabbitCount) * multiple_rabbit);
    document.getElementById("score").innerHTML = score;  
}, 1000);

function pressed() {
    score += click_val;
    document.getElementById("score").innerHTML = score;
}

function rabbitPressed() {
    if (score >= req_rabbit) {
        document.getElementById("rabbitCount").innerHTML = ++rabbitCount;
        document.getElementById("rabbitElements").innerHTML += `
        <img class="elementIcon" src="images/rabbit.png" alt="Rabbit" style="color: rgb(155, 83, 35)">
        `;
        score -= req_rabbit;
        req_rabbit = Math.round(req_rabbit * 1.12);
        document.getElementById("rabbitButton").innerHTML = `
        ${req_rabbit}
        <img class="coinIcon" src="images/coin.png" alt="">
        `;
    }
}

function boostClickPressed() {
    if (score >= req_clickVal) {
        click_val *= 2;
        score -= req_clickVal;
        req_clickVal *= 10;
        document.getElementById("boostClickButton").innerHTML = `
        ${req_clickVal}
        <img class="coinIcon" src="images/coin.png" alt="">
        `;
    }
}

function boostRabbitPressed() {
    if (score >= req_boostRabbit) {
        multiple_rabbit++;
        score -= req_boostRabbit;
        req_boostRabbit *= 10;
        document.getElementById("boostRabbitButton").innerHTML = `
        ${req_boostRabbit}
        <img class="coinIcon" src="images/coin.png" alt="">
        `;
    }
}

function boostsPressed() {
    document.getElementById("activityContainer").innerHTML = `
    <div class="boostRecord">
        <div class="boostImgContainer">
            <img src="images/poop-emoji-kicsi.png" alt="">
        </div>
        <p class="boostDescription">
            Increase the score gained by clicks. (X2)
        </p>
        <div class="boostBtnContainer">
            <button class="button" id="boostClickButton" onclick="boostClickPressed()" disabled>
                ${req_clickVal}
                <img class="coinIcon" src="images/coin.png" alt="">
            </button>
        </div>
    </div>
    <hr>
    <div class="boostRecord">
        <div class="boostImgContainer">
            <img src="images/rabbit.png" alt="">
        </div>
        <p class="boostDescription">
            Increase the score gained by rabbits. (X2)
        </p>
        <div class="boostBtnContainer">
            <button class="button" id="boostRabbitButton" onclick="boostRabbitPressed()" disabled>
                ${req_boostRabbit}
                <img class="coinIcon" src="images/coin.png" alt="">
            </button>
        </div>
    </div>
    `;
}

function helpPressed() {
    document.getElementById("activityContainer").innerHTML = `
    <h1>THIS IS THE HELP PAGE</h1>
    `;
}