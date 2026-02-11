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
      <div><strong>Team:</strong> 4 Developers, 1 Sound Designer</div>
      <div><strong>Award:</strong> Best Technical Achievement (GGJ Alsace 2026)</div>
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
      <p>Before touching a single polygon, I mapped out the game's logic and user flow (Arborescence) in Figma. We needed a system that was scalable but simple enough to code in two days.</p>
      <p>The Core Loop: <strong>Explore Room &rarr; Oxygen Decays &rarr; Find Mask &rarr; Oxygen Refills &rarr; Difficulty Increases.</strong></p>

      <div class="bento-gallery" style="grid-template-columns: 1fr 1fr; gap: 20px; margin: 40px 0;">
        <div class="bento-item" style="grid-column: span 2;">
             <a href="javascript:void(0)" class="zoom-trigger">
                <img src="/assets/img/KeepBreathing/keep-breathing-main-menu.webp" alt="Game Loop Diagram in Figma" data-caption="Figma Flow: Defining the Win/Loss conditions and Menu navigation">
             </a>
             <figcaption style="text-align:center; color:#888; margin-top:5px;">Game Architecture (Figma)</figcaption>
        </div>
      </div>
    </section>

    <section>
      <h2>3D Art & Optimization</h2>
      <p>As the primary 3D Artist, my job was to build the world. I used <strong>Blender</strong> to create a modular sci-fi corridor kit. To ensure the game ran smoothly on the jam's presentation PCs, I focused on strict optimization:</p>
      <ul>
        <li><strong>Low Poly Count:</strong> Kept geometry simple to allow for many instances.</li>
        <li><strong>Modular Design:</strong> Walls, floors, and ceilings snap together, allowing us to build infinite variations of the level quickly.</li>
        <li><strong>Atmospheric Lighting:</strong> Relied on Unity's fog and emissive materials to create the "toxic" vibe without expensive rendering costs.</li>
      </ul>

      <div class="bento-gallery" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 40px 0;">
        <div class="bento-item">
          <figure style="margin:0">
            <a href="javascript:void(0)" class="zoom-trigger">
                <img src="/assets/img/KeepBreathing/mask_model_render.webp" alt="3D Model of the Gas Mask" data-caption="The Hero Asset: Modeled in Blender, textured for Unity">
            </a>
            <figcaption style="text-align:center; color:#888; margin-top:5px;">The Gas Mask (Blender)</figcaption>
          </figure>
        </div>
        <div class="bento-item">
          <figure style="margin:0">
            <a href="javascript:void(0)" class="zoom-trigger">
                <img src="/assets/img/KeepBreathing/modular_kit_wireframe.webp" alt="Wireframe of the level kit" data-caption="Modular Corridor Kit: Walls, Corners, and Doors">
            </a>
            <figcaption style="text-align:center; color:#888; margin-top:5px;">Modular Environment</figcaption>
          </figure>
        </div>
        <div class="bento-item" style="grid-column: span 2;">
             <a href="javascript:void(0)" class="zoom-trigger">
                <img src="/assets/img/KeepBreathing/unity_scene_view.webp" alt="Unity Scene View" data-caption="Assembling the level in Unity">
             </a>
             <figcaption style="text-align:center; color:#888; margin-top:5px;">Level Assembly in Unity</figcaption>
        </div>
      </div>
    </section>

    <section>
      <h2>UI Design: Survival Minimalism</h2>
      <p>For the interface, I wanted to avoid clutter. In a survival game, information should create tension, not remove it.</p>
      <ul>
        <li><strong>Main Menu:</strong> Simple, eerie, setting the tone immediately.</li>
        <li><strong>In-Game HUD:</strong> Instead of a health bar, we used a vignette effect and sound cues (heavy breathing) to indicate low oxygen.</li>
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
      <p>48 hours, liters of coffee, and zero sleep later, we presented "Keep Breathing" at the CCI Campus Alsace. The judges recognized the stability of our build and the integration of our systems, awarding us <strong>Best Technical Achievement</strong>.</p>
      <p>For a team using Unity for the first time, this was a massive validation of our ability to learn and adapt on the fly.</p>

      <div class="bento-gallery" style="grid-template-columns: 1fr; margin-top: 40px;">
        <div class="bento-item">
            <a href="javascript:void(0)" class="zoom-trigger">
                <img src="/assets/img/KeepBreathing/team_photo.webp" alt="The Team at GGJ Alsace" data-caption="The team after 48 hours of jamming!">
            </a>
            <figcaption style="text-align:center; color:#888; margin-top:5px;">The "Keep Breathing" Team @ CCI Campus Alsace</figcaption>
        </div>
      </div>
    </section>

    <div style="text-align: center; margin: 80px 0;">
        <h3 style="margin-bottom: 20px;">Survive the toxicity. Try the game.</h3>
        <a href="https://itch.io/jam/global-game-jam-2026/rate/your-game-id" target="_blank" rel="noopener noreferrer" class="submit-btn" style="display: inline-block; padding: 15px 40px; background-color: #fff; color: #000; text-decoration: none; border-radius: 50px; font-weight: 600; border: 2px solid #000; transition: all 0.3s;">
            Play on Itch.io &rarr;
        </a>
    </div>

  </article>
</div>