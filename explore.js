let whiteNotes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];
let blackNotes = ['Cs4', 'Ds4', 'Fs4', 'Gs4', 'As4'];

window.addEventListener('DOMContentLoaded', () => {
    let whiteKeys = document.querySelectorAll('.whiteKey');
    let blackKeys = document.querySelectorAll('.blackKey');

    const noteAudio = {};
    //new constant array to hold the notes in whiteNotes blackNotes
    [...whiteNotes, ...blackNotes.filter(n => n)].forEach(note => {
        //means filtering out nonzero values from the two arrays and grabbin them
        noteAudio[note] = new Audio(`notes/${note}.mp3`);
        //creates new array and makes the notes into actual notes by grabbing actual audio files
    });

    whiteKeys.forEach((key, i) => {
        //makes an event listener for each key
        //key is grabbing each value from let whiteKeys
        key.addEventListener('mousedown', () => {
            playNote(whiteNotes[i], key);
        });
        key.addEventListener('mouseup', () => {
            key.classList.remove('active');
        });
    });

    blackKeys.forEach((key, i) => {
        key.addEventListener('mousedown', () => {
            playNote(blackNotes[i], key);
        });
        key.addEventListener('mouseup', () => {
            key.classList.remove('active');
        });
    });

    //the function which allows the keys to play notes
    function playNote(note, keyLightup) {
        keyLightup.classList.add('active');
        noteAudio[note].currentTime = 0;
        noteAudio[note].play();
    }
});



