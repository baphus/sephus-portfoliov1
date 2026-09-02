import { ImageResponse } from 'next/og';

export const alt = 'Josephus Kim Sarsonas — Full-Stack Software Engineer in Cebu';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#dcecff',
          color: '#172033',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          padding: '64px',
          width: '100%',
        }}
      >
        <div
          style={{
            background: '#f8fbff',
            border: '2px solid #8aa9cf',
            borderRadius: '28px',
            boxShadow: '0 26px 70px rgba(32, 72, 124, 0.22)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <div
            style={{
              alignItems: 'center',
              background: '#2d74c8',
              color: '#ffffff',
              display: 'flex',
              fontSize: 24,
              fontWeight: 700,
              height: 72,
              justifyContent: 'center',
              letterSpacing: '-0.02em',
            }}
          >
            sephus.tech
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: '56px 64px 68px' }}>
            <div style={{ color: '#2d74c8', display: 'flex', fontSize: 26, fontWeight: 700 }}>
              Cebu, Philippines
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 70,
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1,
              }}
            >
              Josephus Kim Sarsonas
            </div>
            <div style={{ color: '#50617a', display: 'flex', fontSize: 34, fontWeight: 600 }}>
              Full-Stack Software Engineer &amp; Systems Analyst
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
