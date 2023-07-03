import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types";

export const FilmDecoder = t.type({
  title: t.string,
  episode_id: t.number,
  opening_crawl: t.string,
  director: t.string,
  producer: t.string,
  release_date: DateFromISOString,
});
