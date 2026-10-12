import type {
  BookingRequest,
  BookingResponse,
  CamperDetails,
  CampersResponse,
  GetCampersParams,
  Review,
} from '@/types/camper';

const BASE_URL = 'https://campers-api.goit.study';

export async function getCampers(
  params: GetCampersParams = {},
): Promise<CampersResponse> {
  const search = new URLSearchParams();

  if (params.page) search.set('page', String(params.page));
  if (params.perPage) search.set('perPage', String(params.perPage));
  if (params.location) search.set('location', params.location);
  if (params.form) search.set('form', params.form);
  if (params.transmission) search.set('transmission', params.transmission);
  if (params.engine) search.set('engine', params.engine);
  const query = search.toString();
  const response = await fetch(
    `${BASE_URL}/campers${query ? `?${query}` : ''}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch campers');
  }

  return response.json();
}

export async function getCamper(id: string): Promise<CamperDetails | null> {
  const response = await fetch(`${BASE_URL}/campers/${id}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error('Failed to fetch camper');
  }

  return response.json();
}

export async function getReviews(id: string): Promise<Review[]> {
  const response = await fetch(`${BASE_URL}/campers/${id}/reviews`);

  if (!response.ok) {
    throw new Error('Failed to fetch reviews');
  }

  return response.json();
}

export async function createBookingRequest(
  id: string,
  body: BookingRequest,
): Promise<BookingResponse> {
  const response = await fetch(`${BASE_URL}/campers/${id}/booking-requests`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Failed to send booking request');
  }

  return response.json();
}
