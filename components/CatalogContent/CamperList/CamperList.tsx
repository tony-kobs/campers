'use client';

import { getCampers } from '@/services/campers';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import CamperCard from './CamperCard/CamperCard';
import css from './CamperList.module.css';
import { useEffect, useRef } from 'react';
import { GetCampersParams } from '@/types/camper';
import Loader from '../../Loader/Loader';
import EmptyState from './EmptyState/EmptyState';
import { toast } from 'sonner';

type Props = {
  filters: GetCampersParams;
  onClear: () => void;
};

const perPage = 4;

export default function CamperList({ filters, onClear }: Props) {
  const listRef = useRef<HTMLUListElement>(null);
  const scrollToIndex = useRef<number | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isError,
    refetch,
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

  const handleLoadMore = async () => {
    scrollToIndex.current = campers.length;
    const result = await fetchNextPage();
    if (result.isError) {
      toast.error('Could not load more campers. Please try again.');
    }
  };

  if (!isFetching && isError && campers.length === 0) {
    return (
      <div className={css.errorState}>
        <h2 className={css.errorTitle}>Could not load campers</h2>
        <p className={css.errorText}>
          Something went wrong while loading the catalog. Please try again.
        </p>
        <button
          type="button"
          className={css.loadMoreButton}
          onClick={() => refetch()}
        >
          Try again
        </button>
      </div>
    );
  }

  if (!isFetching && campers.length === 0) {
    return <EmptyState onClear={onClear} />;
  }
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
