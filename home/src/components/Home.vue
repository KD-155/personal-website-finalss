<script setup>
    import image1 from "@/assets/image1.jpg";
    import image6 from "@/assets/image6.jpg";
    import image3 from "@/assets/image3.jpg";
    import image4 from "@/assets/image4.jpg";
    import image2 from "@/assets/image2.jpg";

    document.addEventListener('DOMContentLoaded', function() {
        const sendMessageButton = document.getElementById('sendMessage');
        const commentNameInput = document.getElementById('comment-name');
        const commentTextInput = document.getElementById('comment-text');
        const commentList = document.getElementById('comment-list');
  
        sendMessageButton.addEventListener('click', function() {
            const name = commentNameInput.value.trim();
            const text = commentTextInput.value.trim();
  
            if (name && text) {
                const commentContainer = document.createElement('div');
                commentContainer.classList.add('comment-item');
  
                const nameElement = document.createElement('strong');
                nameElement.textContent = name + ': ';
  
                const textElement = document.createElement('span');
                textElement.textContent = text;
  
                commentContainer.appendChild(nameElement);
                commentContainer.appendChild(textElement);
  
                commentList.appendChild(commentContainer);
  
                // Clear input fields
                commentNameInput.value = '';
                commentTextInput.value = '';
            } else {
                alert('Please enter both your name and message.');
            }
        });
    });
</script>

