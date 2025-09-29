
export default function Footer() {
  return (
    <footer className="bg-[#4A628A] text-white text-sm py-6 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <div className="flex flex-wrap justify-center gap-3 text-white">
          <span className="font-semibold">501(c)(3) NONPROFIT</span>
          <span>
            2140 Bush Street, Suite 1, San Francisco, CA 94115, United States
          </span>
          <span>(415) 602-9599</span>
          <a href="mailto:info@thinkround.org" className="hover:underline">
            info@thinkround.org
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-gray-300 tracking-wide uppercase text-xs">
          <a href="/mission" className="hover:underline">
            Mission
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/board" className="hover:underline">
            Our Board Members
          </a>
          <a href="/map" className="hover:underline">
            Map
          </a>
        </div>
      </div>
    </footer>
  );
}
