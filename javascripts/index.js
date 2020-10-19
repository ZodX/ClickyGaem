var score = 100000;

var needs = {'click_val': 1, 'req_clickVal': 5000,
            'rabbitCount': 0, 'req_rabbit': 20, 'req_boostRabbit': 20000, 'multiple_rabbit': 1,
            'dogCount': 0, 'req_dog': 100, 'req_boostDog': 50000, 'multiple_dog': 4}

window.setInterval(function(){
    if (score < needs['req_rabbit']) {
        document.getElementById("rabbitButton").disabled = true;
    }
    else {
        document.getElementById("rabbitButton").disabled = false;
    }

    if (score < needs['req_dog']) {
        document.getElementById("dogButton").disabled = true;
    }
    else {
        document.getElementById("dogButton").disabled = false;
    }

    if (score < needs['req_boostRabbit']) {
        document.getElementById("boostRabbitButton").disabled = true;
    }
    else {
        document.getElementById("boostRabbitButton").disabled = false;
    }

    if (score < needs['req_boostDog']) {
        document.getElementById("boostDogButton").disabled = true;
    }
    else {
        document.getElementById("boostDogButton").disabled = false;
    }

    if (score < needs['req_clickVal']) {
        document.getElementById("boostClickButton").disabled = true;
    }
    else {
        document.getElementById("boostClickButton").disabled = false;
    }

    score += parseInt(parseInt(needs['rabbitCount']) * needs['multiple_rabbit']);
    score += parseInt(parseInt(needs['dogCount']) * needs['multiple_dog']);
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
        needs['req_rabbit'] = Math.round(needs['req_rabbit'] * 1.12);
        document.getElementById("rabbitButton").innerHTML = `
        ${needs['req_rabbit']}
        <img class="coinIcon" src="images/coin.png" alt="">
        `;
    }
}

function dogPressed() {
    if (score >= needs['req_dog']) {
        document.getElementById("dogCount").innerHTML = ++needs['dogCount'];
        document.getElementById("dogElements").innerHTML += `
        <img class="elementIcon" src="images/dog.png" alt="Dog" style="color: rgb(155, 83, 35)">
        `;
        score -= needs['req_dog'];
        needs['req_dog'] = Math.round(needs['req_dog'] * 1.12);
        document.getElementById("dogButton").innerHTML = `
        ${needs['req_dog']}
        <img class="coinIcon" src="images/coin.png" alt="">`;
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
        needs['multiple_rabbit'] *= 2;
        score -= needs['req_boostRabbit'];
        needs['req_boostRabbit'] *= 10;
        document.getElementById("boostRabbitButton").innerHTML = `
        ${needs['req_boostRabbit']}
        <img class="coinIcon" src="images/coin.png" alt="">
        `;
    }
}

function boostDogPressed() {
    if (score >= needs['req_boostDog']) {
        needs['multiple_dog'] *= 2;
        score -= needs['req_boostDog'];
        needs['req_boostDog'] *= 10;
        document.getElementById("boostDogButton").innerHTML = `
        ${needs['req_boostDog']}
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
    <hr>
    <div class="boostRecord">
        <div class="boostImgContainer">
            <img src="images/dog.png" alt="">
        </div>
        <p class="boostDescription">
            Increase the score gained by dogs. (X2)
        </p>
        <div class="boostBtnContainer">
            <button class="button" id="boostDogButton" onclick="boostDogPressed()" disabled>
                ${needs['req_boostDog']}
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