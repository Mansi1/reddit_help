import './ArtworkDetail.css';
import { Artwork } from './api';
export type ArtworkDetailProps = {
  artwork: Artwork;
  onDeselectClick: () => void;
};
export const ArtworkDetail = ({
  artwork,
  onDeselectClick,
}: ArtworkDetailProps) => {
  return (
    <div className="ArtworkDetails">
      <img
        src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
        alt={artwork.title}
      />
      <h2>{artwork.title}</h2>
      {artwork.artist_title && <p>Artist: {artwork.artist_title}</p>}
      {artwork.date_display && <p>Date: {artwork.date_display}</p>}
      {artwork.medium_display && <p>Medium: {artwork.medium_display}</p>}
      {artwork.dimensions && <p>Dimensions: {artwork.dimensions}</p>}

      <div onClick={onDeselectClick} style={{ cursor: 'pointer' }}>
        back
      </div>
    </div>
  );
};
