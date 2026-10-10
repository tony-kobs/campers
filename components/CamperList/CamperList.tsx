'use client';

import { getCampers } from '@/services/campers';
import { useQuery } from '@tanstack/react-query';
import CamperCard from './CamperCard/CamperCard';
import css from './CamperList.module.css';

const params = { page: 1, perPage: 4 };

export default function CamperList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['campers', params],
    queryFn: () => getCampers(params),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;

  return (
    <ul className={css.camperListWrapper}>
      {data?.campers.map((camper, index) => (
        <li key={camper.id} className={css.camperListItem}>
          <CamperCard camper={camper} priority={index === 0} />
        </li>
      ))}
    </ul>
  );
}
