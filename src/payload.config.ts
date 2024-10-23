// @ts-nocheck
// storage-adapter-import-placeholder
import { s3Storage } from '@payloadcms/storage-s3'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import {nestedDocsPlugin} from '@payloadcms/plugin-nested-docs'
// import { AlgoliaSearchPlugin } from 'payload-plugin-algolia'


import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'
import {Manuscripts} from './collections/Manuscripts'
import {IntelligenceReports} from './collections/IntelligenceReports'
import {Maps} from './collections/Maps'
import { ArchaeologyAndEthnography } from './collections/ArchaeologyAndEthnography'
import { GovernmentReports } from './collections/GovernmentReports'
import { Photos } from './collections/Photos'
import { AlternativeHeritage } from './collections/AlternativeHeritage'
import { AlternativeArchivalHeritage } from './collections/AlternativeArchivalHeritage'









const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)


// console.log(nestedDocs)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
     Media,
     Pages,
     Maps,
     Manuscripts,
     IntelligenceReports,
     ArchaeologyAndEthnography,
     GovernmentReports,
     AlternativeHeritage,
     AlternativeArchivalHeritage,
     Photos
    ],
  globals: [
    Header,
    Footer
  ],
  upload: {
    limits: {
      fileSize: 100000000, // 100MB, written in bytes
    },
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  express: {
    json: {
      limit: 100000000,
    },
  },
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: 'media'
        }
      
 
        },
        bucket: process.env.S3_BUCKET,
          config: {
            credentials: {
              forcePathStyle: true,
              accessKeyId: process.env.S3_ACCESS_KEY_ID,
              secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
            },
            endpoint: process.env.S3_ENDPOINT,
            region:'auto'
          },

      
    }),
    nestedDocsPlugin({
      collections: ['pages'],
      generateLabel: (_, doc) => doc.title,
      generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, '')

    }),
    // AlgoliaSearchPlugin({
    //   algolia: {
    //     appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    //     apiKey: process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY,
    //     index: process.env.NEXT_PUBLIC_ALGOLIA_INDEX
    //   },
    //   collections: ['pages']
    // })

    // storage-adapter-placeholder
  ],

})
