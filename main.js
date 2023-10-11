var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    if(Content == "Take my selfie."){
       console.log("Taking the image *beep boop beep*");
       speak();
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format: 'png',
    png_quality:90
});

function speak(){
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    setTimeout(function(){
        img_id = "selfie1";
        take_snapshot();
        speak_data = "First image done, get ready for the second image."
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);
    setTimeout(function(){
        img_id = "selfie2";
        take_snapshot();
        speak_data = "Second image taken, buckle up for the third image."
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);
    setTimeout(function(){
        img_id = "selfie3";
        take_snapshot();
        speak_data = "Third and last selfie taken, hooray."
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 15000);

    speak_data = "Starting creation of collage, please pose. First image is processing.";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function take_snapshot(){
    console.log(img_id);
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"></img>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"></img>';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"></img>';
        }
    });
}