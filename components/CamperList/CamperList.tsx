'use client';

import { getCampers } from '@/services/campers';
import { useQuery } from '@tanstack/react-query';

const params = { page: 1, perPage: 4 };

export default function CamperList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['campers', params],
    queryFn: () => getCampers(params),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;

  return (
    <ul>
      {data?.campers.map((camper) => (
        <li key={camper.id}>
          {camper.name} - {camper.price}
        </li>
      ))}
    </ul>
  );
}
