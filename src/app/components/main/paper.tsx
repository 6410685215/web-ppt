import "./paper.css";

const PaperA4 = () => {
  return (
    <div className="paper-a4">
      <section className="paper-a4__header">
        <h1>Patcharapon Tappakwan</h1>
        <p><i>พชรพล ทัพผักแว่น</i></p>
      </section>
      <section className="paper-a4__content">
        <h2>Information</h2>
        <p>Address: 156/Khor Village No.6, Bang Pla Kot, Pa Mok, Ang Thong, 14130 <br/>
          <b>CONTACT:</b>
          <a href="tel:+66650483001" target="_blank">
            &nbsp;+666 5048 3001</a> |
          <a href="mailto:patcharapon.tap@dome.tu.ac.th" target="_blank">
            &nbsp;patcharapon.tap@dome.tu.ac.th</a> |
          <a href="https://6410685215.github.io/contact">
            &nbsp;https://6410685215.github.io</a>

        </p>
      </section>
      <section className="paper-a4__content">
        <h2>Objectives</h2>
        <p className="paragraph">Intern seeking hands-on experience in software development, particularly in web-based application design and development. Eager to apply academic knowledge in web technologies such as HTML, CSS, JavaScript, and Next.js to real-world projects. Interested in learning about modern tools and practices, including API integration, SQL/NoSQL databases, and version control systems like Git. Looking for an opportunity to grow under the mentorship of experienced software developers and contribute to innovative development projects.
        </p>
      </section>
      <section className="paper-a4__content">
        <h2>Education</h2>
        <p><b>Thammasat University</b> (Thailand), <i>2021 - Present</i> <br/>
          Bachelor of Engineering in Computer Engineering
        </p>
      </section>
      <section className="paper-a4__content">
        <h2>Experience</h2>
        <p><b>Coursework Projects, Thammasat University</b> <br/>
          <i>Oct 2023 – Dec 2023</i> <br/>
        </p>
        <ul>
          <li>Deployed a Linux server using Rocky Linux</li>
          <li>Configured services including DNS server, Apache web server, MySQL database, and SSH for remote access
          </li>
        </ul>
        <p><b>IT Support Intern, Birla Carbon (Thailand) Public Co., Ltd.</b> <br/>
          <i>Jun 2024 – Jul 2024</i> <br/>
        </p>
        <ul>
          <li>Provided technical support to end-users, resolving hardware and software issues.</li>
          <li>Assisted in setting up, configuring, and maintaining workstations, printers, and network equipment.
          </li>
        </ul>
        <p><b>NATIONAL SCIENCE AND TECHNOLOGY DEVELOPMENT AGENCY (กลุ่มนวัตกรรมดิจิทัลสำหรับเมือง, Traffy Team)</b> <br/>
          <i>Jan 2025 – Apr 2025</i> <br/>
        </p>
        <ul>
          <li>Developed a LINE Chat Bot to facilitate the reporting of issues in LINE groups, enhancing communication and
            issue resolution.</li>
          <li><a href="https://github.com/6410685215/Traffy-Liff-Bot" target="_blank">https://github.com/6410685215/Traffy-Liff-Bot</a></li>
          <li><a href="https://1drv.ms/p/c/226a59821a369577/ESIqHa4__hFDtzOzV9MgDhIBZX7_FrrxlkeOp2o2-Tk1KQ?e=GqTnyO" target="_blank" rel="noopener noreferrer">LINE Chat Bot for Reporting Issues in LINE.pptx</a></li>
        </ul>
      </section>
      <section className="paper-a4__content">
        <h2>Activities</h2>
        <p><b>Practical Training:  &quot;Development of Email Servers to Support Thai Language Emails (EAI) &quot; by THNIC</b> <br/>
          <i>Nov 2023</i>
        </p>
        <ul>
          <li>Participated in an intensive hands-on workshop conducted by THNIC aimed at equipping participants with the
            skills to develop email servers capable of supporting Thai language emails (EAI).</li>
          <li>Successfully configured and deployed personal email servers using Ubuntu operating system, enabling
            practical experience in server setup and administration.</li>
        </ul>
      </section>
      <section className="paper-a4__content">
        <h2>Additional Skills</h2>
        <p><b>Technical Skills</b></p>
        <ul>
          <li>Operating Systems: Windows | Linux (Ubuntu, Rocky Linux, Kali Linux)</li>
          <li>Tools: WSL | Git | VirtualBox | VMware | Docker | Azure</li>
          <li>Servers: Bind | Apache | Nginx | SSH</li>
          <li>Framework: Next.js | React | Django</li>
        </ul>
        <p><b>Programming Skills</b></p>
        <ul>
          <li>Advanced: TypeScript, Python, Shell Script</li>
          <li>Intermediate: HTML/CSS, JavaScript, PHP</li>
          <li>Basic: Java, SQL</li>
        </ul>
      </section>
    </div>
  );
}

export default PaperA4;