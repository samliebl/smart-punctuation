// replaceSmartPunctuation.js

export function replaceSmartPunctuation(inputString) {
  return inputString
    .replace(/[‘’]/g, "'")    // Replace smart single quotes with straight single quotes
    .replace(/[“”]/g, '"')    // Replace smart double quotes with straight double quotes
    .replace(/\s*…\s*/g, '...')   // Replace ellipsis with three periods and remove surrounding spaces
    .replace(/\s*–\s*/g, '--')    // Replace en dash with -- and remove surrounding spaces
    .replace(/\s*—\s*/g, '---');  // Replace em dash with --- and remove surrounding spaces
}