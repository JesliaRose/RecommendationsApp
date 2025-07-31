const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchTMDBPoster = async (title, type = 'movie') => {
  const searchType = type === 'movie' ? 'movie' : 'tv';
  const url = `https://api.themoviedb.org/3/search/${searchType}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(`[TMDB] ${type} - ${title}`, data);
    const result = data.results?.[0];

    if (result && result.poster_path) {
      return {
        posterUrl: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
        rating: result.vote_average?.toFixed(1) ?? 'N/A'
      };
    }

    return { posterUrl: '', rating: 'N/A' };
  } catch (err) {
    console.error('TMDB fetch error:', err);
    return { posterUrl: '', rating: 'N/A' };
  }
};


export const fetchBookCover = async (title, author) => {
  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}`
    );
    const data = await response.json();

    if (!data.docs || data.docs.length === 0) {
      console.warn(`No books found for: ${title} by ${author}`);
      return {
        posterUrl: "", // fallback
        rating: "N/A",
      };
    }

    const firstMatch = data.docs[0];

    if (firstMatch.cover_i) {
      const coverUrl = `https://covers.openlibrary.org/b/id/${firstMatch.cover_i}-L.jpg`;
      return {
        posterUrl: coverUrl,
        rating: "N/A",
      };
    } else {
      console.warn(`No cover_i found for: ${title}`);
      return {
        posterUrl: "",
        rating: "N/A",
      };
    }
  } catch (error) {
    console.error("Error fetching book cover:", error);
    return {
      posterUrl: "",
      rating: "N/A",
    };
  }
};

