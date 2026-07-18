export function url(path = '') {
  const baseUrl = 'https://blog.chenyme.top/'

  return new URL(path, baseUrl)
}
