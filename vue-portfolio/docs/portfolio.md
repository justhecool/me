# My Portfolio

Welcome to my portfolio. Here are some of the projects I've worked on, showcasing my skills in web/app development.

## Project 1: Midwest American Woodworks

<v-card
  class="mx-auto my-4"
  max-width="700"
  elevation="2"
>
  <v-dialog width="auto">
    <template v-slot:activator="{ props }">
      <v-img
        v-bind="props"
        height="400px"
        src="/maww-placeholder.png"
        cover
        style="cursor: pointer; transition: transform 0.3s;"
        @mouseover="e => e.target.style.transform = 'scale(1.02)'"
        @mouseleave="e => e.target.style.transform = 'scale(1)'"
      ></v-img>
    </template>
    <template v-slot:default="{ isActive }">
      <img src="/maww-placeholder.png" @click="isActive.value = false" style="cursor: pointer; max-height: 90vh; max-width: 90vw; object-fit: contain; display: block; margin: auto; border-radius: 8px;" />
    </template>
  </v-dialog>

  <v-card-item>
    <v-card-title>Midwest American Woodworks</v-card-title>
    <v-card-subtitle>E-commerce and Content Management System</v-card-subtitle>
  </v-card-item>
  <v-card-text>
    <p>
    A robust, CMS-oriented website built for Midwest American Woodworks. The application features a powerful headless architecture utilizing Directus for seamless content and data management. 
    </p>
    <br/>
    <p>
    I engineered complex business workflows directly within the Directus backend to automate order processing and status tracking. Additionally, I integrated the Resend API to handle transactional emails, providing reliable and beautifully formatted communication for customers and administrators.
    </p>
  </v-card-text>

  <v-divider class="mx-4 mb-1"></v-divider>

  <v-card-text>
    <div class="text-subtitle-2">Key Technologies:</div>
    <v-chip-group>
      <v-chip>Directus CMS</v-chip>
      <v-chip>Vue.js</v-chip>
      <v-chip>Resend API</v-chip>
      <v-chip>Custom Workflows</v-chip>
    </v-chip-group>
  </v-card-text>

  <v-card-actions>
    <v-btn color="primary" href="https://midwestamericanwoodworks.com" target="_blank" prepend-icon="mdi-open-in-new">
      View Project
    </v-btn>
  </v-card-actions>
</v-card>

<br/>

## Project 2: SmallWorlds

<v-card
  class="mx-auto my-4"
  max-width="700"
  elevation="2"
>
  <v-dialog width="auto">
    <template v-slot:activator="{ props }">
      <v-img
        v-bind="props"
        height="420px"
        src="/sw-client.png" 
        cover
        style="cursor: pointer; transition: transform 0.3s;"
        @mouseover="e => e.target.style.transform = 'scale(1.02)'"
        @mouseleave="e => e.target.style.transform = 'scale(1)'"
      ></v-img>
    </template>
    <template v-slot:default="{ isActive }">
      <img src="/sw-client.png" @click="isActive.value = false" style="cursor: pointer; max-height: 90vh; max-width: 90vw; object-fit: contain; display: block; margin: auto; border-radius: 8px;" />
    </template>
  </v-dialog>
  <!-- Replace with an actual image for your project. Place images in `docs/public/` directory -->
  <!-- e.g., if image is `docs/public/images/awesome-app.png`, src would be "/images/awesome-app.png" -->

  <v-card-item>
    <v-card-title>SmallWorlds</v-card-title>
    <!-- Reversed Engineered Server code from original code + front-end -->
    <v-card-subtitle>A reimagined version of the SmallWorlds game client</v-card-subtitle>
  </v-card-item>
  <v-card-text>
    <p>
    A complete, modern reimagining of the SmallWorlds social virtual world client. I successfully reverse-engineered the legacy server architecture and built a scalable, responsive front-end using Vue.js and Vuetify. The application delivers a rich, interactive virtual environment featuring secure user authentication, dynamic room creation, and avatar customization.
    </p>
    <br/>
    <p>
    This full-stack project is powered by a custom backend utilizing Node.js and Java, with WebSockets ensuring seamless, real-time communication. It demonstrates my ability to tackle complex, distributed systems, analyze undocumented legacy code, and deliver a polished modern web application.
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
    <v-btn color="primary" href="https://smallworlds.app/invite/try/" target="_blank" prepend-icon="mdi-open-in-new">
      View Project
    </v-btn>
    <v-btn color="secondary" href="https://github.com/justhecool/smallworlds-forever" target="_blank" prepend-icon="mdi-github">
      Source Code
    </v-btn>
  </v-card-actions>
