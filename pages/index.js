import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div className='home-container'>
      <h1>Final Fantasy XIV - Relic Weapons</h1>
      <h2><Link href='/Endwalker'>Endwalker - Manderville Weapons</Link></h2>
      <h2><Link href='/Shadowbringers'>Shadowbringers - Resistance Weapons</Link></h2>
    </div>
    </>
  )
};
