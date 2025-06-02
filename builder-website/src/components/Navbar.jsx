export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">Strong Foundations</div>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/services" className="hover:underline">Services</a>
        <a href="/gallery" className="hover:underline">Gallery</a>
        <a href="/testimonials" className="hover:underline">Testimonials</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}