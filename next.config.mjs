const nextConfig = {
  reactStrictMode: true,
  // We disable the experimental appDir since we use the pages
  // directory structure for our MVP.  This prevents Next.js from
  // looking for an `app` folder during the build and avoids
  // unnecessary errors.
  i18n: {
    locales: ['sv', 'en'],
    defaultLocale: 'sv'
  }
}

export default nextConfig
