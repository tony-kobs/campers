import Image from 'next/image';
import type { GalleryImage } from '@/types/camper';
import css from './CamperGallery.module.css';

type CamperGalleryProps = {
  name: string;
  gallery: GalleryImage[];
};

export default function CamperGallery({ name, gallery }: CamperGalleryProps) {
  const images = [...gallery].sort((a, b) => a.order - b.order);
  const cover = images[0];

  return (
    <div className={css.gallery}>
      {cover && (
        <Image
          src={cover.original}
          alt={name}
          width={638}
          height={505}
          priority
          className={css.cover}
        />
      )}

      {images.length > 0 && (
        <ul className={css.thumbs}>
          {images.map((image) => (
            <li key={image.id}>
              <Image
                src={image.thumb}
                alt={`${name}, photo ${image.order}`}
                width={136}
                height={144}
                className={css.thumb}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
