/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    pages: Page;
    maps: Map;
    manuscripts: Manuscript;
    intelligence_reports: IntelligenceReport;
    ethnography_and_archaeology: EthnographyAndArchaeology;
    government_reports: GovernmentReport;
    photos: Photo;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    header: Header;
    footer: Footer;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  prefix?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  internalName: string;
  slug: string;
  pageSection?: Section;
  parent?: (number | null) | Page;
  breadcrumbs?:
    | {
        doc?: (number | null) | Page;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Section".
 */
export interface Section {
  layout?:
    | {
        image?: (number | null) | Media;
        description?: string | null;
        year?: string | null;
        file: number | Media;
        'author(s)'?: string | null;
        keyword?: string | null;
        condition?: string | null;
        location?: string | null;
        rights?: string | null;
        identifiers?: string | null;
        provenance?: string | null;
        slug?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'card';
      }[]
    | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "maps".
 */
export interface Map {
  id: number;
  internalName: string;
  nav?:
    | {
        label?: string | null;
        link?: string | null;
        id?: string | null;
      }[]
    | null;
  pageSection?: Section;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "manuscripts".
 */
export interface Manuscript {
  id: number;
  internalName: string;
  nav?:
    | {
        label?: string | null;
        link?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "intelligence_reports".
 */
export interface IntelligenceReport {
  id: number;
  internalName: string;
  nav?:
    | {
        label?: string | null;
        link?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ethnography_and_archaeology".
 */
export interface EthnographyAndArchaeology {
  id: number;
  internalName: string;
  nav?:
    | {
        label?: string | null;
        link?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "government_reports".
 */
export interface GovernmentReport {
  id: number;
  internalName: string;
  nav?:
    | {
        label?: string | null;
        link?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "photos".
 */
export interface Photo {
  id: number;
  image?: (number | null) | Media;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null)
    | ({
        relationTo: 'maps';
        value: number | Map;
      } | null)
    | ({
        relationTo: 'manuscripts';
        value: number | Manuscript;
      } | null)
    | ({
        relationTo: 'intelligence_reports';
        value: number | IntelligenceReport;
      } | null)
    | ({
        relationTo: 'ethnography_and_archaeology';
        value: number | EthnographyAndArchaeology;
      } | null)
    | ({
        relationTo: 'government_reports';
        value: number | GovernmentReport;
      } | null)
    | ({
        relationTo: 'photos';
        value: number | Photo;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: number;
  logo: number | Media;
  nav?:
    | {
        label?: string | null;
        link?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: number;
  logo: number | Media;
  nav?:
    | {
        label?: string | null;
        link?: string | null;
        id?: string | null;
      }[]
    | null;
  'copyrightNot ice': string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}