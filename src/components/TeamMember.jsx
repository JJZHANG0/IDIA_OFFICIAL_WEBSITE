import { useId, useState } from 'react';
import './founderPortrait.css';

export default function TeamMember({ photo, name, role, introduction, biography }) {
  const [flipped, setFlipped] = useState(false);
  const descriptionId = useId();

  return <article className="team-member founder-card">
    <button type="button" className="team-photo founder-portrait"
      aria-label={name + ', ' + role + ' biography'} aria-pressed={flipped}
      aria-describedby={flipped ? descriptionId : undefined}
      onPointerEnter={event => { if (event.pointerType === 'mouse') setFlipped(true); }}
      onPointerLeave={event => { if (event.pointerType === 'mouse') setFlipped(false); }}
      onClick={() => setFlipped(value => !value)}>
      <span className="portrait-turn">
        <img className="portrait-front" src={photo.src} alt={photo.alt} loading="lazy" />
        <span className="portrait-back" aria-hidden={!flipped}>
          <strong>{name}</strong><span>{role}</span>
          <span id={descriptionId}>{biography}</span>
        </span>
      </span>
    </button>
    <h3>{role}</h3>
    <p className="team-introduction">{introduction}</p>
  </article>;
}
