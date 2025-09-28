import { memo, useMemo } from 'react'
import type { bills } from '../types'
import { Bill } from './bill'

interface CardsProps {
  bill: bills,
  count: number
}

const CardsComponent = ({ count, bill }: CardsProps) => {
  const renderBills = useMemo(() => Array.from({ length: count }), [count]);

  return (
    <div
      key={bill}
      className="relative flex flex-col items-center justify-start rounded-2xl border border-gray-200 bg-white shadow-sm p-6 hover:shadow-md transition"
    >
      <span className="text-3xl font-semibold mb-2">{bill}</span>
      <span className="text-xl font-medium text-gray-700">{count}</span>

      <div className="relative w-20 h-40 mt-6">
        {renderBills.map((_, index) => (
          <Bill key={index} index={index} bill={bill} />
        ))}
      </div>
    </div>
  )
}

export const Cards = memo(CardsComponent)