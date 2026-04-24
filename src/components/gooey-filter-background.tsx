export default function GooeyFilterBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(https://images.aiscribbles.com/34fe5695dbc942628e3cad9744e8ae13.png?v=60d084)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.7,
        pointerEvents: 'none',
      }}
    />
  )
}
