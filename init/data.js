const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Castle Stay",
    description:
      "Live like royalty in this historic castle. A unique experience that blends old-world charm with modern luxury.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600334129128-30e5be188e38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhpc3RvcmljJTIwY2FzdGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Edinburgh",
    country: "Scotland",
  },
  {
    title: "Jungle Treehouse",
    description:
      "Adventure awaits in this treetop hideaway. Surrounded by jungle, this spot is perfect for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJlZWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Luxury Villa with Infinity Pool",
    description:
      "Treat yourself to this stunning villa with a private infinity pool overlooking the sea. Pure bliss!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bHV4dXJ5JTIwdmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Ski Chalet in the Alps",
    description:
      "Hit the slopes and relax in this cozy ski chalet. Après-ski by the fire with mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1613472551097-dc1b75ef024f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2tpJTIwY2hhbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Chamonix",
    country: "France",
  },
  {
    title: "Countryside B&B",
    description:
      "Enjoy the simple pleasures of life in this charming bed and breakfast surrounded by rolling hills and pastures.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1591362447811-ff941f9c83e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdW50cnlzaWRlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Cotswolds",
    country: "England",
  },
  {
    title: "Houseboat on the Lake",
    description:
      "Float your worries away in this stylish houseboat with panoramic lake views and modern comforts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2Vib2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Desert Glamping Experience",
    description:
      "Experience the magic of the desert in a luxurious glamping tent under the stars. A perfect blend of comfort and adventure.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1543951303-eb6c7f1a02a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc2VydCUyMGdsYW1waW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Wadi Rum",
    country: "Jordan",
  },
  {
    title: "Remote Cabin on the Lake",
    description:
      "Get off the grid in this rustic lakeside cabin. Perfect for fishing, kayaking, or just enjoying peace and quiet.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1601269084761-e3be8ce8d3de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFrZXNpZGUlMjBjYWJpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Banff",
    country: "Canada",
  }
];

module.exports = { data: sampleListings };
