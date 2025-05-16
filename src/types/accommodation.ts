
export interface Accommodation {
  id: string;
  name: string;
  code: string;
  description: string;
  address: string;
  contact: string;
  email: string;
  features: string[];
  main_image: string;
  created_at: string;
  updated_at: string;
}

export interface AccommodationImage {
  id: string;
  accommodation_id: string;
  image_url: string;
  alt_text: string;
  sort_order: number;
  created_at: string;
}

export interface RoomType {
  id: string;
  accommodation_id: string;
  type: string;
  price: number;
  availability: string;
  created_at: string;
  updated_at: string;
}
