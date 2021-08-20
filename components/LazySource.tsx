import { atoms, Atoms } from '../styles/sprinkles.css';

interface LazySourceProps {
  atom?: Atoms;
  media: string;
  dataSrcset: string;
}

export default function LazySource({
  atom,
  media,
  dataSrcset,
}: LazySourceProps): JSX.Element {
  return (
    <source
      className={atoms({
        ...atom,
      })}
      media={media}
      data-srcset={dataSrcset}
    />
  );
}
