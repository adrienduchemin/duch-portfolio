import { useCallback, useEffect, useState } from 'react';

import LazyImage from '@components/LazyImage';
import { animationModal, atoms } from '@styles/sprinkles.css';
import { whitePixel } from '@utils/constants';

interface ModalProps {
  type: string;
}

export default function Modal({ type }: ModalProps): JSX.Element {
  const [isModalVisible, setIsModalVisible] = useState(true);

  useEffect(() => {
    console.log({ type });
  }, [type]);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <>
      <div
        onClick={closeModal}
        onKeyPress={closeModal}
        tabIndex={0}
        role="button"
        className={`${atoms({
          position: 'absolute',
          width: '100%',
          height: 'centvh',
          zIndex: 3,
          cursor: 'pointer',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'overlayModal',
          visibility: 'hidden',
          opacity: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        })} ${animationModal} ${
          isModalVisible
            ? atoms({
                visibility: 'visible',
                opacity: 1,
              })
            : ''
        }`}
      >
        <div
          className={`${atoms({
            // position: 'absolute',
            // top: '50%',
            // left: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            width: '70%',
            height: 'avh',
            backgroundColor: 'white',
            transform: 'rotate(32deg)',
          })} ${animationModal} ${
            isModalVisible
              ? atoms({
                  bottom: 0,
                  right: 0,
                  transform: 'rotate(0)',
                })
              : ''
          }`}
        >
          <LazyImage
            atom={{
              width: '95%',
              height: 'almost',
              display: 'block',
              objectFit: 'cover',
            }}
            dataSrc="chat.jpeg"
            src={whitePixel}
            alt={type}
          />
        </div>
      </div>
    </>
  );
}
