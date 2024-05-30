import ArtworkCard from './ArtworkCard';
import './ArtworkList.css';
import { Artwork } from './api';
export type ArtworkListProps = {
  artworks: Array<Artwork>;
  onArtworkClick: (artwork: Artwork) => void;
};
const ArtworkList = ({ artworks, onArtworkClick }: ArtworkListProps) => {
  return (
    <div className="ArtworkList">
      {artworks.map((artwork, index) => (
        <ArtworkCard
          key={artwork.id}
          artwork={artwork}
          delay={index * 0.2}
          onArtworkClick={onArtworkClick}
        />
      ))}
    </div>
  );
};

export default ArtworkList;
