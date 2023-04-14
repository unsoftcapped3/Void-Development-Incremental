export const heros = {
    "350057688182292482": {
        profileImage: "avatars/4033eea2a3b4cb76aa7b2cb44fc854bd.png",
        username: "arkhaic VI",
        nick: "mkey",
        role: 'contributor',
        status: "DND",
        //customStatus: "thonkeres",
        color: "#ffc000"
    },
    "708748287909298318": {
        profileImage: "avatars/1d9c0858378994d85440c0cd30d6fc57.png",
        username: "negligible fish",
        nick: "flame",
        role: 'gwa',
        status: "DND",
        //customStatus: ":yellow_small_man_moving_quickly:",
        color: "#009696"
    },
    "392092706727264256": {
        profileImage: "avatars/6db293b54467f2f5e6126057b6d2c07d.png",
        username: "rock",
        nick: "rock",
        role: "staff",
        status: "DND",
        //customStatus: 'I Have No Brain And I Must Think',
        color: "#008282"
    },
    "532291359428837386": {
        profileImage: "avatars/161b6aa8c8a0c65d5b519b00e4ca964d.png",
        username: "fox",
        nick: "fox",
        role: 'staff',
        status: "Idle",
        customStatus: "",
        color: "#030303"
    },
    "333357475644309505": {
        profileImage: "avatars/97ac8842381fbc231c6fc1533c62cdfe.png",
        username: "water",
        nick: "water",
        role: 'training',
        status: "Online",
        //playing: "Meta Studio (gwa)",
        color: "#ffffff"
    },
    "483213141124055040": {
        profileImage: "avatars/acee7d0b2e3fd62fa23ed065ae0d14d1.png",
        username: "raccoongirl",
        role: 'active',
        status: 'DND',
        customStatus: '',
        color: "#196296"
    },
    "399889003668832266": {
        profileImage: "avatars/977ecadd8a973c1fc5c4057753f182b8.png",
        username: "Drunk",
        nick: "Ink",
        role: 'active',
        status: 'Idle',
        customStatus: '',
        color: "#196296"
    },
    "186652084433715200": {
        profileImage: "avatars/efca85b9ba36d9611d1a2c3980204655.png",
        username: 'dr. lucas "fuck" srœtpars',
        role: 'active',
        status: 'Idle',
        color: "#196296"
    },
    "428921414914146304": {
        profileImage: "avatars/637bf1bad7c9b76bec9cc4949324b108.png",
        username: "downvoid",
        nick: "downvoid",
        role: 'contributor',
        status: 'DND',
        customStatus:'',
        color: "#31da6d"
    },
    "777103469982384128": {
        profileImage: "avatars/d7aaad6b15b576dbecf160a886de45ce.png",
        username: "plont | 🍰",
        nick: "meta",
        role: "active",
        status: "Online",
        color: "#7f087f"
    },
    "631848048359637043": {
        profileImage: "avatars/74dcba172c5891920fcd7ba6a3169455.png",
        username: "arkhaic",
        nick: "arkhaic",
        role: "active",
        status: "Online",
        customStatus: '',
        color: "#00ffac"
    },
    "931295023058792458": {
        profileImage: "avatars/1aed923da983a04efd381d96817ecfbc.png",
        username: "bones",
        role: "active",
        status: "DND",
        customStatus: '',
        color: "#196296"
    },
};

// Taken from https://codepen.io/jamesrbdev/pen/WxyKyr
// Also considered https://github.com/cupcakearmy/canihazusername
var nameList = [
  'Time','Past','Future','Dev',
  'Fly','Flying','Soar','Soaring','Power','Falling',
  'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
  'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
  'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
  'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
  'Mine','Your','Worst','Enemy','Hostile','Force','Video',
  'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
  'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
  'Script','Writer','Near','Close','Open','Cube','Circle',
  'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
  'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
  'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
  'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
  'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
  'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
  'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
  'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
  'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
  'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
  'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich',
  'Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready',
  'Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool',
  'Kid','Boy','Girl','Vortex','Paradox'
];
export function getRandomUser() {
    let name = nameList[Math.floor(Math.random() * nameList.length)];
    name += nameList[Math.floor(Math.random() * nameList.length)];
    if (Math.random() > 0.5) {
        name += nameList[Math.floor(Math.random() * nameList.length)];
    }
    while (window.player.users[name]) {
        name += nameList[Math.floor(Math.random() * nameList.length)];
    }
    return name;
}

export const roles = {
    'gwa': { title: 'THE GWA', color: 'rgb(0, 150, 150)' },
    'staff': { title: 'STAFF++', color: 'rgb(255, 255, 255)' },
    'training': { title: 'STAFF', color: 'rgb(255, 255, 255)'},
    'contributor': {title: 'CONTRIBUTOR', color: 'rgb(0, 155, 255)'},
    'booster': {title: 'VERY COOL PEOPLE (BOOSTERS)', color: '#7f087f'},
    'active': { title: 'COOL ACTIVE PEOPLE', color: '#b7ff00' },
}
