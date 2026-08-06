---
layout: project
title: Keep Breathing
description: Winner of the Best Technical Achievement at Global Game Jam 2026. A survival FPS built in 48 hours.
role: 3D Artist, UI Designer & Game Designer
tools: Unity, Blender, Figma
team: 5 Developers, 2 Designers
award: Best Technical Achievement (GGJ Strasbourg 2026)
year: 2026
categories: game-dev 3d-art ux-ui
cover_image: /assets/img/KeepBreathing/keep-breathing-cover.webp
---

<div class="project-hero-media">
  <img src="/assets/img/KeepBreathing/keep-breathing-main-menu.webp" alt="Keep Breathing main menu — dark sci-fi corridor with the game title" style="width: 100%; display: block;">
</div>

<section>
  <h2>The Challenge: "Masks"</h2>
  <p>The theme for the Global Game Jam 2026 was <strong>"Masks"</strong>. We had 48 hours. None of us had shipped a game in Unity before.</p>
  <p>Our concept? A first-person survival game where the air is toxic. The "mask" isn't just a cosmetic item; it's your life support. The gameplay loop is simple but stressful: <strong>Find a mask, keep breathing, or die.</strong></p>
</section>

<section>
  <h2>Game Design: The Oxygen Loop</h2>
  <p>Before touching a single polygon, we mapped out the game's logic and user flow in Figma. We needed a system that was scalable but simple enough to code in two days.</p>
  <p>The Core Loop: <strong>Play → Explore Room → Oxygen Decays → Find Mask → Oxygen Refills → Difficulty Increases → Game Over.</strong></p>

  <a href="https://www.figma.com/proto/QSs8reDgssWakM8UEdcsEc/UI-Game-Keep-Breathing?page-id=0%3A1&node-id=1-2&p=f&viewport=419%2C342%2C0.08&t=fi78lM3WjjGiSLXA-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer" class="submit-btn" style="margin-top: 1rem; display: inline-block;">
    Try the Figma prototype &rarr;
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
    <li><strong>In-Game HUD:</strong> Two separate bars (oxygen and health), a timer for scoring, and interaction prompts — nothing more.</li>
    <li><strong>Game Over:</strong> High score display to encourage replayability (the "just one more run" effect).</li>
  </ul>
  
  <div class="bento-gallery" style="margin: 40px 0;">
    <div class="bento-item">
      <a href="javascript:void(0)" class="zoom-trigger">
        <img src="/assets/img/KeepBreathing/keep-breathing-main-menu.webp" alt="Keep Breathing main menu UI with industrial aesthetic" data-caption="Main Menu Design">
      </a>
    </div>
    <div class="bento-item">
      <a href="javascript:void(0)" class="zoom-trigger">
        <img src="/assets/img/KeepBreathing/keep-breathing-menu-pause.webp" alt="Keep Breathing pause menu overlay" data-caption="Pause Menu Overlay">
      </a>
    </div>
    <div class="bento-item" style="grid-column: span 2;">
      <a href="javascript:void(0)" class="zoom-trigger">
        <img src="/assets/img/KeepBreathing/keep-breathing-game-over.webp" alt="Keep Breathing game over screen with high score display" data-caption="Game Over & High Score Screen">
      </a>
    </div>
  </div>
</section>

<section>
  <h2>The Outcome</h2>
  <p>48 hours, liters of coffee, and barely any sleep later, we presented "Keep Breathing" at Le Shadok, Strasbourg. The judges recognized the creativity and technical quality of our build, awarding us <strong>Best Technical Achievement</strong>.</p>
  <p>For a team using Unity for the first time, this was a massive validation of our ability to learn and adapt on the fly.</p>

  <div class="bento-gallery" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 40px 0;">
    <div class="bento-item">
      <figure style="margin:0">
        <a href="javascript:void(0)" class="zoom-trigger">
          <img src="/assets/img/KeepBreathing/team-firstjam.webp" alt="The Keep Breathing development team at Le Shadok" data-caption="The Team">
        </a>
        <figcaption style="text-align:center; color:var(--text-muted); margin-top:5px;">The Team</figcaption>
      </figure>
    </div>
    <div class="bento-item">
      <figure style="margin:0">
        <a href="javascript:void(0)" class="zoom-trigger">
          <img src="/assets/img/KeepBreathing/ccicampus-team.webp" alt="CCI Campus Alsace students at Global Game Jam" data-caption="CCI Campus Alsace students">
        </a>
        <figcaption style="text-align:center; color:var(--text-muted); margin-top:5px;">CCI Campus Alsace students</figcaption>
      </figure>
    </div>
    <div class="bento-item" style="grid-column: span 2;">
      <a href="javascript:void(0)" class="zoom-trigger">
        <img src="/assets/img/KeepBreathing/jury-presentation.webp" alt="The team presenting Keep Breathing to the jury at Le Shadok" data-caption="Presenting to the jury">
      </a>
      <figcaption style="text-align:center; color:var(--text-muted); margin-top:5px;">Presentation to the jury</figcaption>
    </div>
  </div>
</section>
