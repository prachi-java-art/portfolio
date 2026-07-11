export default function ContactButton() {
  return (
    <button
      className="contact-btn rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base"
      style={{
        background:
          'linear-gradient(123deg, #0B1220 7%, #2DD4BF 37%, #6C63FF 72%, #F5A623 100%)',
        boxShadow:
          '0px 4px 4px rgba(45, 212, 191, 0.2), 4px 4px 12px rgba(108, 99, 255, 0.55) inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      Let's Connect
    </button>
  );
}
