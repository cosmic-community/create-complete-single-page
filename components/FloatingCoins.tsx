const coins = ['🪙', '💰', '🌙', '🚀', '✨', '👑']

const items = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  emoji: coins[i % coins.length],
  top: Math.random() * 90,
  left: Math.random() * 95,
  delay: Math.random() * 5,
  size: Math.random() * 20 + 24,
}))

export default function FloatingCoins() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {items.map((item) => (
        <span
          key={item.id}
          className="absolute animate-float-slow opacity-40"
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  )
}