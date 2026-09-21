import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/AboutUs" },
  { name: "Application", href: "/Application" },
  { name: "History", href: "/History" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const API = import.meta.env.VITE_API_BASE_URL;

  const navigate = useNavigate();

  const handleLogout = async () => {

    try {

      const res = await axios.post(
        `${API}/auth/logout`,
        {
          withCredentials: true,
        }
      );

      console.log(res.data);

      // Login page par bhejna
      navigate("/login");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="relative bg-[#EAF2FF] px-4 py-3 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-[#0D2B46] sm:text-3xl">
            E-sheba
          </a>

          {/* Desktop / Tablet navigation */}
          <ul className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.08 }}
              >
                <a
                  href={link.href}
                  className="font-sans font-semibold text-[#0D2B46] hover:text-[#0360D9]"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Desktop buttons */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link to="/login" className="rounded-2xl border border-[#0360D9] bg-white px-4 py-2 font-semibold text-[#0360D9] hover:bg-[#0360D9] hover:text-white">
              LogIn
            </Link>
            <Link to="/signup" className="rounded-2xl bg-[#0360D9] px-4 py-2 font-semibold text-white hover:bg-white hover:text-[#0360D9]">
              Sign Up
            </Link>
            <button onClick={handleLogout} className="rounded-2xl border border-[#0360D9] bg-white px-4 py-2 font-semibold text-[#0360D9] hover:bg-[#0360D9] hover:text-white">
              Logout
            </button>
          </div>

          {/* Mobile / Tablet menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-3xl text-[#0D2B46] hover:bg-blue-100 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile / Tablet dropdown menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-3 flex flex-col gap-3 border-t border-blue-200 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="font-semibold text-[#0D2B46] hover:text-[#0360D9]"
                  >
                    {link.name}
                  </a>
                ))}

                <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                  <button className="rounded-2xl border border-[#0360D9] bg-white px-4 py-2 font-semibold text-[#0360D9] hover:bg-[#0360D9] hover:text-white">
                    LogIn
                  </button>
                  <button className="rounded-2xl bg-[#0360D9] px-4 py-2 font-semibold text-white hover:bg-white hover:text-[#0360D9]">
                    Sign Up
                  </button>
                  <button onClick={handleLogout} className="rounded-2xl border border-[#0360D9] bg-white px-4 py-2 font-semibold text-[#0360D9] hover:bg-[#0360D9] hover:text-white">
                    Logout
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;