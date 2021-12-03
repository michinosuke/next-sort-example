import type { NextPage } from 'next'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { FilterSelect } from '../components/filterSelect'
import { ShopCard } from '../components/shop'
import { Filter } from '../types/filter'
import { Shop } from '../types/shop'

const Home: NextPage = () => {
  const [shops, setShops] = useState<Shop[]>([])
  const [filter, setFilter] = useState<Filter>({
    area: null,
    genre: null,
    canTakeout: false,
  })
  const [areas, setAreas] = useState<string[]>([])
  const [genres, setGenres] = useState<string[]>([])

  console.log(filter)

  const isShow = useCallback(
    (shop: Shop): boolean => {
      const filterKeys: (keyof Filter)[] = ['area', 'genre']
      for (const key of filterKeys) {
        if (filter[key] !== null && filter[key] !== shop[key]) {
          return false
        }
      }
      if (filter['canTakeout'] === true && shop['canTakeout'] === false) {
        return false
      }
      return true
    },
    [filter]
  )

  const matchedShops = useMemo(
    () => shops.filter((shop) => isShow(shop)),
    [shops, filter]
  )

  useEffect(() => {
    fetch('/shops.json')
      .then((res) => res.json())
      .then((shops: Shop[]) => {
        setShops(shops)

        const areas = shops
          .map((shop) => shop.area)
          .filter((value, index, self) => self.indexOf(value) === index)
        setAreas(areas)

        const genres = shops
          .map((shop) => shop.genre)
          .filter((value, index, self) => self.indexOf(value) === index)
        setGenres(genres)
      })
  }, [])

  return (
    <div className="min-h-screen bg-yellow-500">
      <div className="py-12 px-3 mx-auto max-w-4xl h-full">
        <h1 className="text-5xl text-center text-white">SHOPS</h1>
        <div className="flex justify-around items-center py-4 mt-10 bg-white">
          <FilterSelect
            title="エリア"
            defaultText="全てのエリア"
            filter={filter}
            onChange={(e) =>
              setFilter({
                ...filter,
                area: e.target.value !== 'null' ? e.target.value : null,
              })
            }
            propertyName="area"
            values={areas}
          />
          <FilterSelect
            title="ジャンル"
            defaultText="全て"
            filter={filter}
            onChange={(e) =>
              setFilter({
                ...filter,
                genre: e.target.value !== 'null' ? e.target.value : null,
              })
            }
            propertyName="genre"
            values={genres}
          />
          <div>
            <label className="cursor-pointer">
              <input
                type="checkbox"
                onChange={() =>
                  setFilter({
                    ...filter,
                    canTakeout: !filter.canTakeout,
                  })
                }
                checked={filter.canTakeout}
              />
              <span className="ml-3">テイクアウト可能</span>
            </label>
          </div>
        </div>

        <p className="mt-5 text-white">{matchedShops.length}件の検索結果</p>

        <div className="mt-8">
          {matchedShops.length === 0 ? (
            <p>一致する店舗が見つかりませんでした。</p>
          ) : (
            <div className="flex flex-wrap gap-6 justify-between">
              {matchedShops.map((shop, key) => (
                <ShopCard shop={shop} key={key} />
              ))}
              <div className="w-64"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// export const getStaticProps = () => {
//   return {
//     props: {
//       data: null,
//     },
//   }
// }

export default Home
