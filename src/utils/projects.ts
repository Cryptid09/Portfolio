interface Project {
    name: string;
    emoji:string;
    description: string;
    stack:string;
    url: string;
  }
  
  export const projects: Project[] = [
    {
        name: `
BUILD MY NOTES `,
emoji:`

                    ___           ___     
     _____         /__/\\         /__/\\    
    /  /::\\       |  |::\\        \\  \\:\\   
   /  /:/\\:\\      |  |:|:\\        \\  \\:\\  
  /  /:/~/::\\   __|__|:|\\:\\   _____\\__\\:\\ 
 /__/:/ /:/\\:| /__/::::| \\:\\ /__/::::::::\\
 \\  \\:\\/:/~/:/ \\  \\:\\~~\\__\\/ \\  \\:\\~~\\~~\\/
  \\  \\::/ /:/   \\  \\:\\        \\  \\:\\  ~~~ 
   \\  \\:\\/:/     \\  \\:\\        \\  \\:\\     
    \\  \\::/       \\  \\:\\        \\  \\:\\    
     \\__\\/         \\__\\/         \\__\\/    
`

        ,description: `
Created an AI-driven website that transforms transcripts into notes, enhancing class participation and
supporting users with attention challenges.

Automated note and quiz generation from lecture videos, saving users approximately 96 hours monthly
across 30 classes.

Achieved over 140 sign-ups and maintained 130 active users, with an average session duration of 32
minutes and 97 notes generated.

Currently launched for students of BITS pilani and SST
`,
stack:`React, Express.js, MongoDB, Deepgram, OpenAI API, NGINX, Azure VM, Vercel, Redis MQ,nodemailer 
`,
        
url: `https://bildmynotes.com

`
    },
    
{
      name: "Notebin",
      emoji :`
 _   _       _       _____ _       
| \\ | |     | |     | ___ (_)      
|  \\| | ___ | |_ ___| |_/ /_ _ __  
| . ' |/ _ \\| __/ _ \\ ___ \\ | '_ \\ 
| |\\  | (_) | ||  __/ |_/ / | | | |
\\_| \\_/\\___/ \\__\\___\\____/|_|_| |_|
                                                                       
      `
     , description: `Notebin is a platform designed to help students find, organize, and share academic
       notes and materials. It offers a centralized hub for all your study resources, making it easy to 
       access a wide range of study materials and contribute to the community by sharing your own notes.`,
      url: "https://github.com/yourusername/project2",
      stack:""

    },
    // Add more projects as needed
  ];