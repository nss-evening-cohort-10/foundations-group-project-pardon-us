console.log("hi from js!");

//Print to DOM
    const printToDom = (divId, textToPrint) => {
        const selectedDiv = document.getElementById(divId);
        selectedDiv.innerHTML = textToPrint;
    };
    
//Home Page
    

//About Page
    
    
//Merch Page
 
    
// Music Page
    const albumList = [
        {
            title: "Wait",
            year: 2019,
            url: "https://f4.bcbits.com/img/a0535589715_16.jpg",
            tracks: ["Beyond the Valley of the Wolves", "Counting Backwards", "Brains", "Thankful", "It's a Phil Ochs Kind of Day", "Half Empty", "If the Black Shirt Fits", "Inconvenient Reminder", "Signing Out", "We Aren't The Champions"]
        },
        {
            title: "Pardon Us",
            year: 2017,
            url: "https://f4.bcbits.com/img/a1333370211_16.jpg",
            tracks: ["Goodnight Adam", "Sleepwalk", "Carry On", "Flightless", "OHM"]
        },
        {
            title: "Pardon Us Stink",
            year: 2019,
            url: "https://f4.bcbits.com/img/a1656732168_10.jpg",
            tracks: ["Kicking and Screaming", "What Doesn't Kill Me", "Sphere", "Good For Me", "Shut Up and Die"]
        },
        {
            title: "Theresa May Not",
            year: 2018,
            url: "https://f4.bcbits.com/img/a3168995921_16.jpg",
            tracks: ["Theresa May Not", "Something True (B side)"]
        },
        {
            title: "Fumin'",
            year: 2016,
            url: "https://f4.bcbits.com/img/a0706942430_10.jpg",
            tracks: ["Fumin'", "Aim Low (Mary Lou Lord cover)"]
        },
        {
            title: "",
            year: ,
            url: "",
            tracks: []
        },
        {
            title: "",
            year: ,
            url: "",
            tracks: []
        },
        {
            title: "",
            year: ,
            url: "",
            tracks: []
        },
        {
            title: "",
            year: ,
            url: "",
            tracks: []
        },
        {
            title: "",
            year: ,
            url: "",
            tracks: []
        }
    ],
    
    const printAlbums = (albumArray) => {
        //loop through albumArray and print title, year, and image to dom
    };
    
    const displayTracks = (e) => {
        //function to reduce image div and add track list
        console.log('display event', e)
    };
    
    const hideTracks = (e) => {
        //function to expand image div and hide track list
        console.log('hide event', e)
    };
    
    const expandBtn = document.getElementById('');
    const minimizeBtn = document.getElementById('');
    
    expandBtn.addEventListener('click', displayTracks);
    minimizeBtn.addEventListener('click', hideTracks);
    
    
        // Init - All Pages
    const init = () => {
        if (document.URL.includes('albums')){
            printAlbums(albumList);
        } else if (document.URL.includes('merch')) {
            // load merch				 
        } else if (document.URL.includes('about')) {
            // band member cards				 
        } else {
            // hide tour dates				 
        }
    };
    
    init();