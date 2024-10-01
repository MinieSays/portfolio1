export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 2,
    title: "I'm open to opportunities, world-wide",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Send me a message",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "ImaginAI SaaS Project",
    des: "Responsive application that uses Stripe to processes payments for AI image services.",
    img: "/ImageAI.PNG",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg", "/stripe.svg"],
    link: "https://ai-project-lac.vercel.app/",
    github: "https://github.com/MinieSays/ai-project",
  },
  {
    id: 2,
    title: "Fort Collins Tree Service",
    des: "A responsive website designed with Tailwind best practises for a US client. Form set up with EmailJS.",
    img: "/fort_collins_tree_service.png",
    iconLists: ["/tail.svg", "/re.svg"],
    link: "https://www.fortcollinstreeservice.com/",
    github: "https://github.com/MinieSays/treeservice",
  },
  {
    id: 3,
    title: "Airbnb Clone",
    des: "Prisma database to store the listings, favorites, and reservations. NextJS for server-side rendering. OAuth authentication.",
    img: "/airbnb.png",
    iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "mongodb.svg"],
    link: "https://rentals-drab.vercel.app/",
    github: "https://github.com/MinieSays/airbnb",
  },
  {
    id: 4,
    title: "KW PetSitting",
    des: "A responsive website designed with Tailwind best practises for a local client. Includes pop-up modal for the navigation button.",
    img: "/kwpetsitting.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://www.kwpetsitting.com/",
    github: "https://github.com/MinieSays/kwpetsittingpro",
  },
  {
    id: 5,
    title: "Event Finder",
    des: "A responsive event finder app that pulls events from TicketMaster API based on keyword phrase.",
    img: "/eventfinder.png",
    iconLists: ["/html.svg", "/css.svg", "/javascript.svg"],
    link: "https://event-finder-six.vercel.app/",
    github: "https://github.com/MinieSays/eventFinder",
  },
  {
    id: 6,
    title: "Py Websolutions",
    des: "A responsive website designed with Tailwind best practises for my digital agency. Includes pop-up modal for the navigation button.",
    img: "/pywebsolutions.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://pywebsolutions.ca/",
    github: "https://github.com/MinieSays/pyweb",
  },
  {
    id: 7,
    title: "Real-Time Slack Messenger",
    des: "Users are able to react to messages using emojis, reply to threads & users, edit messages, delete messages, create channels & workspaces and invite system using codes. ",
    img: "/slack.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://slack-clone-next14.vercel.app/auth",
    github: "https://github.com/MinieSays/slack-clone",
  },
  {
    id: 8,
    title: "The Steam Team",
    des: "Responsive web application designed with Wordpress.",
    img: "/thesteamteam (2).png",
    iconLists: ["/wordpress.svg"],
    link: "https://www.thesteamteam.ca/",
  },
];

export const companies = [
  {
    id: 1,
    name: "React",
    img: "/re.svg",
  },
  {
    id: 2,
    name: "Javascript",
    img: "/java.png",
  },
  {
    id: 3,
    name: "Tailwind",
    img: "/tail.svg",
  },
  {
    id: 4,
    name: "NextJS",
    img: "/next.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Typescript",
    img: "/ts.svg",
  },
  {
    id: 6,
    name: "CSS",
    img: "/css.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Internship",
    desc: "Managed data fetching using Axios with features like skeleton loading, pagination, and dynamic routing. Utilized Git and GitHub for version control and team collaboration.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Web Agency",
    desc: "Developed and delivered 5 professional websites using HTML5, CSS3 (with SCSS and BEM), Tailwind CSS, WordPress, JavaScript, and React, adhering to best practices. ",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/MinieSays"
  },
  {
    id: 2,
    img: "/pdf.png",
    link: "/MinieResume2024.pdf"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/minie-sayadeth-613928313/"
  },
];
