const LANGUAGES = [
  'C',
  'C++',
  'C#',
  'CSS',
  'Elm',
  'Elixir',
  'Emacs Lisp',
  'Erlang',
  'Fortran',
  'Go',
  'Haskell',
  'HTML',
  'Java',
  'JavaScript',
  'Lisp',
  'Matlab',
  'Objective-C',
  'OCaml',
  'Pascal',
  'Perl',
  'PHP',
  'PowerShell',
  'Python',
  'R',
  'Ruby',
  'Rust',
  'Scala',
  'Shell',
  'SQL',
  'Swift',
  'TypeScript',
  'Visual Basic',
].map((value) => {
  return { label: value, value } as const
})

const LABELS = [
  'bug',
  'critical',
  'easy',
  'enhancement',
  'difficulty: easy',
  'difficulty: medium',
  'difficulty: hard',
  'discussion',
  'docs',
  'documentation',
  'feature',
  'first-timers-only',
  'good first issue',
  'hard',
  'help wanted',
  'new feature',
  'priority: low',
  'priority: medium',
  'priority: high',
  'type: bug',
].map((value) => {
  return { label: value, value } as const
})

const META_KEYS = {
  description: 'description',
  og: {
    image: 'og:image',
    title: 'og:title',
    type: 'og:type',
    url: 'og:url',
  },
  twitter: {
    card: 'twitter:card',
    description: 'twitter:description',
    image: 'twitter:image',
    imageAlt: 'twitter:image:alt',
    title: 'twitter:title',
  },
  viewport: 'viewport',
} as const

export const CONSTANTS = {
  DESCRIPTION: 'We can find issues of open source projects.',
  LOGO_ALT: 'The logo of this site',
  META_KEYS,
  SEARCH_FILTER: {
    LABELS,
    LANGUAGES,
  },
  SITE_TITLE: 'Issues Must Close!',
} as const
