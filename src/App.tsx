import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Artwork, getArtworks } from './api';
import { ArtworkDetail } from './ArtworkDetail';
import ArtworkList from './ArtworkList';
type AppState =
  | { status: 'LOADING' | 'NONE' }
  | { status: 'DONE'; artworks: Array<Artwork>; selected: undefined | Artwork }
  | { status: 'ERROR'; message: string };

function App() {
  const [state, setState] = useState<AppState>({ status: 'NONE' });

  const fetchArtworks = useCallback(async () => {
    setState({ status: 'LOADING' });
    try {
      const response = await getArtworks(100, 0);
      console.log(response);
      setState({
        status: 'DONE',
        artworks: response.data,
        selected: undefined,
      });
    } catch (error) {
      if (error instanceof Error) {
        setState({
          status: 'ERROR',
          message: error.message,
        });
      } else {
        setState({
          status: 'ERROR',
          message: 'Error fetching artworks. Please try again later.',
        });
      }
    }
  }, []);

  useEffect(() => {
    fetchArtworks();
  }, []);

  const handleArtworkClick = (artwork: Artwork) => {
    setState((c) => ({ ...c, selected: artwork }));
  };
  const handleDeselect = () => {
    setState((c) => ({ ...c, selected: undefined }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Art Institute of Chicago</h1>
      </header>
      <main>
        {state.status === 'LOADING' && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading...</p>
          </div>
        )}
        {state.status === 'ERROR' && (
          <div className="error-container">
            <p>{state.message}</p>
            <div style={{ cursor: 'pointer' }} onClick={fetchArtworks}>
              Reload
            </div>
          </div>
        )}

        {state.status === 'DONE' && (
          <>
            {state.selected && (
              <ArtworkDetail
                artwork={state.selected}
                onDeselectClick={handleDeselect}
              />
            )}
            {!state.selected && (
              <ArtworkList
                artworks={state.artworks}
                onArtworkClick={handleArtworkClick}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
