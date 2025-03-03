<script setup>
    import image7 from "@/assets/image7.jpg";
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
  
    <!--Home Section-->
    <section id="home" class="home">
        <div class="home-content">
            <h1>HI, I'M KELLY WELCOME TO MY WEBSITE</h1>
            <p>I am currently a 2nd-Year College student, Batch 2023-2027.</p>
            <div class="socials-grid">
                <div class="social-card">
                    <a href="https://github.com/KD-155"><i class="fa-brands fa-github"></i></a> 
                </div>
                <div class="social-card">
                    <a href="mailto:ksdumbrique2@student.apc.edu.ph"><i class="fa-regular fa-envelope"></i></a>
                </div>
                <div class="social-card">
                    <a href="https://www.linkedin.com/in/kelly-dumbrique-928a7b216/"><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>            
        </div>
        <div class="home-img">
            <img :src="image7" alt="Profile" class="profile-img">
        </div>
    </section>
    <router-link to="/" class="btn">Get to know me more!</router-link>
      
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
