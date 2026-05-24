
const images = {
  redshift: "/images/redshiftwyrm-dragon.png",
  rhagnvyr: "/images/rhagnvyr-humanoid.png",
  zeravyr: "/images/zeravyr-apostle.png",
  servia: "/images/servia-wolf-clan.png",
  reilana: "/images/reilana-harpy-queen.png",
  nashara: "/images/nashara-veilfang.png",
  bunny: "/images/eastern-bunnykin-candidate.png",
};

const loreTimeline = [
  {
    title: "Dragon God Descent",
    label: "Origin Myth",
    text: "RedShiftWyrm enters the world as an apex cosmic dragon force. His descent is not treated like a monster arrival. It is a cosmic gravity event. Reality bends, terrain breaks, and the world learns that something beyond ordinary gods has arrived.",
  },
  {
    title: "Rhagnvyr Walks",
    label: "Humanoid Manifestation",
    text: "Rhagnvyr is the humanoid will of RedShiftWyrm. He carries the same gravity, dominance, crimson-violet energy, and sovereign pressure in a body that can move through kingdoms, courts, clans, and war zones.",
  },
  {
    title: "Zeravyr and the Apostle System",
    label: "Apostle Logic",
    text: "Zeravyr defines the first major apostolic logic. An Apostle is not a normal follower. An Apostle is selected, transformed, marked, and rewritten into a living extension of RedShiftWyrm's will.",
  },
  {
    title: "Battlefield and Gravity Shackle",
    label: "Power Display",
    text: "The battlefield arc proves Rhagnvyr's magic is environmental. Gravity Shackle does not simply strike enemies. It changes terrain, crushes formations, bends stone, and turns the battlefield itself into a weapon.",
  },
  {
    title: "North Campaign",
    label: "Faction Growth",
    text: "The northern campaign expands the world through wolf-clan hierarchy, followers, territorial loyalty, and Servia's development. This arc shows that not every useful figure becomes an Apostle. Some become factional strength.",
  },
  {
    title: "Movement East",
    label: "Court Conquest",
    text: "The eastern arc shifts the conquest style. Instead of only battlefield pressure, Rhagnvyr enters a region of courts, sky routes, dancers, spies, harpy heights, and social influence networks.",
  },
];

const characters = [
  {
    name: "RedShiftWyrm",
    title: "Apex Cosmic Dragon God",
    region: "Beyond stars, beyond gods, beyond end",
    image: images.redshift,
    palette: "Black, crimson, royal violet, electric blue",
    role: "The brand core and mythic center. RedShiftWyrm represents gravity, transformation, dominance, cosmic destruction, and divine selection.",
  },
  {
    name: "Rhagnvyr",
    title: "Humanoid Will of RedShiftWyrm",
    region: "Moving force across regions",
    image: images.rhagnvyr,
    palette: "Black, crimson, violet, blue horn asymmetry",
    role: "The walking sovereign form. Rhagnvyr tests potential, moves through factions, converts power structures, and turns presence into pressure.",
  },
  {
    name: "Zeravyr",
    title: "Apostolic Power Anchor",
    region: "Core apostle line",
    image: images.zeravyr,
    palette: "Black, crimson, violet rune-tech",
    role: "A major Apostle reference. Zeravyr helps define the tattoo language, contract transformation, and the visual grammar of divine RedShift markings.",
  },
  {
    name: "Servia and the Wolf Clan",
    title: "Northern Faction Expansion",
    region: "The North",
    image: images.servia,
    palette: "Ash, bone, black, blood-red sigils",
    role: "The north establishes pack loyalty, followers, and clan structure. This arc shows Rhagnvyr building infrastructure, not only collecting Apostles.",
  },
  {
    name: "Reilana Sirocclume",
    title: "Harpy Queen of the Eastern Heights",
    region: "Eastern cliffs, sky routes, desert airspace",
    image: images.reilana,
    palette: "Gold, white, crimson, sunlit bronze",
    role: "A sky-sovereign candidate. Reilana rules through wingspan, talons, flock hierarchy, queenly authority, and high-vantage territorial control.",
  },
  {
    name: "Nashara Veilfang",
    title: "Cat-Kin Dancer Spy, Apostle of the Velvet Lie",
    region: "Eastern courts, lounges, stages, information networks",
    image: images.nashara,
    palette: "Black, crimson, gold, violet",
    role: "A court performer and covert influence operative. Nashara weaponizes beauty, attention, performance, secrets, and apostolic transformation.",
  },
  {
    name: "Eastern Bunnykin Candidate",
    title: "Shelved / Rework Candidate",
    region: "Eastern performance culture",
    image: images.bunny,
    palette: "White, icy blue, silver",
    role: "A white-blue beast-kin dancer concept still under development. The current design direction is not final and needs a stronger RedShiftWyrm silhouette before canon lock.",
  },
];

const apostleRules = [
  "Apostles are selected vessels, not ordinary followers.",
  "The apostolic mark is a contract symbol, power conduit, identity seal, and visual proof of transformation.",
  "Each Apostle expresses RedShiftWyrm differently based on species, region, personality, and potential.",
  "Followers expand influence. Apostles reshape the story.",
  "The tattoo language must stay consistent enough to read as RedShiftWyrm, but flexible enough to personalize each Apostle.",
];

const regions = [
  {
    name: "Descent Zone",
    text: "The mythic impact point where RedShiftWyrm first enters the world and forces reality to acknowledge him.",
  },
  {
    name: "Battlefield Territory",
    text: "Where Gravity Shackle and terrain domination establish Rhagnvyr as an environmental threat, not a normal fighter.",
  },
  {
    name: "Northern Wolf Lands",
    text: "Pack hierarchy, clan loyalty, Servia's arc, followers, and the difference between factional assets and chosen Apostles.",
  },
  {
    name: "Eastern Heights",
    text: "Reilana's domain. Cliffs, sky routes, harpy sovereignty, aerial surveillance, and visible queenly control.",
  },
  {
    name: "Eastern Courts",
    text: "Nashara's domain. Stagecraft, court access, seduction, espionage, elite rooms, and social capture.",
  },
];

