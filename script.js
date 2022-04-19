var words = ["silent", "hum", "spiders", "plough", "harmonious", "hole", "car",
    "add", "heat", "idiotic", "untidy", "cheese", "cool", "stare", "share", "brainy",
    "dress", "wrathful", "elegant", "haircut", "discover", "free", "person", "appear",
    "reading", "learned", "snore", "rub", "flat", "vessel", "self", "zonked", "yielding",
    "north", "curvy", "religion", "radiate", "humorous", "hissing", "horrible",
    "foregoing", "noise", "abandoned", "crown", "rule", "quince", "chicken", "cellar",
    "accessible", "sky", "pack", "abstracted", "day", "selfish", "greet", "automatic",
    "dust", "knock", "fearless", "tickle", "rinse", "power", "drab", "uninterested",
    "wrong", "veil", "pies", "offend", "decision", "roof", "nosy", "quiet", "receipt",
    "night", "road", "tap", "lethal", "governor", "capricious", "resolute", "bells",
    "wasteful", "tiny", "ready", "mere", "useful", "obtain", "married", "remarkable",
    "label", "country", "jealous", "useless", "stick", "cagey", "question", "deserted",
    "prick", "dysfunctional", "gabby"]


var sentence = ''
function generateNewWords(times, freq) {
    var len = sentence.length
    sentence = ''
    for (var i = 0; i < 50; i++) {
        var rand = Math.floor(Math.random() * 100)
        sentence = sentence + words[rand] + ' '
    }
    if(times === 1) {
        for (var i = 0; i < sentence.length; i++) {
            var newEle = document.createElement('letter');
            newEle.classList = "letter" + i
            newEle.innerHTML = sentence[i];
            document.querySelector('.typing-box').appendChild(newEle)
        }
    } else {
        for (var i = 0; i < sentence.length; i++) {
            var newEle = document.createElement('letter');
            newEle.classList = "letter" + (freq + i)
            newEle.innerHTML = sentence[i];
            document.querySelector('.typing-box').appendChild(newEle)
        }
    }
}
generateNewWords(1)


var x = 0;
var pre = 0;
document.body.addEventListener('keydown', (e) => {
    var key = e.key;
    // console.log(key)

    if (key === 'Backspace') {
        if (x != 0) {
            x--;
            document.querySelector(`.letter${x+pre}`).style.color = "#939eae"
        }

    } else {
        if (key === sentence[x]) {
            console.log(x+pre)

            document.querySelector(`.letter${x+pre}`).style.color = "white"
            x++;
        } else {
            console.log(x+pre)
            document.querySelector(`.letter${x+pre}`).style.color = "red"
            x++;
        }
    }
    if(x === sentence.length-1) {
        pre = pre + (x+1);
        x=0;
        generateNewWords(2, pre)
    }
})


function textAlignCenter() {
    document.querySelector('.typing-box').classList.toggle("align-center")
}


var fs = 20;
function decreaseFont() {
    fs-=1;
    document.querySelector('.typing-box').style.fontSize = fs + "px"
}
function increaseFont() {
    fs+=1;
    document.querySelector('.typing-box').style.fontSize = fs + "px"
}