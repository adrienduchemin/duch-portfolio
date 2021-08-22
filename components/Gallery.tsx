import lgHash from 'lightgallery/plugins/hash';
import lgVideo from 'lightgallery/plugins/video';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useState } from 'react';

import GalleryItem from '@components/GalleryItem';
import LightGalleryItem from '@components/LightGalleryItem';
import { IGalleryItem } from '@interfaces/GalleryItem';
import {
  animation1,
  animation2,
  animation3,
  animation4,
  animation5,
  animation6,
  animation7,
  animation8,
  animation9,
  atoms,
} from '@styles/sprinkles.css';

const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false,
});

interface GalleryProps {
  items: IGalleryItem[];
  type: string;
  isVisible: boolean;
}

export default function Gallery({
  items,
  type,
  isVisible,
}: GalleryProps): JSX.Element {
  const [isModalClosed, setIsModalClosed] = useState(false);

  useEffect(() => {
    // voir pourquoi ce composant est autant appelé dans les logs ??
    console.log({ items, type });
  }, [items, type]);

  useEffect(() => {
    if (isVisible) {
      setIsModalClosed(false);
      document.body.classList.add('modal-active');
    }
  }, [isVisible]);

  const closeModal = useCallback(() => {
    setIsModalClosed(true);
    document.body.classList.remove('modal-active');
  }, []);

  return (
    <>
      <div
        className={`${atoms({
          position: 'fixed',
          display: 'table',
          height: 'centvh',
          width: '100%',
          top: 0,
          left: 0,
          transform: 'scale(0)',
          zIndex: 1,
          ...(isVisible
            ? {
                transform: 'scale(1)',
              }
            : {}),
        })} ${isVisible && isModalClosed ? animation1 : ''}`}
        onClick={closeModal}
        onKeyPress={closeModal}
        role="button"
        tabIndex={0}
      >
        <div
          className={`${atoms({
            display: 'table-cell',
            background: 'overlay',
            textAlign: 'center',
            verticalAlign: 'middle',
            ...(isVisible
              ? {
                  background: 'zero',
                }
              : {}),
          })} ${isVisible ? animation2 : ''} ${
            isVisible && isModalClosed ? animation3 : ''
          }`}
        >
          <div
            className={`${atoms({
              background: 'white',
              padding: 'xl',
              display: 'inline-block',
              borderRadius: '3px',
              fontWeight: 300,
              position: 'relative',
              ...(isVisible
                ? {
                    backgroundColor: 'transparent',
                  }
                : {}),
            })} ${isVisible ? animation4 : ''} ${
              isVisible && isModalClosed ? animation5 : ''
            }`}
          >
            <h2
              className={`${atoms({
                fontSize: '25px',
                lineHeight: '25px',
                marginBottom: '15px',
              })} ${isVisible ? animation6 : ''} ${
                isVisible && isModalClosed ? animation7 : ''
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </h2>
            <svg
              className={atoms({
                position: 'absolute',
                top: 0,
                left: 0,
                height: 'cent',
                width: '100%',
                borderRadius: '3px',
              })}
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
            >
              <rect
                className={`${atoms({
                  stroke: '#fff',
                  strokeWidth: '2px',
                  strokeDasharray: 778,
                  strokeDashoffset: 778,
                })} ${isVisible ? animation8 : ''} ${
                  isVisible && isModalClosed ? animation9 : ''
                }`}
                x="0"
                y="0"
                fill="none"
                width="226"
                height="162"
                rx="3"
                ry="3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className={atoms({
          margin: 'auto',
          display: 'grid',
          // gridGap: '2px',
          gridColumns: {
            mobile: 'small',
            tablet: 'medium',
            desktop: 'large',
          },
        })}
      >
        <LightGallery
          plugins={[lgHash, lgVideo]}
          customSlideName
          elementClassNames={atoms({
            display: 'contents',
          })}
          galleryId={type}
        >
          {items.map((item) => (
            <LightGalleryItem {...item} key={item.id}>
              <GalleryItem image={item.data.image} key={item.id} />
            </LightGalleryItem>
          ))}
        </LightGallery>
      </div>
    </>
  );
}