<template>
    <!--Navigation-->
    <input type="checkbox" id="menu" hidden>
        <nav class="navbar">
            <a href="#home" class="logo">KellyS</a>
            <label for="menu" class="label">
                <div></div>
                <div></div>
                <div></div>
            </label>
            <ul class="nav-links">
                <li><a href="#home">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#hobbies">Hobbies</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#resources">Resources</a></li>
            </ul>
        </nav>

    <!--Education Section-->
    <section id="education" class="education">
        <h2>Education | Achievements</h2>
        <div class="timeline-items">
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">August 2021</div>
                <div class="timeline-content">
                    <h3>Senior High School</h3>
                    <p>Asia Pacific College | STEM - Engineering</p>
                </div>
                <div class="timeline-content">
                    <h3>Head of Finance</h3>
                    <p>APC Bahaghari</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">November 2021</div>
                <div class="timeline-content">
                    <h3>Finance Officer</h3>
                    <p>Junior Information Systems Security Association - APC Chapter</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">April 2023</div>
                <div class="timeline-content">
                    <h3>Documentations Officer</h3>
                    <p>APC HiRAYA</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">August 2023</div>
                <div class="timeline-content">
                    <h3>High Honors</h3>
                    <p>Asia Pacific College | Senior High School Graduate</p>
                </div>
                <div class="timeline-content">
                    <h3>College</h3>
                    <p>Asia Pacific College | Bachelor of Science in Computer Science specializing in Cybersecurity and Forensics</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">August 2024</div>
                <div class="timeline-content">
                    <h3>Vice President - Internal</h3>
                    <p>Junior Information Systems Security Association - APC Chapter</p>
                </div>
                <div class="timeline-content">
                    <h3>Assistant Director of Finance</h3>
                    <p>Microsoft Community - APC</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">October 2024</div>
                <div class="timeline-content">
                    <h3>Ambassador</h3>
                    <p>Gogolook Whoscall</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">November 2024</div>
                <div class="timeline-content">
                    <h3>Honor Student Awardee</h3>
                    <p>Asia Pacific College</p>
                </div>
                <div class="timeline-content">
                    <h3>Quality Assessment Interviewee</h3>
                    <p>ASEAN University Network</p>
                </div>
            </div>
        </div>
    </section>
  
    <!--IT Experience Section-->
    <section id="experience" class="experience">
        <h2>Skills | Experience</h2>
        <div class="experience-grid">
            <div class="experience-card">
                <i class="fa-solid fa-c"></i>
                <h3>Canva</h3>
            </div>
            <div class="experience-card">
                <i class="fa-brands fa-css3-alt"></i>
                <h3>CSS</h3>
            </div>
            <div class="experience-card">
                <i class="fa-brands fa-figma"></i>
                <h3>Figma</h3>
            </div>
            <div class="experience-card">
                <i class="fa-brands fa-f"></i>
                <h3>Flowgorithm</h3>
            </div>
            <div class="experience-card">
                <i class="fa-brands fa-github"></i>
                <h3>GitHub</h3>
            </div>
            <div class="experience-card">
                <i class="fa-brands fa-html5"></i>
                <h3>HTML</h3>
            </div>
            <div class="experience-card">
                <i class="fa-brands fa-java"></i>
                <h3>Java</h3> 
            </div>
            <div class="experience-card">
                <i class="fa-brands fa-js"></i>
                <h3>JavaScript</h3>
            </div>
            <div class="experience-card">
                <i class="fa-brands fa-microsoft"></i>
                <h3>Microsoft Office</h3>
            </div>
            <div class="experience-card">
                <i class="fa-solid fa-database"></i>
                <h3>MySQL</h3>
            </div>
            <div class="experience-card">
                <i class="fa-brands fa-python"></i>
                <h3>Python</h3>
            </div>
            <div class="experience-card">
                <i class="fa-brands fa-react"></i>
                <h3>React</h3>
            </div>
            <div class="experience-card">
                <i class="fa-solid fa-user-tie"></i>
                <h3>System Administration</h3>
            </div>
            <div class="experience-card">
                <i class="fa-solid fa-screwdriver-wrench"></i>
                <h3>Technical Support</h3>
            </div>
            <div class="experience-card">
                <i class="fa-brands fa-ubuntu"></i>
                <h3>Ubuntu</h3>
            </div>
            <div class="experience-card">
                <i class="fa-solid fa-v"></i>
                <h3>Virtual Studio Code</h3>
            </div>
            <div class="experience-card">
                <i class="fa-brands fa-vuejs"></i>
                <h3>Vue.js</h3>
            </div>
    </div>
      </section>
      
    <!--Hobbies & Goals section-->
    <section id="hobbies" class="hobbies">
        <h2>Hobbies | Goals</h2>
        <div class="hobbies-grid">
            <div class="hobbies-card">
                <i class="fa-solid fa-paintbrush"></i>
                <h3>Hobbies & Interests</h3>
                <p>My hobbies include watching movies and series, going on spontaneous trips, and listening to music.</p>
            </div>
            <div class="hobbies-card">
                <i class="fa-solid fa-bullseye"></i>
                <h3>Goals</h3>
                <p>My goals in life aren't that hard. First, I want to graduate on time and to get a stable job. Of course, that job must have a healthy environment where I can ensure that I have a work-life balance. And hopefully, I get to retire early and live a comfortable life.</p>
            </div>
        </div>
    </section>
  
    <!--Picture Gallery section-->
    <section id="gallery" class="gallery">
        <h2>Picture Gallery</h2>
        <div class="gallery-grid">
            <div class="gallery-card">
                <img :src="image1" alt="Gallery Image 1">
            </div>
            <div class="gallery-card">
                <img :src="image6" alt="Gallery Image 2">
            </div>
            <div class="gallery-card">
                <img :src="image3" alt="Gallery Image 3">   
            </div>
            <div class="gallery-card">
                <img :src="image4" alt="Gallery Image 4">
            </div>
            <div class="gallery-card">
                <img :src="image2" alt="Gallery Image 5">
            </div>
        </div>
    </section>
      
      
    <!--Resources section-->
    <section id="resources" class="resources">
        <h2>Resources</h2>
        <div class="resources-grid">
            <a href="https://github.com/KD-155/personal-website-finals" target="_blank" class="resources-card">
                <h3>My GitHub Repository</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=UqHILyzcULE" target="_blank" class="resources-card">
                <h3>Education Timeline Design</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=fQbBwP_xOXk" target="_blank" class="resources-card">
                <h3>Home Page Design</h3>
            </a>
            <a href="https://fontawesome.com/" target="_blank" class="resources-card">
                <h3>Icons</h3>
            </a>
            <a href="https://gemini.google.com/app/96dc6fdd574c54ca?hl=en-IN" target="_blank" class="resources-card">
                <h3>Position the Social Links Horizontally</h3>
            </a>
            <a href="https://gemini.google.com/app/8357e8ed5c444195?hl=en-IN" target="_blank" class="resources-card">
                <h3>Resources Design</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=o9EH4SkxZ_M" target="_blank" class="resources-card">
                <h3>Responsive Navigation Bar</h3>
            </a>
        </div>
    </section>
      
      
    <!--Comments section-->
    <section id="comments" class="comments">
        <div class="comments-container">
            <h2>Thoughts about my website?</h2>
            <p>Let me know your feedback!</p>
            <div class="comments-content">
                <div class="comments-content">
                    <textarea id="comment-name" placeholder="Your Name" required></textarea>
                </div>
                <div class="comments-content">
                    <textarea id="comment-text" placeholder="Message" required></textarea>
                </div>
            </div>
            <button id="sendMessage">Submit</button>
            <div id="comment-list"></div>
        </div>
    </section>

    <router-link to="/about" class="btn">Back</router-link>
    <footer>
        <p>© 2025 Kelly Dumbrique. All rights reserved.</p>
    </footer>
