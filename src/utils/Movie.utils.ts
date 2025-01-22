export const getReleaseYear = (dateString: string) => {
  const date = new Date(dateString);

  return date.getFullYear();
};

export const formatReleaseDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");

  return `${month}/${date.getDate()}/${date.getFullYear()}`;
};

export const formatRunTime = (runtime: number) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours}h ${minutes}m`;
};

export const getRatingText = (voteAverage: number) => {
  return `${voteAverage.toFixed(1)}/10`;
};
