var btnTranslate = document.querySelector("#btn");
var txtWritten = document.querySelector("#txt-input");
var outputTxt = document.querySelector("#output-id");

// Very Important codee from here to make an api call an output it

serverURL ="https://api.funtranslations.com/translate/minion.json";
// console.log(outputTxt);
function getTraslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function clickedCall(){
    var inputTxt=txtWritten.value;

    fetch(getTraslationURL(inputTxt))
    .then(response=>response.json())
    .then(json=>{
        var translatedTxt=json.contents.translated;
        outputTxt.innerText=translatedTxt;
    })
    
}
btnTranslate.addEventListener("click", clickedCall);