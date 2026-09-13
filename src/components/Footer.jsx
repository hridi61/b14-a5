function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <p className="font-bold mb-2">
            Dev <span className="text-pink-600">Stack</span>
          </p>
          <p className="text-sm text-gray-500">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
        </div>
        <div>
          <p className="font-semibold text-sm mb-3">Product</p>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-sm mb-3">Company</p>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-sm mb-3">Legal</p>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs text-gray-400 pb-6">© 2026 Dev Stack. All rights reserved.</p>
    </footer>
  );
}

export default Footer;