</v-card>

<br/>

## Project 3: Senior Project - Talking Pictures

<v-card
  class="mx-auto my-4"
  max-width="700"
  elevation="2"
>
<!-- I want to use a carosuel of images -->
<v-carousel hide-delimiters>
  <v-carousel-item cover>
    <v-dialog width="auto">
      <template v-slot:activator="{ props }">
        <v-img v-bind="props" src="/tp_1.png" cover height="100%" style="cursor: pointer;"></v-img>
      </template>
      <template v-slot:default="{ isActive }">
        <v-carousel show-arrows="hover" hide-delimiters style="width: 90vw; max-width: 1200px; height: 90vh;" :model-value="0">
          <v-carousel-item><img src="/tp_1.png" @click="isActive.value = false" style="cursor: pointer; max-height: 90vh; max-width: 90vw; object-fit: contain; display: block; margin: auto; border-radius: 8px;" /></v-carousel-item>
          <v-carousel-item><img src="/tp_2.png" @click="isActive.value = false" style="cursor: pointer; max-height: 90vh; max-width: 90vw; object-fit: contain; display: block; margin: auto; border-radius: 8px;" /></v-carousel-item>
          <v-carousel-item><img src="/tp_3.png" @click="isActive.value = false" style="cursor: pointer; max-height: 90vh; max-width: 90vw; object-fit: contain; display: block; margin: auto; border-radius: 8px;" /></v-carousel-item>
        </v-carousel>
      </template>
    </v-dialog>
  </v-carousel-item>

  <v-carousel-item cover>
    <v-dialog width="auto">
      <template v-slot:activator="{ props }">
        <v-img v-bind="props" src="/tp_2.png" cover height="100%" style="cursor: pointer;"></v-img>
      </template>
      <template v-slot:default="{ isActive }">
        <v-carousel show-arrows="hover" hide-delimiters style="width: 90vw; max-width: 1200px; height: 90vh;" :model-value="1">
          <v-carousel-item><img src="/tp_1.png" @click="isActive.value = false" style="cursor: pointer; max-height: 90vh; max-width: 90vw; object-fit: contain; display: block; margin: auto; border-radius: 8px;" /></v-carousel-item>
          <v-carousel-item><img src="/tp_2.png" @click="isActive.value = false" style="cursor: pointer; max-height: 90vh; max-width: 90vw; object-fit: contain; display: block; margin: auto; border-radius: 8px;" /></v-carousel-item>
          <v-carousel-item><img src="/tp_3.png" @click="isActive.value = false" style="cursor: pointer; max-height: 90vh; max-width: 90vw; object-fit: contain; display: block; margin: auto; border-radius: 8px;" /></v-carousel-item>
        </v-carousel>
      </template>
    </v-dialog>
  </v-carousel-item>

  <v-carousel-item cover>
    <v-dialog width="auto">
      <template v-slot:activator="{ props }">
        <v-img v-bind="props" src="/tp_3.png" cover height="100%" style="cursor: pointer;"></v-img>
      </template>
      <template v-slot:default="{ isActive }">
        <v-carousel show-arrows="hover" hide-delimiters style="width: 90vw; max-width: 1200px; height: 90vh;" :model-value="2">
          <v-carousel-item><img src="/tp_1.png" @click="isActive.value = false" style="cursor: pointer; max-height: 90vh; max-width: 90vw; object-fit: contain; display: block; margin: auto; border-radius: 8px;" /></v-carousel-item>
          <v-carousel-item><img src="/tp_2.png" @click="isActive.value = false" style="cursor: pointer; max-height: 90vh; max-width: 90vw; object-fit: contain; display: block; margin: auto; border-radius: 8px;" /></v-carousel-item>
          <v-carousel-item><img src="/tp_3.png" @click="isActive.value = false" style="cursor: pointer; max-height: 90vh; max-width: 90vw; object-fit: contain; display: block; margin: auto; border-radius: 8px;" /></v-carousel-item>
        </v-carousel>
      </template>
    </v-dialog>
  </v-carousel-item>
