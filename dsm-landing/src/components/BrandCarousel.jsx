const brands = ['/dq.png', '/bahnmi.png', '/brand3.png', '/dq.png', '/bahnmi.png', '/brand3.png'];

export default function BrandCarousel() {
  return (
    <section className="py-12 bg-gray-100 overflow-hidden">
      <div className="whitespace-nowrap animate-scroll flex items-center gap-8">
        {brands.map((src, idx) => (
          <img key={idx} src={src} alt="brand" className="h-12 inline-block" />
        ))}
      </div>
    </section>
  );
}
