import React from 'react'
import { Filter } from '../types/filter'

type Props = {
  title: string
  defaultText: string
  propertyName: keyof Filter
  values: string[]
  filter: Filter
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const FilterSelect: React.FC<Props> = ({
  title,
  defaultText,
  propertyName,
  values,
  filter,
  onChange,
}: Props) => {
  return (
    <div>
      <span>{title}</span>
      <select
        onChange={onChange}
        className="py-3 px-2 ml-3 rounded border-2 border-gray-800"
      >
        <option value={'null'}>{defaultText}</option>
        {values.map((value, i) => (
          <option
            key={i}
            value={value}
            selected={filter[propertyName] === value}
          >
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}
