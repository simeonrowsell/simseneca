---
layout: ../../layouts/post-layout.astro
title: "Send a message straight to my desk"
pubDate: 2026-09-03T20:02Z
edition: 15
description: "Whatever you write will be instantly printed right here next to me. It's sort of like one-way fax."
author: 'Sim Seneca'
image:
    url: ''
    alt: ''
tags: ["raspberry pi", "fun"]
draft: false
---

TL;DR: <a href="/receipt">Send a message straight to my desk!</a>

<video src="https://res.cloudinary.com/dgfefaqv9/video/upload/v1788452752/receipt-demo_dn1z0m.mp4" controls></video>

I'm not alone in missing the physicality of older technology. Not only the touch of tactile buttons and satisfying flicky switches, or even the variation of materials and customisability. More than that I find myself increasingly missing the friction.

In the modern world, particularly the tech one, we talk endlessly about removing friction. Often that's for positive reasons. Anyone that's tried to book an online doctors appointment would I'm sure agree that a little less friction would be nice. But it's seen as so important that the 'reduce friction' KPI gets applied to *everything*.

If all we're optimising for is convenience then everything looks like friction to be removed.

In general a backlash has been brewing for a while. The welcome return of physical media is the bandwagon I've been on (I hope you kept your CDs) and having to stand up, walk over to the record player, hold the vinyl and flip it over is half of the joy. The inconvenience makes it a more intentional experience and it turns an abstract notion like music into something physical that I can touch.

Convenience isn't always the quality people value the most - friction isn't always the enemy.

[Gromit gets it.](https://www.youtube.com/watch?v=QJ00_s6ZAU8)

Replacing convenience with friction feels naughty. An act of resistance even?

All that to say I made a thing that is not at all convenient, and I had a fun old time.

## It's sort of like one-way fax, in 2026

I had a couple of images in my head, both characterised to some degree by the futurism of the 60's. A time where imagination seemed to stretch as far as a techno-utopia whilst still being charmingly anchored in the technology of the time. I guess that's the way it always is.

The first image in my head was a patchwork of other references. Imagine Captain Kirk says "computer, tell me about the atmosphere of this new planet we just landed on", and this omniscient intelligence hears him and does the magical calculations only for the results to get dot-matrixed out of a hole in the wall (*bvvv bvvv bvvv*), ripped off (*shwiiip*) and read by a human with their fallible eyes, who now has to what, screw the paper up and recycle it? Also see [Marty McFly being fired](https://www.youtube.com/watch?v=Km6bFBSVty4). What a charming juxtaposition of convenient futuristic tech and inconvenient physical media.

The second image in my head was from Thunderbirds. On the wall back at Tracey Island there's a row of portraits of the guys (and maybe Lady Penelope? She always seemed unofficial, I was never quite clear on her membership status), each of which doubles as a screen. When Virgil video calls HQ from wherever Thunderbird 2 is - like 40 years ahead of Skype - the eyes of his portrait light up (*beep beep beep*) and to answer Mr Tracey has to *not be anywhere else* other than in front of that flashing portrait, on the wall, in the living room. The video stream can reach across the globe but can't make the final stretch from the living room to the pool, where Jeff would rather be lazing around in his trunks with Brains.

I love this combination of [mythically convenient technology](https://www.themythicbody.com/podcast/you-want-to-be-sorcerer-age-mythic-powers-ai-episode/) butting up against the inconvenience of the physical world.

Anyway, those initial ideas shifted around a bit. I was inspired by [Sam Rose](https://samwho.dev/ping) and [Andrew Schmelyun](https://aschmelyun.com/blog/i-invited-strangers-to-message-me-through-a-receipt-printer/?pubDate=20251020) (who both nailed it!) and, combined with [my new Raspberry Pi](https://simseneca.design/blog/dont-forget-to-have-fun/) and a willingness to find a use for a receipt printer, the project found its form.

So you can now send me a message from my site directly to the thermal receipt printer sitting next to me on my desk.

<a href="/receipt">Try it out</a>

No filter, no 'accept incoming message', no phone notification. I don't even ask for your name. You hit send, it prints out and there it sits until I see it and rip it off.

Inconvenient as heck, wonderfully physical.

## Affect my physical space

Aside from the satisfaction of reading a printed message, what's cool is that someone, anyone, anywhere in the world has the ability to directly affect my physical space.

We've become used to our digital spaces being interrupted by friends and strangers alike; emails, WhatsApp's, DMs - but not so much our physical ones.

One second there's no note on my desk, the next there is!

It feels a bit risky re people sending abuse (there is rate limiting!), but the excitement is partly in the unfiltered nature of it. I'll just switch it off if it gets weird.

I think you're nice though, so go on, <a class="button" href="/receipt">affect my physical space</a>.

Future ideas along this same thought include a light coming on when someone's visiting my site, a way for people to queue up music for me via my music streaming server (more on that soon), and the reverse being that the colours you see on my site change in relation to the weather outside my house.

## How it works

Initially I thought this post might be a big technical walkthrough but honestly it's not something I enjoy writing so much. At least not now, in the future perhaps. If you want more details though hit me up - sim@simseneca.design.

For a high-level summary, here's what's going on:

![Receipt printer stack](https://res.cloudinary.com/dgfefaqv9/image/upload/v1788450820/receipt-printer-stack_p68ika.png)

## Learning with Claude

A big chunk of the reason for this personal project was to learn stuff I've never done; mostly because I've never had a reason to day-to-day.

I've absolutely got [conflicting feelings towards AI](/blog/vignettes-as-the-bots-begin-consolidating/) but this kind of tinkering feels like a sweet spot for Claude. It allowed me to learn what I wanted (I prompted it to _teach_ me rather than do it for me which worked well for the most part), skip what I wasn't interested in going deeper on and fit it all into my busy toddler-focussed life. For someone who likes making things and has more ideas than time this feels, maybe... exciting?

Stuff I learned-ish.

1. I'm used to using them but I learned how to write my own API endpoint
2. How to run my own web server
3. What a [tunnel](https://developers.cloudflare.com/tunnel/) is and that it's how I can safely expose my Pi to the web
4. Not since Uni have I written so much into my `.bashrc`
5. I learned (on the third attempt) [which terminal block adapter](https://cpc.farnell.com/tiger-power-supplies/tgr102/dc-plug-2-1mm-x-5-5mm-to-screw/dp/CN24148?CMP=TREML007-005) I needed and how to connect up a [thermal printer](https://thepihut.com/products/tiny-thermal-receipt-printer-ttl-serial-usb?variant=27740091921)
6. How to `POST` your message from my otherwise static Astro site using Netlify's serverless functions
7. Making a [Lottie animation](https://lottiefiles.com/) from my Procreate drawing
8. The overall technical infrastructure to make a project like this work 

Stuff that happened but I didn't learn in the slightest.

1. How to write some sort of wrapper around some niche, outdated or otherwise not working thermal receipt printer drivers
2. How to write a `systemd` service to auto-start it all when I boot my Pi
3. How to configure the rate limiting

## Reflecting

It's been a super engaging and satisfying project. Maybe more involved than I initially expected, various things I hadn't thought to consider, but overall I'm left feeling more motivated and creative than when I started which is the main reason for any of this silliness.

<a class="button" href="/receipt">Fax-ish me like it's 2026</a>

Until next time ✌️