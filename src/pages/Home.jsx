import Header from "../components/Header";
import Button from "../components/Button";
import MovieCard from "../components/MovieCard";

function Home()  {
  const HomeCardsData = [
    {
      icon: "🔥",
      title: "Trending Now",
      description: "See what everyone is watching this week"
    },
    {
      icon: "🔍",
      title: "Smart search",
      description: "Find exactly what you're looking for"
    },
    {
      icon: "📋",
      title: "Your Watchlist",
      description: "See movies and track what you want to watch"
    }
  ];

  const movieData = [
    {
       image: "/images/horror.jpg",
       title: "SILENT ",
       genre: "Horror",
       description: "When a Category 5 hurricane decimates a coastal town, the storm surge brings devastation, chaos, and...",
       button: "+ Watchlist"
    },
    {
      image: "/images/movie1.webp",
      title: " Games of Thrones",
      genre: "Action",
      description: "Brief description of Games of Thrones",
      button: "+ Watchlist"
    },
    {
      image: "/images/movie1.webp",
      title: "Games of Thrones",
      genre: "Action",
      description: "Brief description of Games of Thrones",
      button: "+ Watchlist"
    },
    {
      image: "images/movie1.webp",
      title: "Games of Thrones",
      genre: "Action",
      description: "Brief description of Games of Thrones",
      button: "+ Watchlist"
    },
  ]
      

   return(
  

    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4 gap-8">
          <span className="text-8xl mt-20">🎬</span>
          {/* <Headline /> */ }
        <div className="max-w-2xl space-y-4">
          <h1 className="text-5xl font-bold leading-tight">
          Your personal{" "}
          <span className="text-blue-950">movie companion</span>
        </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Discover trending films, search by title, save movies to your watchlist, and never forget what to watch next.
          </p>

          <div className="flex items-center justify-center gap-4 ">
            <Button label="Browse Movies"/>
            <Button label="My Watchlist"/>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 w-full max-w-3xl">
                  {HomeCardsData.map((item) => (
          <article className="bg-slate-500 p-8 text-white rounded-sm"> 
            <span>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
               ))}
        </div >

        <div className="bg-[#0f1117] min-h-screen p-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {movieData.map((movie, index) => (
      <MovieCard 
        key={index} 
        {...movie} 
      />
    ))}
  </div>
</div>

    </main>

  );
}

export default Home;