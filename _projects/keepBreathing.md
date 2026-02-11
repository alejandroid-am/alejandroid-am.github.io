---
layout: default
title: Keep Breathing
description: Winner of the Best Technical Achievement at Global Game Jam 2025.
role: Scrum Master & 3D Tech Artist
year: 2025
categories: game-dev 3d-art project-management
cover_image: /assets/img/KeepBreathing/cover_gameplay.webp
---

<div class="case-study-container" style="padding-top: 40px;">

  <nav class="breadcrumbs">
    <a href="/">Home</a> &gt;
    <a href="/portfolio.html">Portfolio</a> &gt;
    <span>Keep Breathing</span>
  </nav>

  <header class="project-header">
    <h1 class="project-title">Keep Breathing</h1>
    <p class="project-subtitle">Turning 48 hours of chaos into an award-winning Survival FPS using Agile methodology and smart asset optimization.</p> 
    <div class="project-details">
      <div><strong>Role:</strong> Scrum Master, 3D Artist, UI Design</div>
      <div><strong>Tech:</strong> Unity URP, Blender, JSON</div> 
      <div><strong>Award:</strong> Best Technical Achievement (GGJ 2025)</div>
    </div>
  </header>

  <img src="/assets/img/KeepBreathing/hero_gameplay.webp" alt="Keep Breathing Gameplay Screenshot" class="project-hero-image" style="width: 100%; border-radius: 12px; margin: 40px 0;">

  <article class="case-study-content">
    
    <section>
      <h2>The Challenge: Scope vs. Time</h2>
      <p>The Global Game Jam is a pressure cooker. We had 48 hours to build a game from scratch. The initial brainstorming session was chaotic, with ideas ranging from complex RPGs to puzzle games. The risk of "feature creep" was high.</p> 
      <p>My primary goal was to <strong>unify the team's vision</strong> into a single, achievable core mechanic: <em>"Oxygen is your score. Move or die."</em></p>
    </section>

    <section>
      <h2>The Management: Agile in a Bottle</h2> 
      <p>To ensure we shipped a polished product (and not just a prototype), I acted as the Scrum Master, implementing a strict but adaptive workflow.</p>

      <div class="before-after-gallery" style="display: flex; gap: 40px; flex-wrap: wrap; margin: 40px 0;">
        <div style="flex: 1; min-width: 250px;">
          <h3>1 — MoSCoW Prioritization</h3>
          <p>We ruthlessly cut features using the MoSCoW method:</p>
          <ul style="margin-top: 0;">
            <li><strong>Must Have:</strong> Infinite loop, oxygen decay, mask pickup.</li>
            <li><strong>Should Have:</strong> High scores, sound effects.</li>
            <li><strong>Could Have:</strong> Different enemy types (Cut).</li>
            <li><strong>Won't Have:</strong> Complex narrative or cutscenes (Cut).</li>
          </ul>
        </div>
        <div style="flex: 1; min-width: 250px;">
           <h3>2 — Micro-Sprints & Direction</h3>
           <p>Instead of working in isolation for hours, we ran <strong>15-minute syncs</strong> every few hours. This allowed us to:</p>
           <ul>
            <li>Detect blockers immediately (e.g., lighting bugs in Unity).</li>
            <li>Pivot quickly when a mechanic wasn't fun.</li>
            <li>Keep the Art and Code aligned on the same aesthetic.</li>
           </ul>
        </div>
      </div>
    </section>

    <section>
      <h2>3D Art: Optimization First</h2> 
      <p>As the 3D Artist, I needed to create a convincing, oppressive atmosphere without killing the frame rate. I opted for a <strong>Modular Kit</strong> approach using a single Texture Atlas (Trim Sheet).</p> 
      
      <div class="bento-gallery" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 40px 0;">
        <div class="bento-item">
          <figure style="margin:0">
            <a href="javascript:void(0)" class="zoom-trigger">
                <img src="/assets/img/KeepBreathing/modular_kit_wireframe.webp" alt="Modular walls and floor wireframe" data-caption="The Modular Kit: Walls, Floors, and Ceiling">
            </a>
            <figcaption style="text-align:center; color:#888; margin-top:5px;">Modular Asset Kit</figcaption>
          </figure>
        </div>
        <div class="bento-item">
          <figure style="margin:0">
            <a href="javascript:void(0)" class="zoom-trigger">
                <img src="/assets/img/KeepBreathing/texture_atlas.webp" alt="Texture Atlas used for all assets" data-caption="Single Texture Atlas for performance">
            </a>
            <figcaption style="text-align:center; color:#888; margin-top:5px;">One Material Workflow</figcaption>
          </figure>
        </div>
        <div class="bento-item" style="grid-column: span 2;">
          <figure style="margin:0">
            <a href="javascript:void(0)" class="zoom-trigger">
                <img src="/assets/img/KeepBreathing/mask_model_render.webp" alt="The Gas Mask Hero Prop" data-caption="The Hero Prop: Low Poly Gas Mask with Emissive Map">
            </a>
            <figcaption style="text-align:center; color:#888; margin-top:5px;">Hero Prop: The Mask</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section>
      <h2>UI & UX: Diegetic Immersion</h2> 
      <p>We wanted the player to feel suffocated. Standard floating UI bars would break the immersion. I designed a <strong>Diegetic HUD</strong> where the interface is part of the gas mask itself.</p>
      
      <div class="color-palette-container">
          <h3 class="color-palette-title">Atmosphere Palette</h3>
          <div class="color-palette-grid">
            <div class="color-item">
              <div class="color-block" style="background-color: #0B1A0B;"></div>
              <p class="color-hex">#0B1A0B</p>
              <p class="color-desc">Toxic Dark</p>
            </div>
            <div class="color-item">
              <div class="color-block" style="background-color: #3B4D30;"></div>
              <p class="color-hex">#3B4D30</p>
              <p class="color-desc">Fog Green</p>
            </div>
            <div class="color-item">
              <div class="color-block" style="background-color: #FF5500;"></div>
              <p class="color-hex">#FF5500</p>
              <p class="color-desc">Critical O2</p>
            </div>
             <div class="color-item">
              <div class="color-block" style="background-color: #00FFC8;"></div>
              <p class="color-hex">#00FFC8</p>
              <p class="color-desc">Safe/Loot</p>
            </div>
          </div>
        </div>

      <div class="before-after-gallery" style="display: flex; gap: 20px; flex-wrap: wrap; margin: 40px 0;">
         <figure style="flex: 1; min-width: 300px;">
          <a href="javascript:void(0)" class="zoom-trigger">
            <img src="/assets/img/KeepBreathing/hud_overlay_design.webp" alt="Overlay design in Photoshop" data-caption="Designing the mask vignette and dirty glass effect">
          </a>
          <figcaption>The Vignette Overlay</figcaption>
        </figure>
         <div style="flex: 1; min-width: 300px;">
          <h3 style="margin-top: 0;">HUD Key Decisions:</h3>
          <ul style="margin-top: 0;">
            <li><strong>No Health Bars:</strong> The screen blurs and darkens (Vignette) as oxygen drops.</li>
            <li><strong>Emissive Lighting:</strong> Lootable masks glow in the fog, guiding the player without arrows.</li>
            <li><strong>Integrated Timer:</strong> The score is displayed digitally inside the mask frame, feeling like a piece of equipment rather than a game layer.</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2>The Result</h2>
      <p>The strict prioritization paid off. We delivered a bug-free, highly atmospheric infinite runner with a functioning local leaderboard system. The judges awarded us the <strong>Best Technical Achievement</strong> for the seamless loop implementation and atmospheric optimization.</p> 
    </section>

    <section class="bento-gallery">
      <div class="bento-item" style="grid-column: span 2;">
        <a href="javascript:void(0)" class="zoom-trigger">
          <img src="/assets/img/KeepBreathing/final_screenshot_fog.webp" alt="Final game screenshot with fog" data-caption="Final Atmosphere: Volumetric Fog in URP">
        </a>
      </div>
      <div class="bento-item">
        <a href="javascript:void(0)" class="zoom-trigger">
          <img src="/assets/img/KeepBreathing/unity_editor_view.webp" alt="Unity Editor View" data-caption="Behind the scenes: The 'Infinite' loop trick">
        </a>
      </div>
       <div class="bento-item">
        <a href="javascript:void(0)" class="zoom-trigger">
          <img src="/assets/img/KeepBreathing/game_over_screen.webp" alt="Leaderboard Screen" data-caption="JSON-based High Score System">
        </a>
      </div>
    </section> 

    <div style="text-align: center; margin-top: 60px;">
        <a href="https://your-itch-io-link" target="_blank" rel="noopener noreferrer" class="submit-btn" style="display: inline-block; padding: 15px 30px; background-color: #000; color: #fff; text-decoration: none; border-radius: 8px; font-weight: bold;">
          Play on Itch.io &rarr;
      </a>
    </div>

  </article> 
</div>
