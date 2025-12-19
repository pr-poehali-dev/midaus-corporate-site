import { useEffect, useState } from 'react';

export default function ChristmasGarland() {
  const [lights, setLights] = useState<boolean[]>([]);

  useEffect(() => {
    const lightCount = 30;
    setLights(Array(lightCount).fill(false));

    const interval = setInterval(() => {
      setLights(prev => prev.map(() => Math.random() > 0.3));
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-12 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Провод гирлянды */}
        <path
          d="M 0,40 Q 60,10 120,40 T 240,40 T 360,40 T 480,40 T 600,40 T 720,40 T 840,40 T 960,40 T 1080,40 T 1200,40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-muted-foreground/30"
        />

        {/* Лампочки */}
        {lights.map((isOn, index) => {
          const x = (index * 1200) / lights.length + 40;
          const y = 40 + Math.sin(index * 0.5) * 15;
          const colors = ['#ef4444', '#22c55e', '#3b82f6', '#eab308', '#ec4899', '#8b5cf6'];
          const color = colors[index % colors.length];

          return (
            <g key={index}>
              {/* Подвес */}
              <line
                x1={x}
                y1={y}
                x2={x}
                y2={y + 15}
                stroke="currentColor"
                strokeWidth="1"
                className="text-muted-foreground/40"
              />
              {/* Лампочка */}
              <ellipse
                cx={x}
                cy={y + 20}
                rx="8"
                ry="12"
                fill={isOn ? color : '#374151'}
                opacity={isOn ? 1 : 0.3}
                style={{
                  filter: isOn ? `drop-shadow(0 0 8px ${color})` : 'none',
                  transition: 'all 0.3s ease',
                }}
              />
              {/* Блик */}
              {isOn && (
                <ellipse
                  cx={x - 2}
                  cy={y + 17}
                  rx="2"
                  ry="3"
                  fill="white"
                  opacity="0.6"
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
