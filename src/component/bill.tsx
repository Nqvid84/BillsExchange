import { memo } from 'react'
import type { bills } from '../types'
import { billColors, billsStyle } from '../constants/styles'

interface BillProps {
  index: number
  bill: bills
}

const BillComponent = ({ index, bill }: BillProps) => {
  return (
    <div
      style={{
        transform: `translateY(-${index * 10}px)`,
        zIndex: index,
      }}
      className={`absolute bottom-0 border border-black rounded-full flex justify-center items-center
      ${billColors[bill]} p-1`}
    >
      <div
        className={`border border-black rounded-full flex justify-center items-center ${billsStyle[bill]}`}
      >
        {bill}
      </div>
    </div>
  )
}


export const Bill = memo(BillComponent)