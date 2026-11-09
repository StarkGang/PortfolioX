window.CONFIG = {
  personal: {
    name: "Jane Doe",
    age: "XX",
    location: "Your City, Country",
    email: "janedoe@email.com",
    profileImage: "img/icon.webp",
    avatarImage: "img/icon.webp",
  },

  about: {
    title: "About Me",
    paragraphs: [
      "This is a placeholder description.",
      "Replace this text with your own introduction."
    ],
    skills: "Your skills go here"
  },

  resume: {
    pdfUrl: "resume.pdf",
    fileName: "Your_Name_Resume.pdf"
  },

  social: {
    telegram: "https://t.me/username",
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username"
  },

  wallpaper: [
    "img/wallpaper/starry.webp",
    "img/wallpaper/xc.webp",
    "img/wallpaper/starrydrawn.webp"
  ],

  education: [
    {
      lat: 42.37836,
      lng: -71.11669,
      title: "Harvard University",
      subtitle: "Ph.D. in Theoretical Physics & Biochemistry"
    },
    {
      lat: 42.36009,
      lng: -71.09416,
      title: "Massachusetts Institute of Technology",
      subtitle: "Advanced Research in Quantum Mechanics & Fringe Science"
    },
    {
      lat: 42.36299,
      lng: -71.08354,
      title: "Harvard Medical School",
      subtitle: "Neuroscience & Experimental Human Cognition"
    }
  ],

  api: {
    mailEndpoint: "https://example.com/api/send-mail",
    mailSource: "portfolio-demo"
  },

  projects: [
    {
      title: "Project Alpha",
      desc: "An innovative solution for modern problems.",
      meta: "Technologies: JavaScript, HTML, CSS",
      image: "img/wallpaper/xc.webp",
      short: "Innovative web solution",
      link: "https://example.com"
    },
    {
      title: "Project Beta",
      desc: "A mobile app that enhances productivity.",
      meta: "Technologies: React Native, Node.js",
      image: "img/wallpaper/starrydrawn.webp",
      short: "Productivity mobile app",
      link: "https://example.com"
    }
  ],

  favorites: {
    shows: [
      {
        title: "Your Favorite Show",
        desc: "A brief description of your favorite TV show.",
        meta: "Created by Famous Director - 2020-Present",
        image: "img/wallpaper/starrydrawn.webp",
        short: "short description of the show"
      }
    ],

    movies: [
      {
        title: "Your Favorite Movie",
        desc: "A brief description of your favorite movie.",
        meta: "Directed by Renowned Filmmaker - 2021",
        image: "img/wallpaper/xc.webp",
        short: "short description of the movie"
      }
    ],

    music: [
      {
        title: "Your Favorite Album",
        desc: "A brief description of your favorite music album.",
        meta: "By Legendary Artist - 1985",
        image: "img/wallpaper/starrydrawn.webp",
        short: "short description of the album"
      }
    ]
  }
};

