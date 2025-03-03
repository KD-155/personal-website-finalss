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
      
    <footer>
        <p>© 2025 Kelly Dumbrique. All rights reserved.</p>
    </footer>
</template>

