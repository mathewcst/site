---
title: Explaining Dev Stuff to Diablo 4 Players.
description: 'Development is harder than it looks.'
date: '2023-06-16T19:48:24.178Z'
categories: ['game-development', 'talk']
published: true
---

## Table of Contents

While watching the "Campfire Talk" livestream, I noticed that some players become frustrated when developers discuss release cycles, bug fixes, and adding new features. As a developer with 12 years of experience, I've encountered these frustrations firsthand when interacting with customers. I love explaining these concepts, so I decided to create this post to shed some light on the subject.

## Bug Fixes and QA

One aspect that people often overlook is the amount of work involved in fixing bugs and the number of people required to tackle them. So, how do you fix a bug?

The first and often most challenging step, especially in a live game, is **reproducing the bug**. Someone on the dev or QA team needs to be able to make the bug occur consistently, multiple times, on command. But that's just the beginning.

Once the bug can be reliably reproduced, we need to examine all the systems in place when the bug occurs. Let's take the example of "I've died during a teleport in D4 Hardcore".

Consider the systems involved: the teleport trigger, the character's position, the impact on defenses, immunity during teleportation, presence of enemies, enemy affixes, and their effects on the character. And this is just a fraction of the factors to consider.

These complexities make it challenging when players simply say, "something is bugged, please fix it." It's harder than it appears. I'd like to extend a **huge kudos to the LiveOps team at Blizzard** for their rapid deployment of numerous hotfixes.

Speaking of which, let's clarify the difference between a hotfix and a patch. While I can't speak for the Diablo team directly, I'll explain the general approach using "Semantic Versioning."

Assuming the Diablo 4 team follows Semantic Versioning, the current version is 1.0.2.42338. Breaking it down, we have:

- Major: 1
- Minor: 0
- Patch: 2
- Hotfix: 42338

A hotfix addresses a **very small issue**, such as a variable, a name, or a tooltip text. It is usually limited to the specific system it affects and can be implemented on the server side without requiring changes to the player client.

If a bug affects multiple aspects or systems (gem bags for example), it would escalate to a patch, a minor change, or even a major change. The higher the level, the more challenging it becomes to fix and release to the public. A major change often means that everything prior to that point will no longer function the same way.

## Release Cycles, Certs, and Providing Effective Bug Reports

Now that we understand the complexities of bug fixes and the significance of hotfixes, let's delve into why it takes time to release larger patches.

During the livestream, they mentioned planning for season 2. This proactive approach is crucial due to the logistical challenges of software development.

While releasing a game on PC is relatively easier because Blizzard has its own launcher, the situation differs for each console. Sony and Microsoft have their own "certification process" that involves reviewing changes, code, and ensuring compliance with their standards before approving the release.

<a href="/images/dev-cycle.png" target="_blank">
<img src="/images/dev-cycle.png" width="1400" height="600">
</a>

If any of these platforms doesn't approve the changes, Blizzard must make adjustments for all players, including those on PC. This leads to a cycle that involves development, QA testing, submission for certification, and approval. If any step fails, the process starts from the beginning.

That's why planning ahead is crucial for Blizzard. It allows them to anticipate and account for the time required for platform approval, QA testing, and other necessary steps without constantly delaying releases.

Another aspect often overlooked is the **importance of QA** (quality assurance) in the development process. QA professionals play a significant role in ensuring the quality and stability of a product.

QA team members are typically versatile and knowledgeable in various aspects of development. While developers may specialize in specific technologies, QA professionals possess a broader understanding of the entire development ecosystem.

For example, let's return to the scenario of dying during a hardcore teleport. After reproducing the issue and potentially fixing it, QA has a checklist of tests to conduct. 

Can the character teleport without any issues? What if they're being attacked during the teleportation? Does the type of damage affect the outcome? Does the destination impact the results? Of course, this is a simplified example, and the actual process is much more intricate.

Whether it's fixing a bug or adding a new feature, the development process entails substantial work. It's far from a simple matter of changing a single line of code and being ready to go.

Lastly, I urge players to **show respect and appreciation for the development team**. Remember, they are human beings too. They aren't just robotic arms typing code or playing the game for fun. While frustrations can arise, imagine if your loved ones were on the other side. Would you constantly offend or threaten them? I hope not.

## Bonus: How to Provide Effective Bug Reports

Now, let's discuss bug reporting, which can significantly contribute to faster issue resolution. As mentioned earlier, reproducing a bug is often the most challenging aspect. So, what can players do to assist in this process?

Here are a few suggestions:

1) PC Specs: Provide detailed information about your PC, including graphics card, driver versions, CPU, RAM, operating system, and monitor resolution. While I don't expect you to keep track of every component, the more details you provide, the better equipped the team will be to investigate the bug.

2) Location in the Game World: Mentioning your location on the map can be helpful, as some bugs are specific to certain areas. For example, it could be related to changing servers or occurring during a particular event.

3) Video Clips (if possible): Images speak volumes, and videos are even more effective. While playing, you may not notice certain details, but a QA team or developer can analyze visual evidence more accurately.

By following these tips, we can contribute to a smoother bug fixing process and improve the overall gaming experience.

I hope that this blog post has provided some clarity on the topics discussed during the livestream. As developers, we understand the frustrations and challenges that players face when it comes to bug fixes, release cycles, and other development processes. By shedding light on these aspects, we aim to foster better understanding and appreciation for the hard work that goes into creating and maintaining a game like Diablo 4.

Thank you for taking the time to read this post, and I hope it has been informative for you. Stay tuned for future livestreams and discussions. See you all on the next one!
