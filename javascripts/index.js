var score = 19998;

var needs = {'click_val': 1, 'req_clickVal': 5000,
            'rabbitCount': 0, 'req_rabbit': 20, 'req_boostRabbit': 20000, 'multiple_rabbit': 1}

window.setInterval(function(){
    if (score < needs['req_rabbit']) {
        document.getElementById("rabbitButton").disabled = true;
    }
    else {
        document.getElementById("rabbitButton").disabled = false;
    }

    if (score < needs['req_boostRabbit']) {
        document.getElementById("boostRabbitButton").disabled = true;
    }
    else {
        document.getElementById("boostRabbitButton").disabled = false;
    }

    if (score < needs['req_clickVal']) {
        document.getElementById("boostClickButton").disabled = true;
    }
    else {
        document.getElementById("boostClickButton").disabled = false;
    }

    score += parseInt(parseInt(needs['rabbitCount']) * needs['multiple_rabbit']);
    document.getElementById("score").innerHTML = score;  
}, 1000);

function pressed() {
    score += needs['click_val'];
    document.getElementById("score").innerHTML = score;
}

function rabbitPressed() {
    if (score >= needs['req_rabbit']) {
        document.getElementById("rabbitCount").innerHTML = ++needs['rabbitCount'];
        document.getElementById("rabbitElements").innerHTML += `
        <img class="elementIcon" src="images/rabbit.png" alt="Rabbit" style="color: rgb(155, 83, 35)">
        `;
        score -= needs['req_rabbit'];
        req_rabbit = Math.round(needs['req_rabbit'] * 1.12);
        document.getElementById("rabbitButton").innerHTML = `
        ${needs['req_rabbit']}
        <img class="coinIcon" src="images/coin.png" alt="">
        `;
    }
}

function boostClickPressed() {
    if (score >= needs['req_clickVal']) {
        needs['click_val'] *= 2;
        score -= needs['req_clickVal'];
        needs['req_clickVal'] *= 10;
        document.getElementById("boostClickButton").innerHTML = `
        ${needs['req_clickVal']}
        <img class="coinIcon" src="images/coin.png" alt="">
        `;
    }
}

function boostRabbitPressed() {
    if (score >= needs['req_boostRabbit']) {
        needs['multiple_rabbit']++;
        score -= needs['req_boostRabbit'];
        needs['req_boostRabbit'] *= 10;
        document.getElementById("boostRabbitButton").innerHTML = `
        ${needs['req_boostRabbit']}
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
                ${needs['req_clickVal']}
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
                ${needs['req_boostRabbit']}
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