export interface IShark {
  name: Name
  image: string
  family: Family
  class: Class
  genus: string
  diet: Diet
  min_size_m: number
  max_size_m: number
  endangered: boolean
  aggressive: boolean|string;
  maxdeepth: number
}

export interface Name {
  gr: string
  en: string
  la: string
}

export interface Family {
  gr: string
  en: string
}

export interface Class {
  en: string
  gr: string
}

export interface Diet {
  gr: string
  en: string
}