const updates = [
  {
    title: "Eastern Arc Expansion",
    text: "The eastern region now has two strong anchors: Reilana above, Nashara within. One commands airspace. One infiltrates rooms.",
  },
  {
    title: "Apostle Tattoo Logic",
    text: "The markings are being treated as contract language: red dragon sigil, violet geometry, rune-tech structure, and role-specific transformation.",
  },
  {
    title: "Bunnykin Candidate Rework",
    text: "The white-blue bunnykin direction is currently shelved until the silhouette becomes less generic and more RedShiftWyrm-specific.",
  },
];

function Nav() {
  const items = ["Lore", "Characters", "Apostles", "Regions", "Brand", "Updates"];
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top">
        <span className="brand-icon">R</span>
        <span>
          <strong>REDSHIFTWYRM</strong>
          <small>Descent Archive</small>
        </span>
      </a>
      <nav>
        {items.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
        ))}
      </nav>
    </header>
  );
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {children && <span>{children}</span>}
    </div>
  );
}

function App() {
  return (
    <div id="top" className="app">
      <Nav />

      <main>
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-copy">
            <p className="eyebrow">Dark Fantasy Worldbuilding Archive</p>
            <h1>RedShiftWyrm</h1>
            <h3>Gravity is my whim. Reality is my throne.</h3>
            <p>
              A visual lore portal for the descent of an apex cosmic dragon god, the rise of Rhagnvyr,
              and the Apostles transformed under RedShiftWyrm's gravity.
            </p>
            <div className="hero-actions">
              <a href="#characters">Enter Character Archive</a>
              <a href="#lore" className="secondary">Read Lore Timeline</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={images.redshift} alt="RedShiftWyrm dragon god" />
          </div>
        </section>

        <section id="lore" className="section">
          <SectionTitle eyebrow="Lore" title="The Descent Timeline">
            This is the public-facing spine of the story. Each entry can later become its own full lore article.
          </SectionTitle>
          <div className="timeline-grid">
            {loreTimeline.map((item) => (
              <article className="lore-card" key={item.title}>
                <small>{item.label}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="characters" className="section dark">
          <SectionTitle eyebrow="Characters" title="Identity Archive">
            Character pages will eventually hold bios, image galleries, transformation notes, and design logic.
          </SectionTitle>
          <div className="character-grid">
            {characters.map((char) => (
              <article className="character-card" key={char.name}>
                <div className="character-image">
                  <img src={char.image} alt={char.name} />
                </div>
                <div className="character-copy">
                  <small>{char.region}</small>
                  <h3>{char.name}</h3>
                  <h4>{char.title}</h4>
                  <p>{char.role}</p>
                  <div className="palette">
                    <strong>Palette</strong>
                    <span>{char.palette}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="apostles" className="section">
          <SectionTitle eyebrow="System" title="The Apostle Logic">
            This section explains why the transformations matter and how RedShiftWyrm marks his chosen.
          </SectionTitle>
          <div className="split">
            <div className="panel">
              <h3>Contract Markings</h3>
              <p>
                Apostolic tattoos are not decoration. They are a visible covenant, a power conduit, and a
                symbolic ownership mark. The red dragon sigil, violet geometry, and rune-tech energy show
                where RedShiftWyrm's will has taken root.
              </p>
            </div>
            <div className="rules">
              {apostleRules.map((rule, i) => (
                <div className="rule" key={rule}>
                  <b>{i + 1}</b>
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="regions" className="section dark">
          <SectionTitle eyebrow="Map" title="Regions of Expansion">
            The map should eventually help readers understand where each arc happens and why each region changes the conquest style.
          </SectionTitle>
          <div className="region-grid">
            {regions.map((region) => (
              <article className="region-card" key={region.name}>
                <h3>{region.name}</h3>
                <p>{region.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="brand" className="section">
          <SectionTitle eyebrow="Brand" title="RedShiftWyrm Identity">
            The project is both a story world and a dark premium visual identity brand.
          </SectionTitle>
          <div className="brand-grid">
            <div>
              <h3>Core</h3>
              <p>Apex cosmic dragon, gravity, transformation, dominance, redshift destruction, and divine selection.</p>
            </div>
            <div>
              <h3>Audience</h3>
              <p>Anime, gaming, RPGs, dark fantasy, dragons, power fantasy, mythic streetwear, and transformation identity.</p>
            </div>
            <div>
              <h3>Visual Rule</h3>
              <p>Black base, crimson energy, royal violet gravity, electric blue contrast, and gold hierarchy accents.</p>
            </div>
          </div>
        </section>

        <section id="updates" className="section dark">
          <SectionTitle eyebrow="Dev Log" title="Development Updates">
            Paste new progress notes here as the Instagram posts, character arcs, and gallery evolve.
          </SectionTitle>
          <div className="updates">
            {updates.map((post) => (
              <article className="update-card" key={post.title}>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
              </article>
            ))}
          </div>
          <div className="cta">
            <h2>Join the Descent</h2>
            <p>This is where an email signup, Discord link, Patreon, Ko-fi, or merch waitlist can eventually go.</p>
            <a href="https://www.instagram.com/" target="_blank">Follow the Project</a>
          </div>
        </section>
      </main>

      <footer>
        <strong>RedShiftWyrm</strong>
        <span>© 2026 Development archive and lore worldbuilding project.</span>
      </footer>
    </div>
  );
}

export default App;
