import { supabase } from "@/integrations/supabase/client";
import { Accommodation, AccommodationImage, RoomType } from "@/types/accommodation";

export async function getAllAccommodations(): Promise<Accommodation[]> {
  const { data, error } = await supabase
    .from('accommodations')
    .select('*')
    .order('name');
  
  if (error) {
    console.error('Error fetching accommodations:', error);
    return [];
  }
  
  return data || [];
}

export async function getAccommodationsByGender(gender: 'boys' | 'girls' | 'mixed'): Promise<Accommodation[]> {
  const { data, error } = await supabase
    .from('accommodations')
    .select('*')
    .eq('pg_category', gender)
    .order('code');
  
  if (error) {
    console.error('Error fetching accommodations by gender:', error);
    return [];
  }
  
  return data || [];
}

export async function getAccommodationById(id: string): Promise<Accommodation | null> {
  const { data, error } = await supabase
    .from('accommodations')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching accommodation by ID:', error);
    return null;
  }
  
  return data;
}

export async function getAccommodationImages(accommodationId: string): Promise<AccommodationImage[]> {
  const { data, error } = await supabase
    .from('accommodation_images')
    .select('*')
    .eq('accommodation_id', accommodationId)
    .order('sort_order');
  
  if (error) {
    console.error('Error fetching accommodation images:', error);
    return [];
  }
  
  return data || [];
}

export async function getRoomTypes(accommodationId: string): Promise<RoomType[]> {
  const { data, error } = await supabase
    .from('room_types')
    .select('*')
    .eq('accommodation_id', accommodationId);
  
  if (error) {
    console.error('Error fetching room types:', error);
    return [];
  }
  
  return data || [];
}

export async function getAllGalleryImages(): Promise<AccommodationImage[]> {
  const { data, error } = await supabase
    .from('accommodation_images')
    .select('*, accommodations(name)')
    .order('sort_order');
  
  if (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
  
  return data || [];
}
