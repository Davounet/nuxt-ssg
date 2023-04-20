# Nuxt SSG with Storyblok

This is a basic reproduction of a weird problem with nuxt3 prerender/static rendering.
The first load of a page uses the `__NUXT__` payload and does not call the CMS api, but any navigation to another page will.

A deployed version on netlify is available [here](https://splendorous-quokka-1cdd77.netlify.app/). It is deplyed through the `build` command and not the `generate` one.
