---
metaTitle: 'Onboarding and expectation setting'
metaDescription: 'An ambitious project to help instigate engaging conversations between customers and local experts, getting them off to a positive start and setting the customer up for success.'
title: 'Increasing user engagement through clear onboarding and expectation setting'
cover: ''
coverAlt: ''
intro: |
  If you want to travel to Japan (for example), TravelLocal connects you with a local travel expert right there in Tokyo to plan your trip. At its best you make a personal connection with someone local and have a more authentic travel experience. However when that conversation doesn’t get off to a good start and customers go quiet, the local expert is left feeling disengaged and the customer underserved.
  
  I lead product design in an ambitious project to help instigate engaging conversations between customers and local experts, getting them off to a positive start and setting the customer up for success.
introPreheading: 'Challenge'
skills: [
  'Product process',
  'UI/UX design',
  'Customer research',
  'Prototyping and validation',
  'Cross-team collaboration'
]
takeawaysPreheading: 'Process & outcomes'
takeaways: [
  {
    title: "Created the design system and established atomic design principles",
    number: 1,
    moreLink: "creating-the-design-system-and-establishing-atomic-design-principles"
  },
  {
    title: "Closely aligned the Figma component library with the codebase",
    number: 2,
    moreLink: "close-alignment-with-the-codebase"
  },
  {
    title: "Developed Storybook into the single source of truth",
    number: 3,
    moreLink: "storybook-becomes-the-single-source-of-truth"
  },
  {
    title: "Evolved the design system as the company scaled from 5 to 50+ people",
    number: 4,
    moreLink: "maintaining-and-evolving-as-the-company-grows"
  }
]

---

## Business challenge and North Star

As TravelLocal’s acquisition model matured and more users were finding them, so did the amount of customers submitting their travel preferences and thus getting connected with a local expert. The expert then kicks off the conversation by messaging customers manually via the TravelLocal platform.

<mark>I defined this customer - local expert connection as the first major milestone in the high-level customer journey and therefore of key importance.</mark>

![The first major milestone in the high-level customer journey](./onboarding-milestone.png)
*The first major milestone in the high-level customer journey*

Working with the Head of Product we defined an important dynamic at the heart of TravelLocal’s customer experience. Because the local expert is a real person with limited time and energy, unlike traditional SasS products TravelLocal can’t onboard limitless customers if they’re inactive. Local experts would frankly waste their time and the partnerships would strain. <mark>Improving top-of-funnel acquisition rates alone would not be enough to scale the company sustainably - the customer engagement rate needed to increase.</mark>

🌟 Our North Star objective was to increase the percentage of customers who sent three messages to their local expert

We chose to measure engagement as the point where a customer sent three messages. Analysing request data revealed a significant increase in the propensity to book when a customer had sent three customer messages. This represented some meaningful engagement above just an exchanging of pleasantries.

We defined two main guardrails…
1. Increase the engagement rate without reducing the number of connected customers.
2. Focus our work on product design more so than service design which, although impactful, was out of scope at the time.

## Discovering why customers go quiet
My first goal was to understand why customers weren’t replying to local experts.

Initial sanity check investigations with product managers and engineers ruled out technical errors; customers were technically able to send a successful message, no problems there.

Ideally I’d have been able to speak with inactive customers to ask why they hadn’t responded. Of course, by definition of them being unengaged that’s a dead end, so I needed to find answers in the user experience leading up to the moment of inactivity.

<mark>I held qualitative user research sessions with 5 participants who were new to TravelLocal.</mark> I observed them moving through the current onboarding process asking questions as we went. My goal was to better understand their motivations, feelings and uncertainties.

![Holding a user research session with a customer](./onboarding-amanda.png)
*Holding a user research session with a customer*

Using the Atomic Research model for recording UX learnings I broke customer feedback down into its constituent parts; experiments, facts, insights and conclusions. These were recorded, tagged and organised in our research repository for future discoverability.

### Customer insights from the current experience

