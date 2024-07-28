async function getTimeStamp() {
    var timeStamp = Math.round(new Date() / 1000)   // getTimeStamp
    console.log("TimeStamp: ", timeStamp);
    //GetTimeStamp
    //Encrypt
    var result = timeStamp * 3217890;
    console.log("Ecypt: ", result);
    var inputElement = document.querySelector('.rstTimeStamp');
    inputElement.value = result;   //set timeStamp_s into html.input
}
