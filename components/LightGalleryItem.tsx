import { useEffect, useMemo } from 'react';

import { IGalleryItem, IGalleryItemData } from '@interfaces/GalleryItem';
import { atoms } from '@styles/sprinkles.css';

interface LightGalleryItemProps extends IGalleryItem {
  children: JSX.Element;
  isCurrent: boolean; // can do something with this
}

export default function LightGalleryItem({
  data: { image, video, title },
  id,
  isCurrent,
  children,
}: LightGalleryItemProps): JSX.Element {
  const withVideo = useMemo(() => hasVideo(video), [video]);
  const videoParams = useMemo(
    () => (withVideo ? getVideoParams(video) : undefined),
    [video, withVideo],
  );

  const caption = useMemo(
    () =>
      `${title ? `<h4>${title}</h4>` : ''}${
        image.copyright ? `<p>© ${image.copyright}</p>` : ''
      }`,
    [image.copyright, title],
  );

  useEffect(() => {
    if (isCurrent && withVideo) {
      // delete caption from css or smooth transition ?
    } else if (withVideo) {
      // remove the added class or do nothing if it was a transition
    }
  }, [isCurrent, withVideo]);

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <div
      className={`item ${atoms({
        cursor: 'pointer',
      })}`}
      data-slide-name={id}
      data-src={withVideo ? undefined : image.url}
      data-video={videoParams}
      data-poster={withVideo ? image.url : undefined}
      data-sub-html={caption}
    >
      {children}
    </div>
  );
}

function hasVideo(video: IGalleryItemData['video']): boolean {
  return video.url !== undefined;
}

function getVideoParams(video: IGalleryItemData['video']): string {
  // JSON parse and stringify instead of this shit
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return `{"source": [{"src":"${video.url!}", "type":"video/mp4"}], "attributes": {"preload": true, "controls": true}}`;
}
