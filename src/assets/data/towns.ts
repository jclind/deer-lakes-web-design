export type Town = { name: string; nearby: string }

// Used by the town landing pages. `nearby` finishes the sentence
// "small businesses in {name} and nearby, including {nearby}".
export const towns = {
  allisonPark: { name: 'Allison Park', nearby: 'Gibsonia, Wexford, and Glenshaw' },
  bellevue: { name: 'Bellevue', nearby: 'Avalon, Ben Avon, and the North Side' },
  cranberry: { name: 'Cranberry Township', nearby: 'Mars, Wexford, and Zelienople' },
  foxChapel: { name: 'Fox Chapel', nearby: "Oakmont, O'Hara, and Aspinwall" },
  gibsonia: { name: 'Gibsonia', nearby: 'Allison Park, Wexford, and Mars' },
  mars: { name: 'Mars', nearby: 'Cranberry, Gibsonia, and Valencia' },
  monroeville: { name: 'Monroeville', nearby: 'Plum, Murrysville, and Penn Hills' },
  oakmont: { name: 'Oakmont', nearby: 'Plum, Verona, and Fox Chapel' },
  pittsburgh: { name: 'Pittsburgh', nearby: 'the rest of Allegheny County' },
  wexford: { name: 'Wexford', nearby: 'Cranberry, Allison Park, and Gibsonia' },
  butler: { name: 'Butler', nearby: 'the rest of Butler County' },
  kittanning: { name: 'Kittanning', nearby: 'Ford City and the rest of Armstrong County' },
} satisfies Record<string, Town>
