/*
 * File Created: Wednesday, 3rd August 2022 9:53:41 pm
 * Author: Chenzier Kabrabam
 * -----
 * Last Modified: Wednesday, 3rd August 2022 10:01:36 pm
 * Modified By: Chenzier Kabrabam
 * -----
 * Copyright 2022
 */

export interface MovieQueryParams {
  quality: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[];
  genre: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[];
  rating: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[];
  sortBy: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[];
  orderBy: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[];
}

export interface MovieDetailQueryParams {
  withImage: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[];
  withCast: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[];
}