<ul class="customer-insights">
  <li class="customer-insight">
    <p class="title">Uncertainty of what happened and next step</p>
    <p class="quote">"Is that it? What do I do now?"</p>
    <p class="summary">Customers didn’t understand what happened and what they needed to do next. They were left feeling underwhelmed and uncertain.</p>
  </li>
  <li class="customer-insight">
    <p class="title">Identity of the person contacting them</p>
    <p class="quote">“I presume the TravelLocal person in the photo will contact me”</p>
    <p class="summary">Customers were uncertain who was going to contact them and why. They wrongly presumed it would be someone from TravelLocal and so missed the value proposition of the local experts.</p>
  </li>
  <li class="customer-insight">
    <p class="title">Method of communication</p>
    <p class="quote">“How will they contact me? Will they email or phone?”</p>
    <p class="summary">Customers weren’t sure how they’d be contacted which added to the uncertainty of what to expect next and decreased trust in the process.</p>
  </li>
  <li class="customer-insight">
    <p class="title">Timing of communication</p>
    <p class="quote">“When will they call? Timing is everything”</p>
    <p class="summary">Customers didn’t understand when they’d be contacted and had expectations of it being quick. Some were anxious if it would be a suitable time or not.</p>
  </li>
</ul>

I shared these insights with the wider team and company, both in write-ups, Miro boards and video clips of the research sessions so team members could engage with the level of detail they needed to. Being able to show company leadership these customers actually reacting to the product played a huge role in aligning teams internally.

## Reviewing the current experience
We’d inherited this user experience during the company’s merger a couple of years previous so I was keen to apply a critical eye using what I knew from previous customer research as well as the updated brand, market offering and product vision.

Here's the old confirmation page, as it was before my work on the project...

<iframe src="https://embed.figma.com/proto/XnQlWbxcx4PVAVtMA74uIM/simseneca.design?page-id=0%3A1&node-id=1292-1120&viewport=-1953%2C138%2C0.29&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1292%3A1120&embed-host=share" allowfullscreen></iframe>

There were many improvement opportunities just by applying good UX and design principles, but those aside <mark>I defined a few broad, key themes for improvement.</mark>

1. **Buried progress confirmation and next steps:** The page was at the end of a stepped form flow but visually didn’t change much to communicate its completion. The next steps were unclear, with the customer having to infer and presume them rather than them being explicit.
2. **Unclear hierarchy of information:** It was unclear what the customer should take most notice of. All information seemed equally important with a lack of signposting.
3. **Lack of visibility of the local expert:** The inclusion of Hayley, a TravelLocal employee, meant that it’s TravelLocal who are the most visible, not the local expert who the customer will actually be speaking with.
4. **Uninspiring success moment:** This is the first major milestone in the TravelLocal customer experience and should be the point at which customer enthusiasm is high. Other than one exclamation mark there’s nothing to celebrate this moment and it's generally visually uninspiring.

## Hitting a local maximum
As the project progressed and internal conversations continued it became clear that there was an opportunity for bigger change. The company, its design maturity, brand and tech stack had taken huge steps forward in the years since the current experience had been built and it all needed realigning.

Whilst often a riskier approach best avoided, <mark>the team decided that strategically now was the time to make some broader changes</mark>, allowing us to establish a better foundation from which to make future improvements.

Leading product design through a company merger where we inherited legacy user experiences has often prompted the question “are we at a local maximum?” <mark>I’ve been heavily involved in balancing evolution and revolution</mark> and have helped guide that process through highlighting user insights, bringing a fresh perspective and applying the long view to the product vision.

### De-risking for launch
<mark>With a larger change it was important to de-risk the launch.</mark> We would do this in a few ways.

1. Design an MVP to iterate from
2. Validate new designs with customers
3. A/B test any rollout
4. Only change the experience after the customer had been connected, avoiding negatively impacting the most business sensitive metric of 'connections'.
5. Work fast to retain a positive impact/effort outcome

## Turning problems into solutions
<mark>Moving into the solution space meant turning customer insights into problem statements, then turning them on their head into open “how might we” questions.</mark> This revealed five design opportunities.

1. __How might we__ help customers understand what just happened…
2. __How might we__ help customers understand what happens next…
3. __How might we__ introduce the customer to their local expert…
4. __How might we__ help customers understand how they’ll be contacted…
5. __How might we__ help customers understand when they’ll be contacted…

I then created “bets” from these, with the <mark>confidence that we were solving for observed customer problems</mark>. The phrasing of a “bet” helped to hold these loosely as unproven ideas, not validated solutions. I mapped this process onto Opportunity Solution Trees in Miro to help structure and communicate the thinking.

**Opportunity tree**

## Prototyping the new experience
It became clear pretty quickly that the place for us to concentrate our design efforts was in the immediate experience after a customer had submitted their trip preferences and been connected with a local expert.

<mark>Getting that initial milestone and onboarding experience right was key to setting the customer up for success.</mark>

Moving through some of the bets we had most confidence in, I started wireframing before moving into mid-fidelity prototypes and landing on a testable MVP.

