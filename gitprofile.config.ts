// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'zazos', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['zazos/gitprofile', 'zazos/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '(WIP) Music Mood Classification Thesis Project',
          description:
            'Research on Automatic Mood Classification (AMC) of music tracks using Machine Learning (ML) techniques. The project aims to classify music tracks into mood categories based on their audio features.',
          imageUrl:
            'https://www.researchgate.net/profile/Rui-Pedro-Paiva/publication/257308136/figure/fig1/AS:392743764414466@1470648818544/Thayers-model-of-mood-adapted-from-11.png',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/panagiotis-zazos-ba1a02188/',
    facebook: 'https://www.facebook.com/pzazos/',
    instagram: 'https://www.instagram.com/probablyzazos/',
    phone: '6983717939',
    email: 'pzazos@hotmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1AI2nnwdFHfX2PWVMjFclWGt2vmK5pF38/view?usp=sharing'
  },
  skills: {
    languages: [
      'Python',
      'SQL',
      'Ruby',
      'JavaScript',
      'HTML',
      'CSS',
      'C',
      'C#'
    ],
    ml: [
      'scikit-learn',
      'TensorFlow',
      'Keras',
      'PyTorch',
      'BERT'
    ],
    tools: [
      'Tableau',
      'D3',
      'Jupyter Notebook',
      'Git/GitHub',
      'Docker'
    ],
    soft_skills: [
      'Team Collaboration',
      'Communication',
      'Problem-Solving',
      'Adaptability'
    ]
  },
  experiences: [
    {
      company: 'ElxisGroup',
      position: 'Informatics Internship on Twitter API and Machine Learning',
      from: 'September 2020',
      to: 'January 2021',
      companyLink: 'https://www.elxisgroup.com/en/',
    },
    {
      company: 'HQEngine',
      position: 'Software Developer',
      from: 'June 2021',
      to: 'May 2022',
      companyLink: 'https://www.hqengine.ai/',
    },
    {
      company: 'Hellenic Army',
      position: 'IT on ERP Entersoft Business Suite',
      from: 'July 2022',
      to: 'May 2023',
      companyLink: 'https://ekems.army.gr/',
    },
    {
      company: 'HQEngine',
      position: 'Software Developer',
      from: 'June 2023',
      to: 'Mar 2024',
      companyLink: 'https://www.hqengine.ai/',
    },
  ],
  educations: [
    {
      institution: 'National and Kapodistrian University of Athens',
      degree: 'BSc',
      from: '2015',
      to: '2021',
    },
    {
      institution: 'National and Kapodistrian University of Athens',
      degree: 'MSc',
      from: '2023',
      to: '2025',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
