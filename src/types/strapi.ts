/**
 * Strapi v4 API Type Definitions (Flattened / Custom Controller)
 * Defines TypeScript interfaces for Strapi API responses
 */

// Image format structure
export interface StrapiImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path: string | null;
    url: string;
}

// Image data structure (Flattened - no attributes)
export interface StrapiImageData {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        thumbnail?: StrapiImageFormat;
        small?: StrapiImageFormat;
        medium?: StrapiImageFormat;
        large?: StrapiImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    createdAt: string;
    updatedAt: string;
}

export interface StrapiImage {
    data: StrapiImageData | null;
}

// Program structure (Flattened - no attributes, Spanish keys)
export interface StrapiProgram {
    id: number;
    Titulo: string;       // Renamed from Title
    Slug: string;
    Price: string;
    Descripcion: string;  // Renamed from Description
    nivel: string;
    Duration: string;
    Frequency: string;
    Cover: StrapiImage;   // Renamed from CoverImage
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

// Generic Strapi response wrapper
export interface StrapiResponse<T> {
    data: T;
    meta: {
        pagination?: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

// Collection response (array of items)
export type StrapiCollectionResponse<T> = StrapiResponse<T[]>;

// Simplified Program interface for component props (Internal App Type)
// Keeping English keys here to maintain compatibility with existing components
export interface Program {
    id: number;
    Title: string;
    Slug: string;
    Price: string;
    Description: string;
    nivel: string;
    Duration: string;
    Frequency: string;
    CoverImage: {
        url: string;
        alternativeText: string | null;
        width: number;
        height: number;
    } | null;
}

/**
 * Helper function to transform Strapi Program to simplified Program
 */
export function transformStrapiProgram(strapiProgram: StrapiProgram): Program {
    // Destructure directly from the object (no attributes)
    const {
        id,
        Titulo,
        Slug,
        Price,
        Descripcion,
        nivel,
        Duration,
        Frequency,
        Cover
    } = strapiProgram;

    return {
        id,
        Title: Titulo,             // Map Titulo -> Title
        Slug,
        Price,
        Description: Descripcion,  // Map Descripcion -> Description
        nivel,
        Duration,
        Frequency,
        CoverImage: Cover && Cover.data
            ? {
                url: Cover.data.url,
                alternativeText: Cover.data.alternativeText,
                width: Cover.data.width,
                height: Cover.data.height,
            }
            : null,
    };
}
