import {
    FaLinkedin,
    FaGoogleScholar,
    FaRegIdBadge,
    FaGithub,
    FaSquareFacebook,
} from "react-icons/fa6";


export const UserInfo = {
    name: "Pin-Yen Huang",
    profile_url: "https://avatars.githubusercontent.com/u/33774054?v=4",
    headline: "PhD @ Arizona State University",
    email: "pyhuang97@gmail.com",
    links: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/py-huang",
            icon: FaLinkedin,
        },
        {
            name: "Google Scholar",
            url: "https://scholar.google.com.tw/citations?user=nQdpH2MAAAAJ",
            icon: FaGoogleScholar,
        },
        {
            name: "Résumé",
            url: "https://pm25.github.io/static/media/cv_v3.1ac3c71f.pdf",
            icon: FaRegIdBadge,
        },
        {
            name: "Github",
            url: "https://github.com/pm25",
            icon: FaGithub,
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/pyhuang97",
            icon: FaSquareFacebook,
        },
    ],
    biography: `
        Hi! I'm a second-year PhD student in Computer Science at Arizona State University (ASU), where I conduct deep learning research under the supervision of Prof. Baoxin Li.
        My work focuses on the intersection of representation learning and weakly supervised learning, with an emphasis on reducing the reliance on labeled data for training AI models.
        Before ASU, I earned my B.S. in Computer Science from NCCU, where I worked with Prof. Chao-Lin Liu, and completed a summer research internship at UIUC with Prof. Douglas L. Jones. 
        I received my M.S. from NTU, advised by Prof. Hsuan-Tien Lin and Prof. Jieh Hsiang, and later conducted research at Academia Sinica with Dr. Yu Tsao.
    `
}