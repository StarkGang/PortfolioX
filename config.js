/* 
  Dummy configuration file for portfolio template.
*/

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
    subtitle: "Ph.D. in Theoretical Physics & Biochemistry (1970s)"
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
], // easter egg: walter bishop from fringe

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
      },
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
