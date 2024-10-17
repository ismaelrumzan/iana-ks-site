import Logo from "./logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2 max-w-[209px]">
              <Logo url="/images/logo.png" alt="IANA logo" />
            </div>
            <div className="text-sm text-gray-600"></div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Services</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  href="/apply"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Apply
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  href="/relief-organizations"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Relief Organizations
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Organization</h6>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3"></div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0"></ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            &copy; IANA Financial
          </div>
        </div>
      </div>
    </footer>
  );
}
