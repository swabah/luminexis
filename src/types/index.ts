/**
 * Shared application types.
 */

/** Generic API response wrapper. */
export type ApiResponse<T> = {
  data: T;
  success: boolean;
  message?: string;
};

/** Pagination metadata. */
export type PaginationMeta = {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};

/** Paginated API response. */
export type PaginatedResponse<T> = ApiResponse<T[]> & {
  meta: PaginationMeta;
};

/** Navigation item definition. */
export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  icon?: string;
};

/** SEO metadata for pages. */
export type PageSEO = {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
};
