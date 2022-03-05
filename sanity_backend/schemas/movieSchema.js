export const movieSchema = {
  name: "movies",
  title: "Movies",
  type: "document",
  fields: [
    {
      name: "movie",
      title: "Movie",
      type: "string",
    },
    {
      name: "shows",
      title: "Shows per day",
      type: "number",
    },
    {
      name: "poster",
      title: "Movie Poster Url",
      type: "url",
    },
  ],
};
