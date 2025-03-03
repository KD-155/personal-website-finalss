<script setup>
    import { createApp } from 'vue';
    import Home from './Home.vue'; // Import Home.vue

    const app = createApp(Home); // Directly use Home.vue as the root component
    app.mount('#app'); // Mount the app to `#app`

    import image1 from "@/assets/Gallery Image 1.jpg";
    import image6 from "@/assets/Gallery Image 2.jpg";
    import image3 from "@/assets/Gallery Image 3.jpg";
    import image4 from "@/assets/Gallery Image 4.jpg";
    import image2 from "@/assets/Gallery Image 5.jpg";

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
                <img :src="image1.jpg" alt="Gallery Image 1">
            </div>
            <div class="gallery-card">
                <img :src="image6.jpg" alt="Gallery Image 2">
            </div>
            <div class="gallery-card">
                <img :src="image3.jpg" alt="Gallery Image 3">   
            </div>
            <div class="gallery-card">
                <img :src="image4.jpg" alt="Gallery Image 4">
            </div>
            <div class="gallery-card">
                <img :src="image2.jpg" alt="Gallery Image 5">
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

<style scoped></style>