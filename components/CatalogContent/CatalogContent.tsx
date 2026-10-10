'use client';

import { useState } from 'react';
import CamperList from '@/components/CamperList/CamperList';
import SideBar from '@/components/SideBar/SideBar';
import type { GetCampersParams } from '@/types/camper';
import css from './CatalogContent.module.css';

export default function CatalogContent() {
  const [filters, setFilters] = useState<GetCampersParams>({});

  return (
    <div className={css.catalogPageContent}>
      <SideBar onSearch={setFilters} onClear={() => setFilters({})} />
      <CamperList filters={filters} />
    </div>
  );
}
