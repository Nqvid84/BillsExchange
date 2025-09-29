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
      className="relative flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm p-6 hover:shadow-md transition"
    >
      <div className="relative flex justify-center items-center w-full h-15 mb-4">
        {renderBills.map((_, index) => (
          <Bill key={index} index={index} bill={bill} />
        ))}
      </div>
      <span className="text-lg font-semibold mb-2">{bill}</span>
      <span className="text-base font-medium text-gray-700">{count}</span>

    </div>
  )
}

export const Cards = memo(CardsComponent)