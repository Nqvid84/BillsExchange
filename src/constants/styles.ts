import type { bills as billsType } from "../types";

export const billsStyle: Record<billsType, string> = {
  25: "w-24 h-24 bg-[#e07a5f]",
  10: "w-20 h-20 bg-[#3d405b] text-white",
  5: "w-16 h-16 bg-[#81b29a]",
  1: "w-12 h-12 bg-[#f2cc8f]",
}

export const billColors: Record<billsType, string> = {
  25: "bg-[#e07a5f]",
  10: "bg-[#3d405b] text-white",
  5: "bg-[#81b29a]",
  1: "bg-[#f2cc8f]",
}