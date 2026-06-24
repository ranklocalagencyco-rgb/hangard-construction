/// <reference types="astro/client" />

// @fontsource / @fontsource-variable packages ship CSS but no type
// declarations for their side-effect imports. Declare them so TypeScript
// stops reporting "Cannot find module" on `import "@fontsource-variable/inter"`.
declare module "@fontsource-variable/*";
declare module "@fontsource/*";
