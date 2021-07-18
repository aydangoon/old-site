import pluralize from 'pluralize'

export const properPluralize = (num, word) =>
  `${num === 1 ? word : pluralize(word)}`

export const properA = (word) =>
  'aeiou'.includes(word.toLowerCase().charAt(0)) ? 'an' : 'a'
