export interface Response {
  pagination: Pagination;
  data: Artwork[];
  info: Info;
  config: Config;
}

export interface Pagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}

export interface Artwork {
  id: number;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  title: string;
  alt_titles: any;
  thumbnail?: Thumbnail;
  main_reference_number: string;
  has_not_been_viewed_much: boolean;
  boost_rank: any;
  date_start?: number;
  date_end?: number;
  date_display: string;
  date_qualifier_title: string;
  date_qualifier_id?: number;
  artist_display: string;
  place_of_origin?: string;
  description: any;
  short_description: any;
  dimensions: string;
  dimensions_detail: DimensionsDetail[];
  medium_display: string;
  inscriptions: any;
  credit_line: string;
  catalogue_display: any;
  publication_history?: string;
  exhibition_history?: string;
  provenance_text?: string;
  edition: any;
  publishing_verification_level: string;
  internal_department_id: number;
  fiscal_year?: number;
  fiscal_year_deaccession: any;
  is_public_domain: boolean;
  is_zoomable: boolean;
  max_zoom_window_size: number;
  copyright_notice: any;
  has_multimedia_resources: boolean;
  has_educational_resources: boolean;
  has_advanced_imaging: boolean;
  colorfulness?: number;
  color?: Color;
  latitude: any;
  longitude: any;
  latlon: any;
  is_on_view: boolean;
  on_loan_display: any;
  gallery_title: any;
  gallery_id: any;
  nomisma_id: any;
  artwork_type_title: string;
  artwork_type_id: number;
  department_title: string;
  department_id: string;
  artist_id?: number;
  artist_title?: string;
  alt_artist_ids: any[];
  artist_ids: number[];
  artist_titles: string[];
  category_ids: string[];
  category_titles: string[];
  term_titles: string[];
  style_id?: string;
  style_title?: string;
  alt_style_ids: any[];
  style_ids: string[];
  style_titles: string[];
  classification_id: string;
  classification_title: string;
  alt_classification_ids: string[];
  classification_ids: string[];
  classification_titles: string[];
  subject_id?: string;
  alt_subject_ids: string[];
  subject_ids: string[];
  subject_titles: string[];
  material_id?: string;
  alt_material_ids: string[];
  material_ids: string[];
  material_titles: string[];
  technique_id?: string;
  alt_technique_ids: string[];
  technique_ids: string[];
  technique_titles: string[];
  theme_titles: string[];
  image_id?: string;
  alt_image_ids: any[];
  document_ids: any[];
  sound_ids: any[];
  video_ids: any[];
  text_ids: any[];
  section_ids: any[];
  section_titles: any[];
  site_ids: any[];
  suggest_autocomplete_all: SuggestAutocompleteAll[];
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
}

export interface Thumbnail {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
}

export interface DimensionsDetail {
  depth?: number;
  width?: number;
  height: number;
  diameter?: number;
  clarification?: string;
}

export interface Color {
  h: number;
  l: number;
  s: number;
  percentage: number;
  population: number;
}

export interface SuggestAutocompleteAll {
  input: string[];
  contexts: Contexts;
  weight?: number;
}

export interface Contexts {
  groupings: string[];
}

export interface Info {
  license_text: string;
  license_links: string[];
  version: string;
}

export interface Config {
  iiif_url: string;
  website_url: string;
}
export type GetArtworkOptions = {
  limit?: number;
  offset: number;
};
export const getArtworks = async (
  limit: number,
  page: number
): Promise<Response> => {
  /*await new Promise((res) => {
    //wait here to show loading banner
    setTimeout(res, 3000);
  });*/
  const response = await fetch(
    `https://api.artic.edu/api/v1/artworks?limit=${limit}&page=${page}`
  );
  if (response.status !== 200) {
    const errorResponse = await response.json();
    throw Error(errorResponse.detail);
  }
  return await response.json();
};
