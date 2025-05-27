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
    // you can use HTML syntax here (e.g. <br/>, <a>, <strong>, ...)
    biography: `
        Hi! I'm a second-year PhD student in Computer Science at Arizona State University, where I conduct deep learning research under the supervision of <a href="https://faculty.engineering.asu.edu/baoxin-li" target="_blank" rel="noopener noreferrer">Prof. Baoxin Li</a>.
        My work focuses on the intersection of representation learning and weakly supervised learning, with an emphasis on reducing the reliance on labeled data for training AI models.
        <div class="my-2"></div>
        Before ASU, I earned my B.S. in Computer Science from NCCU, where I worked with <a href="https://www.cs.nccu.edu.tw/~chaolin" target="_blank" rel="noopener noreferrer">Prof. Chao-Lin Liu</a>, and completed a summer research internship at UIUC with <a href="https://ece.illinois.edu/about/directory/emeritus/dl-jones" target="_blank" rel="noopener noreferrer">Prof. Douglas L. Jones</a>. 
        I received my M.S. from NTU, advised by <a href="https://www.csie.ntu.edu.tw/~htlin" target="_blank" rel="noopener noreferrer">Prof. Hsuan-Tien Lin</a> and <a href="https://digital.ntu.edu.tw/hsiang" target="_blank" rel="noopener noreferrer">Prof. Jieh Hsiang</a>, and later conducted research at Academia Sinica with <a href="https://homepage.citi.sinica.edu.tw/pages/yu.tsao/index_en.html" target="_blank" rel="noopener noreferrer">Dr. Yu Tsao</a>.
        Thanks for visiting my website! Feel free to get in touch if you'd like to connect.
    `
}