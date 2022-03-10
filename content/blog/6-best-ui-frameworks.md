---
title: Top 6 UI frameworks
description: The best UI Frameworks to make front end development a lot more streamlined and resilient working with NuxtJS
author:
  name: Ricardo Calcina
  bio: Self taught web developer, primarly using Nuxt for front end work.
  img: https://res.cloudinary.com/seabothsides/image/upload/v1606141757/author-img-ric_p0qd1b.png
---

Choosing a UI Framework, very much like choosing a frontend framework, can be daunting at first.

But the best advice still stands! **Just pick one!**

Here is some helpful information on top 6 UI frameworks to get started with, and considerations on their use cases.

## Vuetify JS

Vuetify is one of my personal favourites to use. Vuetify is a UI framework with a library filled to the brim with components that conform to Googles Material Design. Vuetify comes with batteries included boasting that users need not have design skills, and have everything they need to create applications. Vuetify screams professionalism resembling some of the most used Google apps like Gmail and Google docs.

### Documentation

The documentation provided by vuetify is glorious.

You are able to find all the UI components ranging from, but not limited to:

- app-draws
- cards
- buttons
- footers
- menus
- forms

These components are a great starting point for copy and pasting code and tweaking for your own needs.

The documentation answers everything you'd need to know about using Vuetify. There's an API section that displays three sections of a component.

- Props
- Slots
- SASS Variables

Each one giving you more freedom of development and design. Props can affect how a component may look. Slots are used to add extra HTML elements inside of a component, with correct margins and padding. The SASS variables are the class names you can use to alter Vuetify to your needs, or change the default values of components.

