export default function BottomCTA() {
  const handleClick = () => {
    const el = document.getElementById('calendly');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="text-center py-12">
      <p className="mb-4 text-lg font-semibold">Trusted by local brands across Ontario</p>
      <button onClick={handleClick} className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Book a Call</button>
    </section>
  );
}
