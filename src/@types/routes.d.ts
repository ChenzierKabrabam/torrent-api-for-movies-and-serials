export interface MovieQueryParams {
  quality: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[]
  genre: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[]
  rating: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[]
  sortBy: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[]
  orderBy: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[]
}

export interface MovieDetailQueryParams {
  withImage: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[]
  withCast: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[]
}
