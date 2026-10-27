---
title: Don't Starve Together
publishDate: 2018-08-01 00:00:00
img: /portfolio-website/assets/dst-1.jpeg
img_alt: Wilson with a sketchy Maxwell looming over him.
description: |
  A game about exploration, surviving, & thriving in a dark and weird world. 
tags:
  - Creature & Event Design
  - Lua Scripting
  - Client-Server Networking
---

> <a href="https://store.steampowered.com/app/322330/Dont_Starve_Together/">Don't Starve Together on Steam</a>

## Creatures & Events

A bulk of my time on this project was designing and implementing creatures and events.

Creating new creatures involved compositions of data components and behavioural pieces like stategraphs and behaviour trees.

Stategraph construction involved deciding on sets of states, and defining their enter/update/exit functions, alongside identifying tags for external inspection. For example, most creatures had an _idle_ state to exist in at rest, which could then be interrupted by an event (probably from their brain) to, say, move to the _run_ state, or the _attack_ state. Designs usually involved taking "known" state types & names, and massaging them into specific desired behaviours, with a couple of special states for fun.

Brains were implemented as behaviour trees, with a litany of bespoke node types in the custom Lua engine. Designing a brain often meant nesting together the puzzle pieces of existing node types (parallel? sequence? if/while? succeeding only when an event is fired?), and touching all of the edge cases that a brain might interact with was a lot of the busywork of making a new creature (especially one with custom behaviour).

There was also, obviously, a component that involved back & forth with audio and animation artists. 

Some of the designs I enjoyed working on the most:

- The **Malbatross**, which I didn't get to work on the implementation for, but loved armchair designing a giant bird that flies all over the world, with the intent to release it just as we introduced sailing the ocean as a component of the game. One of those designs you wish you could spend way more time on!
- The **Lunar Grotto**, a biome design that involved taking an existing area and set of entities, and trying to mutate them so they have extra gameplay edges, to hopefully surprise players a little bit when they come across it. For example, making a mutated version of an entity that can normally be collected via a Net, that instead reacts poorly to being netted and should be engaged with differently.
- **Year of the Carrat**, inspired by pet-raising games and involving building and using various "gyms" to train statistics on the Carrat (carrot rat) creature in the game, to race against NPCs and other players. A lot of the iteration here was about trying to avoid generating a "perfect" Carrat for the involved minigame (i.e. having some stats lower when others raise, or introducing randomness to the actual minigame).
- The **Celestial Champion**, a 3-phase boss that required aspects of difficulty progression, thematic alignment, and a mixup in combat style. Since this boss fight came at the end of a fairly long quest, and represented a sort of story capstone for a while, it had to deliver a difficulty level that involved players could engage with after playing for a long time. Some of the joy here was trying to find ways to surprise players, and adapt to their playstyles a little bit in development.

## Character Reworks

I also contributed to a number of character reworks on this project. These often involved a lot of iteration, due to community concerns over comparative power level between characters, maintaining the verisimilitude of the characters' personalities and histories, and balancing their breadth of impact over the different things to do in the game. 

Some of my favourite additions that I got to work on involved asking the characters to go do things in the world to access new abilities, namely:
- **WX-78's module system**, where the robot character scanned creatures in the world to mimic their traits, leaning into the feeling of trying to surpass organic lifeforms in ability.
- **Wurt's King outfitting skills**, which allowed her to find "royal items" for a Merm King NPC, mirroring Arthurian legends & questing; I loved the character skill trees unlocking new "quests" for the characters to perform each time a new world was spun up.

### Other Tasks

Some other components of the work that don't come with good specific examples!
- Networking code, especially for things like audio and FX that only need to exist on clients (or headed servers). Choosing when to use automatic in-engine replication, and when to pare down to specific networked variables, as well as sending networked variable events to create things only on one side.
- Optimizing operations, in particular between the script and non-script levels of the engine. For example, rewriting functions on the non-script side to allow for batched work.
- Occasional media-related tasks, such as hosting Twitch streams or participating in, and live-scripting for, trailer filming.

