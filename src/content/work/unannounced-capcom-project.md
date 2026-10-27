---
title: Unannounced Capcom Vancouver Project
publishDate: 2016-02-01 00:00:00
img: /portfolio-website/assets/cv-1.jpg
img_alt: A
description: |
  The project I spent my first few years in Vancouver working on!
tags:
  - Unreal Engine 4
  - C++ Programming
  - Python Scripting
  - Optimization
---

I spent just under 3 years working for Capcom Game Studio Vancouver, after spending 4 months there as a co-op student at the end of 2013 (for the release of Dead Rising 3). When I returned in 2016, a new project was under way, utilizing Unreal Engine 4.

## Systems & Performance

My first period of time at the studio involved joining the Systems Engineering team, focusing on non-gameplay parts of the project, like performance and build tools. In particular, some Python scripting for a multi-stage build pipeline, and a bit of modification to Unreal 4's Crash Report client to interact with our internal bug reporting setup, making it easier for designers and gameplay programmers to report bugs with additional data.

There was also performance-related work, especially on console; I spent some months profiling the game using PS4's Razor tools, looking for opportunities to refactor, in particular, function signatures and collection (array & vector) use. The systems work also ended up including the project-wide production of a custom spatial partitioning system, in an attempt to sidestep some pieces of UE4 that appeared to be an inherent hindrance to putting hundreds of actors on screen. Notably, this predated the existene of their ECS-style Mass Entity system, and we ended up trying do to many of the same things, starting with custom movement and physics processes.

I was a junior engineer at the time, so I did not lead this development, but participated in the maintenance of the system and its generation step. I also helped add features to it, like storing data at subsets of the movement areas and generating projected images of moving "real" objects (players, items) into the space.

## Gameplay Programming

After a period as a Systems Engineer, I decided that I was interested in trying out some Gameplay-side work, and interacting directly with a paired designer. Having knowledge of the custom spatial partition system allowed me to leverage that for assisting enemy design. I was able to help with things like:

- fake-physics interactions with each other, players, and other interacting objects.
- interactions with static environments, like knowing when to fall of ledges or bump into walls.
- enabling different animations and behaviours for subsets of attacks, or special attacks in either direction (i.e. the player is hitting me from above, or I'm trying to attack the player from below).

Touching both sides of this engineering equation was something I felt was extremely useful to my development, and getting the opportunity to work directly with designers was great (shout outs to my former colleagues!).

