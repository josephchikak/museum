import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {

  compiler: {
    removeConsole: true
  },



  // Your Next.js config here
}

 

export default withPayload(nextConfig)
