const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchTMDBPoster = async (title, type = "movie") => {
  const searchType = type === "movie" ? "movie" : "tv";
  const url = `https://api.themoviedb.org/3/search/${searchType}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
    title
  )}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(`[TMDB] ${type} - ${title}`, data);
    const result = data.results?.[0];

    if (!result) {
      return {
        posterUrl: "",
        rating: "N/A",
        description: "N/A",
        creator: "N/A",
      };
    }

    const detailsUrl = `https://api.themoviedb.org/3/${searchType}/${result.id}?api_key=${TMDB_API_KEY}`;
    const creditsUrl = `https://api.themoviedb.org/3/${searchType}/${result.id}/credits?api_key=${TMDB_API_KEY}`;

    const [detailsRes, creditsRes] = await Promise.all([
      fetch(detailsUrl),
      fetch(creditsUrl),
    ]);

    const details = await detailsRes.json();
    const credits = await creditsRes.json();

    const description = details.overview || "N/A";

    let creator = "N/A";

    if (type === "tv") {
      creator = details.created_by?.[0]?.name || "N/A";
    } else if (type === "movie") {
      const director = credits.crew?.find((c) => c.job === "Director");
      creator = director?.name || "N/A";
    }

    const finalData = {
      posterUrl: result.poster_path
        ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
        : "",
      rating: result.vote_average?.toFixed(1) ?? "N/A",
      description,
      creator,
    };

    console.log(`[TMDB FINAL DATA] ${type} - ${title}:`, finalData);
    return finalData;
  } catch (err) {
    console.error("[TMDB ERROR]:", err);
    return {
      posterUrl: "",
      rating: "N/A",
      description: "N/A",
      creator: "N/A",
    };
  }
};

export const fetchBookCover = async (title, author) => {
  try {
    const searchResponse = await fetch(
      `https://openlibrary.org/search.json?title=${encodeURIComponent(
        title
      )}&author=${encodeURIComponent(author)}`
    );
    const searchData = await searchResponse.json();

    if (!searchData.docs || searchData.docs.length === 0) {
      console.warn(`No books found for: ${title} by ${author}`);
      return {
        posterUrl: "",
        description: "No description available.",
        rating: "N/A",
      };
    }

    const firstMatch = searchData.docs[0];
    const workKey = firstMatch.key;

    console.log("✅ First match:", firstMatch);
    console.log("🔑 Work key:", workKey);

    let description = "No description available.";
    if (workKey) {
      const workResponse = await fetch(
        `https://openlibrary.org${workKey}.json`
      );
      const workData = await workResponse.json();

      if (workData?.description) {
        description =
          typeof workData.description === "string"
            ? workData.description
            : workData.description.value || description;
      }
    }

    // Build poster URL
    const posterUrl = firstMatch.cover_i
      ? `https://covers.openlibrary.org/b/id/${firstMatch.cover_i}-L.jpg`
      : "";

    console.log("🖼️ Poster URL:", posterUrl);
    console.log("📦 Final book object:", {
      posterUrl,
      description,
      rating: "N/A",
    });

    return {
      posterUrl,
      description,
      rating: "N/A",
    };
  } catch (error) {
    console.error("Error fetching book data:", error);
    return {
      posterUrl: "",
      description: "Error fetching description.",
      rating: "N/A",
    };
  }
};
