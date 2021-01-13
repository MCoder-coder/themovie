export interface ResponseVideo{
  results:Video[]
}

  export interface MovieDetail{
    backdrop_path:string
    budget:number
    genres:Genre[]
    overview:string | null
    popularity: number
    release_date:string
    poster_path:string
    title:string
    tagline:string | null
  }

interface Genre{
  id:number
  name:string
}

export interface Video{
  key:string
}
