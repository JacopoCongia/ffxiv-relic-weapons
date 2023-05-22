import Link from "next/link";

export default function Home() {
  const data = [
    {
      id: 0,
      title: "Endwalker - Manderville Weapons",
      url: "/Endwalker"
    },
    {
      id: 1,
      title: "Shadowbringers - Resistance Weapon",
      url: "/Shadowbringers"
    },
    {
      id: 2,
      title: "Stormblood - Eurekan Weapons",
      url: "/Stormblood"
    },
    {
      id: 3,
      title: "Heavensward - Anima Weapons - (Coming Soon)",
      url: "/"
    },
    {
      id: 4,
      title: "A Realm Reborn - Zodiac Weapons - (Coming Soon)",
      url: "/"
    }
  ];

  const renderedElements = data.map((element) => {
    return (
      <Link
        key={element.id}
        href={element.url}
      >
        <div className="text-5 text-10 mb-[1px] cursor-pointer bg-teal-700 p-7 text-2xl hover:opacity-90">
          <h2>{element.title}</h2>
        </div>
      </Link>
    );
  });

  return (
    <div className="bold bold text-bold flex flex-col text-center font-bold text-white">
      <div className="text-5 text-10 bg-emerald-900 p-10 text-3xl">
        <h1>Final Fantasy XIV - Relic Weapons</h1>
      </div>
      {renderedElements}
    </div>
  );
}
