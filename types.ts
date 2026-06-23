export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Hero extends CosmicObject {
  type: 'hero';
  metadata: {
    title?: string;
    subtitle?: string;
    hero_image?: CosmicImage;
    cta_button_text?: string;
    cta_link?: string;
    secondary_cta_text?: string;
    secondary_cta_link?: string;
  };
}

export interface BabydickMeme extends CosmicObject {
  type: 'babydick-memes';
  metadata: {
    title?: string;
    image?: CosmicImage;
    description?: string;
  };
}

export interface TokenomicsItem {
  label?: string;
  value?: string;
  description?: string;
}

export interface Tokenomics extends CosmicObject {
  type: 'tokenomics';
  metadata: {
    title?: string;
    items?: TokenomicsItem[];
  };
}

export interface RoadmapStage {
  phase?: string;
  title?: string;
  description?: string;
}

export interface Roadmap extends CosmicObject {
  type: 'roadmap';
  metadata: {
    title?: string;
    stages?: RoadmapStage[];
  };
}

export interface CommunityLink {
  platform?: string;
  url?: string;
  icon?: string;
}

export interface CommunityLinks extends CosmicObject {
  type: 'community-links';
  metadata: {
    title?: string;
    links?: CommunityLink[];
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}