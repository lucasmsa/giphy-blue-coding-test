import { Gif } from '~/interfaces/Gif';
import { Container, GifGradient, GifImage, GifTitle } from './styles';

interface GifCardProps extends Gif {
  onClick: () => void;
}

export function GifCard({ id, title, url }: Gif) {
  return (
    <Container key={id}>
      <GifImage loading='lazy' src={url} alt={title} />
      <GifGradient />
      <GifTitle>{title}</GifTitle>
    </Container>
  );
}
