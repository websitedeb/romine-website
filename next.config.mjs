import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output to static "out" directory on export
  output: 'export',

  // Recognize MDX, MD, and TS/JS pages
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // Optionally: add other Next.js config here
}

const withMDX = createMDX({
  // Add remark/rehype plugins if you want (optional)
  // remarkPlugins: [],
  // rehypePlugins: [],
})

export default withMDX(nextConfig)
