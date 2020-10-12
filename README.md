cra-preact-tailwind-template
===

This is a modified [Create React App][cra] (CRA) template for [Preact CLI][preact-cli],
that uses [Preact][preact] (instead of React), and is already enabled for use with
[TailwindCSS][tailwind].

## Usage

```bash
# :: change {my-project} to your desired app / folder name
npx preact-cli create richardneililagan/cra-preact-tailwind-template my-project
```

## Why?

I'm more accustomed to working with CRA, but have recently wanted to switch out React
for Preact --- so this _should_ allow you to use Preact while still being able to use
the conventions + features + familiarities that CRA provides.

---

## Notable customizations

### `customize-cra` and `react-app-rewired`

This template uses [`customize-cra`][customize-cra] and 
[`react-app-rewired`][react-app-rewired] to hook up custom plugins in places to the
default CRA pipeline.

### Automatic pragma injection

The `preact.h` pragma is automatically injected into your JSX files, so you don't have
to `import { h } from 'preact'` (or even `import React from 'react'`) in your JSX files,
nor do you have to add `/** @jsx h **/`.

This should also work in your tests (using `jest` by default).

### Compatibility with React

Libraries that depend on `React` itself should be compatible with this out of the box.
Any import calls for `react` and `react-dom` should be transparently aliased in webpack
to their corresponding Preact compatibility libraries accordingly.

In tests, any imports for `@testing-library/react` are also aliased to 
`@testing-library/preact`.

### TailwindCSS 

[TailwindCSS][tailwind] is already set up in the project, and TailwindCSS utility 
classes should work with your markup + components.

If you do still need to import custom CSS rulesets into your components,
the original CRA behavior of being able to import `.css` and/or `.module.css` files
into your code will still work.

To modify / extend the TailwindCSS configuration, check `tailwind.config.js`.

If you'd like to add additional global base styling to your app, 
`src/index.css` has a section dedicated to placing these rulesets in.
This helps ensure that your global base rulesets are set within the right place in the
CSS bundling pipeline.

> Note that, to minimize CSS bundle sizes in production, TailwindCSS can purge 
> unused CSS classes from your codebase. The template configuration will scan all 
> `.js/.jsx/.ts/.tsx` files in `src/`, and all `.html` files in `public/` to determine
> which CSS classes are actually in use.
>
> For more information on this behavior, please read the 
> [TailwindCSS documentation][tailwind-purge].


### ESlint configuration

You're more than welcome to switch out the ESlint config with your own preferences,
and the template uses the following as default:

- `preact`
- `unicorn`
- `jest-dom`
- `testing-library`
- `prettier`

See `.eslintrc` for more information.

---

[@techlifemusic][twitter] &middot; [website][website]

[cra]: https://create-react-app.dev
[preact]: https://preactjs.com
[preact-cli]: https://preactjs.com/cli
[tailwind]: https://tailwindcss.com
[tailwind-purge]: https://tailwindcss.com/docs/controlling-file-size#overview
[customize-cra]: https://github.com/arackaf/customize-cra
[react-app-rewired]: https://github.com/timarney/react-app-rewired

[twitter]: https://twitter.com/techlifemusic
[website]: https://richardneililagan.com
