import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>Travel Trips ✈️ | Explore the Best Travel Destinations</title>
        <meta
          name="description"
          content="Discover amazing travel destinations, itineraries, and tips with Travel Trips. Your guide to adventure, culture, and unforgettable journeys."
        />
        <meta name="keywords" content="travel, trips, destinations, tourism, vacation, adventure, travel blog" />
        <meta name="author" content="Travel Trips" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Travel Trips ✈️ | Explore the Best Travel Destinations" />
        <meta
          property="og:description"
          content="Plan your perfect trip with Travel Trips. Explore destinations, tips, and itineraries for your next adventure."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://traveltrips.vercel.app/" />
        <meta property="og:image" content="https://traveltrips.vercel.app/travel-banner.jpg" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Travel Trips ✈️ | Explore the Best Travel Destinations" />
        <meta
          name="twitter:description"
          content="Discover destinations and itineraries with Travel Trips. Adventure starts here!"
        />
        <meta name="twitter:image" content="https://traveltrips.vercel.app/travel-banner.jpg" />
      </Head>

      <main style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome to Travel Trips ✈️</h1>
        <p>Your one-stop destination for amazing travel ideas.</p>
      </main>
    </>
  )
}
