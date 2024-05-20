import Image from "next/image";

export default function Home() {
  return (
    <main className="relative grid min-h-screen  place-items-center p-24">
      <div className="relative ">
        <Image
          src="/linhmap.svg"
          alt="Linh Map Logo"
          width={300}
          height={50}
          priority
        />
      </div>
      <footer className="absolute bottom-5 left-5 flex items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="relative w-5 h-5">
            <Image
              // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/fb.svg"
              alt="Facebook Logo"
              fill
              priority
            />
          </div>
          <a
            href="https://www.facebook.com/espresxobar?mibextid=LQQJ4d"
            className="text-xs text-muted-background underline"
          >
            Expresobar
          </a>
        </div>
        <div className="flex items-center gap-2 ">
          <div className="relative w-5 h-5">
            <Image
              // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/tt.svg"
              alt="Tiktok Logo"
              fill
              priority
            />
          </div>
          <a
            href="https://www.tiktok.com/@espresxo.bar?fbclid=PAZXh0bgNhZW0CMTEAAabIzhOAO3tgMlhBWfjzrJLfK4zFp33iC1o6b3UzlwiZZwaJJFZnjSbbCGQ_aem_AWzc45Q_RoBA6pCQR8sO9phVXjHcnuwYef4_BCKphgTdoKdJKRFBPSUAaEPk1rUgJ1au8KoqmyqEJ5CSga4Y4M5G"
            className="text-xs text-muted-background underline"
          >
            Expresobar
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative w-5 h-5">
            <Image
              // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/gg.svg"
              alt="Google Logo"
              fill
              priority
            />
          </div>
          <a
            href="https://www.google.com/maps/place/EspresXO+BAR,+59+%C4%90.+Nguy%E1%BB%85n+Th%E1%BB%8B+Minh+Khai,+Ph%C6%B0%E1%BB%9Dng+B%E1%BA%BFn+Th%C3%A0nh,+Qu%E1%BA%ADn+1,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh+700000,+Vietnam/@10.7744791,106.690378,16z/data=!4m6!3m5!1s0x31752fcc66da419f:0x7d681a34bac00d09!8m2!3d10.7744791!4d106.690378!16s%2Fg%2F11vyr_77q6"
            className="text-xs text-muted-background underline"
          >
            Expresobar
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative w-5 h-5">
            <Image src="/sp.svg" alt="Shopee Logo" fill priority className="" />
          </div>
          <a
            href="https://shopeefood.vn/ho-chi-minh/espresxo-bar-nguyen-thi-minh-khai"
            className="text-xs text-muted-background underline"
          >
            Expresobar
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative w-5 h-5">
            <Image
              src="/ig.svg"
              alt="Instagram Logo"
              fill
              priority
              className=""
            />
          </div>
          <a
            href="https://www.instagram.com/espresxobar"
            className="text-xs text-muted-background underline"
          >
            Expresobar
          </a>
        </div>
      </footer>
    </main>
  );
}
