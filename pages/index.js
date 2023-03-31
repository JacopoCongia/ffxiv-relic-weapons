import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bold bold text-bold flex flex-col text-center font-bold text-white">
        <div className="text-5 text-10 bg-emerald-900 p-10 text-3xl">
          <h1>Final Fantasy XIV - Relic Weapons</h1>
        </div>
        <Link href="/Endwalker">
          <div className="text-5 text-10 cursor-pointer bg-teal-700 p-7 text-2xl hover:opacity-90">
            <h2>Endwalker - Manderville Weapons</h2>
          </div>
        </Link>
        <Link href="/Shadowbringers">
          <div>
            <h2 className="text-5 text-10 cursor-pointer bg-teal-700 p-7 text-2xl hover:opacity-90">
              Shadowbringers - Resistance Weapons
            </h2>
          </div>
        </Link>
      </div>
    </>
  );
}
