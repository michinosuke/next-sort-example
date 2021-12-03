import type { NextPage } from 'next'
import Link from 'next/link'
const Home: NextPage = () => {
  return (
    <div>
      <Link href="/shops">
        <a>
          <span>店舗一覧</span>
        </a>
      </Link>
    </div>
  )
}

export default Home
