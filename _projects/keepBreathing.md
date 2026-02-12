---
layout: default
title: Keep Breathing
description: Winner of the Best Technical Achievement at Global Game Jam 2026. A survival FPS built in 48 hours.
role: 3D Artist, UI Designer & Game Designer
year: 2026
categories: game-dev 3d-art ux-ui
cover_image: /assets/img/KeepBreathing/keep-breathing-cover.webp
---

<div class="case-study-container" style="padding-top: 40px;">

  <nav class="breadcrumbs">
    <a href="/">Home</a> &gt;
    <a href="/portfolio.html">Portfolio</a> &gt;
    <span>Keep Breathing</span>
  </nav>

  <header class="project-header">
    <h1 class="project-title">Keep Breathing</h1>
    <p class="project-subtitle">Turning 48 hours of chaos into an award-winning Survival FPS. Our first Global Game Jam, our first time using Unity, and a Technical Achievement Award to bring home.</p>
    <div class="project-details">
      <div><strong>Role:</strong> 3D Modeler, UI/UX, Level Design</div>
      <div><strong>Team:</strong> 5 Developers, 2 Designer</div>
      <div><strong>Award:</strong> Best Technical Achievement (GGJ Strasbourg 2026)</div>
    </div>
  </header>

  <div class="project-hero-media" style="margin: 40px 0; border-radius: 12px; overflow: hidden;">
      <img src="/assets/img/KeepBreathing/keep-breathing-main-menu.webp" alt="Keep Breathing Main menu Gameplay Screenshot" style="width: 100%; display: block;">
  </div>

  <article class="case-study-content">
    
    <section>
      <h2>The Challenge: "Masks"</h2>
      <p>The theme for the Global Game Jam 2026 was <strong>"Masks"</strong>. We had 48 hours. None of us had shipped a game in Unity before.</p>
      <p>Our concept? A first-person survival game where the air is toxic. The "mask" isn't just a cosmetic item; it's your life support. The gameplay loop is simple but stressful: <strong>Find a mask, keep breathing, or die.</strong></p>
    </section>

    <section>
      <h2>Game Design: The Oxygen Loop</h2>
      <p>Before touching a single polygon, we mapped out the game's logic and user flow in Figma. We needed a system that was scalable but simple enough to code in two days.</p>
      <p>The Core Loop: <strong>Play &rarr; Explore Room &rarr; Oxygen Decays &rarr; Find Mask &rarr; Oxygen Refills &rarr; Difficulty Increases &rarr; Game Over.</strong></p>

        <a href="https://www.figma.com/proto/QSs8reDgssWakM8UEdcsEc/UI-Game-Keep-Breathing?page-id=0%3A1&node-id=1-2&p=f&viewport=419%2C342%2C0.08&t=fi78lM3WjjGiSLXA-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer" class="submit-btn" style="margin-top: 1rem; display: inline-block;">
         Wanna try it on Figma ? &rarr;
      </a>

    </section>

    <section>
      <h2>3D Art & Optimization</h2>
      <p>As the primary 3D Artist, my job was to build the world. I used <strong>Blender</strong> to create a modular sci-fi corridor kit. To ensure the game ran smoothly on the jam's presentation PCs, I focused on strict optimization:</p>
      <ul>
        <li><strong>Low Poly Count:</strong> Kept geometry simple to allow for many instances.</li>
        <li><strong>Modular Design:</strong> Walls, floors, and ceilings snap together, allowing us to build infinite variations of the level quickly.</li>
        <li><strong>Site-Specific Textures:</strong> The industrial aesthetic is based on <strong>Le Shadok</strong> (our Jam venue). I took photos of the on-site concrete and metal surfaces, converting them into a single <strong>Texture Atlas</strong>. This gave the game a grounded, realistic feel while maintaining strict draw-call optimization.</li>
      </ul>
    </section>

    <section>
      <h2>UI Design: Survival Minimalism</h2>
      <p>For the interface, we wanted to avoid clutter. Simplicity and effectiveness was our signature.</p>
      <ul>
        <li><strong>Main Menu:</strong> Simple, setting the tone immediately.</li>
        <li><strong>In-Game HUD:</strong> Instead of one life bar, we created two, one for oxigen and another for health, a timer that counts the points and the interaction buttons.</li>
        <li><strong>Game Over:</strong> High score display to encourage replayability (the "Just one more run" effect).</li>
      </ul>
      
      <div class="bento-gallery" style="margin: 40px 0;">
         <div class="bento-item">
            <a href="javascript:void(0)" class="zoom-trigger">
                <img src="/assets/img/KeepBreathing/keep-breathing-main-menu.webp" alt="Main Menu UI" data-caption="Main Menu Design">
            </a>
         </div>
         <div class="bento-item">
            <a href="javascript:void(0)" class="zoom-trigger">
                <img src="/assets/img/KeepBreathing/keep-breathing-menu-pause.webp" alt="Pause Menu UI" data-caption="Pause Menu Overlay">
            </a>
         </div>
         <div class="bento-item" style="grid-column: span 2;">
            <a href="javascript:void(0)" class="zoom-trigger">
                <img src="/assets/img/KeepBreathing/keep-breathing-game-over.webp" alt="Game Over Screen" data-caption="Game Over & High Score Screen">
            </a>
         </div>
      </div>
    </section>

    <section>
      <h2>The Outcome</h2>
      <p>48 hours, liters of coffee and Red Bulls, and just a few hours sleep later, we presented "Keep Breathing" at Le Shadok, Strasbourg. The judges recognized the potential, and creativity of our build and the conception of our systems, awarding us <strong>Best Technical Achievement</strong>.</p>
      <p>For a team using Unity for the first time, this was a massive validation of our ability to learn and adapt on the fly.</p>

      <div class="bento-gallery" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 40px 0;">
        <div class="bento-item">
          <figure style="margin:0">
            <a href="javascript:void(0)" class="zoom-trigger">
                <img src="/assets/img/KeepBreathing/team-firstjam.webp" alt="Picture of the team" data-caption="The Team">
            </a>
            <figcaption style="text-align:center; color:#888; margin-top:5px;">The Team</figcaption>
          </figure>
        </div>
        <div class="bento-item">
          <figure style="margin:0">
            <a href="javascript:void(0)" class="zoom-trigger">
                <img src="/assets/img/KeepBreathing/ccicampus-team.webp" alt="The students of CCI Campus Alsace" data-caption="The students of CCI Campus Alsace">
            </a>
            <figcaption style="text-align:center; color:#888; margin-top:5px;">The students of CCI Campus Alsace</figcaption>
          </figure>
        </div>
        <div class="bento-item" style="grid-column: span 2;">
             <a href="javascript:void(0)" class="zoom-trigger">
                <img src="/assets/img/KeepBreathing/jury-presentation.webp" alt="The team presenting the game to the jury" data-caption="The team making a presentation of the game to the jury">
             </a>
             <figcaption style="text-align:center; color:#888; margin-top:5px;">Presentation moment in front of the jury</figcaption>
        </div>
      </div>
    </section>


  </article>
</div>
