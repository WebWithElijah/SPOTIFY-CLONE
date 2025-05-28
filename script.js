console.log("Let's Write JavaScript")
let librarySongs;

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    // Add leading zeros if needed
    const formattedMins = mins < 10 ? '0' + mins : mins;
    const formattedSecs = secs < 10 ? '0' + secs : secs;

    return `${formattedMins}:${formattedSecs}`;
}


async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/SONGS/")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)
        }

    }
    return songs()
}


async function main() {

    let librarySongs = [
        {
            title: "1. Jhol",
            artist: "Maanu x Annural Khalid",
            file: "SONGS/Jhol  Coke Studio Pakistan  Season 15  Maanu x Annural Khalid.mp3"
        },
        {
            title: "2. Tera Chehra",
            artist: "Himesh Reshammiya, Arijit Singh",
            file: "SONGS/Himesh Reshammiya, Arijit Singh - Tera Chehra (Lyric Video) copy.mp3"
        },
        {
            title: "3. Espresso",
            artist: "Sabrina Carpenter",
            file: "SONGS/Sabrina Carpenter - Espresso (Official Video).mp3"
        },
        {
            title: "4. Pretty Little Baby",
            artist: "Connie Francis",
            file: "SONGS/Connie Francis - Pretty Little Baby (Lyrics).mp3"
        },
        {
            title: "5. Ranjhan",
            artist: "Shaheer Sheikh  Parampara Tandon",
            file: "SONGS/Do Patti_ Raanjhan (Full Video) Kriti Sanon, Shaheer Sheikh  Parampara Tandon  Sachet-Parampara.mp3"
        },
        {
            title: "6. Finding Her",
            artist: "Kushagra  Vanshika Kashyap  Bharat",
            file: "SONGS/Finding Her (Official Video) _ Kushagra  Vanshika Kashyap  Bharat  UR Debut.mp3"
        },
        {
            title: "7. Teri Yaad",
            artist: "Aditya Rikhari",
            file: "SONGS/Aditya Rikhari  TERI YAAD (Video).mp3"
        },
        {
            title: "8. Faasle",
            artist: "Aditya Rikhari",
            file: "SONGS/Aditya Rikhari - FAASLE.mp3"
        },
        {
            title: "9. Paaro",
            artist: "Aditya Rikhari",
            file: "SONGS/Aditya Rikhari - Paaro (Official Video).mp3"
        },
        {
            title: "10. Samjho Na",
            artist: "Aditya Rikhari",
            file: "SONGS/Aditya Rikhari - SAMJHO NA ( NASAMAJH ).mp3"
        },
        {
            title: "11. Pal Pal",
            artist: "Afusic",
            file: "SONGS/Afusic - Pal Pal (Official Music Video) Prod. @AliSoomroMusic.mp3"
        },
        {
            title: "12. Baarishein",
            artist: "Anuv Jain",
            file: "SONGS/Anuv Jain - BAARISHEIN (ACOUSTIC).mp3"
        },
        {
            title: "13. Apa Fer Milaange",
            artist: "Savi Kahlon",
            file: "SONGS/New Punjabi Songs 2024  Apa Fer Milaange (Lyrics VIDEO) Savi kahlon  Latest Punjabi Songs 2023.mp3"
        },
        {
            title: "14. Dost Banke",
            artist: "Rahat Fateh Ali Khan X Gurnazar  Priyanka Chahar Choudhary",
            file: "SONGS/Dost Banke (Official Video) _ Rahat Fateh Ali Khan X Gurnazar  Priyanka Chahar Choudhary.mp3"
        },
        {
            title: "15. Kabhi Kabhi",
            artist: "AUR",
            file: "SONGS/Kabhi Kabhi - AUR  Official Music Video.mp3"
        },
        {
            title: "16. Kahani Suno",
            artist: "Kaifi Khalil",
            file: "SONGS/Kaifi Khalil - Kahani Suno 2.0 [Official Music Video].mp3"
        },
        {
            title: "17. Laapata",
            artist: "Arshman Naeem",
            file: "SONGS/LAAPATA - Arshman Naeem.mp3"
        },
        {
            title: "18. Phir Bhi Tumko Chahunga",
            artist: "Arijit Singh",
            file: "SONGS/Phir Bhi Tumko Chaahunga - Full Song  Arijit Singh  Arjun K & Shraddha K  Mithoon, Manoj M.mp3"
        },
        {
            title: "19. Tu Hai Kahan",
            artist: "Shuddhi Music",
            file: "SONGS/TU HAI KAHAN  Reply Version  Female  New Lyrics.mp3"
        },
        {
            title: "20. Tumhe Dillagi",
            artist: "Rahat Fateh Ali Khan",
            file: "SONGS/Tumhe Dillagi Full Song with Lyrics  Rahat Fateh Ali Khan  Huma Qureshi, Vidyut Jammwal.mp3"
        },
        {
            title: "21. Until I found You",
            artist: "Stephen Sanchez",
            file: "SONGS/Stephen Sanchez - Until I Found You (Official Video).mp3"
        },
        {
            title: "22. Blue",
            artist: "Yung Kai",
            file: "SONGS/yung kai - blue (official music video).mp3"
        },
        {
            title: "23. Die With A Smile",
            artist: "Lady Gaga, Bruno Mars",
            file: "SONGS/Lady Gaga, Bruno Mars - Die With A Smile (Lyrics).mp3"
        },
        {
            title: "24. Ajib Daastan Hai Ye",
            artist: "Lata Mangeshkar",
            file: "SONGS/Ajib Dastan Hai Yeh - Slowed  Reverb  Lata Mangeshkar  60's Hits  Instagram Hits.mp3"
        },
        {
            title: "25. Jo Tum Mere Ho",
            artist: "Anuv Jain",
            file: "SONGS/Anuv Jain - JO TUM MERE HO (Lyrics).mp3"
        },
        {
            title: "26. Baat",
            artist: "Asim Azhar",
            file: "SONGS/Baat (Haan Mohabbat Par Yaqeen) - Meem Se Mohabbat (Climax Version)  Asim Azhar  Beqarar Yeh Dil.mp3"
        },
        {
            title: "27. Deewane Hum Nahi Hote",
            artist: "Aditya Yadav",
            file: "SONGS/Deewane Hum Nahi Hote (Slow and Reverb)  Lofi  Hindi - (Slow and Reverb) songs  Lyrical Audio.mp3"
        },
        {
            title: "28. Deewani Mastani",
            artist: "Bajirao Mastani",
            file: "SONGS/Deewani Mastani Full Video Song  Bajirao Mastani  Deepika Padukone.mp3"
        },
        {
            title: "29. Malang",
            artist: "Aditya Roy Kapur, Disha Patani, Anil K, Kunal K",
            file: "SONGS/Full Video_ Malang (Title Track) Aditya Roy Kapur, Disha Patani, Anil K, Kunal K  Ved S  Mohit S.mp3"
        },
        {
            title: "30. Humari Adhuri Kahani",
            artist: "Arijit Singh",
            file: "SONGS/Hamari Adhuri Kahani - Lyrical Song  Arjit Singh  Emraan Hashmi, Vidya Balan  Jeet Gannguli.mp3"
        },
        {
            title: "31. Nahi Milta",
            artist: "Asfar Hussain",
            file: "SONGS/Jisko Jo Bhi Milta Hai (Official Video) Bayaan, Asfar Hussain  Nahin Milta  Sabko Sab Nahi Milta.mp3"
        },
        {
            title: "32. Teri Deewani",
            artist: "Kailash Kher",
            file: "SONGS/Kailash Kher - Teri Deewani (Lyrics).mp3"
        },
        {
            title: "33. Mera Yaar",
            artist: "Farhan Akhtar, Sonam KapoorJaved Bashir",
            file: "SONGS/Mera Yaar Lyric Video - Bhaag Milkha BhaagFarhan Akhtar, Sonam KapoorJaved Bashir.mp3"
        },
        {
            title: "34. Teri Meri Kahani",
            artist: "Arijit Singh",
            file: "SONGS/Teri Meri Kahaani Hai Baarishon Ka Paani - Arijit Singh  Gabbar Is Back  Akshay Kumar & Kareena K.mp3"
        },
        {
            title: "35. Tum Hi Ho",
            artist: "Aashiqui 2",
            file: "SONGS/Tum Hi Ho Aashiqui 2 Full Song With Lyrics  Aditya Roy Kapur, Shraddha Kapoor.mp3"
        },
        {
            title: "36. Ye Tune Kya Kiya",
            artist: "Javed Bashir",
            file: "SONGS/Ye Tune Kya Kiya - Javed Bashir (Lyrics)  Lyrical Bam Hindi.mp3"
        }
    ];

    const songListElement = document.querySelector('.songList ul');
    const audio = new Audio();  // Create only once

    let currentlyPlaying = null;


    librarySongs.forEach(song => {
        const li = document.createElement('li');
        li.innerHTML = `<div><strong>${song.title}</strong><br><small>${song.artist}</small></div>`;
        li.classList.add('m-1');

        li.addEventListener('click', () => {
            const index = librarySongs.indexOf(song); // Add this
            currentIndex = index; // Track the index

            if (currentlyPlaying !== song.file) {
                audio.pause();
                audio.src = song.file;
                audio.play();
                play.src = "pause.svg";
                currentlyPlaying = song.file;
                document.querySelector(".songInfo").innerHTML = song.title
                document.querySelector(".songTime").innerHTML = "00:00 / 00:00"
            } else {
                // Pause if the same song is clicked again
                audio.paused ? audio.play() : audio.pause();
            }
        });

        songListElement.appendChild(li);
    });

    // Attach an event listener to play, previous, and next
    play.addEventListener("click", () => {
        if (audio.paused) {
            audio.play()
            play.src = "pause.svg"
        }
        else {
            audio.pause()
            play.src = "play.svg"
        }
    })

    // Listen for timeupdate Event
    audio.addEventListener("timeupdate", () => {
        console.log(audio.currentTime, audio.duration)
        document.querySelector(".songTime").innerHTML = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`
        document.querySelector(".circle").style.left = (audio.currentTime / audio.duration) * 100 + "%"
    })

    // Add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector(".circle").style.left = percent + "%";
        audio.currentTime = ((audio.duration) * percent) / 100
    })

    // Add an event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })

    // Add an event listener for close
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    })

    let currentIndex = -1; // Track the index of the currently playing song

    function playSongAtIndex(index) {
        if (index < 0 || index >= librarySongs.length) return;

        const song = librarySongs[index];
        audio.src = song.file;
        audio.play();
        play.src = "pause.svg";
        currentlyPlaying = song.file;
        currentIndex = index;

        document.querySelector(".songInfo").innerHTML = song.title;
        document.querySelector(".songTime").innerHTML = "00:00 / 00:00";
    }

    // Previous button
    previous.addEventListener("click", () => {
        if (currentIndex > 0) {
            playSongAtIndex(currentIndex - 1);
        }
    });

    // Next button
    next.addEventListener("click", () => {
        if (currentIndex < librarySongs.length - 1) {
            playSongAtIndex(currentIndex + 1);
        }
    });

    // Add an event to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log("Setting volume to", e.target.value, "/100")
        audio.volume = parseInt(e.target.value) / 100
    })

    // Load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach((e, i) => {
        e.addEventListener("click", () => {
            playSongAtIndex(i);
        });
    });



}
main();