</v-carousel>

  <!-- <v-img height="200px" src="/placeholder-project2.jpg" cover></v-img> -->
  <v-card-item>
    <v-card-title>Talking Pictures</v-card-title>
    <v-card-subtitle>Bring your photos to life with voice</v-card-subtitle>
  </v-card-item>

  <v-card-text>
    <p>Talking Pictures is an interactive mobile application that empowers users to bring their photographs to life with spatial voiceovers. By precisely positioning audio hotspots within images, users can craft dynamic and accessible visual narratives. Built with Flutter and Material Design, it delivers a smooth, highly responsive cross-platform experience.</p>
    <v-divider class="mx-4 my-2"></v-divider>
    <p>Developed as a collaborative Senior Capstone project using Agile/Scrum methodologies over two semesters. I spearheaded the core interactive features: engineering the photo upload pipeline, developing state management for seamless 'View' and 'Edit' mode transitions, implementing the spatial audio configuration logic, and optimizing UI fluidity through dynamic component rendering.</p>
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
## Project 4: Splotus Website

<v-card
  class="mx-auto my-4"
  max-width="700"
  elevation="2"
>
  <v-dialog width="auto">
    <template v-slot:activator="{ props }">
      <v-img
        v-bind="props"
        height="400px"
        src="/splotus.png"
        cover
        style="cursor: pointer; transition: transform 0.3s;"
        @mouseover="e => e.target.style.transform = 'scale(1.02)'"
        @mouseleave="e => e.target.style.transform = 'scale(1)'"
      ></v-img>
    </template>
    <template v-slot:default="{ isActive }">
      <img src="/splotus.png" @click="isActive.value = false" style="cursor: pointer; max-height: 90vh; max-width: 90vw; object-fit: contain; display: block; margin: auto; border-radius: 8px;" />
    </template>
  </v-dialog>

  <v-card-item>
    <v-card-title>Splotus</v-card-title>
    <v-card-subtitle>A platform for sharing and discovering creative content</v-card-subtitle>
  </v-card-item>

  <v-card-text>
    <p>Splotus.com was a thriving community hub designed for the SmallWorlds player base to share and explore creative content. I architected and deployed a comprehensive platform featuring integrated discussion forums, a user-generated photo gallery, and a collaborative wiki for game guides.</p>
    <br/>
    <p>The front-end was constructed using the Polymer library to deliver reusable web components, seamlessly integrated with a headless WordPress CMS for robust content management. This project highlights my ability to build and scale community-driven platforms that foster user engagement.</p>
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

## Project 5: College Project - Playlist Generator
<v-card
  class="mx-auto my-4"
  max-width="700"
  elevation="2"
>
  <v-dialog width="auto">
    <template v-slot:activator="{ props }">
      <v-img
        v-bind="props"
        height="400px"
        src="/playlist.png"
        aspect-ratio="4/3"
        cover
        style="cursor: pointer; transition: transform 0.3s;"
        @mouseover="e => e.target.style.transform = 'scale(1.02)'"
        @mouseleave="e => e.target.style.transform = 'scale(1)'"
      ></v-img>
    </template>
    <template v-slot:default="{ isActive }">
      <img src="/playlist.png" @click="isActive.value = false" style="cursor: pointer; max-height: 90vh; max-width: 90vw; object-fit: contain; display: block; margin: auto; border-radius: 8px;" />
    </template>
  </v-dialog>

  <v-card-item>
    <v-card-title>Playlist Generator</v-card-title>
    <v-card-subtitle>A web application for generating personalized playlists</v-card-subtitle>
  </v-card-item>

  <v-card-text>
    <p>A dynamic full-stack web application for creating and managing personalized music playlists. Users benefit from secure authentication, intuitive song search capabilities, and comprehensive playlist management tools.</p>
    <br/>
    <p>Built with PHP and MySQL, the application features a robust relational database architecture to securely handle user state and playlist associations. The responsive front-end utilizes W3.CSS for clean, accessible styling. Awarded a 100% grade, this project showcases my strong foundational knowledge of backend logic, database design, and full-stack web development principles.</p>
  <v-divider class="mx-4 my-2"></v-divider>
  <p>Try it out below: </p>
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
