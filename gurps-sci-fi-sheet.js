import init from './scripts/init.js'

Hooks.once('gurpsinit', async function (theGURPS) {
  console.log('Loading GURPS Sci-Fi Sheet')
  await init('gurps-sci-fi-sheet')
  Hooks.call('gurps-sci-fi-sheet-init', theGURPS)
})
