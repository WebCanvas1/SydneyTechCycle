export type OrganisationType =
  | 'Business'
  | 'Enterprise'
  | 'School / Education'
  | 'Government'
  | 'Healthcare'
  | 'IT Provider'
  | 'Community Organisation'
  | 'Other Organisation';

export type CollectionStatus =
  | 'NEW'
  | 'REVIEWING'
  | 'QUOTED'
  | 'CONFIRMED'
  | 'COLLECTED'
  | 'COMPLETED'
  | 'CANCELLED';

export type EquipmentType =
  | 'Computers'
  | 'Laptops'
  | 'Monitors'
  | 'Phones'
  | 'Tablets'
  | 'Servers'
  | 'Networking equipment'
  | 'Hard drives / SSDs'
  | 'Printers'
  | 'Accessories'
  | 'Other';

export interface CollectionItem {
  equipment: EquipmentType;
  quantity: string;
}

export interface CollectionRequest {
  id: string;
  request_id: string;
  organisation_type: OrganisationType;
  contact_name: string;
  company: string;
  position: string;
  email: string;
  phone: string;
  address: string;
  suburb: string;
  postcode: string;
  building_level: string;
  loading_access: string;
  items: CollectionItem[];
  data_destruction: 'YES' | 'NO' | 'NOT SURE';
  asset_reporting: 'YES' | 'NO';
  recurring: 'YES' | 'NO';
  preferred_date: string;
  access_instructions: string;
  additional_info: string;
  status: CollectionStatus;
  created_at: string;
}

export interface BusinessEnquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  visible: boolean;
  sort_order: number;
}

export interface EquipmentCategory {
  id: string;
  name: string;
  items: string[];
  visible: boolean;
  sort_order: number;
}

export interface ServiceArea {
  id: string;
  name: string;
  postcodes: string[];
  visible: boolean;
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: string;
  unit: string;
  visible: boolean;
  sort_order: number;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  visible: boolean;
  sort_order: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface SeoMetadata {
  id: string;
  page_path: string;
  title: string;
  description: string;
  keywords: string;
  og_image: string;
}

export interface WebsiteSettings {
  site_name: string;
  tagline: string;
  admin_notification_email: string;
  from_email: string;
  hero_heading: string;
  hero_subheading: string;
  hero_secondary: string;
}
