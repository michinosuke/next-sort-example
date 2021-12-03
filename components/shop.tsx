import React from 'react'
import { Shop } from '../types/shop'

type Props = {
  shop: Shop
}

export const ShopCard: React.FC<Props> = ({
  shop: { name, genre, area, canTakeout, imgUrl },
}: Props) => {
  return (
    <div className="p-3 w-64 bg-white rounded-lg">
      <div className="overflow-hidden h-32 rounded">
        <img src={imgUrl} className="object-cover object-center" />
      </div>
      <h2 className="mt-3">{name}</h2>
      <p className="mt-3">ジャンル: {genre}</p>
      <p className="mt-3">エリア: {area}</p>
      {canTakeout && (
        <span className="inline-block py-1 px-2 mt-2 rounded-lg border-2 border-red-500">
          テイクアウト可能
        </span>
      )}
    </div>
  )
}
