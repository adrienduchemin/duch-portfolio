import { Atoms } from '../styles/sprinkles.css';
import Box from './Box';

interface LazySourceProps {
  atoms?: Atoms;
  media: string;
  dataSrcset: string;
}

export default function LazySource({
  atoms,
  media,
  dataSrcset,
}: LazySourceProps): JSX.Element {
  return (
    <Box as="source" atoms={atoms} media={media} data-srcset={dataSrcset} />
  );
}
