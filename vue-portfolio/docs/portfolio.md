# My Portfolio

Welcome to my portfolio. Here are some of the projects I've worked on, showcasing my skills in web/app development.

## Project 1: SmallWorlds

<v-card
  class="mx-auto my-4"
  max-width="700"
  elevation="2"
>
  <v-img
    height="420px"
    src="/sw-client.png" 
    cover
    style="transition: transform 1s;"
    @mouseover="e => e.target.style.transform = 'scale(1.05)'"
    
    
  </v-img>
  <!-- Replace with an actual image for your project. Place images in `docs/public/` directory -->
  <!-- e.g., if image is `docs/public/images/awesome-app.png`, src would be "/images/awesome-app.png" -->

  <v-card-item>
    <v-card-title>SmallWorlds</v-card-title>
    <!-- Reversed Engineered Server code from original code + front-end -->
    <v-card-subtitle>A reimagined version of the SmallWorlds game client</v-card-subtitle>
  </v-card-item>
  <v-card-text>
    <p>
    SmallWorlds is a reimagined version of the original SmallWorlds game client, which was a social virtual world platform. This project involved reverse engineering the original server code and developing a new front-end using Vue.js and Vuetify. The application allows users to interact in a virtual environment, similar to the original SmallWorlds experience.
    The project includes features such as user authentication, room creation, and avatar customization. It also integrates with a custom backend built with Node.js and Java, utilizing WebSockets for real-time communication.
    The SmallWorlds project is a testament to my ability to work with complex systems, reverse engineer existing code, and create a modern web application that captures the essence of the original game.
    </p>
  </v-card-text>

  <v-divider class="mx-4 mb-1"></v-divider>

  <v-card-text>
    <div class="text-subtitle-2">Key Technologies:</div>
    <v-chip-group>
      <v-chip>Vue.js</v-chip>
      <v-chip>Vuetify</v-chip>
      <v-chip>Node.js</v-chip>
      <v-chip>Java</v-chip>
      <v-chip>Laravel</v-chip>
      <v-chip>Red5</v-chip>
      <v-chip>MariaDB</v-chip>
      <v-chip>WebSockets</v-chip>
    </v-chip-group>
  </v-card-text>

  <v-card-actions>
    <v-btn color="primary" href="#" target="_blank" prepend-icon="mdi-open-in-new">
      View Project
    </v-btn>
    <v-btn color="secondary" href="#" target="_blank" prepend-icon="mdi-github">
      Source Code
    </v-btn>
  </v-card-actions>
</v-card>

<br/>

## Project 2: Senior Project - Talking Pictures

<v-card
  class="mx-auto my-4"
  max-width="700"
  elevation="2"
>
<!-- I want to use a carosuel of images -->
<v-carousel hide-delimiters>
  <v-carousel-item
    src="tp_1.png"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="tp_2.png"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="tp_3.png"
    cover
  ></v-carousel-item>


</v-carousel>

  <!-- <v-img height="200px" src="/placeholder-project2.jpg" cover></v-img> -->
  <v-card-item>
    <v-card-title>Talking Pictures</v-card-title>
    <v-card-subtitle>Bring your photos to life with voice</v-card-subtitle>
  </v-card-item>

  <v-card-text>
   Talking Pictures is an innovative application that empowers users to augment their photographs with voiceovers, thereby crafting dynamic and captivating visual narratives. These voiceovers can be precisely positioned within the images, enabling a distinctive storytelling experience. The application is developed utilizing Flutter and Material-UI, ensuring a user interface that is both smooth and responsive.
Users can effortlessly upload their photographs, record or upload voiceovers, and subsequently share their creations with their acquaintances and extended families. Designed with a primary emphasis on a tablet-friendly interface, it guarantees a seamless user experience across diverse devices.
  <v-divider class="mx-4 mb-1"></v-divider>
