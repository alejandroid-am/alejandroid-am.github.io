---
layout: project
title: Keep Breathing
description: 'A survival FPS made in 48 hours at Global Game Jam 2026, theme "Masks". Split across 3 PCs when the jury came by. Best Technical Achievement.'
role: Project lead (chef de projet), concept and game design, 3D artist, UI
role_short: Project lead, 3D & UI
result: Best Technical Achievement, Global Game Jam 2026 (Le Shadok, Strasbourg)
tools: Unity, Blender, Figma
team: 5 Developers, 2 Designers
year: 2026
home_order: 2
last_modified_at: 2026-11-11
categories: game-dev 3d-art ux-ui
cover_image: /assets/img/KeepBreathing/keep-breathing-cover.webp

# --- Layout C "Gallery with captions" (see _projects/spin_app.md) ---
case_layout: c
summary: When the jury was coming to our table, our game was split across 3 PCs.
project_type: Survival FPS, game jam
hero_image: /assets/img/KeepBreathing/keep-breathing-main-menu.webp
hero_w: 1920
hero_h: 1080
hero_alt: Keep Breathing main menu, dark sci-fi corridor with the game title
preload_image: /assets/img/KeepBreathing/keep-breathing-main-menu.webp
preload_srcset: "/assets/img/KeepBreathing/keep-breathing-main-menu-960w.webp 960w, /assets/img/KeepBreathing/keep-breathing-main-menu.webp 1920w"
preload_sizes: "100vw"
# The menu, pause and game over images are Figma mockups made for the jury, not
# captures of the game: each one carries the kb_figma label (Ale, 2026-11-12).
hero_label: kb_figma
---
{% include case/figure.html src="/assets/img/KeepBreathing/keep-breathing-gameplay-screen.webp" w=1920 h=1080 alt="Keep Breathing gameplay, first-person view with the gas mask on the floor and the oxygen and health bars" caption="The cliché pattern is what led me to the gas mask, which seemed more original, and easy to make with the survival idea." %}

<h2>What I made</h2>

{% include case/pair.html a="/assets/img/KeepBreathing/keep-breathing-menu-pause.webp" a_alt="Keep Breathing pause menu overlay" a_w=1920 a_h=1080 a_caption="Pause Menu Overlay" b="/assets/img/KeepBreathing/keep-breathing-game-over.webp" b_alt="Keep Breathing game over screen" b_w=1920 b_h=1080 b_caption="Game Over Screen" %}

<p class="c-note">{% include label.html key="kb_figma" %}</p>

<p class="c-cta"><a class="btn" href="https://www.figma.com/proto/QSs8reDgssWakM8UEdcsEc/UI-Game-Keep-Breathing?page-id=0%3A1&node-id=1-2&p=f&viewport=419%2C342%2C0.08&t=fi78lM3WjjGiSLXA-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer">Try the Figma prototype &rarr;</a></p>

<h2>Best Technical Achievement</h2>

{% include case/pair.html a="/assets/img/KeepBreathing/team-firstjam.webp" a_alt="The Keep Breathing development team at Le Shadok" a_w=1291 a_h=1049 a_caption="The Team" b="/assets/img/KeepBreathing/ccicampus-team.webp" b_alt="CCI Campus Alsace students at Global Game Jam" b_w=906 b_h=733 b_caption="CCI Campus Alsace students" %}

{% include case/figure.html src="/assets/img/KeepBreathing/jury-presentation.webp" w=1186 h=1320 alt="The team presenting Keep Breathing to the jury at Le Shadok" caption="Presentation to the jury" %}

{% capture long %}
<h3>Global Game Jam 2026: "Masks", 48 hours, all first-timers</h3>
<p>Global Game Jam 2026, theme "Masks", 48 hours. We were all first-timers at the GGJ, up against studios that were there and had been making games for years. We had no chance of winning, but I always had this little thing inside me: "I'd love to win one of the categories." No, I'm lying: "I'd love to win best game."</p>

<h3>A leader who didn't announce it</h3>
<p>I was given the project lead role, but I didn't tell anyone. We were all beginners and, even though I was the oldest, I wanted the team to feel flat, without a top-down hierarchy. But yes, there was a leader, and it was me. Without me having to say it, they accepted my direction.</p>

<h3>Big ideas, and everyone had the same ones</h3>
<p>The others got carried away with very good ideas, but in my opinion they were too complicated for just 48 hours.</p>
<p>I also went around the other tables to see what the other teams were doing, and I noticed a very repetitive pattern, one that was happening in my team too: everyone was thinking of the same ideas, RPGs, Venetian masks, Japanese masks, etc. Very cliché.</p>

<h3>One carriage and a gas mask</h3>
<p>I said no to a lot of things and proposed something simple, inspired by casual games like Subway Surfers: a short, simple game tree, a clean game loop, easy to replay and almost addictive.</p>
<p>Since it was first person, I thought of <em>Platform 8</em>, where every carriage is the same one and very strange things happen. That let us reuse the same level again and again, just by changing the mechanic: in this case, finding a gas mask that lets you survive longer.</p>
<p>The cliché pattern is what led me to the gas mask, which seemed more original, and easy to make with the survival idea.</p>
<p>I pitched the idea and everyone agreed.</p>

<h3>How we organized</h3>
<ul>
  <li>I taught them the <strong>MoSCoW</strong> method, so we'd have at least a working MVP and a complete game loop by the end of the 48 hours. The timer, the per-second score, the leaderboard and other ideas were left out precisely because of that method, and thanks to it we could present something decent, even if unfinished.</li>
  <li>Trello to assign tasks, though we used it less as the hours went by: everyone already knew what they had to do.</li>
  <li>Every so often I went around to each team member to see what they were doing and how it was going.</li>
</ul>

<h3>What I made</h3>
<ul>
  <li>A 3D model based on the room we were all in (Le Shadok). I took photos to recreate the textures and used a texture atlas to optimize the game.</li>
  <li>The mask I downloaded from Envato, with a license. Everything else I made myself.</li>
  <li>The audio also came from Envato, with a license. I edited some of it to get an imperceptible loop for the music and the effects, changing volume, pitch and speed so they wouldn't sound monotonous.</li>
</ul>
<p>The screens that made it into the game: main menu, an in-game HUD with oxygen and health bars, interaction prompts, a pause menu and game over.</p>
{% capture kb_cap %}Main Menu Design. {% include label.html key="kb_figma" %}{% endcapture %}
{% include case/figure.html src="/assets/img/KeepBreathing/keep-breathing-main-menu.webp" w=1920 h=1080 alt="Keep Breathing main menu UI with industrial aesthetic" caption=kb_cap %}

<h3>The build wouldn't compile</h3>
<p>In the last hours, when we put everything together, it wouldn't compile properly. That left us with the game split across 3 PCs.</p>

<h3>A Figma prototype in 10 minutes</h3>
<p>To make up for the game being split across 3 PCs, I made an interactive prototype in Figma, in 10 minutes, because the jury was coming to our table. That way we could show "how it would be" if the game worked: the flow from the start screen to the end, including the pause menu and a message before starting. Just by reading the line "The air is toxic, find a mask to survive", we tell the player what to do, through storytelling.</p>

<h3>Best Technical Achievement</h3>
<p>Best Technical Achievement. Honestly, it didn't feel stressful, except for the last hours.</p>

<p class="c-closing">There was no coffee: there were Red Bulls, Haribo gummies, burgers, dark circles and a lot of laughs.</p>
{% endcapture %}
{% include case/detail.html summary="Le détail" summary_lang="fr" content=long %}
