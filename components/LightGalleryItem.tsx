import { useMemo } from 'react';

import { IGalleryItem, IGalleryItemData } from '@interfaces/GalleryItem';

import Box from './Box';

interface LightGalleryItemProps extends IGalleryItem {
  children: JSX.Element;
}

export default function LightGalleryItem({
  data: { image, video },
  id,
  children,
}: LightGalleryItemProps): JSX.Element {
  const withVideo = useMemo(() => hasVideo(video), [video]);
  const videoParams = useMemo(
    () => (withVideo ? getVideoParams(video) : undefined),
    [video, withVideo],
  );

  return (
    <Box
      as="a"
      data-slide-name={id}
      href={withVideo ? undefined : image.url}
      data-video={videoParams}
      data-poster={withVideo ? image.url : undefined}
    >
      {children}
    </Box>
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