![Early scribbles on a whiteboard](./onboarding-whiteboard.jpg)
*Early scribbles on a whiteboard*

![Wireframing in my favourite hot pink colour](./onboarding-wireframes.png)
*Wireframing in my favourite hot pink colour*

![Mid-fidelity rototyping various ideas](./onboarding-prototyping.png)
*Mid-fidelity prototyping various ideas*

Ultimately this is where I landed...

<iframe src="https://embed.figma.com/proto/XnQlWbxcx4PVAVtMA74uIM/simseneca.design?page-id=0%3A1&node-id=1314-2416&viewport=-4027%2C229%2C0.38&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1314%3A2416&embed-host=share" allowfullscreen></iframe>

<ul class="design-highlights">
  <li class="design-highlight">
    <img src="/src/content/work/onboarding-modal.png" alt="Confirmation modal" />
    <div class="design-highlight__inner">
      <p class="title">Celebratory confirmation modal</p>
      <p class="summary">Separating the information out into two steps. First we confirm what's happened and what to expect next before setting the user up for the next phase of onboarding.</p>
    </div>
  </li>
  <li class="design-highlight">
    <img src="/src/content/work/onboarding-meet.png" alt="Meeting the local expert" />
    <div class="design-highlight__inner">
      <p class="title">Properly introducing the local expert</p>
      <p class="summary">A really important addition to properly introduce the local expert. This also makes a neat place to confirm the user's email address, reinforcing the proposition and next step.</p>
    </div>
  </li>
  <li class="design-highlight">
    <img src="/src/content/work/onboarding-toasts.png" alt="Confirmation toasts" />
    <div class="design-highlight__inner">
      <p class="title">Confirmation toasts and clear next step</p>
      <p class="summary">A dynamic timeline of events reasurring customers what has happened whilst clearly explaining the next step. "Open in Gmail" only appears for @gmail email addresses.</p>
    </div>
  </li>
  <li class="design-highlight">
    <img src="/src/content/work/onboarding-message.png" alt="Messaging functionality" />
    <div class="design-highlight__inner">
      <p class="title">Message the local expert right away</p>
      <p class="summary">Having been introduced to the local expert this becomes a clearer prompt to message them right away and why. The messaging UI reinforces that this is a conversation.</p>
    </div>
  </li>  
</ul>

This was designed completely responsively of course. Here's the mobile version...

RESPONSIVE VERSION

## Testing the prototype with users
To increase our confidence levels I held another 5 qualitative research sessions with users, observing them as they used the new prototype and being curious as to their feelings.

The feedback was generally really positive and I was particularly reassured that customers felt that the “how might we’s” we’d set out to solve were being addressed.

**Image of sessions**

Our main learnings were…

**Example quotes of customers proving the how might we’s were being addressed. Could include images**

### Slimming down to an MVP
In line with our de-risking strategy, I worked with product managers, engineers and content marketing to figure out an MVP that would be viable to launch initially. Our goal was to keep the build lean but still provide a quality experience for customers; enough for us to learn from.

<mark>Here we really focussed on outcome over output.</mark> As tempting as it is to build everything, it was a core value of our product team to ensure we were building the right things and celebrating the user and business impact.

We agreed to hold back on a couple of the more complex functionality additions as well as some content such as the local expert welcome videos that would require too much effort to pull together for launch. We would come back round to them in future iterations and prove their value in more contained experiments.

## Implementation with engineering
Our frontend workflow is built on the design system so I modularised my Figma designs, defining any new components and states and evolving any that pre-existed.

<mark>I collaborated closely with engineering to communicate my design intentions and figure out the best way to translate this into the codebase.</mark> When it came to development myself and engineering were speaking daily and I chipped in and built a couple of components myself to help with velocity.

![Splitting the design out into its various reusable, responsive components](./onboarding-components.png)
*Splitting the design out into its various reusable, responsive components*

Wearing a product manager hat I wrote these components up into engineering tickets, defining design intentions and acceptance criteria.

## Collaborating with content marketing
I managed the sourcing of any copy we needed from content marketing and with engineers helped define how that would be served to the page; either via our CMS, backend database or our translation management platform Locize.

<mark>Without the role in the team specifically I took on the role of Product Marketing, making sure that the UX copy aligned with and reinforced our brand proposition.</mark>

![Defining how copy and content should be managed](./onboarding-copy.png)
*Defining how copy and content should be managed*

## Launching and the outcome