Completed as a senior project utilizing SCRUM and agile methodologies. Presentation and burn-down chart of the completed product, achieved in two semesters, are provided below.
<v-divider class="mx-4 mb-1"></v-divider>
On the project I was involved with, uploading the photograph, switching between the “View” and “Edit” modes, configuring the audio to the hotspots, and enhancing the app’s fluidity by dynamically displaying buttons as required.
</v-card-text>
  <v-card-text>
    <div class="text-subtitle-2">Key Technologies:</div>
    <v-chip-group>
      <v-chip>Flutter</v-chip>
      <v-chip>Material-UI</v-chip>
      <v-chip>Dart</v-chip>
    </v-chip-group>
  </v-card-text>
  <v-card-actions>
    <v-btn color="primary" href="https://docs.google.com/presentation/d/1Ogf-5a36xojpDC39D44AK2w2-lRS-fSGpSKmb7IF7lI" target="_blank" prepend-icon="mdi-open-in-new">
      View Presentation
    </v-btn>
    </v-card-actions>
</v-card>

<!-- Add more projects as needed -->
## Project 3: Splotus Website

<v-card
  class="mx-auto my-4"
  max-width="700"
  elevation="2"
>
  <v-img
    height="400px"
    src="/splotus.png"
    cover
  ></v-img>

  <v-card-item>
    <v-card-title>Splotus</v-card-title>
    <v-card-subtitle>A platform for sharing and discovering creative content</v-card-subtitle>
  </v-card-item>

  <v-card-text>
    <!-- Splotus was a website that shared photos using a forum which had tight php integration with wordpress and also included a wiki for the game SmallWorlds -->
    Splotus was a community-driven platform designed to share and discover creative content, particularly focused on the SmallWorlds game. The site featured a forum for discussions, a photo-sharing section, and a wiki for game-related information. It was built using the Polymer library and integrated tightly with WordPress for content management.
    The platform allowed users to upload and share photos, engage in discussions, and contribute to the wiki, fostering a vibrant community around SmallWorlds.
  </v-card-text>


  <v-card-text>
    <div class="text-subtitle-2">Key Technologies:</div>
    <v-chip-group>
      <v-chip>Polymer Library</v-chip>
      <v-chip>WordPress</v-chip>
      <v-chip>PHP</v-chip>
    </v-chip-group>
  </v-card-text>

  <v-card-actions>
    <v-btn disabled color="primary" href="#" target="_blank" prepend-icon="mdi-open-in-new">
      Visit Site
    </v-btn>
    <v-btn color="secondary" href="https://github.com/justhecool/splotus" target="_blank" prepend-icon="mdi-github">
      Source Code
    </v-btn>
  </v-card-actions>
</v-card>

## Project 4: College Project - Playlist Generator
<v-card
  class="mx-auto my-4"
  max-width="700"
  elevation="2"
>
  <v-img
    height="400px"
    src="/playlist.png"
      aspect-ratio="4/3"
      cover
  ></v-img>

  <v-card-item>
    <v-card-title>Playlist Generator</v-card-title>
    <v-card-subtitle>A web application for generating personalized playlists</v-card-subtitle>
  </v-card-item>

  <v-card-text>
        This college project is a web application built with PHP that allows users to create and manage personalized music playlists. Users can register, log in, search for songs, and add them to new or existing playlists. The application interacts with a database to store user and playlist information, and it utilizes W3.CSS for basic styling, providing a functional interface for music enthusiasts to curate their own song collections.
  <v-divider class="mx-4 mb-1"></v-divider>
  Scored a 100% on the project, demonstrating proficiency in PHP and web development concepts.
 
  Try it out below: 
  <ul><li>User: <code>admin</code></li>
  <li>Password: <code>admin</code></li></ul>
  
  </v-card-text>

  <v-card-text>
    <div class="text-subtitle-2">Key Technologies:</div>
    <v-chip-group>
      <v-chip>PHP</v-chip>
      <v-chip>HTML5</v-chip>
      <v-chip>W3.CSS</v-chip>
    </v-chip-group>
  </v-card-text>

  <v-card-actions>
    <v-btn color="primary" href="https://justhecool.com/project/" target="_blank" prepend-icon="mdi-open-in-new">
      View Project
    </v-btn>
    <v-btn color="secondary" href="https://github.com/justhecool/CS234_Project" target="_blank" prepend-icon="mdi-github">
      Source Code
    </v-btn>
  </v-card-actions>
</v-card>

<!-- ## Project 5: The Gate Student Ministry -->
