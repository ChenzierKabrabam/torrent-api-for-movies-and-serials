// oneom api endpoint https://oneom.is/ for tv show and serial
// All call must have Accept : application/json in all request headers, otherwise you will get html
// - serial/{id}
// - ep/{id}
// - search/serial? -'title'
// -'network_id'
// -'country_id'
// -'genre_id'
// -'lang_id'
// -'people_id'
// -'character_id'
// -'tvrage_id'
// -'tvmaze_id'
// -'mdb_id'
// -'tvdb_id'
// -'status_id'
// -'runtime'
// -'start'
// -'end

// type Title = 'title'
// type Year = 'year'
// type Rating = 'rating'
// type Peers = 'peers'
// type Seeds = 'seeds'
// type DownloadCount = 'download_count'
// type LikeCount = 'like_count'
// type DateAdded = 'date_added'
// type Descending = 'desc'
// type Ascending = 'asc'
// type All = 'all'

// type sort_by = Title | Year | Rating | Peers | Seeds | DownloadCount | LikeCount | DateAdded
// type order_by = Descending | Ascending

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

export interface TvShowQueryParams {
  title: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[]
}
