import Link from "next/link";
import Image from "next/image";

const Brand = () => (
  <Link href="/" className="flex items-center">
    <Image
      src="/brilaps brand.png"
      width={120}
      height={50}
      alt="Blinder logo"
      priority
    />
  </Link>
);

export default Brand;
