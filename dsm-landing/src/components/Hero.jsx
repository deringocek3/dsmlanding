export default function Hero() {
  const handleClick = () => {
    const el = document.getElementById('calendly');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="text-center py-20 bg-gray-50">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4 px-4">Social Media That Actually Delivers</h1>
      <p className="text-lg max-w-2xl mx-auto mb-8 px-4">
        Deep Sea Media helps businesses grow through proven marketing strategies and engaging content.
      </p>
      <button onClick={handleClick} className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Book a Free Strategy Call</button>
    </section>
  );
}
