import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Travel Trips - Explore the World</title>
        <meta name="description" content="Travel Trips offers travel guides, tips, and itineraries for destinations worldwide. Explore top travel destinations, travel hacks, and vacation ideas." />
        <meta name="keywords" content="travel, trips, tourism, vacation, travel guides, travel destinations, travel tips, itineraries" />
        <link rel="canonical" href="https://www.traveltrips.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Travel Trips - Explore the World" />
        <meta property="og:description" content="Travel Trips offers travel guides, tips, and itineraries for destinations worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.traveltrips.com/" />
        <meta property="og:image" content="https://www.traveltrips.com/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Travel Trips - Explore the World" />
        <meta name="twitter:description" content="Travel Trips offers travel guides, tips, and itineraries for destinations worldwide." />
        <meta name="twitter:image" content="https://www.traveltrips.com/og-image.jpg" />
      </Head>

      <main>
        <h1>Welcome to Travel Trips</h1>
        <p>Explore top travel destinations, itineraries, and tips for your next adventure.</p>
      </main>
    </>
  )
}
