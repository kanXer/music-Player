console.log("Welcome to spotify");
// initalize the variable\
let songIndex = 0;
let audioElement = new Audio('music/5.mp3');
let masterPlay = document.getElementById(`masterPlay`);
let myProgressBar = document.getElementById(`myProgressBar`);
let gif = document.getElementById(`gif`);
let masterSongname = document.getElementById(`masterSongname`);
let songItem = Array.from(document.getElementsByClassName(`songitem`));


// songs name array to define songs
let songs =[
    {songName:"kbhi jo badal",filePath:"music/1.mp3",coverPath:"img/logoo.jpg"},
    {songName:"Zara-Zara",filePath:"music/2.mp3",coverPath:"img/logoo.jpg"},
    {songName:"We-Rollin",filePath:"music/3.mp3",coverPath:"img/logoo.jpg"},
    {songName:"Pasoori",filePath:"music/4.mp3",coverPath:"img/logoo.jpg"},
    {songName:"Excuses",filePath:"music/5.mp3",coverPath:"img/logoo.jpg"},
    {songName:"No-Love",filePath:"music/6.mp3",coverPath:"img/logoo.jpg"},
    // {songName:"kbhi-jo-badal-barse",filePath:"music/7.mp3",coverPath:"img/logoo.jpg"},
    // {songName:"kbhi-jo-badal-barse",filePath:"music/8.mp3",coverPath:"img/logoo.jpg"},
    // {songName:"kbhi-jo-badal-barse",filePath:"music/9.mp3",coverPath:"img/logoo.jpg"},
]
songItem.forEach((element , i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    // element.getElementsByClassName("timestamp")[0].innerText = audioElement.duration();

});
// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
    };
})

// handle progressbar 
audioElement.addEventListener('timeupdate', ()=>{
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    console.log(progress);

})
// channge song duration using progressbar 
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration)/100);

})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
            element.classList.add("fa-circle-play");

})
}
Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
        masterSongname.innerText = songs[songIndex].songName;
        makeAllPlays();
        index= parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        audioElement.src =`music/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    masterSongname.innerText = songs[songIndex].songName;
    audioElement.src =`music/${songIndex +1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})





document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    masterSongname.innerText = songs[songIndex].songName;
    audioElement.src =`music/${songIndex +1 }.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
    
})

