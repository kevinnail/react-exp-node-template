import React from 'react';

const LiquidLoader = ({ size = 'medium', showText = true, className = '' }) => {
  // Size presets - you can pass 'small', 'medium', 'large' or a custom number
  const sizes = {
    small: 80,
    medium: 150,
    large: 250,
  };

  const dimension =
    typeof size === 'number' ? size : sizes[size] || sizes.medium;

  return (
    <div
      className={`liquid-loader-wrapper ${className}`}
      style={{
        width: dimension,
        height: dimension,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <style>{`
        @keyframes liquid-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes liquid-morph1 {
          0%, 100% {
            d: path("M 40 -40 Q 40 -20, 20 -20 T 0 -40 T -20 -20 T -40 -40 T -20 -60 T 0 -40 T 20 -60 Z");
          }
          25% {
            d: path("M 30 -30 Q 50 -30, 50 0 T 30 30 T 0 50 T -30 30 T -50 0 T -30 -30 T 0 -50 Z");
          }
          50% {
            d: path("M 20 -60 Q 60 -40, 40 0 T 20 60 T -20 60 T -40 0 T -60 -40 T -20 -60 T 20 -60 Z");
          }
          75% {
            d: path("M 50 -20 Q 50 20, 20 20 T 20 50 T -20 50 T -20 20 T -50 20 T -50 -20 T -20 -20 Z");
          }
        }
        
        @keyframes liquid-morph2 {
          0%, 100% {
            d: path("M 30 -50 Q 60 -30, 40 0 T 30 40 T 0 30 T -40 40 T -40 0 T -60 -30 T -30 -50 Z");
          }
          33% {
            d: path("M 60 -20 Q 60 20, 30 30 T 0 60 T -30 30 T -60 20 T -60 -20 T -30 -30 T 0 -60 Z");
          }
          66% {
            d: path("M 40 -40 Q 40 0, 0 20 T -40 40 T -40 0 T 0 -20 T 40 -40 T 40 0 T 0 20 Z");
          }
        }
        
        @keyframes liquid-morph3 {
          0%, 100% {
            d: path("M 0 -60 Q 30 -40, 50 -20 T 60 20 T 30 50 T -30 50 T -60 20 T -50 -20 T 0 -60 Z");
          }
          50% {
            d: path("M 40 -30 Q 40 10, 10 30 T -40 30 T -40 -10 T -10 -30 T 40 -30 T 40 10 T 10 30 Z");
          }
        }
        
        @keyframes liquid-pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }
        
        @keyframes particle-flow {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0);
          }
          20% {
            opacity: 1;
            transform: translate(-20px, -20px) scale(1);
          }
          50% {
            opacity: 0.5;
            transform: translate(30px, -30px) scale(0.5);
          }
          80% {
            opacity: 1;
            transform: translate(-10px, 40px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(0, 0) scale(0);
          }
        }
        
        @keyframes glitch-text {
          0%, 100% {
            text-shadow: 
              0.02em 0 0 rgba(255, 0, 102, 0.75),
              -0.02em -0 0 rgba(0, 255, 255, 0.75);
          }
          95% {
            text-shadow: 
              0.02em 0 0 rgba(255, 0, 102, 0.75),
              -0.02em -0 0 rgba(0, 255, 255, 0.75);
          }
          95.5% {
            text-shadow: 
              -0.04em 0.025em 0 rgba(255, 0, 102, 0.75),
              0.025em 0.04em 0 rgba(0, 255, 255, 0.75);
          }
        }
        
        .liquid-morph-group {
          transform-origin: center;
          animation: liquid-rotate 8s linear infinite;
        }
        
        .liquid-blob {
          filter: url(#liquid-goo);
          transform-origin: center;
        }
        
        .liquid-blob1 {
          animation: liquid-morph1 4s ease-in-out infinite, liquid-pulse 2s ease-in-out infinite;
        }
        
        .liquid-blob2 {
          animation: liquid-morph2 4s ease-in-out infinite reverse, liquid-pulse 2s ease-in-out infinite 0.5s;
        }
        
        .liquid-blob3 {
          animation: liquid-morph3 4s ease-in-out infinite 1s, liquid-pulse 2s ease-in-out infinite 1s;
        }
        
        .liquid-particle {
          fill: #fff;
          opacity: 0;
        }
        
        .liquid-particle1 {
          animation: particle-flow 3s ease-in-out infinite;
        }
        
        .liquid-particle2 {
          animation: particle-flow 3s ease-in-out infinite 1s;
        }
        
        .liquid-particle3 {
          animation: particle-flow 3s ease-in-out infinite 2s;
        }
        
        .liquid-loading-text {
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 300;
          animation: glitch-text 4s infinite;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      `}</style>

      <svg
        viewBox="-100 -100 200 200"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
      >
        <defs>
          <linearGradient
            id="liquid-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" style={{ stopColor: '#00ffff', stopOpacity: 1 }}>
              <animate
                attributeName="stop-color"
                values="#00ffff;#ff00ff;#ffff00;#00ffff"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" style={{ stopColor: '#ff00ff', stopOpacity: 1 }}>
              <animate
                attributeName="stop-color"
                values="#ff00ff;#ffff00;#00ffff;#ff00ff"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop
              offset="100%"
              style={{ stopColor: '#ffff00', stopOpacity: 1 }}
            >
              <animate
                attributeName="stop-color"
                values="#ffff00;#00ffff;#ff00ff;#ffff00"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          <filter id="liquid-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            <feColorMatrix
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -10"
            />
          </filter>
        </defs>

        <g className="liquid-morph-group">
          <path
            className="liquid-blob liquid-blob1"
            d="M 40 -40 Q 40 -20, 20 -20 T 0 -40 T -20 -20 T -40 -40 T -20 -60 T 0 -40 T 20 -60 Z"
            fill="url(#liquid-gradient)"
          />
          <path
            className="liquid-blob liquid-blob2"
            d="M 30 -50 Q 60 -30, 40 0 T 30 40 T 0 30 T -40 40 T -40 0 T -60 -30 T -30 -50 Z"
            fill="url(#liquid-gradient)"
          />
          <path
            className="liquid-blob liquid-blob3"
            d="M 0 -60 Q 30 -40, 50 -20 T 60 20 T 30 50 T -30 50 T -60 20 T -50 -20 T 0 -60 Z"
            fill="url(#liquid-gradient)"
          />
          <circle
            className="liquid-particle liquid-particle1"
            r="2"
            cx="0"
            cy="-40"
          />
          <circle
            className="liquid-particle liquid-particle2"
            r="2"
            cx="40"
            cy="0"
          />
          <circle
            className="liquid-particle liquid-particle3"
            r="2"
            cx="-40"
            cy="0"
          />
        </g>
      </svg>

      {showText && <span className="liquid-loading-text">Loading</span>}
    </div>
  );
};

// Demo component showing different uses
const Demo = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a0a',
        gap: '3rem',
        flexWrap: 'wrap',
        padding: '2rem',
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '20px',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <h3
          style={{
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontWeight: '500',
          }}
        >
          Small
        </h3>
        <LiquidLoader size="small" showText={false} />
      </div>

      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '20px',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <h3
          style={{
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontWeight: '500',
          }}
        >
          Medium with Text
        </h3>
        <LiquidLoader size="medium" />
      </div>

      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '20px',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <h3
          style={{
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontWeight: '500',
          }}
        >
          Custom Size (200px)
        </h3>
        <LiquidLoader size={200} />
      </div>
    </div>
  );
};

export default Demo;
