import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1 className="text-center text-2xl">Projecs</h1>
      <ul className="mt-3 mx-auto max-w-[1200px] flex justify-between items-center rounded-lg">
        <Link className="bg-blue-400 px-2 rounded-lg" href = {'/datecounter'}>Date Counter</Link>
        <Link className="bg-blue-400 px-2 rounded-lg" href = {'/faraway'}>Far Away</Link>
        <Link className="bg-blue-400 px-2 rounded-lg" href = {'/steps'}>Steps</Link>
        <Link className="bg-blue-400 px-2 rounded-lg" href = {'/tipcalculator'}>Tip Calculator</Link>

      </ul>
    </div>
  );
}
