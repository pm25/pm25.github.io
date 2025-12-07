import { FaLinkedin, FaGoogleScholar, FaRegIdBadge, FaGithub, FaXTwitter } from "react-icons/fa6";

export const profile = {
  name: `Pin-Yen (Jason) Huang`,
  headline: `PhD Student @ Arizona State University`,
  email: `pyhuang97@gmail.com`,
  location: null,
  profileImage: `https://github.com/pm25.png`,
  links: [
    {
      name: `LinkedIn`,
      url: `https://www.linkedin.com/in/py-huang`,
      icon: FaLinkedin,
    },
    {
      name: `Google Scholar`,
      url: `https://scholar.google.com/citations?user=nQdpH2MAAAAJ&hl=en`,
      icon: FaGoogleScholar,
    },
    {
      name: `Résumé`,
      url: `/pdf/sample-resume.pdf`,
      icon: FaRegIdBadge,
    },
    {
      name: `Github`,
      url: `https://github.com/pm25`,
      icon: FaGithub,
    },
    {
      name: `X / Twitter`,
      url: `https://x.com/pyhuang97`,
      icon: FaXTwitter,
    },
  ],
  biography: `Hi! I'm <strong>Pin-Yen</strong>. I'm a PhD student at Arizona State University, where I explore topics in <strong>weak supervision</strong> and <strong>robust machine learning</strong> under the guidance of Prof. <a href="https://faculty.engineering.asu.edu/baoxin-li" target="_blank" rel="noopener noreferrer">Baoxin Li</a>. 
Previously, I’ve been lucky to learn from amazing mentors like Prof. <a href="https://homepage.citi.sinica.edu.tw/pages/yu.tsao/index_en.html" target="_blank" rel="noopener noreferrer">Yu Tsao</a>, Prof. <a href="https://digital.ntu.edu.tw/hsiang/english.html" target="_blank" rel="noopener noreferrer">Jieh Hsiang</a>, Prof. <a href="https://homepage.citi.sinica.edu.tw/pages/yu.tsao/index_en.html" target="_blank" rel="noopener noreferrer">Hsuan-Tien Lin</a>, Prof. <a href="https://sites.google.com/view/shaojuiwang" target="_blank" rel="noopener noreferrer">Peter Shaojui Wang</a>, Prof. <a href="https://www.cs.nccu.edu.tw/~chaolin" target="_blank" rel="noopener noreferrer">Chao-Lin Liu</a> and Prof. <a href="https://ece.illinois.edu/about/directory/faculty/dl-jones" target="_blank" rel="noopener noreferrer">Douglas Jones</a>.
<div class="my-2"></div>
Outside of research, I love playing 🏸 badminton and discovering new ideas. Feel free to <a href="mailto:pyhuang97@gmail.com" target="_blank" rel="noopener noreferrer">reach out</a>, I'm always excited to connect or explore potential research collaborations.  
If you like the style of this website, feel free to check out my template repository: <a href="https://github.com/pm25/showlit" target="_blank" rel="noopener noreferrer">✨pm25/showlit</a>.`,
};