</template>

<style scoped>
* {
    margin:  0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI' , sans-serif;
}
      
    :root {
      --dark-bg: #0a0a0a;
      --darker-bg: #050505;
      --accent: #cc462e;
      --accent-glow: rgba(165, 48, 48, 0.418);
      --text: #ffffff;
    }
      
    body {
      background-color: var(--darker-bg);
      color: var(--text);
      line-height: 1.6;
      overflow-x: hidden;
    }
      
    /* Navbar section */
    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      padding: 1.5rem 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(10, 10, 10, 0.95);
      backdrop-filter: blur(10px);
      z-index: 1000;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
      
    .logo {
      font-size: 1.8rem; 
      font-weight: 700;
      color: var(--accent);
      text-decoration: none;
      position: relative;
      padding-left: 2.5rem;
    }
      
    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
    }
      
    .nav-links a {
      color: var(--text);
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
    }
  
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--accent);
      transition: width 0.3s ease;
    }
      
    .nav-links a:hover:after {
      width: 100%;
    }
      
    .navbar i {
      font-size: 1.5rem;
      color: var(--accent);
    }
      
    input {
      display: none;
    }
      
    @media (max-width: 895px) {
      .navbar {
          padding: 2rem 5%;
          background: var(--darker-bg);
      }
      
      .nav-links {
          position: absolute;
          top: 100px;
          background: var(--darker-bg);
          left: 0;
          flex-direction: column;
          width: 100%;
          align-items: center;
          height: 0;
          transition: 0.5s;
          overflow: hidden;
      }
      
      .nav-links a:nth-child(1) {
          margin-top: 50px;
      }
      
      .label {
          position: relative;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          border-radius: 15px;
      }
          
      .label div {
          position: absolute;
          width: 30px;
          height: 4px;
          background-color: var(--accent);
          transition: 0.3s ease-in-out;
          border-radius: 2px;
      }
          
      .label:hover {
          border-color: var(--accent);
          box-shadow: 0 5px 15px var(--accent-glow);
          transition: all 0.3s ease-in-out;
          background: #fff;
      }
  
      .label div:nth-child(1) {
          top: 10px;
      }
          
      .label div:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
      }
          
      .label div:nth-child(3) {
          bottom: 10px;
      }
          
      /* Show menu when checked */
      #menu:checked + .navbar .nav-links {
          height: 100vh;
      }
    }
      
    /* About Section */
    .home {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 12% 5%;
      background: radial-gradient(circle at 75% 30%, var(--accent-glow) 0%, transparent 30%);
    }
      
    .home-content {
      flex: 1;
      padding-right: 5rem;
    }
      
    .home-img {
      flex: 1;
      text-align: center;
      position: relative;
    }
      
    .profile-img {
      width: 400px;
      height: 400px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid var(--accent);
      box-shadow: 0 0 50px var(--accent-glow);
      animation: float 3s ease-in-out infinite;
      filter: grayscale(0.2) contrast(1.1);
    }
      
      
    @keyframes float {
      0%, 100% {transform: translateY(0); }
      50% {transform: translateY(-2px); }    
    }
      
    .home h1{
      font-size: 4rem;
      margin-bottom: 1.5rem;
      background: linear-gradient(45deg, var(--accent) 30%, #ffffff 70%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
      
    .home p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
      max-width: 600px;
    }
      
    .socials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 1.5rem;
      margin-top: 3rem;
    }
      
    .social-card {
      padding: 1.5rem;
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
      
    .social-card:hover {
      transform: translateY(-5px);
      border-color: var(--accent);
      box-shadow: 0 5px 15px var(--accent-glow);
    }
      
    .social-card i {
      font-size: 2.5rem;
      color: var(--accent);
    }
      
    /* Education Section*/
    .education {
      padding: 5rem 5%;
      background: var(--darker-bg);
    }
      
    .timeline-items {
      max-width: 1200px;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      position: relative;
    }
      
    .timeline-items::before {
      content: "";
      position: absolute;
      width: 5px;
      height: 100%;
      background-color: var(--accent);
      box-shadow: 0 0 25px var(--accent-glow), 0 0 50px var(--accent-glow);
      left: calc(50% - 1px);
    }
      
    .timeline-item {
      margin-bottom: 40px;
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
    }
      
    .timeline-item:last-child {
      margin-bottom: 0;
    }
      
    .timeline-item:nth-child(odd) {
      padding-right: calc(50% + 30px);
      text-align: right;
    }
      
    .timeline-item:nth-child(even) {
      padding-left: calc(50% + 30px);
    }
      
    .timeline-dot {
      height: 21px;
      width: 21px;
      background-color: var(--accent);
      box-shadow: 0 0 25px var(--accent-glow), 0 0 50px var(--accent-glow);
      position: absolute;
      left: calc(50% - 8px);
      border-radius: 50%;
      top: 10px;
    }
      
    .timeline-date {
      font-size: 20px;
      font-weight: 800;
      color: #fff;
      margin: 6px 0 15px;
    }
      
    .timeline-content {
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      padding: 2rem;
      border-radius: 4rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      margin-bottom: 15px;
    }
      
    .timeline-content:hover {
      transform: TranslateY(-10px);
      border-color: var(--accent);
      box-shadow: 0 10px 30px var(--accent-glow);
    }
      
    .timemline-content h3 {
      font-size: 20px;
      color: #fff;
      margin: 0 0 10px;
      font-weight: 500;
    }
      
    .timeline-content p {
      color: #fff;
      font-size: 16px;
      font-weight: 300;
      line-height: 22px;
    }
      
    /* Experience Section */
    .experience {
      padding: 5rem 5%;
      background: var(--darker-bg);
    }
      
    .experience-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }
      
    .experience-card{
      padding: 2rem;
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-align: center;
      transition: all 0.3s ease;
    }
    
    .experience-card:hover {
      transform: TranslateY(-10px);
      border-color: var(--accent);
      box-shadow: 0 10px 30px var(--accent-glow);
    }
      
    .experience-card i{
      font-size: 2.5rem;
      color: var(--accent);
      margin-bottom: 1rem;
    }
      
    /* Hobbies Section */
    .hobbies {
      padding: 5rem 5%;
      background: var(--darker-bg);
    }
      
    .hobbies-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }
      
    .hobbies-card{
      padding: 2rem;
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-align: center;
      transition: all 0.3s ease;
    }
      
    .hobbies-card:hover {
      transform: TranslateY(-10px);
      border-color: var(--accent);
      box-shadow: 0 10px 30px var(--accent-glow);
    }
      
    .hobbies-card i{
      font-size: 2.5rem;
      color: var(--accent);
      margin-bottom: 1rem;
    }
      
    /* Picture Gallery Section */
    .gallery {
      padding: 5rem 5%;
      background: var(--darker-bg);
    }
      
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }
      
    .gallery-card{
      padding: 0;
      margin: 0;
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 300px;
      text-align: center;
      transition: all 0.3s ease;
      overflow: hidden;
    }
      
    .gallery-card:hover {
      transform: TranslateY(-10px);
      border-color: var(--accent);
      box-shadow: 0 10px 30px var(--accent-glow);
    }
      
    .gallery-card img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0px;
      color: var(--accent);
    }
      
    /* Resources Section*/
    .resources {
      padding: 5rem 5%;
      background: var(--darker-bg);
    }
      
    .resources-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin: 15px;
    }
      
    .resources-card {
      padding: 2rem;
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-align: center;
      transition: all 0.3s ease;
      text-decoration: none;
      position: relative;
    }
      
    .resources-card:hover {
      transform: translateY(-10px);
      border-color: var(--accent);
      box-shadow: 0 10px 30px var(--accent-glow);
    }
      
    .resources-card h3 {
      margin: 0;
      font-size: 1.5rem;
      color: var(--accent)
    }
      
    .hidden-link {
      text-decoration: none; /* Removes underline */
      color: #fff;
      display: inline-block;
    }
      
    /* Comments Section */
    .comments {
      padding: rem 5%;
      background: var(--darker-bg);
      display: flex;
      justify-content: center;
      margin-bottom: 10rem;
    }
      
    .comments h2 {
      font-size: 2rem;
      color: #fff;
      margin: 0 0 10px;
      font-weight: 500;
    }
      
    .comments p {
      font-size: 1.5rem;
      color: #fff;
      margin: 0 0 10px;
      font-weight: 500;
    }
      
    .comments-container {
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      align-items: center;
      justify-content: center;
      padding: 40px;
      border-radius: 15px;
      width: 600px;
      text-align: center;
    }
      
    .comments-content {
      margin-bottom: 15px;
    }
      
    .comments-content input,
    .comments-content textarea {
      width: calc(100% - 22px);
      padding: 10px;
      border: none;
      border-radius: 5px;
      font-size: 1em;
      background-color: white;
      color: #333;
    }
      
    .comments textarea {
      resize: vertical;
      min-height: 50px;
    }
      
    #sendMessage {
      background-color: rgba(255, 255, 255, 0.1);
      color: var(--accent);
      backdrop-filter: blur(5px);
      padding: 12px 20px;
      border: none;
      border-radius: 30px;
      font-size: 1em;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: bold;
    }
      
    #sendMessage:hover {
      border-color: var(--accent);
      box-shadow: 0 10px 30px var(--accent-glow);
      background: #fff;
    }
      
    .comment-item {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 8px;
      text-align: left;
      margin-top: 20px;
    }
      
    .comment-item strong {
      margin-right: 5px;
    }
  
    .comment-item:hover {
      transform: translateY(-2px);
      border-color: var(--accent);
      box-shadow: 0 10px 30px var(--accent-glow);
    }
      
    /* Footer */
    footer {
      background: var(--darker-bg);
      color: var(--text);
      text-align: center;
      padding: 1.5rem 0;
      font-size: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      position: fixed;
      bottom: 0;
      width: 100%;
    }    
</style>