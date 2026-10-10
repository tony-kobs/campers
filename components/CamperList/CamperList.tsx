'use client';

import { getCampers } from '@/services/campers';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import CamperCard from './CamperCard/CamperCard';
import css from './CamperList.module.css';
import { useEffect, useRef } from 'react';
import { GetCampersParams } from '@/types/camper';
import Loader from '../Loader/Loader';

type Props = {
  filters: GetCampersParams;
};

const perPage = 4;

export default function CamperList({ filters }: Props) {
  const listRef = useRef<HTMLUListElement>(null);
  const scrollToIndex = useRef<number | null>(null);

  const {
    data,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ['campers', { perPage, ...filters }],
    queryFn: ({ pageParam }) =>
      getCampers({ ...filters, page: pageParam, perPage }),
    initialPageParam: 1,
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
  });

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  useEffect(() => {
    const index = scrollToIndex.current;
    if (index == null) return;
    const item = listRef.current?.children[index];
    if (!item) return;
    item.scrollIntoView({ behavior: 'smooth', block: 'start' });
    scrollToIndex.current = null;
  }, [campers.length]);
  const handleLoadMore = () => {
    scrollToIndex.current = campers.length;
    fetchNextPage();
  };

  if (isError) return <div>Something went wrong</div>;

  return (
    <>
      {isFetching && !isFetchingNextPage && <Loader />}
      <div className={css.camperListContainer}>
        <ul ref={listRef} className={css.camperListWrapper}>
          {campers.map((camper, index) => (
            <li key={camper.id} className={css.camperListItem}>
              <CamperCard camper={camper} priority={index === 0} />
            </li>
          ))}
        </ul>
        {hasNextPage && (
          <button
            type="button"
            onClick={handleLoadMore}
            disabled={isFetchingNextPage}
            className={css.loadMoreButton}
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
}
