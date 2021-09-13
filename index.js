var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};
var sum = 0;
var tweetCount = [];
var container = document.getElementById('container');
var headerCntr = document.getElementById('header-cntr');
var header = document.createElement('div');
header.innerHTML = `
    <div class="header-cntr">
        arrow
        <div class="name-cntr"
            <h1 class="name">${user1.displayName}</h1>
            <h2 class="tweets">
                ${user1.tweets.map((tweet, sum) => {
                    // get number of tweets
                    tweetCount.push(sum)
                    console.log(tweetCount);
                    return `${Number(tweetCount.slice(-1)) + 1}`
                }).slice(-1)} Tweets
            </h2>
        </div>
    </div>
    `;
headerCntr.appendChild(header);
// image container for profile pic and large background
var coverCntr = document.getElementById("cover-cntr");
var cover = document.createElement('div');
cover.classList.add('cover');
cover.innerHTML = `
    <div class="img-cntr">
        <img class="img1" src="${user1.coverPhotoURL}">
        <img class="img2" src="${user1.avatarURL}">
    </div>
    <div class="btn-cntr">
        <button class="btn">Follow</button>
    </div>
`;
coverCntr.appendChild(cover);

var profileDetails = document.getElementById("profile-details");
var profile = document.createElement('div');
profile.classList.add("profile");
profile.innerHTML= `
    <div class="profile-cntr">
        <div class="display-name2"
            <h1>${user1.displayName}</h1>
            <h2>@${user1.displayName.toLowerCase().split(" ").join("")}</h2>
        </div>
        <h2 class="join">🕛 Joined ${user1.joinedDate}</h2>
        <div class="follow-cntr">
            <h1>${user1.followingCount}<h1>
            <h2>Following</h2>
            <h1>${abbreviate(user1.followerCount)}<h1>
            <h2>Followers</h2>
        </div>
    </div>
`;
profileDetails.appendChild(profile);

//nav bar for tweets, media, tweets and replies, and likes
var navTweets = document.getElementById("nav-tweets");
var tweets = document.createElement('div');
tweets.innerHTML = `
    <div class="nav" id="tweets">Tweets</div>
`;
navTweets.appendChild(tweets);
//function to add tweets if clicked on
var tweets = document.getElementById("tweets")


var tweetsReplies = document.createElement('div');
tweetsReplies.innerHTML = `
    <div class="nav" id="tweets-replies">Tweets & replies</div>
`;
navTweets.appendChild(tweetsReplies);

var media = document.createElement('div');
media.innerHTML = `
    <div class="nav" id="media">Media</div>
`;
navTweets.appendChild(media);

var likes = document.createElement('div');
likes.innerHTML = `
    <div class="nav" id="likes">Likes</div>
`;
navTweets.appendChild(likes);



//function for abbreviation of followers
function abbreviate(number, maxPlaces, forcePlaces, forceLetter) {
    number = Number(number)
    forceLetter = forceLetter || false
    if(forceLetter !== false) {
      return annotate(number, maxPlaces, forcePlaces, forceLetter)
    }
    var abbr
    if(number >= 1e12) {
      abbr = 'T'
    }
    else if(number >= 1e9) {
      abbr = 'B'
    }
    else if(number >= 1e6) {
      abbr = 'M'
    }
    else if(number >= 1e3) {
      abbr = 'K'
    }
    else {
      abbr = ''
    }
    return annotate(number, maxPlaces, forcePlaces, abbr)
}
  
function annotate(number, maxPlaces, forcePlaces, abbr) {
    // set places to false to not round
    var rounded = 0
    switch(abbr) {
      case 'T':
        rounded = number / 1e12
        break
      case 'B':
        rounded = number / 1e9
        break
      case 'M':
        rounded = number / 1e6
        break
      case 'K':
        rounded = number / 1e3
        break
      case '':
        rounded = number
        break
    }
    if(maxPlaces !== false) {
      var test = new RegExp('\\.\\d{' + (maxPlaces + 1) + ',}$')
      if(test.test(('' + rounded))) {
        rounded = rounded.toFixed(maxPlaces)
      }
    }
    if(forcePlaces !== false) {
      rounded = Number(rounded).toFixed(forcePlaces)
    }
    return rounded + abbr
}

//



var xhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
    }
};
xmlhttp.open("GET", "xmlhttp_info.txt", true);
xmlhttp.send(); 
