# Front End Applications

## Technology stack

NodeJS and Express based application. Javascript is the main language used for code generations

## Linters 

ESLint + Prettier will automatically find and resolve any code standard issues

## VSCode - Linters Configuration and Code Consistency
When used with VSCode we can add the following lines to the settings.json

// Default (format when we paste)
"editor.formatOnPaste": true,
// Default (format when we save)
"editor.formatOnSave": true,

this will help our code being formatted at all time.

Alternatively we can use the 
`npm run prettier-watch` command to watch upon any changed files to automatically apply the linters rules.

## Bundler

ESBuild - https://github.com/evanw/esbuild

Why use esbuild in addition to tsc? The TypeScript compiler doesn’t bundle well for browsers (developers usually resort to additional bundlers like webpack, parcel or rollup), and it’s pretty slow.

## Nodemon

Nodemon is a utility depended on by over 1.5 million projects, that will monitor for any changes in our source and automatically restart our server. Perfect for development.

https://nodemon.io/

## Husky

Husky is an npm package that "makes Git hooks easy".

https://www.npmjs.com/package/husky

