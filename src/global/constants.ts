export const SECTIONS = Array(8).fill({})
  .map(((_, index) => ({ label: `Section ${index}`, route: `section-${index}` })))
