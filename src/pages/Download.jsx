import { Chrome, Monitor, Command, Download as DownloadIcon, Check, Package, FolderOpen, Settings2, ToggleRight, FolderInput, ShieldCheck } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { productConfig } from '../config';

const instructions = [
  [Package, 'Download the extension package.', 'Save the IDIA ZIP package to your computer.'],
  [FolderOpen, 'Extract the ZIP file.', 'Keep the extracted folder somewhere easy to find.'],
  [Settings2, 'Open Chrome Extensions.', <>In Chrome, enter <code>chrome://extensions</code> in the address bar.</>],
  [ToggleRight, 'Enable Developer Mode.', 'Turn on Developer mode in the top-right corner.'],
  [FolderInput, 'Click Load unpacked.', 'Choose the Load unpacked button on the extensions page.'],
  [ShieldCheck, 'Select the IDIA extension folder.', 'Select the extracted folder containing manifest.json.'],
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
    href: productConfig.extensionDownloadUrl,
    filename: 'IDIA-BrowserExtension.zip',
    buttonLabel: 'Download Extension',
    release: 'IDIA Chrome v' + productConfig.extensionVersion + ' · ZIP download · Manual installation',
  },
];

export default function Download() {
  return <div className="page-enter"><section className="container page-intro"><div className="eyebrow">YOUR NEXT STEP, MORE PRIVATE.</div><h1>Download IDIA</h1><p>Add a privacy layer between your data and generative AI.</p></section><section className="container platforms" aria-label="Download platforms">
      {platforms.map(({ name, Icon, description, version, target, href, filename, buttonLabel, release }) => (
        <article className="platform-card" key={name}>
          <div className="platform-top">
            <span className="platform-icon"><Icon size={29} /></span>
            <span className="availability"><Check size={13} />Available</span>
          </div>
          <h2>{name}</h2>
          <p className="platform-description">{description}</p>
          <div className="version">{version}<span aria-hidden="true">·</span>{target}</div>
          <Button href={href} download={filename}><DownloadIcon size={17} />{buttonLabel}</Button>
          <p className="platform-release">{release}</p>
        </article>
      ))}
    </section><section className="section container install-section"><Reveal><div className="section-heading"><div><div className="eyebrow">UP AND RUNNING</div><h2>How to Install IDIA</h2></div><p>A few simple steps to add the<br />unpacked extension to Chrome.</p></div><ol className="install-grid">{instructions.map(([Icon, title, copy], index) => <li key={title}><span className="install-number">0{index + 1}</span><div><Icon size={21} /><h3>{title}</h3><p>{copy}</p></div></li>)}</ol><div className="installation-note"><Chrome size={19} /><p>Chrome Web Store distribution may be added later. Until then, installation uses Chrome’s Developer Mode.</p></div></Reveal></section></div>;
}
