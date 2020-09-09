var cnv;

function setup() {
    cnv = createCanvas(windowWidth,windowHeight);
    background(150);
    cnv.mouseClicked(playCMajorScale);

}

function draw (){

}


function playCMajorScale(){
    var synth = new Tone.Synth().toMaster();
    var myScale = ['C4','D4','E4','F4','G4','A4','B4','C5'];//D major = D E F# G A B C# (D) (no flat names used)
    var patternMenu = document.getElementById("melodicPattern");
    var patternName = patternMenu.options[patternMenu.selectedIndex].value;

    var pattern = new Tone.Pattern(function(time, note){
        //the order of the notes passed in depends on the pattern
        synth.triggerAttackRelease(note, "4n", time);
    }, myScale, patternName).start(0);

    var tempo = document.myForm.tempo.value;
    Tone.Transport.bpm.value = tempo
    synth.volume.value = document.myForm.volume.value;
    Tone.Transport.start("+0.1");
}