import { useEffect, useState } from 'react';

export default function ChristmasGarland() {
  const [lights, setLights] = useState<boolean[]>([]);

  useEffect(() => {
    const lightCount = 25;
    setLights(Array(lightCount).fill(false));

    const interval = setInterval(() => {
      setLights(prev => prev.map(() => Math.random() > 0.3));
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-20 overflow-visible py-2">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 80"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Провод гирлянды */}
        <path
          d="M 0,25 Q 60,15 120,25 T 240,25 T 360,25 T 480,25 T 600,25 T 720,25 T 840,25 T 960,25 T 1080,25 T 1200,25"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-muted-foreground/40"
        />

        {/* Советские круглые лампочки */}
        {lights.map((isOn, index) => {
          const x = (index * 1200) / lights.length + 48;
          const y = 25 + Math.sin(index * 0.52) * 8;
          const sovietColors = ['#d97706', '#dc2626', '#059669', '#2563eb', '#7c3aed', '#be185d'];
          const color = sovietColors[index % sovietColors.length];

          return (
            <g key={index}>
              {/* Провод к лампочке */}
              <line
                x1={x}
                y1={y}
                x2={x}
                y2={y + 18}
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-muted-foreground/50"
              />
              
              {/* Патрон */}
              <rect
                x={x - 3}
                y={y + 16}
                width="6"
                height="6"
                fill="#4b5563"
                rx="1"
              />
              
              {/* Круглая лампочка */}
              <circle
                cx={x}
                cy={y + 35}
                r="10"
                fill={isOn ? color : '#6b7280'}
                opacity={isOn ? 0.95 : 0.4}
                style={{
                  filter: isOn ? `drop-shadow(0 0 10px ${color})` : 'none',
                  transition: 'all 0.4s ease',
                }}
              />
              
              {/* Внутренний блик */}
              {isOn && (
                <>
                  <circle
                    cx={x - 3}
                    cy={y + 32}
                    r="3"
                    fill="white"
                    opacity="0.5"
                  />
                  <circle
                    cx={x}
                    cy={y + 35}
                    r="10"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                </>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}