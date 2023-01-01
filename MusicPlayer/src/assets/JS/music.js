console.log('Music Script.....')

let songIndex = 0;
let audioElement = new Audio('assets/songs/1.mp4');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
let songitem = document.querySelectorAll('songItem');
let rorateid = document.getElementById('rorateid');
let songItemPlay = document.getElementsByClassName('songItemPlay');

let songsmp3 = [
    { songName: 'Shape of you', filePath: 'assets/songs/1.mp4', coverPath: 'assets/song1.jpg' },
    { songName: 'Believer', filePath: 'assets/songs/2.mp4', coverPath: 'assets/song2.jpg' },
    { songName: 'Kelly Clarkson - Stronger', filePath: 'assets/songs/3.mp4', coverPath: 'assets/song3.jpg' },
    { songName: 'Journey - Donot Stop Believin', filePath: 'assets/songs/4.mp4', coverPath: 'assets/song4.jpg' },
    { songName: 'Believe', filePath: 'assets/songs/5.mp4', coverPath: 'assets/song6.jpg' },
    { songName: 'Meant for Your', filePath: 'assets/songs/6.mp4', coverPath: 'assets/song5.jpg' },
    { songName: 'The Courage to Push Through', filePath: 'assets/songs/7.mp4', coverPath: 'assets/song5.jpg' },
    { songName: 'Bobby McFerrin - Donot Worry Be Happy', filePath: 'assets/songs/8.mp4', coverPath: 'assets/song1.jpg' },
    { songName: 'Blessed', filePath: 'assets/songs/9.mp4', coverPath: 'assets/song1.jpg' },
    { songName: 'Walk Alone', filePath: 'assets/songs/10.mp4', coverPath: 'assets/song1.jpg' }

]
document.addEventListener('DOMContentLoaded', () => {

    let masterPlay = document.getElementById('masterPlay');
    let rorateid = document.getElementById('rorateid');


    masterPlay.addEventListener('click', (e) => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            rorateid.classList.add('rotate');
            rorateid.classList.add('infinite');
            rorateid.classList.add('linear');

        }
        else {

            audioElement.pause();
            e.target.classList.add('fa-play-circle');
            e.target.classList.remove('fa-pause-circle');


            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            rorateid.classList.remove('rotate');
            rorateid.classList.remove('infinite');
            rorateid.classList.remove('linear');

        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    let songsmp3 = [
        { songName: 'Shape of you', filePath: 'assets/songs/1.mp4', coverPath: 'assets/song1.jpg' },
        { songName: 'Believer', filePath: 'assets/songs/2.mp4', coverPath: 'assets/song2.jpg' },
        { songName: 'Kelly Clarkson - Stronger', filePath: 'assets/songs/3.mp4', coverPath: 'assets/song3.jpg' },
        { songName: 'Journey - Donot Stop Believin', filePath: 'assets/songs/4.mp4', coverPath: 'assets/song4.jpg' },
        { songName: 'Believe', filePath: 'assets/songs/5.mp4', coverPath: 'assets/song6.jpg' },
        { songName: 'Meant for Your', filePath: 'assets/songs/6.mp4', coverPath: 'assets/song5.jpg' },
        { songName: 'The Courage to Push Through', filePath: 'assets/songs/7.mp4', coverPath: 'assets/song5.jpg' },
        { songName: 'Bobby McFerrin - Donot Worry Be Happy', filePath: 'assets/songs/8.mp4', coverPath: 'assets/song1.jpg' },
        { songName: 'Blessed', filePath: 'assets/songs/9.mp4', coverPath: 'assets/song1.jpg' },
        { songName: 'Walk Alone', filePath: 'assets/songs/10.mp4', coverPath: 'assets/song1.jpg' }

    ]

    songIndex = 0;
    let masterSongName = document.getElementById('masterSongName');
    let masterPlay = document.getElementById('masterPlay');

    myProgressBar = document.getElementById('myProgressBar');

    audioElement.addEventListener('timeupdate', () => {
        // Update Seekbar
        progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        myProgressBar.value = progress;
        console.log(myProgressBar.value);

        if (audioElement.currentTime == audioElement.duration) {

            songIndex += 1;
            audioElement.src = `assets/songs/${songIndex + 1}.mp4`;
            masterSongName.innerText = songsmp3[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');

        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    myProgressBar = document.getElementById('myProgressBar');

    myProgressBar.addEventListener('change', () => {
        audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let songsmp3 = [
        { songName: 'Shape of you', filePath: 'assets/songs/1.mp4', coverPath: 'assets/song1.jpg' },
        { songName: 'Believer', filePath: 'assets/songs/2.mp4', coverPath: 'assets/song2.jpg' },
        { songName: 'Kelly Clarkson - Stronger', filePath: 'assets/songs/3.mp4', coverPath: 'assets/song3.jpg' },
        { songName: 'Journey - Donot Stop Believin', filePath: 'assets/songs/4.mp4', coverPath: 'assets/song4.jpg' },
        { songName: 'Believe', filePath: 'assets/songs/5.mp4', coverPath: 'assets/song6.jpg' },
        { songName: 'Meant for Your', filePath: 'assets/songs/6.mp4', coverPath: 'assets/song5.jpg' },
        { songName: 'The Courage to Push Through', filePath: 'assets/songs/7.mp4', coverPath: 'assets/song5.jpg' },
        { songName: 'Bobby McFerrin - Donot Worry Be Happy', filePath: 'assets/songs/8.mp4', coverPath: 'assets/song1.jpg' },
        { songName: 'Blessed', filePath: 'assets/songs/9.mp4', coverPath: 'assets/song1.jpg' },
        { songName: 'Walk Alone', filePath: 'assets/songs/10.mp4', coverPath: 'assets/song1.jpg' }

    ]

    let songIndex = 0;
    let masterSongName = document.getElementById('masterSongName');
    let masterPlay = document.getElementById('masterPlay');
    let rorateid = document.getElementById('rorateid');

    document.getElementById('next').addEventListener('click', () => {
        if (songIndex >= 9) {
            songIndex = 0
        }
        else {
            songIndex += 1;
        }
        audioElement.src = `assets/songs/${songIndex + 1}.mp4`;
        masterSongName.innerText = songsmp3[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        rorateid.classList.add('rotate');
        rorateid.classList.add('infinite');
        rorateid.classList.add('linear');

    });
});

document.addEventListener('DOMContentLoaded', () => {
    let songsmp3 = [
        { songName: 'Shape of you', filePath: 'assets/songs/1.mp4', coverPath: 'assets/song1.jpg' },
        { songName: 'Believer', filePath: 'assets/songs/2.mp4', coverPath: 'assets/song2.jpg' },
        { songName: 'Kelly Clarkson - Stronger', filePath: 'assets/songs/3.mp4', coverPath: 'assets/song3.jpg' },
        { songName: 'Journey - Donot Stop Believin', filePath: 'assets/songs/4.mp4', coverPath: 'assets/song4.jpg' },
        { songName: 'Believe', filePath: 'assets/songs/5.mp4', coverPath: 'assets/song6.jpg' },
        { songName: 'Meant for Your', filePath: 'assets/songs/6.mp4', coverPath: 'assets/song5.jpg' },
        { songName: 'The Courage to Push Through', filePath: 'assets/songs/7.mp4', coverPath: 'assets/song5.jpg' },
        { songName: 'Bobby McFerrin - Donot Worry Be Happy', filePath: 'assets/songs/8.mp4', coverPath: 'assets/song1.jpg' },
        { songName: 'Blessed', filePath: 'assets/songs/9.mp4', coverPath: 'assets/song1.jpg' },
        { songName: 'Walk Alone', filePath: 'assets/songs/10.mp4', coverPath: 'assets/song1.jpg' }

    ]


    let masterSongName = document.getElementById('masterSongName');
    let masterPlay = document.getElementById('masterPlay');
    let rorateid = document.getElementById('rorateid');

    document.getElementById('previous').addEventListener('click', () => {
        if (songIndex <= 0) {
            console.log(songIndex)
            songIndex = 9
        }
        else {
            songIndex -= 1;
        }
        audioElement.src = `assets/songs/${songIndex + 1}.mp4`;
        masterSongName.innerText = songsmp3[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        rorateid.classList.add('rotate');
        rorateid.classList.add('infinite');
        rorateid.classList.add('linear');

    });
});


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        rorateid = document.getElementById('rorateid');
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        rorateid.classList.remove('rotate');
        rorateid.classList.remove('infinite');
        rorateid.classList.remove('linear');
    })
}



document.addEventListener('DOMContentLoaded', () => {

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {

        let songsmp3 = [
            { songName: 'Shape of you', filePath: 'assets/songs/1.mp4', coverPath: 'assets/song1.jpg' },
            { songName: 'Believer', filePath: 'assets/songs/2.mp4', coverPath: 'assets/song2.jpg' },
            { songName: 'Kelly Clarkson - Stronger', filePath: 'assets/songs/3.mp4', coverPath: 'assets/song3.jpg' },
            { songName: 'Journey - Donot Stop Believin', filePath: 'assets/songs/4.mp4', coverPath: 'assets/song4.jpg' },
            { songName: 'Believe', filePath: 'assets/songs/5.mp4', coverPath: 'assets/song6.jpg' },
            { songName: 'Meant for Your', filePath: 'assets/songs/6.mp4', coverPath: 'assets/song5.jpg' },
            { songName: 'The Courage to Push Through', filePath: 'assets/songs/7.mp4', coverPath: 'assets/song5.jpg' },
            { songName: 'Bobby McFerrin - Donot Worry Be Happy', filePath: 'assets/songs/8.mp4', coverPath: 'assets/song1.jpg' },
            { songName: 'Blessed', filePath: 'assets/songs/9.mp4', coverPath: 'assets/song1.jpg' },
            { songName: 'Walk Alone', filePath: 'assets/songs/10.mp4', coverPath: 'assets/song1.jpg' }

        ]

        masterSongName = document.getElementById('masterSongName');
        masterPlay = document.getElementById('masterPlay');
        rorateid = document.getElementById('rorateid');


        //testing
        element.addEventListener('click', (e) => {
            makeAllPlays();

            songIndex = parseInt(e.target.id);
            if (audioElement.paused) {

                // console.log(songIndex);
                e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-pause-circle');
                audioElement.src = `assets/songs/${songIndex + 1}.mp4`;
                masterSongName.innerText = songsmp3[songIndex].songName;
                audioElement.currentTime = 0;
                audioElement.play();
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
                rorateid.classList.add('rotate');
                rorateid.classList.add('infinite');
                rorateid.classList.add('linear');
            }

            else {
                e.target.classList.add('fa-play-circle');
                e.target.classList.remove('fa-pause-circle');

                audioElement.src = `assets/songs/${songIndex + 1}.mp4`;
                masterSongName.innerText = songsmp3[songIndex].songName;
                audioElement.currentTime = 0;
                audioElement.pause();
                masterPlay.classList.add('fa-play-circle');
                masterPlay.classList.remove('fa-pause-circle');
                rorateid.classList.remove('rotate');
                rorateid.classList.remove('infinite');
                rorateid.classList.remove('linear');

            }
        });

    });
});
