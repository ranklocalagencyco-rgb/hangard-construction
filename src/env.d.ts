/// <reference types="astro/client" />

// @fontsource / @fontsource-variable packages ship CSS but no type
// declarations for their side-effect imports. Declare them so TypeScript
// stops reporting "Cannot find module" on `import "@fontsource-variable/inter"`.
declare module "@fontsource-variable/*";
declare module "@fontsource/*";

// WebMCP declarative API (Chrome origin trial) adds HTML attributes that
// Astro's JSX types don't know about yet. Augment them so annotated forms
// and fields type-check.
declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    /** <form>: names the tool exposed to AI agents. */
    toolname?: string;
    /** <form>: describes what the tool does. */
    tooldescription?: string;
    /** <form>: submit automatically when an agent invokes it. Omit to require a human click. */
    toolautosubmit?: boolean;
    /** field: describes this parameter in the tool's JSON Schema. */
    toolparamdescription?: string;
  }
}
