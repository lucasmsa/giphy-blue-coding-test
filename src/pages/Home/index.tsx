import { Header } from '~/components/Header';
import * as Input from '~/components/Input';
import { Container, GifsContainer } from './styles';
import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from '~/hooks/useDebounce';
import { api } from '~/services/api';
import { GIPHY_API_KEY } from '~/config/apiKeys';
import { Gif } from '~/interfaces/Gif';
import { GifCard } from '~/components/GifCard';
import { Dots } from 'react-activity';
import 'react-activity/dist/library.css';

export function Home() {
  const GIFS_LIMIT = 12;

  const [searchTerm, setSearchTerm] = useState('');
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [isSearchingGifs, setIsSearchingGifs] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 3000);

  const handleSearchTermChange = useCallback((event: any) => {
    setSearchTerm(event.target.value);
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearchingGifs(true);
      fetchGifs(debouncedSearchTerm).then((results: Gif[]) => {
        setIsSearchingGifs(false);
        setGifs(results);
      });
    } else {
      setGifs([]);
      setIsSearchingGifs(false);
    }
  }, [debouncedSearchTerm]);

  async function fetchGifs(search: string) {
    try {
      const gifsResponse = await api.get(
        `/search?q=${search}&limit=${GIFS_LIMIT}&api_key=${GIPHY_API_KEY}`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );

      const gifsData = gifsResponse.data.data;

      const filteredGifs = gifsData.map(({ id, title, images }: any) => {
        const {
          downsized: { url },
        } = images;

        return {
          id,
          title,
          url,
        };
      });

      return filteredGifs;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  function renderGifs() {
    if (isSearchingGifs) {
      return <Dots />;
    }

    if (!gifs) return <p>No GIFs found</p>;

    return gifs.map(({ id, title, url }: Gif) => (
      <GifCard key={id} id={id} title={title} url={url} />
    ));
  }

  return (
    <Container>
      <Header />
      <Input.Root>
        <Input.FormField placeholder="Search GIF's" onChange={handleSearchTermChange} />
      </Input.Root>
      <GifsContainer>{renderGifs()}</GifsContainer>
    </Container>
  );
}
