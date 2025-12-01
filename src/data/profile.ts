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
      icon: FaLinkedin
    },
    {
      name: `Google Scholar`,
      url: `https://scholar.google.com/citations?user=nQdpH2MAAAAJ&hl=en`,
      icon: FaGoogleScholar
    },
    {
      name: `Résumé`,
      url: `/pm25.github.io/pdf/sample-resume.pdf`,
      icon: FaRegIdBadge
    },
    {
      name: `Github`,
      url: `https://github.com/pm25`,
      icon: FaGithub
    },
    {
      name: `X / Twitter`,
      url: `https://x.com/pyhuang97`,
      icon: FaXTwitter
    }
  ],
  biography: `Hi! I'm <strong>Pin-Yen</strong>, a <em>[Your Title]</em> passionate about <em>[field or topic]</em>. Currently, I work as <em>[current role]</em> at <em>[organization]</em>, where I <em>[briefly describe your work or mission]</em>. 
With a background in <em>[academic or professional background]</em>, I've developed strong interests in <em>[key interests or specialties]</em> and have contributed to projects like <i>[example project]</i> and <i>[another example]</i>, all focused on <em>[broader goal or impact]</em>.
<div class="my-2"></div>
Outside of work, I enjoy <em>[hobbies or personal interests]</em>, which inspire creativity and keep me energized. Thanks for visiting! Feel free to <a href="mailto:[your-email@example.com]" target="_blank" rel="noopener noreferrer">reach out</a> to connect.`
};