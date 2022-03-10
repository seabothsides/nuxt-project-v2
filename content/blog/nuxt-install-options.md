---
title: Nuxt JS Install Options
description: What the Nuxt Js install options mean and which ones are the best, most useful, SEO friendly, optimal options
author:
  name: Ricardo Calcina
  bio: Self taught web developer, primarly using Nuxt for front end work.
  img: https://res.cloudinary.com/seabothsides/image/upload/v1606141757/author-img-ric_p0qd1b.png
---

After starting a Nuxt JS application you're presented with a plethora of options to initialise the website with

## Project name

First you are asked to confirm the name of the project, press enter to keep it the same as the awesome project title you pick initially. Or type a name you want the project to be referenced as.

## Programming language

Next you're asked to choose your programming language. javascript or typescript. It's all preference at this point. Press enter on your selection.

## Package manager

You'll then be asked to choose your preferred package manager. Seeing as we use [yarn](/blog/how-to-install-nuxt) to start the Nuxt project, let choose that. Also, because cats. Press enter

## UI Framework

Okay something real serious, which ui framework should I use to style my website?

As of 2020 there are currently 12 UI framework options for Nuxt JS. Of these I have used 6.

- Vuetify JS
- Tailwind CSS
- Bootstrap
- Vuesax
- Bulma
- Buefy

Now which one you use, you guessed it, depends. It depends on the website design, performance goals, and work integration to name a few

However in the order they are listed any of those 6 would be great.

For a more detailed decision find out which is the [best UI framework](#) for you

## Nuxt JS modules

Nuxt offers 3 of the best modules to be included during initialisation

- Axios

  - _This is used for API calls, and communicating with websites outside of the application_

- Progressive Web App (PWA)

  - _PWA make your web application downloadable to home screens_

- Content

  - _This is a headless CMS module essential to making blog websites with Nuxt JS just like this one_

All three of these can be selected using the space button. Or if you don't want any of them press enter.

Don't worry if you don't include them here. You can always [add plugins](blog on adding plugins) later. Theres [so many](top plugins blog) you'll want to use too.

## Linting tools

Linting tools are used to automate checking your code for programmatic or syntax style errors.

Of the 4 options offered by Nuxt JS ESLint and Prettier are my preferred options. You can also [lint on save]() with some VS Code configurations.

## Testing framework

I often leave these blank. You could use any if you wish.

## Rendering mode

SSR or SPA?

Server side rendering requires a server to always be available. The website is rendered every time a request is made for a particular page. This can be expensive depending where you host an always on server.

SPA, or single page app is a single HTML file. Javascript is used to render content dynamically on the page on the client side. This is the best option for speed and offline use.

## Deployment target

Server side or static hosting?

### Server

Server side is ideal for web applications running a on a node server. Something like express on a digital ocean droplet.

Server side hosting is focused on optimising the server side of things allows for middleware to be used.

The pages requested will be rendered server side to be served to the client.

### Static

Static hosting, or jamstack hosting is ideal for shared hosting plans such as [blue host](aff link to this) or [host gator](aff link to this).

Jamstack is also great for Netlify which can serve static sites form Github. This is particularly useful because changes are auto updated and a new site built and deployed on Netlify.

Static HTML files can be acquired using `yarn generate` and held in a folder called dist. This is the best choice for SEO because all the pages will be pre rendered at build time.

## Development Tools

Use jsconfig.json, this is best for VS code which you should already be using too.

## Summary

That's it. You can now setup a Nuxt JS app tailored to your needs. Of course all these options are based on individual needs. There is no right or wrong way, so try out different options and configurations to see what tickles your pickle.

But some of the most important options are rendering mode and deployment target. Which i recommend SPA and Static (jamstack) respectively
