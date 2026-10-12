'use client';

import { useState } from 'react';
import CamperList from '@/components/CatalogContent/CamperList/CamperList';
import SideBar from '@/components/CatalogContent/SideBar/SideBar';
import type { GetCampersParams } from '@/types/camper';
import css from './CatalogContent.module.css';

export default function CatalogContent() {
  const [filters, setFilters] = useState<GetCampersParams>({});
  const [formKey, setFormKey] = useState(0);

  const clearFilters = () => {
    setFilters({});
    setFormKey((key) => key + 1);
  };

  return (
    <div className={css.catalogPageContent}>
      <SideBar key={formKey} onSearch={setFilters} onClear={clearFilters} />
      <CamperList filters={filters} onClear={clearFilters} />
    </div>
  );
}
