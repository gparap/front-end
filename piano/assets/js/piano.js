// © 2024 gparap

function playNote(note) {
    //get the mp3 file from the note
    let audioSource = "";
    audioSource = "assets/audio/" + note + ".mp3";

    //play the note
    let audio = document.getElementById('audio-player');
    audio.src = audioSource;
    if (audio && typeof audio.play === 'function') {
        audio.play();
    } else {
        //log what went wrong
        audio.addEventListener('error', function (e) {
            if (e.type === 'error') {
                console.error("Error occurred:", e);
            }
        });
    }
}
