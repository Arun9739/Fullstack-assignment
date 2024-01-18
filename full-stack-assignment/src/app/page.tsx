import Image from 'next/image'
import HomePage from "@/Components/Home/Home";
import CodeEntry from '@/Components/CodeEntry/CodeEntry';

export default function Home() {
  return (
    <main className='bg-[#468189]'>
      <HomePage />
      <CodeEntry/>
    </main>
  )
}
