// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Journal articles, manuscripts, and other written materials.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-presentations",
          title: "presentations",
          description: "Conference papers, posters, and invited presentations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/conferences/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects in transportation, health, and planning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Research, publications, teaching, and academic experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Graduate teaching in economics, public policy, and healthcare.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-passed-dissertation-proposal-defense-sparkles-smile",
          title: 'Passed dissertation proposal defense! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-new-publication-on-health-amp-place",
          title: 'New publication on Health &amp;amp; Place',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-currently-working-on-my-e-bike-survey-data-collection",
          title: 'Currently working on my e-bike survey data collection…',
          description: "",
          section: "News",},{id: "projects-powering-bikeshare",
          title: 'Powering bikeshare',
          description: "Explore how Citi Bike e-bike and conventional bicycle trips differed across New York City.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/powering_bikeshare/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%69%6E%67%6E%69%6E%67.%78%69%65@%65%6A%62.%72%75%74%67%65%72%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yingningxie", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-0753-3320", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=orP9OLgAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ningninxie", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://bloustein.rutgers.edu/phd-students/yingning-xie/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
