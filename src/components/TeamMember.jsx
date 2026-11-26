import { useId, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import './founderPortrait.css';

export default function TeamMember({ photo, name, title, biography }) {
  const [flipped, setFlipped] = useState(false);
  const descriptionId = useId();

  return <article className="team-member founder-card">
    <button type="button" className="team-photo founder-portrait"
      aria-label={name + ', ' + title + ' biography'} aria-pressed={flipped}
      aria-describedby={flipped ? descriptionId : undefined}
      onPointerEnter={event => { if (event.pointerType === 'mouse') setFlipped(true); }}
      onPointerLeave={event => { if (event.pointerType === 'mouse') setFlipped(false); }}
      onClick={event => {
        if (event.detail === 0 || event.nativeEvent.pointerType !== 'mouse') {
          setFlipped(value => !value);
        }
      }}>
      <span className="portrait-turn">
        <img className="portrait-front" src={photo.src} alt={photo.alt} loading="lazy" />
        <span className="portrait-back" aria-hidden={!flipped}>
          <ShieldCheck className="portrait-shield" aria-hidden="true" />
          <strong className="portrait-name">{name}</strong>
          <span className="portrait-title">{title}</span>
          <span className="portrait-divider" aria-hidden="true" />
          <span id={descriptionId}>{biography}</span>
        </span>
      </span>
    </button>
  </article>;
}