window.CONFIG.mascot = {
  model: 'assets/mascot/mascot.glb',

  clips: {
    idle: 'idle',
    walk: 'walk',
    run: 'run',
    sneak: 'sneak',
    look_around: 'look_around',
    think: 'think',
    look_down: 'look_down',
    shrug: 'shrug',
    talk_1: 'talk_1',
    talk_2: 'talk_2',
    point: 'point',
    gesture: 'gesture',
    wave: 'wave',
    happy_jump: 'happy_jump',
    surprised: 'surprised',
    clap: 'clap',
    nod: 'nod',
    sit_idle: 'sit_idle',
    stretch: 'stretch',
    victory: 'victory',
    bonus_dance: 'bonus_dance',
    bonus_punch: 'bonus_punch',
    fly: 'fly'
  },

  speeds: { walk: 2.06, run: 3.93, sneak: 2.56, fly: 9.06 },
  talkClips: ['talk_1', 'talk_2', 'gesture'],
  idleClips: ['look_around', 'think', 'look_down', 'stretch', 'victory', 'clap', 'bonus_punch', 'wave', 'nod', 'shrug'],

  voice: {
    speaker: '$ROOT',

    greeting: [
      "Oh... a visitor. I'm $ROOT. I watch {first}'s desktop.",
      "Hello. $ROOT here. {first} left me in charge, which was reckless.",
      "You found the desktop. I'm $ROOT, and I have opinions about everything here."
    ],

    intro: [
      "Hover anything and I'll tell you what it does.",
      "Click stuff. I'll narrate. That's the arrangement.",
      "I know where everything is, so ask away."
    ],

    idle: [
      "Nice wallpaper, right? {first} cycles them all day.",
      "I've read every file on this desktop. Don't tell {first}.",
      "Quiet day. I might just patrol the icons.",
      "This desktop is very tidy. Suspiciously tidy.",
      "Sometimes I stand here and listen to the taskbar hum."
    ],

    bored: [
      "Fine. I'll find my own fun.",
      "You stopped moving. I noticed.",
      "Okay, wandering off then."
    ],

    yawn: [
      "Nothing happening. I'll sit for a bit.",
      "Just resting my feet. Very professional.",
      "Wake me if {first} shows up."
    ],

    wake: [
      "I wasn't asleep. I was thinking.",
      "Oh! You're still here.",
      "Back already? I was mid-thought."
    ],

    clicked: [
      "Good pick. {first} would approve.",
      "That one's worth a look.",
      "Ooh, bold choice.",
      "Yes. That one. Nice."
    ],

    annoyed: [
      "Easy. It's not going anywhere.",
      "One click is enough, you know.",
      "I can see you. I'm right here."
    ],

    poked: [
      "Hey. That's me.",
      "Personal space. Mostly.",
      "Poke me again and I'll dance at you."
    ],

    stumble: [
      "Whoa. Steady.",
      "A little warning next time?",
      "I nearly fell off the screen."
    ],

    closed: [
      "Gone already. Typical.",
      "Fine, I'll go back to patrolling.",
      "Window closed. Nothing to watch now."
    ],

    dance: [
      "You caught me. This stays between us.",
      "Nobody saw that.",
      "Okay, one dance. Then back to work."
    ],

    edge: [
      "That's the edge. Nothing out there but wallpaper.",
      "Wall. Very solid. I checked.",
      "End of the desk. Shall I turn around?"
    ],

    sitting: [
      "Just resting on this one for a minute.",
      "Good vantage point up here.",
      "I can see the whole desktop from here."
    ],

    fallback: [
      "That one's worth a click.",
      "Go on, try it.",
      "Still figuring that one out."
    ],

    icons: {
      mypc: {
        title: 'My PC',
        lines: [
          "{first} keeps the whole story in here. Start with this one.",
          "That's the about section. {first} wrote it personally.",
          "Open it and you get the short version of a long story."
        ]
      },
      resume: {
        title: 'Resume',
        lines: [
          "Credentials and experience live in here.",
          "Resume.pdf right here.",
          "Check out {first}'s background."
        ]
      },
      instagram: {
        title: 'Instagram',
        lines: [
          "Photos and life outside of code.",
          "Visual journal right here."
        ]
      },
      linkedin: {
        title: 'LinkedIn',
        lines: [
          "Professional profile. Connect with {first}.",
          "Network and career history live here."
        ]
      },
      email: {
        title: 'Email',
        lines: [
          "Mail goes straight to {first}. Always open for messages.",
          "Have an idea? Drop {first} a line in there.",
          "The contact form works. Say hello!"
        ]
      },
      favorites: {
        title: 'Favorites',
        lines: [
          "{first}'s taste in shows, films and music. Judge freely.",
          "Recommendations live here. All {first}'s favorites.",
          "Three tabs of strong opinions."
        ]
      },
      projects: {
        title: 'Projects',
        lines: [
          "{first} builds things. Check them out in here.",
          "Highlighted projects and code.",
          "Start here if you want to see what {first} built."
        ]
      },
      github: {
        title: 'Github',
        lines: [
          "{first} keeps open source repos and commits here.",
          "Code repositories and experiment history.",
          "Go poke around {first}'s repos."
        ]
      },
      education: {
        title: 'Education',
        lines: [
          "Interactive map showing schools and foundational studies.",
          "Where {first} learned the foundations.",
          "The map pins highlight the journey."
        ]
      },
      telegram: {
        title: 'Telegram',
        lines: [
          "Fastest way to reach {first}.",
          "Quick direct message chat."
        ]
      }
    },

    windows: {
      mypc: {
        title: 'My PC',
        lines: [
          "That's the about window. Bio, photo, skills and background.",
          "Everything you need to know about {first}."
        ]
      },
      resume: {
        title: 'Resume.pdf',
        lines: [
          "The PDF viewer itself. Clean layout and experience history.",
          "You can also download a copy right from this window."
        ]
      },
      education: {
        title: 'Education Records',
        lines: [
          "Interactive timeline map flying to each institution.",
          "Educational journey with milestones and degrees."
        ]
      },
      email: {
        title: 'Mail',
        lines: [
          "Direct message form straight to inbox.",
          "Say hi. Friendly messages welcome anytime."
        ]
      },
      projects: {
        title: 'Projects',
        lines: [
          "Showcase list with details, screenshots and live links."
        ]
      },
      favorites: {
        title: 'Favorites',
        lines: [
          "Recommendations across shows, movies and music."
        ]
      },
      projectdetail: {
        title: 'Project',
        lines: [
          "Detailed project preview with tech stack and live links."
        ]
      },
      favdetail: {
        title: 'Favourite',
        lines: [
          "Detailed notes and posters for favorite media picks."
        ]
      }
    }
  }
};
