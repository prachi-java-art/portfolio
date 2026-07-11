type Badge = { name: string; slug: string; color: string };

const ring1: Badge[] = [{ name: 'Python', slug: 'python', color: '3776AB' }];
const ring2: Badge[] = [
  { name: 'React', slug: 'react', color: '61DAFB' },
  { name: 'Git', slug: 'git', color: 'F05032' },
];
const ring3: Badge[] = [
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
  { name: 'Java', slug: 'openjdk', color: 'ED8B00' },
  { name: 'HTML5', slug: 'html5', color: 'E34F26' },
];

function Ring({
  items,
  size,
  radius,
  spinClass,
}: {
  items: Badge[];
  size: number;
  radius: number;
  spinClass: string;
}) {
  const step = 360 / items.length;
  return (
    <div
      className="orbit-path"
      style={{ width: size, height: size }}
    >
      <div className={`orbit-spinner ${spinClass}`}>
        {items.map((b, i) => (
          <div
            key={b.name}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 0,
              height: 0,
              transform: `rotate(${i * step}deg)`,
            }}
          >
            <div
              className="orbit-badge"
              title={b.name}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                transform: `translate(${radius}px, 0) translate(-50%, -50%)`,
              }}
            >
              <img src={`https://cdn.simpleicons.org/${b.slug}/${b.color}`} alt={b.name} width={20} height={20} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OrbitRing() {
  return (
    <div className="orbit-wrap" aria-hidden>
      <div className="orbit-tilt">
        <div className="orbit-core" />
        <Ring items={ring1} size={150} radius={75} spinClass="orbit-spin-cw-slow" />
        <Ring items={ring2} size={240} radius={120} spinClass="orbit-spin-ccw-slower" />
        <Ring items={ring3} size={320} radius={160} spinClass="orbit-spin-cw-slower" />
      </div>
    </div>
  );
}
