import './ArtworkCard.css';
import { Artwork } from './api';

export type ArtworkCardProps = {
  artwork: Artwork;
  delay: number;
  onArtworkClick: (artwork: Artwork) => void;
};
const ArtworkCard = ({ artwork, delay, onArtworkClick }: ArtworkCardProps) => {
  return (
    <div
      className="ArtworkCard"
      style={{ animationDelay: `${delay}s` }}
      onClick={() => onArtworkClick(artwork)}
    >
      <img src={artwork.thumbnail?.lqip} alt={artwork.thumbnail?.alt_text} />
      <h3>{artwork.title}</h3>
      {artwork.artist_title && <p>Artist: {artwork.artist_title}</p>}
      {artwork.date_display && <p>Date: {artwork.date_display}</p>}
    </div>
  );
};

export default ArtworkCard;
