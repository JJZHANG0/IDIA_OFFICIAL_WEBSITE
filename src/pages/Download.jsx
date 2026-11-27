import { Chrome, Monitor, Command, Download as DownloadIcon, Check, ExternalLink, Puzzle } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { productConfig } from '../config';

const chromeStoreUrl = 'https://chromewebstore.google.com/detail/idia-privacy-protector/inohmebnmknmipjaapeofbnclkapfich';

const instructions = [
  [Chrome, 'Open IDIA Privacy Protector on the Chrome Web Store.'],
  [Check, 'Click “Add to Chrome” and confirm the installation.'],
  [Puzzle, "Open the IDIA extension from your browser's toolbar to get started."],
];

const platforms = [
  {
    name: 'macOS',
    Icon: Command,
    description: 'Thoughtful protection. At home on your Mac.',
    version: productConfig.macVersion,
    target: 'macOS',
    href: productConfig.macDownloadUrl,
    filename: 'IDIA-v1.1.3-build2026100425-beta.dmg',
    buttonLabel: 'Download for macOS',
    release: 'IDIA for macOS · DMG download · Beta release',
  },
  {
    name: 'Windows',
    Icon: Monitor,
    description: 'A dedicated privacy layer for your desktop workflow.',
    version: 'v1.1',
    target: 'Windows',
    href: 'https://github.com/JJZHANG0/IDIA_OFFICIAL_WEBSITE/releases/download/windows-v1.1/IDIA.exe',
    buttonLabel: 'Download for Windows',
    release: 'IDIA for Windows · v1.1 release',
  },
  {
    name: 'Chrome Extension',
    Icon: Chrome,
    description: 'Privacy protection, right where your AI conversations begin.',
    version: 'Version ' + productConfig.extensionVersion,
    target: 'Chrome browser',
    storeLabel: 'Available on Chrome Web Store.',
  },
];

export default function Download() {
  return <div className="page-enter"><section className="container page-intro"><div className="eyebrow">YOUR NEXT STEP, MORE PRIVATE.</div><h1>Download IDIA</h1><p>Add a privacy layer between your data and generative AI.</p></section><section className="container platforms" aria-label="Download platforms">
      {platforms.map(({ name, Icon, description, version, target, href, filename, buttonLabel, release, storeLabel }) => (
        <article className="platform-card" key={name}>
          <div className="platform-top">
            <span className="platform-icon"><Icon size={29} /></span>
            <span className="availability"><Check size={13} />Available</span>
          </div>
          <h2>{name}</h2>
          <p className="platform-description">{description}</p>
          <div className="version">{version}<span aria-hidden="true">·</span>{target}</div>
          {storeLabel ? (
            <p className="platform-release platform-store-label">{storeLabel}</p>
          ) : (
            <>
              <Button href={href} download={filename}><DownloadIcon size={17} />{buttonLabel}</Button>
              <p className="platform-release">{release}</p>
            </>
          )}
        </article>
      ))}
    </section>
    <section className="section container install-section" aria-labelledby="chrome-install-title">
      <Reveal>
        <div className="section-heading">
          <div>
            <div className="eyebrow">UP AND RUNNING</div>
            <h2 id="chrome-install-title">Get IDIA on Chrome Web Store</h2>
          </div>
          <p>Install IDIA directly from the Chrome Web Store. No ZIP downloads or Developer Mode required.</p>
        </div>
        <ol className="install-grid">
          {instructions.map(([Icon, instruction], index) => (
            <li key={instruction}>
              <span className="install-number" aria-hidden="true">0{index + 1}</span>
              <div>
                <Icon size={21} aria-hidden="true" />
                <p>{instruction}</p>
              </div>
            </li>
          ))}
        </ol>
        <Button className="chrome-store-button" href={chromeStoreUrl} target="_blank" rel="noopener noreferrer">
          <ExternalLink size={17} aria-hidden="true" />View on Chrome Web Store
        </Button>
      </Reveal>
    </section>
  </div>;
}
