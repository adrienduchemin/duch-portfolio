import { Dispatch, SetStateAction, useEffect, useMemo } from 'react';

import { IMedia } from '@interfaces/Media';
import { atoms } from '@styles/sprinkles.css';

interface LightGalleryItemProps extends IMedia {
  children: JSX.Element;
  isCurrent: boolean;
  setDescription: Dispatch<SetStateAction<string>>;
  setImageUrl: Dispatch<SetStateAction<string>>;
}

export default function LightGalleryItem({
  photo,
  video,
  title,
  id,
  isCurrent,
  children,
  setDescription,
  setImageUrl,
}: LightGalleryItemProps): JSX.Element {
  const withVideo = useMemo(() => hasVideo(video), [video]);
  const videoParams = useMemo(
    () => (withVideo ? getVideoParams(video) : undefined),
    [video, withVideo],
  );

  const caption = useMemo(
    () =>
      `${title ? `<h4>${title}</h4>` : ''}${
        photo.copyright ? `<p>© ${photo.copyright}</p>` : ''
      }`,
    [photo.copyright, title],
  );

  useEffect(() => {
    if (isCurrent) {
      if (title) setDescription(title);
      setImageUrl(photo.url);
    }
  }, [isCurrent, photo.url, setDescription, setImageUrl, title]);

  return (
    <div
      className={`item ${atoms({
        cursor: 'pointer',
      })}`}
      data-slide-name={id}
      data-src={!withVideo ? photo.url : undefined}
      data-video={withVideo ? videoParams : undefined}
      data-poster={withVideo ? photo.url : undefined}
      data-sub-html={caption}
    >
      {children}
    </div>
  );
}

function hasVideo(video: IMedia['video']): boolean {
  return video.url !== undefined;
}

function getVideoParams(video: IMedia['video']): string {
  // JSON parse and stringify instead of this shit
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return `{"source": [{"src":"${video.url!}", "type":"video/${
    video.link_type === 'Web' ? 'youtube' : 'mp4'
  }"}], "attributes": {"preload": true, "controls": true}, "techOrder": ["${
    video.link_type === 'Web' ? 'youtube' : 'html5'
  }"], "youtube": {"ytControls": 0}}`;
}
