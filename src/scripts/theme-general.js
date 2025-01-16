// Genneral helper functions to reduce code duplication

export function formatEdition(edition) {  
  let prefix = '';
  // check if we need a preceding 0
  if (edition < 10) {
    prefix = "0";
  }
  return '#' + prefix + edition;
}

export function formatPostDate(pubDate) {
  const date = new Date(pubDate);
  const day = date.getDate();
  const ordinal = day + (["th", "st", "nd", "rd"][(day % 10 > 3 || [11, 12, 13].includes(day % 100)) ? 0 : day % 10]);
  const month = date.toLocaleDateString('en-UK', { month: 'short' });
  const year = date.getFullYear();
  return `${month} ${ordinal}, ${year}`;
}