I highly suggest exploring the [documentation](https://vuetifyjs.com/en/getting-started/installation/) for a better understanding of Vuetify

### Speed of use

Now a framework will always speed up work flow eventually, after the initial learning curve.

But with VS Code extensions, code snippets are available for Vuetify and in abundance. Also in different templating languages like pug.

In fact the reason Vuetify is number one on my list is because it has the most robust code snippets on VS Code.

Code snippets drastically decrease the learning curve. Because theres less code to remember when you get prompts on screen for being in the right ball park.

Also documentation! It's so good to have database to search for exactly what you're looking for and how to implement it. Meaning you can learn while you create!

### Everything in one

Vuetify comes with material design icons enabled by default.

Adding a different icon library is as easy as installing it and referencing it in you nuxt.config.js file under default assets

Vuetify also comes with material colours built in.
A list of the colours can be found in their [documentation](https://vuetifyjs.com/en/styles/colors/#classes).

This lets you easily style a project uniformly and efficiently. While having the colours accessible by class names.

You can also add attributes like lighten, or accent-3, to get different shades of colours Hex colours can also be used for more precision.

Everything can be globally configured from the nuxt.config.js file

There are so many components and directives and icons available no project is too difficult for Vuetify

Not to mention each component can have extras injected into them via slots. Where you can have a form made of cards with buttons and icons! Neat right.

<h3 class="red--text pb-5"> Considerations </h3>

#### Performance

The size of Vuetify, especially when installed using the create-nuxt-app command, can have an impact on performance.

Although the Nuxt module tries to best optimise Vuetify we can do better manually.

By installing Vuetify after creating a nuxt app we can use [A-La-Carte](Link coming soon) to only import the components we use from Vuetify.

This drastically improves performance but adds some extra steps to using Vuetify out of the box.

However if you're using vuetify with a Vue app created using Vue CLI, A-La-Carte is enabled by default. Winning!

## Tailwind CSS

Tailwind has had quite the change recently. Tailwind is leans more towards customisable component snippets that are professionally designed, pre-built, and fully responsive.

### Pure CSS

Tailwind is a CSS framework at the core. Tailwind doesn't boast to have all the components one might need, or the most bespoke design.

Instead, Tailwind provides utility classes to be used right in the HTML to style web applications. This isn't to be confused with inline styling, which offers little in the way of responsive web design.

These utility classes are used instead of coding in a CSS styles, providing a design constraint to make visually consistent web applications. These constraints can be easily customised in the tailwind.config.js file too.

Tailwind is a fantastic choice if you already have a design for a web application and just need helper classes to make that happen.

### CSS grid

Now when learning CSS, for me the most powerful thing was the grid system. It makes it clear where things are placed and how they should behave in different view ports.

Tailwind is the only framework in this list that uses the CSS grid system as their grid layout.

Other framework, of course, have a grid system but built from flex-box. Tailwind has flex-box too, but also the true grid system that uses the fr unit and minmax calculations giving a super fast responsive layout.

<h3 class="red--text pb-5"> Considerations </h3>

#### Components at a cost

This is one of the major changes tailwind has undergone recently, and indeed something very different from other UI frameworks. Priced components.

While tailwind provides some free components, they have a one off fee for their complete component library.

However, they have split their UI components from their Marketing components - priced individually at 149USD. This is somewhat annoying, every site requires some sort of marketing component as well as UI components.

To alleviate this tailwind offers a bundle of all their components for 249USD.

While these priced plans are available, they aren't necessary. All the components are made from Tailwinds extensive and well documented CSS utilities.

Indeed, having the components to copy and paste can be time saving. The helper classes are so intuitive you'd find it faster to develop your own components instead of searching for one to tweak for your needs.

#### No JS

Tailwind focuses on making CSS utilities that are conducive to concise, consistent and fast development.

That being said , there is no javascript included. This means components like drop-downs, and nav draws, require extra work.

There are utility classes that can be used to control transitions and active states, which are given as examples on the tailwind site when looking at component code snippets.

Some components wont work out of the box, this should be considered heavily. While styling your web application may be fast and autonomous. Functionality will have to be invested into with time.

For veterans of web development, this won't be too much time spent. But for beginners, especially framework first timers, this can be cumbersome. But for everyone, it's an extra step in development.

## Bootstrap

Bootstrap has been the most popular front-end UI framework for a long time, even when JQuery was integrated. Bootstrap V.4 offers a huge catalogue of components and a large supportive community. Bootstrap components work out of the box with Nuxt and Vue applications, while remaining extremely easy to customise through custom classes.

### Track record

Bootstrap is one of the oldest frameworks. The community is large and helpful. Theres likely to be a solution to your problem in stack over flow.

Basically, you shouldn't get too stuck with bootstrap because chances are someone has been stuck there before and the solution has now been found.

This is valuable for beginners and veterans a like. It means less time thinking of a solution. Also, more solutions!

### Documentation

Bootstrap has an extremely easy to use documentation. Every component has a clear code snippet. Everything is where you'd expect to find it.

Bootstrap has a documentation tailored to Bootstrap-vue which uses the same tags used by Bootstrap/Nuxt. This just means you can use it in all your projects regardless of framework used.

### Standardised

Bootstrap uses the very common breakpoint jargon. **col-lg-12** for large viewports, **col-sm-4** for small ones. You get the gist. The column size, the breakpoint at which it applies, and then the value.

This is common in a lot, if not all frameworks with some variations in the actual implementation. This means learning Bootstrap first can be transferrable to other frameworks. While this is true for other frameworks. Bootstrap is by the far the easiest to start with.

<h3 class="red--text pb-5"> Considerations </h3>

#### JQuery

Bootstrap will drop JQuery by version 5, but until then its a very large dependancy and often means time has to be spent optimising code elsewhere for better performance. However, this will be over soon!

Version 5 alpha is already out to use.

#### Same same but different

Sites built with Bootstrap often have the same look and feel. Developers can often tell a bootstrapped site.

Now familiarity isn't bad, but it makes it a little harder to stand out from a glance. That being said, sites that use Bootstrap have so much content that they don't need the extra work making the site look unique. The content sets them apart from the rest.

However if you do use Bootstrap, time will need to be invested in changing up the default styles to make your site bespoke. This isn't difficult at all, but again. It will cost time.

## Vuesax

Vuesax is component UI framework, very much like vuetify except It was made from scratch so follows no design line, like Material Design. Vuesax is visually stunning, and offers the most unique look of all the frameworks with little to work to no work out-of-the-box.

### Elegant design

Vuesax looks amazing.

The design constraints out of the box with Vuesax are eye catching. The colours pop, and when combined with a dark theme are truly stylish.

Vuesax was designed from the ground up, in a modern era and it really showcases progressive style

### Impressive components

Vuesax specialises in components that are comprehensive, and reusable, that can be copied straight from the documentation. Implementing the component is as easy as changing a few lines of code.

The most impressive component so far is the [card](https://vuesax.com/docs/components/Card.html#default). The card comes in five incredible and modern styles.

Otherwise the Templates can be used the slots to place content in the cards correctly spaced, then style away!

### Responsive

Vuesax is completely responsive and lends itself well to mobile first design

The syntax is simple, adjusting the layout with three predefined widths. Although there aren't many options for the view ports, they do the job extremely well.

The default width is set with **w = 12** while the other breakpoints are simply set using **sm = 6** or **xl = 4**

### Icons

Some frameworks choose to use an icon library while others make it easy to add any library of your choice.

Vuesax went with the former, but didn't go for any of the known suspects - Material design, or font awesome - no no no

Vuesax got their bespoke look by being ahead of the curb, or beside it, they use [boxicons](https://boxicons.com/) to stand apart from the rest.

These icons are clean in design and come as line drawings or solid coloured images. They also have a plethora of logos like Ebay and Vue so you don't have to source some SVG to load from a static file

<h3 class="red--text pb-5"> Considerations </h3>

#### Its still new

Vuesax is on version 4. There are still components missing and work to be done. This can be found on their [git hub page](https://github.com/lusaxweb/vuesax-next).

The transparency is welcomed and has me waiting like a child before Christmas. But it does mean there may be things missing that you really need for your project, or things you're used to using from other frameworks that don't yet exist in Vuesax. Yet!

With Vuesax 4 being so new, there are also a lack of examples on code pen of the various ways to use their components to achieve a full design

However, this is currently the only thing to consider. To use whats there or wait till what you need is there. For smaller projects, Vuesax is still a great option.

Vuesax is simply playing catchup but when it does catchup I'm sure it'll be a top runner.

The website is a least a live working example of the potential of Vuesax and where it's heading in the future.

## Bulma

Bulma is one of the most lightweight CSS frameworks used by developers. Aside from having the name of the proudest Saiyan Prince's wife, Bulma offers the 10 of the most essential components needed for a beautiful, responsive, web application

### Lightweight

Bulma is an extremely small UI framework that won't result in a loss of performance.

Bulma is a CSS utility framework with javascript included. Components can be copied and pasted from documentation and they'll work as demonstrated.

Complete web applications can be designed for production with this small, yet powerful framework.

### Everything you truly need

Bulma really has all that a web application needs.

The ability to build a responsive website using their layout system built on flex-box. 10 of the most helpful design components like pagination and breadcrumbs.

They also have a form section, which isn't common in some of the smaller frameworks, that gives examples of full, most used, form types.

It's all covered in the documentation. They offer tried and tested components and layouts that will stick around.

One of the impressive layout categories are [tiles](https://bulma.io/documentation/layout/tiles/). This offers a windows like layout perfect for displaying a lot of content in a more artsy style.

### Semantic HTML

Bulma uses CSS utilities to achieve the layout design.

This means appropriate HTML tags can be used to improve semantic reading of code.

This also reduces the crawl time, albeit fractionally, because there are less layers of divs to go through.

Semantically written HTML also give a better SEO and accessibility functionality.

<h3 class="red--text pb-5"> Considerations </h3>

#### VS code snippets

Code snippets are available for Bulma.

Unfortunately they are configured for .html files, so some extra configuration of VS code, is required to have the snippets work with .vue files

Though this isn't a big hurdle it's something newer programmers may find difficult to do. Or even to figure out thats the problem in the first place.

#### Basic design

The defualt styles of Bulma are similar to Bootstrap and don't stand out a tremendous amount without extra configuration.

This isn't too big of a deal, but it would be a lot faster to choose Bootstrap to design the site and worry about minifying CSS later.

## Buefy

Buefy is built on top of Bulma with Vue in mind and so uses the same components and layouts, with increased functionality. Buefy has all the benefits of Bulma, as well as some of it considerations.

### More components

Buefy offers more components on top of the original 10 in Bulma.

Some of the most useful being Skeleton, which is a placeholder for content to load.

The components in Buefy uses the same syntax as Bootstrap. So expressions like **<b-card\>** are all work the same, just with a different framework.

Because Buefy has the same tag style as Bootstrap, you can use the code snippets in .vue file types and code blazing fast.

<h3 class="red--text pb-5"> Considerations </h3>

#### Doc hopping

Buefy uses the same layout as Bulma, but instead of having the content on their own site they link back to Bulma.

This results in hopping between documentation to find the utilities you need.

This is by far a huge time waster, and having one more tab open while coding can reduce computing performance depending on your setup.

## Summary

All frameworks work similarly and all frameworks result in the same thing. A complete styled website.

My top three suggestions from this list are:

- Use Vuetify for larger projects, web applications you plan on scaling. The familiarity with Google apps makes it look professional, and the components work out of the box so you can focus on your content the most.

- Use Tailwind if you have a complete design ready to go. When you have already designed the components you'd need for your specific site or brand. Also use Tailwind for maintainability. The utilities are never pushed with breaking changes so you theres no worry that a future update will crash your site.

- Finally use Bootstrap if you're just starting out, or if you want a fast developing experience that you can completely customise in the future. Learning Bootstrap first means you can pick up other frameworks with ease, and it's by far the quickest to learn. On top of that if you're stuck with anything you'll always find a solution online. But maybe wait for Bootstrap 5 before committing to using Bootstrap in a project you wish scale.

> One worth watching for is Vuesax, I honestly love the look of it and think theres great things to come from the framework.
