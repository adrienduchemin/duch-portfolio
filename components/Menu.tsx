import { Dispatch, SetStateAction, useCallback } from 'react';

import { IGallery } from '@interfaces/Gallery';

interface GalleryProps {
  galleries: IGallery[];
  setCurrentGallery: Dispatch<SetStateAction<IGallery>>;
}

export default function Menu({
  galleries,
  setCurrentGallery,
}: GalleryProps): JSX.Element {
  const handleChangeGallery = useCallback(
    (name: string) => {
      setCurrentGallery(galleries.find((g) => g.name === name)!);
    },
    [galleries, setCurrentGallery],
  );

  return (
    <div>
      {galleries.map((gallery) => (
        <button
          type="button"
          key={gallery.name}
          onClick={() => handleChangeGallery(gallery.name)}
        >
          {gallery.name}
        </button>
      ))}
    </div>
  );
}
