export const baseUrl = 'https://www.kendeldrick.org'

export default async function sitemap() {
  return [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))
}
