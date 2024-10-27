import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {


  distDir: "build",



  // Your Next.js config here
}

 

export default withPayload(nextConfig)
