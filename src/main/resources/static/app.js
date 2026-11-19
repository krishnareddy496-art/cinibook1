(() => {
  const STORAGE_KEY = "bms_august_2026_frontend_v2";
  const LEGACY_STORAGE_KEY = "bms_august_2026_frontend_v1";

  const POSTER_GRADIENTS = [
    "linear-gradient(135deg, #1d4ed8, #7e22ce, #0f172a)",
    "linear-gradient(135deg, #dc2626, #ea580c, #1e1b4b)",
    "linear-gradient(135deg, #0f766e, #0284c7, #111827)",
    "linear-gradient(135deg, #9333ea, #db2777, #1e1b4b)",
    "linear-gradient(135deg, #b45309, #be123c, #0f172a)",
    "linear-gradient(135deg, #059669, #1d4ed8, #0f172a)"
  ];

  // 30 Movies — 6 per language (ENGLISH, HINDI, TELUGU, TAMIL, KANNADA)
  const SEED_MOVIES = [
    // ==================== ENGLISH (6) ====================
    {
      id: "mov-en-1",
      title: "Quantum Horizon",
      language: "ENGLISH",
      genre: "Sci-Fi",
      format: "IMAX 3D",
      durationMinutes: 158,
      releaseDate: "2026-08-14",
      censorCertificate: "UA",
      director: "Denis Villeneuve",
      castMembers: "Cillian Murphy, Zendaya, Pedro Pascal",
      imdbRating: 9.1,
      posterUrl: "assets/quantum-horizon.jpg",
      posterFilter: "none",
      synopsis: "An orbital research crew discovers a temporal rift above Europa and races against collapsing timelines to bring Earth home.",
      gradient: POSTER_GRADIENTS[0]
    },
    {
      id: "mov-en-2",
      title: "Neon Drift 2099",
      language: "ENGLISH",
      genre: "Action",
      format: "4DX",
      durationMinutes: 128,
      releaseDate: "2026-08-28",
      censorCertificate: "UA",
      director: "Joseph Kosinski",
      castMembers: "Ryan Gosling, Florence Pugh",
      imdbRating: 8.5,
      posterUrl: "assets/neon-drift.jpg",
      posterFilter: "none",
      synopsis: "Underground mag-lev street racers collide with corporate mercenaries across a rain-soaked cybernetic megacity.",
      gradient: POSTER_GRADIENTS[3]
    },
    {
      id: "mov-en-3",
      title: "The Obsidian Vault",
      language: "ENGLISH",
      genre: "Thriller",
      format: "DOLBY ATMOS",
      durationMinutes: 136,
      releaseDate: "2026-08-09",
      censorCertificate: "UA",
      director: "Christopher McQuarrie",
      castMembers: "Idris Elba, Ana de Armas, Dev Patel",
      imdbRating: 8.7,
      posterUrl: "assets/poster-heist.jpg",
      posterFilter: "none",
      synopsis: "A disgraced cryptographer assembles an international heist crew to breach an AI-guarded sky vault during a solar eclipse.",
      gradient: POSTER_GRADIENTS[2]
    },
    {
      id: "mov-en-4",
      title: "Letters Across the Seine",
      language: "ENGLISH",
      genre: "Romance",
      format: "2D",
      durationMinutes: 119,
      releaseDate: "2026-08-18",
      censorCertificate: "U",
      director: "Celine Song",
      castMembers: "Saoirse Ronan, Paul Mescal",
      imdbRating: 8.4,
      posterUrl: "assets/poster-romance.jpg",
      posterFilter: "none",
      synopsis: "Two architects restoring a century-old Paris bridge uncover hidden wartime letters that unexpectedly mirror their own lives.",
      gradient: POSTER_GRADIENTS[4]
    },
    {
      id: "mov-en-5",
      title: "Crown of the Sky Isles",
      language: "ENGLISH",
      genre: "Fantasy",
      format: "IMAX 3D",
      durationMinutes: 152,
      releaseDate: "2026-08-21",
      censorCertificate: "U",
      director: "Peter Jackson",
      castMembers: "Tom Holland, Anya Taylor-Joy",
      imdbRating: 8.8,
      posterUrl: "assets/poster-fantasy.jpg",
      posterFilter: "none",
      synopsis: "A young cartographer sails beyond the storm barrier to awaken an ancient archipelago suspended among golden clouds.",
      gradient: POSTER_GRADIENTS[5]
    },
    {
      id: "mov-en-6",
      title: "Grand Hotel Alibi",
      language: "ENGLISH",
      genre: "Comedy",
      format: "2D",
      durationMinutes: 112,
      releaseDate: "2026-08-04",
      censorCertificate: "UA",
      director: "Wes Anderson",
      castMembers: "Ralph Fiennes, Margot Robbie, Bill Murray",
      imdbRating: 8.2,
      posterUrl: "assets/event-comedy.jpg",
      posterFilter: "hue-rotate(-14deg) saturate(1.15)",
      synopsis: "When a priceless emerald vanishes during a film festival gala, twelve eccentric guests each invent hilariously conflicting alibis.",
      gradient: POSTER_GRADIENTS[1]
    },

    // ==================== HINDI (6) ====================
    {
      id: "mov-hi-1",
      title: "Agni Protocol",
      language: "HINDI",
      genre: "Action",
      format: "IMAX",
      durationMinutes: 146,
      releaseDate: "2026-08-15",
      censorCertificate: "UA",
      director: "Siddharth Anand",
      castMembers: "Hrithik Roshan, Deepika Padukone, Vijay Sethupathi",
      imdbRating: 8.9,
      posterUrl: "assets/agni-protocol.jpg",
      posterFilter: "none",
      synopsis: "When a rogue cyber-syndicate hijacks a defence satellite network, an elite counter-intel squad launches a high-altitude mission.",
      gradient: POSTER_GRADIENTS[1]
    },
    {
      id: "mov-hi-2",
      title: "Baarish Aur Benaras",
      language: "HINDI",
      genre: "Romance",
      format: "DOLBY ATMOS",
      durationMinutes: 138,
      releaseDate: "2026-08-21",
      censorCertificate: "U",
      director: "Imtiaz Ali",
      castMembers: "Ranbir Kapoor, Triptii Dimri",
      imdbRating: 8.6,
      posterUrl: "assets/poster-romance.jpg",
      posterFilter: "hue-rotate(15deg) saturate(1.2)",
      synopsis: "A classical violinist and a documentary photographer cross paths across monsoon-drenched ghats during one unforgettable August week.",
      gradient: POSTER_GRADIENTS[4]
    },
    {
      id: "mov-hi-3",
      title: "Chakravyuh 2040",
      language: "HINDI",
      genre: "Sci-Fi",
      format: "IMAX 3D",
      durationMinutes: 154,
      releaseDate: "2026-08-28",
      censorCertificate: "UA",
      director: "Nag Ashwin",
      castMembers: "Vicky Kaushal, Kriti Sanon, Pankaj Tripathi",
      imdbRating: 8.7,
      posterUrl: "assets/quantum-horizon.jpg",
      posterFilter: "hue-rotate(38deg) contrast(1.06)",
      synopsis: "Inside a futuristic Mumbai megadome, a forensic hacker discovers memories are being rewritten from an orbital quantum core.",
      gradient: POSTER_GRADIENTS[0]
    },
    {
      id: "mov-hi-4",
      title: "Raat Ka Raaz",
      language: "HINDI",
      genre: "Thriller",
      format: "DOLBY ATMOS",
      durationMinutes: 132,
      releaseDate: "2026-08-07",
      censorCertificate: "UA",
      director: "Sriram Raghavan",
      castMembers: "Ayushmann Khurrana, Tabu, Jaideep Ahlawat",
      imdbRating: 8.8,
      posterUrl: "assets/midnight-signal.jpg",
      posterFilter: "hue-rotate(-25deg) saturate(1.15)",
      synopsis: "A late-night jazz pianist overhears a coded confession in an empty studio and gets pulled into a labyrinth of double-crosses.",
      gradient: POSTER_GRADIENTS[2]
    },
    {
      id: "mov-hi-5",
      title: "Shaadi Chaos Express",
      language: "HINDI",
      genre: "Comedy",
      format: "2D",
      durationMinutes: 126,
      releaseDate: "2026-08-14",
      censorCertificate: "U",
      director: "Raj & DK",
      castMembers: "Rajkummar Rao, Shraddha Kapoor, Aparshakti Khurana",
      imdbRating: 8.3,
      posterUrl: "assets/event-comedy.jpg",
      posterFilter: "saturate(1.25) brightness(1.04)",
      synopsis: "Two rival wedding planners accidentally book the exact same Jaipur palace for two chaotic families on the same auspicious weekend.",
      gradient: POSTER_GRADIENTS[3]
    },
    {
      id: "mov-hi-6",
      title: "Surya Vansham: The Crown",
      language: "HINDI",
      genre: "Drama",
      format: "IMAX",
      durationMinutes: 164,
      releaseDate: "2026-08-01",
      censorCertificate: "UA",
      director: "Sanjay Leela Bhansali",
      castMembers: "Ranveer Singh, Alia Bhatt",
      imdbRating: 8.5,
      posterUrl: "assets/deccan-chronicles.jpg",
      posterFilter: "hue-rotate(-12deg) contrast(1.08)",
      synopsis: "A sweeping royal saga of loyalty, music, and betrayal set against the sandstone ramparts of a legendary desert kingdom.",
      gradient: POSTER_GRADIENTS[4]
    },

    // ==================== TELUGU (6) ====================
    {
      id: "mov-te-1",
      title: "Deccan Chronicles",
      language: "TELUGU",
      genre: "Drama",
      format: "IMAX",
      durationMinutes: 162,
      releaseDate: "2026-08-21",
      censorCertificate: "U",
      director: "S. S. Rajamouli",
      castMembers: "Prabhas, Mrunal Thakur, Rana Daggubati",
      imdbRating: 9.0,
      posterUrl: "assets/deccan-chronicles.jpg",
      posterFilter: "none",
      synopsis: "An epic saga spanning three generations of master architects and fearless rebels defending an unconquered fortress city.",
      gradient: POSTER_GRADIENTS[4]
    },
    {
      id: "mov-te-2",
      title: "Vajra Strike",
      language: "TELUGU",
      genre: "Action",
      format: "DOLBY ATMOS",
      durationMinutes: 151,
      releaseDate: "2026-08-15",
      censorCertificate: "UA",
      director: "Sukumar",
      castMembers: "Allu Arjun, Rashmika Mandanna",
      imdbRating: 8.8,
      posterUrl: "assets/agni-protocol.jpg",
      posterFilter: "hue-rotate(-18deg) saturate(1.25)",
      synopsis: "A charismatic coastal dockyard leader confronts an international smuggling syndicate in a relentless high-voltage showdown.",
      gradient: POSTER_GRADIENTS[1]
    },
    {
      id: "mov-te-3",
      title: "Maya Lokam",
      language: "TELUGU",
      genre: "Fantasy",
      format: "IMAX 3D",
      durationMinutes: 156,
      releaseDate: "2026-08-28",
      censorCertificate: "U",
      director: "Prasanth Varma",
      castMembers: "Teja Sajja, Nani, Meenakshi Chaudhary",
      imdbRating: 8.7,
      posterUrl: "assets/poster-fantasy.jpg",
      posterFilter: "hue-rotate(18deg) saturate(1.18)",
      synopsis: "An archaeologist unlocks a mythical celestial realm hidden above the Eastern Ghats and must restore balance before the eclipse.",
      gradient: POSTER_GRADIENTS[5]
    },
    {
      id: "mov-te-4",
      title: "Cyberabad Nights",
      language: "TELUGU",
      genre: "Thriller",
      format: "4DX",
      durationMinutes: 139,
      releaseDate: "2026-08-08",
      censorCertificate: "UA",
      director: "Sailesh Kolanu",
      castMembers: "Adivi Sesh, Sobhita Dhulipala",
      imdbRating: 8.6,
      posterUrl: "assets/poster-heist.jpg",
      posterFilter: "hue-rotate(28deg) contrast(1.08)",
      synopsis: "During a single blackout night in HITEC City, a special investigator tracks a phantom mastermind across five smart towers.",
      gradient: POSTER_GRADIENTS[2]
    },
    {
      id: "mov-te-5",
      title: "Nuvvu Nenu Monsoon",
      language: "TELUGU",
      genre: "Romance",
      format: "2D",
      durationMinutes: 131,
      releaseDate: "2026-08-14",
      censorCertificate: "U",
      director: "Hanu Raghavapudi",
      castMembers: "Dulquer Salmaan, Sreeleela",
      imdbRating: 8.4,
      posterUrl: "assets/poster-romance.jpg",
      posterFilter: "hue-rotate(-20deg) saturate(1.15)",
      synopsis: "A soulful musical love story about two college radio hosts who reconnect ten years later on an overnight train to Visakhapatnam.",
      gradient: POSTER_GRADIENTS[3]
    },
    {
      id: "mov-te-6",
      title: "Guntur Gangs & Giggles",
      language: "TELUGU",
      genre: "Comedy",
      format: "2D",
      durationMinutes: 129,
      releaseDate: "2026-08-02",
      censorCertificate: "U",
      director: "Anil Ravipudi",
      castMembers: "Naveen Polishetty, Vennela Kishore",
      imdbRating: 8.2,
      posterUrl: "assets/neon-drift.jpg",
      posterFilter: "hue-rotate(60deg) saturate(1.1)",
      synopsis: "Three hapless startups accidentally win a vintage rally car filled with clues to a hilarious small-town treasure hunt.",
      gradient: POSTER_GRADIENTS[0]
    },

    // ==================== TAMIL (6) ====================
    {
      id: "mov-ta-1",
      title: "Midnight Signal",
      language: "TAMIL",
      genre: "Thriller",
      format: "DOLBY ATMOS",
      durationMinutes: 134,
      releaseDate: "2026-08-07",
      censorCertificate: "UA",
      director: "Lokesh Kanagaraj",
      castMembers: "Karthi, Trisha Krishnan, Fahadh Faasil",
      imdbRating: 8.9,
      posterUrl: "assets/midnight-signal.jpg",
      posterFilter: "none",
      synopsis: "A late-night radio dispatcher in Chennai intercepts an encrypted distress call that unravels a city-wide conspiracy.",
      gradient: POSTER_GRADIENTS[2]
    },
    {
      id: "mov-ta-2",
      title: "Kaveri Velocity",
      language: "TAMIL",
      genre: "Action",
      format: "IMAX",
      durationMinutes: 148,
      releaseDate: "2026-08-15",
      censorCertificate: "UA",
      director: "Nelson Dilipkumar",
      castMembers: "Suriya, Nayanthara, Yogi Babu",
      imdbRating: 8.7,
      posterUrl: "assets/neon-drift.jpg",
      posterFilter: "hue-rotate(-30deg) contrast(1.08)",
      synopsis: "An undercover stunt driver infiltrates a coastal racing cartel to rescue his missing brother before midnight.",
      gradient: POSTER_GRADIENTS[3]
    },
    {
      id: "mov-ta-3",
      title: "Chola Odyssey",
      language: "TAMIL",
      genre: "Drama",
      format: "IMAX",
      durationMinutes: 166,
      releaseDate: "2026-08-21",
      censorCertificate: "U",
      director: "Mani Ratnam",
      castMembers: "Vikram, Aishwarya Rai, Jayam Ravi",
      imdbRating: 8.8,
      posterUrl: "assets/deccan-chronicles.jpg",
      posterFilter: "hue-rotate(18deg) saturate(1.15)",
      synopsis: "Set on the high seas of the 11th century, a naval commander navigates royal intrigue and monsoon storms to protect the maritime empire.",
      gradient: POSTER_GRADIENTS[4]
    },
    {
      id: "mov-ta-4",
      title: "Vaanam 3000",
      language: "TAMIL",
      genre: "Sci-Fi",
      format: "IMAX 3D",
      durationMinutes: 144,
      releaseDate: "2026-08-29",
      censorCertificate: "U",
      director: "R. Ravikumar",
      castMembers: "Sivakarthikeyan, Sai Pallavi",
      imdbRating: 8.5,
      posterUrl: "assets/quantum-horizon.jpg",
      posterFilter: "hue-rotate(-40deg) saturate(1.15)",
      synopsis: "An astrophysicist from Madurai builds a quantum beacon that opens first contact with a peaceful deep-space civilization.",
      gradient: POSTER_GRADIENTS[0]
    },
    {
      id: "mov-ta-5",
      title: "Marina Mazhai",
      language: "TAMIL",
      genre: "Romance",
      format: "2D",
      durationMinutes: 127,
      releaseDate: "2026-08-12",
      censorCertificate: "U",
      director: "Gautham Vasudev Menon",
      castMembers: "Dhanush, Nithya Menen",
      imdbRating: 8.6,
      posterUrl: "assets/poster-romance.jpg",
      posterFilter: "hue-rotate(32deg) contrast(1.05)",
      synopsis: "Two indie musicians writing a rain symphony along Chennai's coast discover that timing is the hardest note in love.",
      gradient: POSTER_GRADIENTS[5]
    },
    {
      id: "mov-ta-6",
      title: "Chennai Check-In",
      language: "TAMIL",
      genre: "Comedy",
      format: "2D",
      durationMinutes: 124,
      releaseDate: "2026-08-03",
      censorCertificate: "U",
      director: "Venkat Prabhu",
      castMembers: "Soori, Santhanam, Priya Bhavani Shankar",
      imdbRating: 8.1,
      posterUrl: "assets/event-comedy.jpg",
      posterFilter: "hue-rotate(24deg) saturate(1.2)",
      synopsis: "A family vacation turns into a hilarious comedy of errors when a lookalike celebrity swaps suitcases at the airport lounge.",
      gradient: POSTER_GRADIENTS[1]
    },

    // ==================== KANNADA (6) ====================
    {
      id: "mov-kn-1",
      title: "Kolar Shadow",
      language: "KANNADA",
      genre: "Action",
      format: "IMAX",
      durationMinutes: 155,
      releaseDate: "2026-08-15",
      censorCertificate: "UA",
      director: "Prashanth Neel",
      castMembers: "Yash, Srinidhi Shetty, Kishore",
      imdbRating: 9.0,
      posterUrl: "assets/agni-protocol.jpg",
      posterFilter: "hue-rotate(14deg) contrast(1.1)",
      synopsis: "From the glowing depths of an industrial frontier rises a lone strategist challenging a ruthless empire of iron and gold.",
      gradient: POSTER_GRADIENTS[1]
    },
    {
      id: "mov-kn-2",
      title: "Kantara: Forest of Echoes",
      language: "KANNADA",
      genre: "Fantasy",
      format: "DOLBY ATMOS",
      durationMinutes: 150,
      releaseDate: "2026-08-21",
      censorCertificate: "UA",
      director: "Rishab Shetty",
      castMembers: "Rishab Shetty, Sapthami Gowda",
      imdbRating: 8.9,
      posterUrl: "assets/poster-fantasy.jpg",
      posterFilter: "hue-rotate(-24deg) saturate(1.22)",
      synopsis: "Deep inside the mist-veiled Western Ghats, ancient folklore awakens when modern ambition encroaches on a sacred grove.",
      gradient: POSTER_GRADIENTS[5]
    },
    {
      id: "mov-kn-3",
      title: "Bengaluru Cipher",
      language: "KANNADA",
      genre: "Thriller",
      format: "DOLBY ATMOS",
      durationMinutes: 136,
      releaseDate: "2026-08-10",
      censorCertificate: "UA",
      director: "Hemanth M. Rao",
      castMembers: "Rakshit Shetty, Rukmini Vasanth",
      imdbRating: 8.7,
      posterUrl: "assets/poster-heist.jpg",
      posterFilter: "hue-rotate(-18deg) saturate(1.18)",
      synopsis: "A chess prodigy turned cybersecurity analyst races through rain-lit Bengaluru streets to stop an autonomous fintech heist.",
      gradient: POSTER_GRADIENTS[2]
    },
    {
      id: "mov-kn-4",
      title: "Mysuru Twilight",
      language: "KANNADA",
      genre: "Romance",
      format: "2D",
      durationMinutes: 133,
      releaseDate: "2026-08-18",
      censorCertificate: "U",
      director: "Pawan Kumar",
      castMembers: "Ganesh, Ashika Ranganath",
      imdbRating: 8.4,
      posterUrl: "assets/poster-romance.jpg",
      posterFilter: "saturate(1.25) brightness(1.03)",
      synopsis: "Under the golden lamps of Dasara season, a restoration painter and a heritage archivist fall in love over an unfinished mural.",
      gradient: POSTER_GRADIENTS[4]
    },
    {
      id: "mov-kn-5",
      title: "Nakshatra Orbit",
      language: "KANNADA",
      genre: "Sci-Fi",
      format: "IMAX 3D",
      durationMinutes: 142,
      releaseDate: "2026-08-27",
      censorCertificate: "U",
      director: "Upendra",
      castMembers: "Sudeep, Shiva Rajkumar",
      imdbRating: 8.6,
      posterUrl: "assets/quantum-horizon.jpg",
      posterFilter: "hue-rotate(72deg) saturate(1.15)",
      synopsis: "When Bengaluru's deep-space control room picks up a mirror signal from 2096, engineers must decode their own future.",
      gradient: POSTER_GRADIENTS[0]
    },
    {
      id: "mov-kn-6",
      title: "Malnad Roadtrip",
      language: "KANNADA",
      genre: "Comedy",
      format: "2D",
      durationMinutes: 125,
      releaseDate: "2026-08-05",
      censorCertificate: "U",
      director: "Raj B. Shetty",
      castMembers: "Raj B. Shetty, Diganth, Shine Shetty",
      imdbRating: 8.3,
      posterUrl: "assets/midnight-signal.jpg",
      posterFilter: "hue-rotate(115deg) brightness(1.08)",
      synopsis: "Four childhood friends set off on a monsoon coffee-estate road trip in a stubborn vintage jeep that refuses to turn left.",
      gradient: POSTER_GRADIENTS[3]
    }
  ];

  const HERO_SLIDES = [
    {
      tag: "NOW SHOWING • IMAX 3D & DOLBY ATMOS",
      title: "Quantum Horizon",
      subtitle: "An orbital research crew discovers a temporal rift above Europa and races against collapsing timelines to bring Earth home.",
      bg: "assets/quantum-horizon.jpg",
      ctaLabel: "🎟️ Book Quantum Horizon",
      actionType: "movie",
      targetId: "mov-en-1"
    },
    {
      tag: "EPIC SAGA • TELUGU & PAN-INDIA IMAX",
      title: "Deccan Chronicles",
      subtitle: "An epic saga spanning three generations of master architects and fearless rebels defending an unconquered fortress city.",
      bg: "assets/deccan-chronicles.jpg",
      ctaLabel: "👑 Book Deccan Chronicles",
      actionType: "movie",
      targetId: "mov-te-1"
    },
    {
      tag: "BLOCKBUSTER • HINDI & PAN-INDIA IMAX",
      title: "Agni Protocol",
      subtitle: "High-altitude espionage action starring Hrithik Roshan, Deepika Padukone & Vijay Sethupathi — experience it in Dolby Atmos.",
      bg: "assets/agni-protocol.jpg",
      ctaLabel: "🔥 Book Agni Protocol",
      actionType: "movie",
      targetId: "mov-hi-1"
    }
  ];

  const DEFAULT_DATA = {
    session: null,
    users: [
      {
        id: "usr-admin-1",
        fullName: "BMS Admin",
        email: "admin@bms-august.in",
        mobileNumber: "9876543210",
        passwordHash: btoa("Admin@123"),
        role: "INTERNAL_ADMIN",
        createdAt: "2026-08-01T10:00:00Z"
      }
    ],
    companies: [
      {
        id: "comp-1",
        companyName: "PVR INOX Cinemas",
        companyType: "THEATER_COMPANY",
        legalName: "PVR INOX Limited",
        registrationNumber: "CIN-L74899MH1995",
        gstNumber: "27AAACP1234A1Z9",
        email: "partners@pvrinox.in",
        city: "Mumbai"
      },
      {
        id: "comp-2",
        companyName: "Cinepolis India",
        companyType: "THEATER_COMPANY",
        legalName: "Cinepolis India Pvt. Ltd.",
        registrationNumber: "CIN-U92199DL2007",
        gstNumber: "07AABCC8899B1Z2",
        email: "ops@cinepolis.in",
        city: "Bengaluru"
      },
      {
        id: "comp-3",
        companyName: "BookMyShow Live",
        companyType: "EVENT_COMPANY",
        legalName: "Bigtree Entertainment Live Pvt. Ltd.",
        registrationNumber: "CIN-U74999MH2018",
        gstNumber: "27AABCB9988K1Z4",
        email: "live@bms-august.in",
        city: "Mumbai"
      }
    ],
    movies: SEED_MOVIES,
    liveEvents: [
      {
        id: "ev-1",
        experienceCode: "BE-001",
        title: "Starlight Arena Music Festival",
        eventType: "CONCERT",
        organizerCompany: "BookMyShow Live",
        venueName: "DY Patil Stadium",
        city: "Mumbai",
        artistNames: "Arijit Singh, Prateek Kuhad, Nucleya",
        startTime: "2026-08-22T19:00",
        language: "Hindi / English",
        minimumAge: 12,
        status: "PUBLISHED",
        posterUrl: "assets/event-concert.jpg",
        description: "An electrifying open-air arena concert with 360-degree laser visuals, orchestral live sets, and festival food zones.",
        mappings: [
          { id: "map-1a", mappingName: "General Admission", basePrice: 1299, capacity: 320 },
          { id: "map-1b", mappingName: "Fan Pit Standing", basePrice: 2499, capacity: 120 },
          { id: "map-1c", mappingName: "VIP Sky Lounge", basePrice: 4999, capacity: 45 }
        ]
      },
      {
        id: "ev-2",
        experienceCode: "BE-002",
        title: "Late Night Laughs: Unfiltered",
        eventType: "COMEDY",
        organizerCompany: "BookMyShow Live",
        venueName: "Good Shepherd Auditorium",
        city: "Bengaluru",
        artistNames: "Zakir Khan, Biswa Kalyan Rath, Urooj Ashfaq",
        startTime: "2026-08-16T20:30",
        language: "Hindi / English",
        minimumAge: 18,
        status: "PUBLISHED",
        posterUrl: "assets/event-comedy.jpg",
        description: "Ninety minutes of brand-new observational stand-up comedy, crowd work, and surprise guest sets.",
        mappings: [
          { id: "map-2a", mappingName: "Balcony Seating", basePrice: 699, capacity: 180 },
          { id: "map-2b", mappingName: "Front Row Gold", basePrice: 1499, capacity: 60 }
        ]
      },
      {
        id: "ev-3",
        experienceCode: "BE-003",
        title: "Pro T20 Floodlight Clash",
        eventType: "SPORTS",
        organizerCompany: "BookMyShow Live",
        venueName: "Rajiv Gandhi International Stadium",
        city: "Hyderabad",
        artistNames: "Deccan Chargers XI vs Mumbai Strikers",
        startTime: "2026-08-29T19:30",
        language: "Live Stadium",
        minimumAge: 5,
        status: "PUBLISHED",
        posterUrl: "assets/event-sports.jpg",
        description: "High-voltage floodlight T20 cricket showdown featuring pre-match fireworks, live DJ stands, and fan zones.",
        mappings: [
          { id: "map-3a", mappingName: "East Stand", basePrice: 850, capacity: 500 },
          { id: "map-3b", mappingName: "Pavilion Premium", basePrice: 2200, capacity: 140 },
          { id: "map-3c", mappingName: "Corporate Hospitality Box", basePrice: 5500, capacity: 30 }
        ]
      },
      {
        id: "ev-4",
        experienceCode: "BE-004",
        title: "The Royal Broadway Gala",
        eventType: "THEATRE",
        organizerCompany: "BookMyShow Live",
        venueName: "Nita Mukesh Ambani Cultural Centre",
        city: "Mumbai",
        artistNames: "National Repertory Ensemble",
        startTime: "2026-08-25T18:30",
        language: "English",
        minimumAge: 8,
        status: "PUBLISHED",
        posterUrl: "assets/hero-banner.jpg",
        description: "A grand musical theatre production blending live symphony, dramatic choreography, and period costumes.",
        mappings: [
          { id: "map-4a", mappingName: "Mezzanine", basePrice: 1100, capacity: 150 },
          { id: "map-4b", mappingName: "Grand Orchestra", basePrice: 2800, capacity: 70 }
        ]
      }
    ],
    theatres: [
      {
        id: "th-1",
        theaterName: "PVR ICON: Phoenix Palladium",
        city: "Mumbai",
        state: "Maharashtra",
        addressLine1: "Lower Parel, Senapati Bapat Marg",
        openingTime: "09:00",
        closingTime: "23:59",
        imaxSupported: true,
        dolbyAtmosSupported: true,
        parkingAvailable: true,
        foodCourtAvailable: true,
        wheelchairAccessible: true
      },
      {
        id: "th-2",
        theaterName: "Cinepolis: Nexus Koramangala",
        city: "Bengaluru",
        state: "Karnataka",
        addressLine1: "Hosur Road, Koramangala",
        openingTime: "09:30",
        closingTime: "23:45",
        imaxSupported: true,
        dolbyAtmosSupported: true,
        parkingAvailable: true,
        foodCourtAvailable: true,
        wheelchairAccessible: true
      },
      {
        id: "th-3",
        theaterName: "AMB Cinemas: Gachibowli",
        city: "Hyderabad",
        state: "Telangana",
        addressLine1: "Sarath City Capital Mall",
        openingTime: "08:45",
        closingTime: "23:55",
        imaxSupported: false,
        dolbyAtmosSupported: true,
        parkingAvailable: true,
        foodCourtAvailable: true,
        wheelchairAccessible: true
      },
      {
        id: "th-4",
        theaterName: "PVR Director's Cut: Ambience",
        city: "Delhi",
        state: "Delhi NCR",
        addressLine1: "Vasant Kunj",
        openingTime: "10:00",
        closingTime: "23:59",
        imaxSupported: true,
        dolbyAtmosSupported: true,
        parkingAvailable: true,
        foodCourtAvailable: false,
        wheelchairAccessible: true
      }
    ],
    halls: [
      {
        id: "hall-1",
        theaterId: "th-1",
        hallName: "Audi 1 - IMAX Laser",
        hallType: "IMAX",
        floorNumber: 3,
        rows: ["A", "B", "C", "D", "E", "F"],
        seatsPerRow: 10,
        seatBreak: 5,
        reclinerSeatsAvailable: true,
        threeDSupported: true
      },
      {
        id: "hall-2",
        theaterId: "th-2",
        hallName: "Audi 2 - Dolby Atmos",
        hallType: "DOLBY",
        floorNumber: 2,
        rows: ["A", "B", "C", "D", "E"],
        seatsPerRow: 8,
        seatBreak: 4,
        reclinerSeatsAvailable: true,
        threeDSupported: false
      },
      {
        id: "hall-3",
        theaterId: "th-3",
        hallName: "Screen 4 - Gold Class",
        hallType: "GOLD_CLASS",
        floorNumber: 4,
        rows: ["A", "B", "C", "D"],
        seatsPerRow: 8,
        seatBreak: 4,
        reclinerSeatsAvailable: true,
        threeDSupported: true
      }
    ],
    roles: [
      { id: "role-1", roleName: "SUPER_ADMIN", operations: ["CREATE_THEATRE", "CREATE_HALL", "CREATE_MOVIE", "CREATE_ROLE", "INVITE_EMPLOYEE"] },
      { id: "role-2", roleName: "THEATRE_MANAGER", operations: ["CREATE_THEATRE", "CREATE_HALL", "INVITE_EMPLOYEE"] }
    ],
    employees: [
      { id: "emp-1", fullName: "Somendra Tiwari", email: "somendra@bms-august.in", designation: "Platform Admin", department: "Engineering", roleName: "SUPER_ADMIN" }
    ],
    bookings: [],
    occupiedSeats: {
      "mov-en-1|hall-1|10:30 AM": ["B4", "B5", "C6", "D5"],
      "mov-hi-1|hall-1|06:45 PM": ["A1", "A2", "C3", "C4", "C5"]
    }
  };

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!Array.isArray(parsed.users) || !parsed.users.length) {
          parsed.users = structuredClone(DEFAULT_DATA.users);
        }
        return parsed;
      }
      // Carry forward any previous user bookings when upgrading from v1 -> v2
      const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
      if (legacy) {
        const prev = JSON.parse(legacy);
        const fresh = structuredClone(DEFAULT_DATA);
        if (Array.isArray(prev.bookings)) fresh.bookings = prev.bookings;
        return fresh;
      }
    } catch (_) {}
    return structuredClone(DEFAULT_DATA);
  }

  let state = loadState();
  const ui = {
    search: "",
    city: "ALL",
    lang: "ALL",
    genre: "ALL",
    sort: "rating",
    eventType: "ALL",
    heroIndex: 0,
    bookingMovieId: null,
    bookingHallId: null,
    bookingTime: "10:30 AM",
    selectedSeats: new Set(),
    bookingEventId: null,
    selectedTierId: null
  };

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function toast(msg) {
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = msg;
    document.getElementById("toastContainer").appendChild(el);
    setTimeout(() => el.remove(), 3200);
  }

  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Hero Spotlight Carousel
  function renderHeroSlide() {
    const slide = HERO_SLIDES[ui.heroIndex % HERO_SLIDES.length];
    const banner = document.getElementById("heroBanner");
    if (!banner || !slide) return;

    banner.style.backgroundImage = `linear-gradient(95deg, rgba(11, 14, 23, 0.95) 0%, rgba(15, 19, 34, 0.78) 54%, rgba(20, 14, 38, 0.45) 100%), url("${slide.bg}")`;
    document.getElementById("heroTag").textContent = slide.tag;
    document.getElementById("heroTitle").textContent = slide.title;
    document.getElementById("heroSubtitle").textContent = slide.subtitle;
    document.getElementById("heroBookBtn").textContent = slide.ctaLabel;

    const dots = document.getElementById("heroDots");
    dots.innerHTML = HERO_SLIDES.map((_, idx) =>
      `<button class="slider-dot ${idx === ui.heroIndex ? "active" : ""}" data-slide="${idx}" aria-label="Slide ${idx + 1}"></button>`
    ).join("");
  }

  let heroTimer = setInterval(() => {
    ui.heroIndex = (ui.heroIndex + 1) % HERO_SLIDES.length;
    renderHeroSlide();
  }, 6000);

  function resetHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => {
      ui.heroIndex = (ui.heroIndex + 1) % HERO_SLIDES.length;
      renderHeroSlide();
    }, 6000);
  }

  // Navigation
  function switchView(viewName) {
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    const target = document.getElementById(`view-${viewName}`);
    if (target) target.classList.add("active");

    document.querySelectorAll(".nav-tab").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.view === viewName);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function switchAdminTab(tabName) {
    document.querySelectorAll(".admin-tab").forEach(t => t.classList.toggle("active", t.dataset.adminTab === tabName));
    document.querySelectorAll(".admin-pane").forEach(p => p.classList.toggle("active", p.id === `pane-${tabName}`));
  }

  // Renderers
  function renderStats() {
    document.getElementById("statMovies").textContent = state.movies.length;
    document.getElementById("statTheatres").textContent = state.theatres.length;
    document.getElementById("statHalls").textContent = state.halls.length;
    document.getElementById("statBookings").textContent = state.bookings.length;
    document.getElementById("ticketCount").textContent = state.bookings.length;

    // Update live per-language count badges on Language chips
    const langs = ["ALL", "ENGLISH", "HINDI", "TELUGU", "TAMIL", "KANNADA"];
    const labels = { ALL: "All", ENGLISH: "English", HINDI: "Hindi", TELUGU: "Telugu", TAMIL: "Tamil", KANNADA: "Kannada" };
    document.querySelectorAll("#langChips .chip").forEach(chip => {
      const lang = chip.dataset.lang;
      if (!langs.includes(lang)) return;
      const count = lang === "ALL" ? state.movies.length : state.movies.filter(m => m.language === lang).length;
      chip.innerHTML = `${labels[lang]} <span class="chip-num">(${count})</span>`;
    });

    const authNavActions = document.getElementById("authNavActions");
    const sessionStatus = document.getElementById("sessionStatus");
    if (state.session) {
      const initials = (state.session.fullName || state.session.email || "U")
        .split(/\s+/)
        .map(w => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
      authNavActions.innerHTML = `
        <span class="user-chip" title="${escapeHtml(state.session.email)}">
          <span class="user-avatar">${escapeHtml(initials)}</span>
          ${escapeHtml(state.session.fullName || state.session.email)}
        </span>
        <button class="btn btn-ghost btn-sm" id="logoutBtn">Logout</button>
      `;
      sessionStatus.textContent = `Authenticated: ${state.session.fullName} (${state.session.email}) • Token Active`;
    } else {
      authNavActions.innerHTML = `
        <button class="btn btn-ghost btn-sm" id="openRegisterBtn">Register</button>
        <button class="btn btn-primary btn-sm" id="authBtn">Sign In</button>
      `;
      sessionStatus.textContent = "Not Signed In (Guest Mode)";
    }
  }

  function renderMovies() {
    const grid = document.getElementById("movieGrid");
    const q = ui.search.toLowerCase();

    let filtered = state.movies.filter(m => {
      const matchLang = ui.lang === "ALL" || m.language === ui.lang;
      const matchGenre = ui.genre === "ALL" || m.genre.toLowerCase().includes(ui.genre.toLowerCase());
      const matchSearch = !q ||
        m.title.toLowerCase().includes(q) ||
        m.genre.toLowerCase().includes(q) ||
        m.language.toLowerCase().includes(q) ||
        (m.director || "").toLowerCase().includes(q) ||
        (m.castMembers || "").toLowerCase().includes(q);
      return matchLang && matchGenre && matchSearch;
    });

    if (ui.sort === "rating") filtered.sort((a, b) => (b.imdbRating || 0) - (a.imdbRating || 0));
    else if (ui.sort === "newest") filtered.sort((a, b) => String(b.releaseDate || "").localeCompare(String(a.releaseDate || "")));
    else if (ui.sort === "title") filtered.sort((a, b) => a.title.localeCompare(b.title));

    document.getElementById("movieResultCount").textContent = `Showing ${filtered.length} of ${state.movies.length} movies`;

    if (!filtered.length) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">No movies match your current filters.</div>`;
      return;
    }

    grid.innerHTML = filtered.map(m => `
      <article class="movie-card">
        <div class="movie-poster" style="background:${m.gradient || POSTER_GRADIENTS[0]}">
          ${m.posterUrl ? `<img class="movie-poster-img" src="${escapeHtml(m.posterUrl)}" alt="${escapeHtml(m.title)} poster" style="filter:${escapeHtml(m.posterFilter || "none")}" loading="lazy" onerror="this.style.display='none'" />` : ""}
          <div class="poster-top">
            <span class="badge">${escapeHtml(m.censorCertificate || "UA")} • ${escapeHtml(m.language)}</span>
            <span class="rating-badge">★ ${escapeHtml(m.imdbRating || "8.0")}</span>
          </div>
          <div class="poster-bottom">
            ${m.format ? `<span class="format-pill">${escapeHtml(m.format)}</span>` : ""}
            <div class="poster-title-art">${escapeHtml(m.title)}</div>
            <div class="poster-sub">${escapeHtml(m.director ? `Dir. ${m.director}` : m.genre)}</div>
          </div>
        </div>
        <div class="movie-body">
          <div class="movie-meta">${escapeHtml(m.genre)} • ${m.durationMinutes} min • ${escapeHtml(m.releaseDate || "")}</div>
          <p class="movie-synopsis">${escapeHtml(m.synopsis || "Now playing across premium IMAX & Dolby Atmos screens.")}</p>
          <button class="btn btn-primary full-width" data-book-movie="${m.id}">Book Tickets</button>
        </div>
      </article>
    `).join("");
  }

  function eventCardHtml(ev) {
    const minPrice = Math.min(...(ev.mappings || []).map(m => Number(m.basePrice) || 999));
    const dt = ev.startTime ? ev.startTime.replace("T", " • ") : "";
    return `
      <article class="event-card">
        <div class="event-cover" style="background:${POSTER_GRADIENTS[0]}">
          <img class="event-cover-img" src="${escapeHtml(ev.posterUrl || "assets/hero-banner.jpg")}" alt="${escapeHtml(ev.title)}" loading="lazy" onerror="this.style.display='none'" />
          <div class="poster-top">
            <span class="badge">${escapeHtml(ev.eventType)} • ${escapeHtml(ev.experienceCode || "BE")}</span>
            <span class="rating-badge">${ev.minimumAge ? `${ev.minimumAge}+` : "All Ages"}</span>
          </div>
          <div class="poster-bottom">
            <div class="poster-title-art">${escapeHtml(ev.title)}</div>
            <div class="poster-sub">🎤 ${escapeHtml(ev.artistNames)}</div>
          </div>
        </div>
        <div class="event-body">
          <div class="movie-meta">📍 ${escapeHtml(ev.venueName)}, ${escapeHtml(ev.city)}</div>
          <div class="movie-meta">🗓️ ${escapeHtml(dt)} • ${escapeHtml(ev.language || "Live")}</div>
          <p class="movie-synopsis">${escapeHtml(ev.description || "")}</p>
          <div class="event-price-row">
            <div><span class="muted small">Starts at</span><div class="price">₹${minPrice}</div></div>
            <button class="btn btn-primary btn-sm" data-book-event="${ev.id}">Book Passes</button>
          </div>
        </div>
      </article>
    `;
  }

  function renderEvents() {
    const grid = document.getElementById("eventGrid");
    const homeStrip = document.getElementById("homeEventPreview");
    const q = ui.search.toLowerCase();

    if (homeStrip) {
      homeStrip.innerHTML = (state.liveEvents || []).slice(0, 4).map(eventCardHtml).join("");
    }
    if (!grid) return;

    const filtered = (state.liveEvents || []).filter(ev => {
      const matchType = ui.eventType === "ALL" || ev.eventType === ui.eventType;
      const matchCity = ui.city === "ALL" || ev.city.toLowerCase() === ui.city.toLowerCase();
      const matchSearch = !q ||
        ev.title.toLowerCase().includes(q) ||
        ev.eventType.toLowerCase().includes(q) ||
        ev.venueName.toLowerCase().includes(q) ||
        ev.artistNames.toLowerCase().includes(q) ||
        ev.city.toLowerCase().includes(q);
      return matchType && matchCity && matchSearch;
    });

    document.getElementById("eventResultCount").textContent = `${filtered.length} live event${filtered.length === 1 ? "" : "s"}`;

    if (!filtered.length) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">No live events match your current filters.</div>`;
      return;
    }

    grid.innerHTML = filtered.map(eventCardHtml).join("");
  }

  function renderTheatres() {
    const grid = document.getElementById("theatreGrid");
    const q = ui.search.toLowerCase();

    const filtered = state.theatres.filter(t => {
      const matchCity = ui.city === "ALL" || t.city.toLowerCase() === ui.city.toLowerCase();
      const matchSearch = !q || t.theaterName.toLowerCase().includes(q) || t.city.toLowerCase().includes(q);
      return matchCity && matchSearch;
    });

    if (!filtered.length) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">No theatres found for this filter.</div>`;
      return;
    }

    grid.innerHTML = filtered.map(t => {
      const halls = state.halls.filter(h => h.theaterId === t.id);
      const amenities = [
        t.imaxSupported && "IMAX",
        t.dolbyAtmosSupported && "Dolby Atmos",
        t.parkingAvailable && "Parking",
        t.foodCourtAvailable && "Food Court",
        t.wheelchairAccessible && "Wheelchair Access"
      ].filter(Boolean);

      return `
        <article class="theatre-card">
          <div class="theatre-banner" style="background-image:url('assets/hero-banner.jpg')">
            <div class="theatre-banner-text">
              <h3>${escapeHtml(t.theaterName)}</h3>
              <p class="muted small">${escapeHtml(t.addressLine1 || "")}${t.addressLine1 ? ", " : ""}${escapeHtml(t.city)} • ${escapeHtml(t.openingTime)}–${escapeHtml(t.closingTime)}</p>
            </div>
          </div>
          <div class="tag-list">
            ${amenities.map(a => `<span class="tag">${a}</span>`).join("")}
          </div>
          <div class="hall-mini-list">
            ${halls.length ? halls.map(h => `
              <div class="hall-row">
                <span><strong>${escapeHtml(h.hallName)}</strong> (${escapeHtml(h.hallType)})</span>
                <span class="muted">${h.rows.length * h.seatsPerRow} seats</span>
              </div>
            `).join("") : `<span class="muted small">No halls configured yet.</span>`}
          </div>
        </article>
      `;
    }).join("");
  }

  function renderBookings() {
    const list = document.getElementById("bookingsList");
    if (!state.bookings.length) {
      list.innerHTML = `
        <div class="empty-state" style="grid-column:1/-1">
          <h3>No tickets booked yet</h3>
          <p class="small" style="margin:8px 0 16px">Pick any movie or live event to book seats and passes instantly.</p>
          <button class="btn btn-primary" data-jump="discover">Browse Movies</button>
        </div>`;
      return;
    }

    list.innerHTML = state.bookings.slice().reverse().map(b => `
      <article class="ticket-card">
        <div class="ticket-top">
          <div>
            <h3>${escapeHtml(b.movieTitle)}</h3>
            <p class="muted small">${escapeHtml(b.theatreName)} — ${escapeHtml(b.hallName)}</p>
          </div>
          <span class="ticket-code">${escapeHtml(b.bookingCode)}</span>
        </div>
        <div class="ticket-divider"></div>
        <div class="small">📅 ${escapeHtml(b.date)} &nbsp;•&nbsp; 🕒 ${escapeHtml(b.time)}</div>
        <div class="small">🎟️ Entry: <strong>${b.seats.join(", ")}</strong></div>
        <div class="small">Total Paid: <strong class="price">₹${b.total}</strong></div>
        <div class="ticket-barcode" aria-hidden="true"></div>
      </article>
    `).join("");
  }

  function renderAdminLists() {
    const hallTheatreSelect = document.getElementById("hallTheatreSelect");
    hallTheatreSelect.innerHTML = state.theatres
      .map(t => `<option value="${t.id}">${escapeHtml(t.theaterName)} (${escapeHtml(t.city)})</option>`)
      .join("");

    const evCompSelect = document.getElementById("eventCompanySelect");
    if (evCompSelect) {
      evCompSelect.innerHTML = state.companies
        .map(c => `<option value="${escapeHtml(c.companyName)}">${escapeHtml(c.companyName)} (${escapeHtml(c.companyType || "PARTNER")})</option>`)
        .join("");
    }

    const empRoleSelect = document.getElementById("employeeRoleSelect");
    empRoleSelect.innerHTML = state.roles
      .map(r => `<option value="${escapeHtml(r.roleName)}">${escapeHtml(r.roleName)}</option>`)
      .join("");

    document.getElementById("companyList").innerHTML = state.companies.map(c => `
      <div class="list-item">
        <div><strong>${escapeHtml(c.companyName)}</strong> <span class="tag">${escapeHtml(c.companyType || "THEATER_COMPANY")}</span><div class="muted small">${escapeHtml(c.legalName)} • ${escapeHtml(c.city || "India")}</div></div>
        <span class="tag">${escapeHtml(c.gstNumber || c.email)}</span>
      </div>
    `).join("");

    document.getElementById("roleList").innerHTML = state.roles.map(r => `
      <div class="list-item">
        <strong>${escapeHtml(r.roleName)}</strong>
        <div class="tag-list">${r.operations.map(op => `<span class="tag">${escapeHtml(op)}</span>`).join("")}</div>
      </div>
    `).join("");

    document.getElementById("employeeList").innerHTML = state.employees.map(e => `
      <div class="list-item">
        <div><strong>${escapeHtml(e.fullName)}</strong><div class="muted small">${escapeHtml(e.designation)} • ${escapeHtml(e.email)}</div></div>
        <span class="tag">${escapeHtml(e.roleName)}</span>
      </div>
    `).join("");

    const regList = document.getElementById("registeredUsersList");
    if (regList) {
      regList.innerHTML = (state.users || []).slice().reverse().map(u => `
        <div class="list-item">
          <div>
            <strong>${escapeHtml(u.fullName)}</strong>
            <div class="muted small">${escapeHtml(u.email)} • 📱 ${escapeHtml(u.mobileNumber)}</div>
          </div>
          <span class="tag">${escapeHtml(u.role || "CUSTOMER")}</span>
        </div>
      `).join("");
    }

    renderHallPreview();
  }

  function renderHallPreview() {
    const rows = document.getElementById("hallRowsInput").value
      .split(",")
      .map(s => s.trim().toUpperCase())
      .filter(Boolean)
      .slice(0, 10);
    const seatsPerRow = Math.min(16, Math.max(4, Number(document.getElementById("hallSeatsInput").value) || 8));
    const seatBreak = Number(document.getElementById("hallBreakInput").value) || 0;

    const container = document.getElementById("hallPreviewGrid");
    container.innerHTML = rows.map((row, rIdx) => {
      const isRecliner = rIdx === rows.length - 1;
      let seatsHtml = "";
      for (let i = 1; i <= seatsPerRow; i++) {
        if (seatBreak > 0 && i === seatBreak + 1) seatsHtml += `<span class="seat-aisle"></span>`;
        seatsHtml += `<span class="seat preview-seat ${isRecliner ? "recliner" : ""}">${i}</span>`;
      }
      return `<div class="seat-row"><span class="row-label">${escapeHtml(row)}</span>${seatsHtml}</div>`;
    }).join("");
  }

  // Movie Booking Modal
  function openBookingModal(movieId) {
    const movie = state.movies.find(m => m.id === movieId) || state.movies[0];
    if (!movie) return;

    ui.bookingMovieId = movie.id;
    ui.selectedSeats.clear();
    ui.bookingTime = "10:30 AM";

    document.getElementById("modalMovieTitle").textContent = movie.title;
    document.getElementById("modalMovieMeta").textContent = `${movie.language} • ${movie.genre} • ${movie.durationMinutes} min • ★ ${movie.imdbRating}`;
    const posterEl = document.getElementById("modalMoviePoster");
    if (posterEl) {
      posterEl.src = movie.posterUrl || "assets/hero-banner.jpg";
      posterEl.alt = `${movie.title} poster`;
      posterEl.style.filter = movie.posterFilter || "none";
    }

    const hallSelect = document.getElementById("bookingHallSelect");
    hallSelect.innerHTML = state.halls.map(h => {
      const th = state.theatres.find(t => t.id === h.theaterId);
      return `<option value="${h.id}">${escapeHtml(th ? th.theaterName : "Theatre")} — ${escapeHtml(h.hallName)} (${escapeHtml(th ? th.city : "")})</option>`;
    }).join("");

    ui.bookingHallId = state.halls[0]?.id || null;

    const dateInput = document.getElementById("bookingDate");
    if (!dateInput.value) dateInput.value = new Date().toISOString().split("T")[0];

    document.querySelectorAll("#showtimeChips .chip").forEach(c => {
      c.classList.toggle("active", c.dataset.time === ui.bookingTime);
    });

    renderSeatMap();
    document.getElementById("bookingModal").classList.add("open");
  }

  function closeBookingModal() {
    document.getElementById("bookingModal").classList.remove("open");
  }

  function getSeatPrice(hall, rowIndex) {
    return hall.reclinerSeatsAvailable && rowIndex === hall.rows.length - 1 ? 450 : 280;
  }

  function renderSeatMap() {
    const hall = state.halls.find(h => h.id === ui.bookingHallId);
    const container = document.getElementById("seatMapContainer");
    if (!hall) {
      container.innerHTML = `<p class="muted">No halls available.</p>`;
      return;
    }

    const showKey = `${ui.bookingMovieId}|${hall.id}|${ui.bookingTime}`;
    const occupied = new Set(state.occupiedSeats[showKey] || []);

    container.innerHTML = hall.rows.map((row, rIdx) => {
      const isRecliner = hall.reclinerSeatsAvailable && rIdx === hall.rows.length - 1;
      let html = "";
      for (let i = 1; i <= hall.seatsPerRow; i++) {
        if (hall.seatBreak > 0 && i === hall.seatBreak + 1) html += `<span class="seat-aisle"></span>`;
        const seatId = `${row}${i}`;
        const isBooked = occupied.has(seatId);
        const isSelected = ui.selectedSeats.has(seatId);
        const classes = ["seat", isRecliner ? "recliner" : "", isBooked ? "booked" : "", isSelected ? "selected" : ""].join(" ");
        html += `<button type="button" class="${classes}" data-seat="${seatId}" data-row-idx="${rIdx}" ${isBooked ? "disabled" : ""}>${i}</button>`;
      }
      return `<div class="seat-row"><span class="row-label">${escapeHtml(row)}</span>${html}</div>`;
    }).join("");

    updateBookingSummary(hall);
  }

  function updateBookingSummary(hall) {
    const seats = Array.from(ui.selectedSeats).sort();
    let total = 0;
    seats.forEach(s => {
      const rowLetter = s.match(/^[A-Z]+/)[0];
      total += getSeatPrice(hall, hall.rows.indexOf(rowLetter));
    });

    document.getElementById("selectedSeatsText").textContent = seats.length ? seats.join(", ") : "None";
    document.getElementById("totalPriceText").textContent = `₹${total}`;
    document.getElementById("confirmBookingBtn").disabled = seats.length === 0;
  }

  function confirmBooking() {
    const movie = state.movies.find(m => m.id === ui.bookingMovieId);
    const hall = state.halls.find(h => h.id === ui.bookingHallId);
    const theatre = state.theatres.find(t => t.id === hall?.theaterId);
    const seats = Array.from(ui.selectedSeats).sort();
    if (!movie || !hall || !seats.length) return;

    let total = 0;
    seats.forEach(s => {
      const rowLetter = s.match(/^[A-Z]+/)[0];
      total += getSeatPrice(hall, hall.rows.indexOf(rowLetter));
    });

    const showKey = `${movie.id}|${hall.id}|${ui.bookingTime}`;
    state.occupiedSeats[showKey] = [...(state.occupiedSeats[showKey] || []), ...seats];

    const booking = {
      id: `bk-${Date.now()}`,
      bookingCode: `BMS-${Math.random().toString(36).slice(2, 7).toUpperCase()}`,
      movieTitle: movie.title,
      theatreName: theatre ? theatre.theaterName : "BMS Theatre",
      hallName: hall.hallName,
      date: document.getElementById("bookingDate").value,
      time: ui.bookingTime,
      seats,
      total
    };

    state.bookings.push(booking);
    saveState();
    closeBookingModal();
    renderAll();
    switchView("bookings");
    toast(`Booked ${seats.join(", ")} for ${movie.title} (${booking.bookingCode})`);
  }

  // Event Pass Booking Modal
  function openEventBookingModal(eventId) {
    const ev = (state.liveEvents || []).find(e => e.id === eventId);
    if (!ev) return;

    ui.bookingEventId = ev.id;
    ui.selectedTierId = ev.mappings[0]?.id || null;

    document.getElementById("eventModalPoster").src = ev.posterUrl || "assets/hero-banner.jpg";
    document.getElementById("eventModalTitle").textContent = ev.title;
    document.getElementById("eventModalMeta").textContent = `${ev.eventType} • ${ev.venueName}, ${ev.city} • ${ev.startTime.replace("T", " ")}`;
    document.getElementById("eventModalDesc").textContent = `${ev.description} Featuring: ${ev.artistNames}`;
    document.getElementById("eventOrganizerFooter").textContent = `Organized by ${ev.organizerCompany || "BookMyShow Live"} • ${ev.experienceCode}`;
    document.getElementById("eventPassQty").value = 2;

    renderEventTiers(ev);
    document.getElementById("eventBookingModal").classList.add("open");
  }

  function closeEventBookingModal() {
    document.getElementById("eventBookingModal").classList.remove("open");
  }

  function renderEventTiers(ev) {
    const list = document.getElementById("eventTierList");
    list.innerHTML = ev.mappings.map(tier => `
      <button type="button" class="tier-card ${tier.id === ui.selectedTierId ? "selected" : ""}" data-tier-id="${tier.id}">
        <strong>${escapeHtml(tier.mappingName)}</strong>
        <span class="tier-price">₹${tier.basePrice}</span>
        <span class="muted small">${tier.capacity} passes left</span>
      </button>
    `).join("");
    updateEventBookingSummary(ev);
  }

  function updateEventBookingSummary(ev) {
    const tier = ev.mappings.find(m => m.id === ui.selectedTierId) || ev.mappings[0];
    const qty = Math.min(10, Math.max(1, Number(document.getElementById("eventPassQty").value) || 1));
    const total = tier ? tier.basePrice * qty : 0;
    document.getElementById("selectedTierText").textContent = tier ? `${tier.mappingName} × ${qty}` : "None";
    document.getElementById("eventTotalPriceText").textContent = `₹${total}`;
    document.getElementById("confirmEventBookingBtn").disabled = !tier || tier.capacity < qty;
  }

  function confirmEventBooking() {
    const ev = (state.liveEvents || []).find(e => e.id === ui.bookingEventId);
    if (!ev) return;
    const tier = ev.mappings.find(m => m.id === ui.selectedTierId);
    const qty = Math.min(10, Math.max(1, Number(document.getElementById("eventPassQty").value) || 1));
    if (!tier || tier.capacity < qty) return;

    tier.capacity -= qty;
    const total = tier.basePrice * qty;
    const [datePart, timePart] = (ev.startTime || "2026-08-22T19:00").split("T");

    const booking = {
      id: `bk-${Date.now()}`,
      bookingCode: `EVT-${Math.random().toString(36).slice(2, 7).toUpperCase()}`,
      movieTitle: `${ev.title} (${ev.eventType})`,
      theatreName: `${ev.venueName}, ${ev.city}`,
      hallName: `${tier.mappingName} Pass`,
      date: datePart,
      time: timePart || "19:00",
      seats: [`${qty} × ${tier.mappingName}`],
      total
    };

    state.bookings.push(booking);
    saveState();
    closeEventBookingModal();
    renderAll();
    switchView("bookings");
    toast(`Booked ${qty} ${tier.mappingName} pass(es) for ${ev.title} (${booking.bookingCode})`);
  }

  function renderAll() {
    renderHeroSlide();
    renderStats();
    renderMovies();
    renderTheatres();
    renderBookings();
    renderAdminLists();
  }

  // Event Listeners
  document.querySelectorAll(".nav-tab").forEach(btn => {
    btn.addEventListener("click", () => switchView(btn.dataset.view));
  });

  document.getElementById("brandHome").addEventListener("click", () => switchView("discover"));

  document.getElementById("heroPrev").addEventListener("click", () => {
    ui.heroIndex = (ui.heroIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    renderHeroSlide();
    resetHeroTimer();
  });

  document.getElementById("heroNext").addEventListener("click", () => {
    ui.heroIndex = (ui.heroIndex + 1) % HERO_SLIDES.length;
    renderHeroSlide();
    resetHeroTimer();
  });

  document.getElementById("heroBookBtn").addEventListener("click", () => {
    const slide = HERO_SLIDES[ui.heroIndex % HERO_SLIDES.length];
    openBookingModal(slide.targetId);
  });

  document.body.addEventListener("click", (e) => {
    const dot = e.target.closest("[data-slide]");
    if (dot) {
      ui.heroIndex = Number(dot.dataset.slide);
      renderHeroSlide();
      resetHeroTimer();
      return;
    }

    const jump = e.target.closest("[data-jump]");
    if (jump) {
      const target = jump.dataset.jump;
      if (target === "admin-theatre") {
        switchView("admin");
        switchAdminTab("theatre");
      } else if (target === "admin-event") {
        switchView("admin");
        switchAdminTab("event");
      } else {
        switchView(target);
      }
      return;
    }

    const bookBtn = e.target.closest("[data-book-movie]");
    if (bookBtn) {
      openBookingModal(bookBtn.dataset.bookMovie);
      return;
    }

    const eventBookBtn = e.target.closest("[data-book-event]");
    if (eventBookBtn) {
      openEventBookingModal(eventBookBtn.dataset.bookEvent);
      return;
    }

    const tierBtn = e.target.closest("[data-tier-id]");
    if (tierBtn) {
      ui.selectedTierId = tierBtn.dataset.tierId;
      const ev = (state.liveEvents || []).find(item => item.id === ui.bookingEventId);
      if (ev) renderEventTiers(ev);
      return;
    }

    const seatBtn = e.target.closest("#seatMapContainer .seat:not(.booked)");
    if (seatBtn) {
      const seatId = seatBtn.dataset.seat;
      if (ui.selectedSeats.has(seatId)) ui.selectedSeats.delete(seatId);
      else ui.selectedSeats.add(seatId);
      renderSeatMap();
    }
  });

  document.getElementById("globalSearch").addEventListener("input", (e) => {
    ui.search = e.target.value.trim();
    renderMovies();
    renderTheatres();
  });

  document.getElementById("cityFilter").addEventListener("change", (e) => {
    ui.city = e.target.value;
    renderTheatres();
  });

  document.getElementById("movieSort").addEventListener("change", (e) => {
    ui.sort = e.target.value;
    renderMovies();
  });

  document.getElementById("langChips").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    ui.lang = chip.dataset.lang;
    document.querySelectorAll("#langChips .chip").forEach(c => c.classList.toggle("active", c === chip));
    renderMovies();
  });

  document.getElementById("genreChips").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    ui.genre = chip.dataset.genre;
    document.querySelectorAll("#genreChips .chip").forEach(c => c.classList.toggle("active", c === chip));
    renderMovies();
  });

  document.getElementById("closeBookingModal").addEventListener("click", closeBookingModal);
  document.getElementById("bookingHallSelect").addEventListener("change", (e) => {
    ui.bookingHallId = e.target.value;
    ui.selectedSeats.clear();
    renderSeatMap();
  });

  document.getElementById("showtimeChips").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    ui.bookingTime = chip.dataset.time;
    ui.selectedSeats.clear();
    document.querySelectorAll("#showtimeChips .chip").forEach(c => c.classList.toggle("active", c === chip));
    renderSeatMap();
  });

  document.getElementById("confirmBookingBtn").addEventListener("click", confirmBooking);

  document.getElementById("clearBookingsBtn").addEventListener("click", () => {
    state.bookings = [];
    saveState();
    renderAll();
    toast("Booking history cleared");
  });

  // Admin Tabs & Forms
  document.querySelectorAll(".admin-tab").forEach(btn => {
    btn.addEventListener("click", () => switchAdminTab(btn.dataset.adminTab));
  });

  ["hallRowsInput", "hallSeatsInput", "hallBreakInput"].forEach(id => {
    document.getElementById(id).addEventListener("input", renderHallPreview);
  });

  document.getElementById("movieForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const movie = {
      id: `mov-${Date.now()}`,
      title: fd.get("title"),
      language: fd.get("language"),
      genre: fd.get("genre"),
      format: "DOLBY ATMOS",
      durationMinutes: Number(fd.get("durationMinutes")) || 120,
      releaseDate: fd.get("releaseDate"),
      censorCertificate: fd.get("censorCertificate"),
      director: fd.get("director"),
      castMembers: fd.get("castMembers"),
      imdbRating: Number(fd.get("imdbRating")) || 8.0,
      posterUrl: String(fd.get("posterUrl") || "").trim() || "assets/hero-banner.jpg",
      posterFilter: "none",
      synopsis: fd.get("synopsis"),
      gradient: POSTER_GRADIENTS[state.movies.length % POSTER_GRADIENTS.length]
    };
    state.movies.unshift(movie);
    saveState();
    e.target.reset();
    renderAll();
    toast(`Movie "${movie.title}" published!`);
  });

  document.getElementById("theatreForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const theatre = {
      id: `th-${Date.now()}`,
      theaterName: fd.get("theaterName"),
      city: fd.get("city"),
      state: fd.get("state"),
      addressLine1: fd.get("addressLine1"),
      openingTime: fd.get("openingTime"),
      closingTime: fd.get("closingTime"),
      imaxSupported: fd.has("imaxSupported"),
      dolbyAtmosSupported: fd.has("dolbyAtmosSupported"),
      parkingAvailable: fd.has("parkingAvailable"),
      foodCourtAvailable: fd.has("foodCourtAvailable"),
      wheelchairAccessible: fd.has("wheelchairAccessible")
    };
    state.theatres.unshift(theatre);
    saveState();
    e.target.reset();
    renderAll();
    toast(`Theatre "${theatre.theaterName}" registered!`);
  });

  document.getElementById("hallForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const rows = String(fd.get("rows") || "A,B,C,D")
      .split(",")
      .map(s => s.trim().toUpperCase())
      .filter(Boolean);
    const hall = {
      id: `hall-${Date.now()}`,
      theaterId: fd.get("theaterId"),
      hallName: fd.get("hallName"),
      hallType: fd.get("hallType"),
      floorNumber: Number(fd.get("floorNumber")) || 1,
      rows: rows.length ? rows : ["A", "B", "C", "D"],
      seatsPerRow: Math.min(16, Math.max(4, Number(fd.get("seatsPerRow")) || 10)),
      seatBreak: Number(fd.get("seatBreak")) || 0,
      reclinerSeatsAvailable: fd.has("reclinerSeatsAvailable"),
      threeDSupported: fd.has("threeDSupported")
    };
    state.halls.push(hall);
    saveState();
    renderAll();
    toast(`Hall "${hall.hallName}" created (${hall.rows.length * hall.seatsPerRow} seats)!`);
  });

  document.getElementById("companyForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const company = {
      id: `comp-${Date.now()}`,
      companyName: fd.get("companyName"),
      companyType: fd.get("companyType"),
      legalName: fd.get("legalName"),
      registrationNumber: fd.get("registrationNumber"),
      gstNumber: fd.get("gstNumber"),
      email: fd.get("email"),
      city: fd.get("city")
    };
    state.companies.unshift(company);
    saveState();
    e.target.reset();
    renderAll();
    toast(`Company "${company.companyName}" registered!`);
  });

  document.getElementById("roleForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const role = {
      id: `role-${Date.now()}`,
      roleName: String(fd.get("roleName")).trim().toUpperCase(),
      operations: fd.getAll("ops")
    };
    state.roles.push(role);
    saveState();
    e.target.reset();
    renderAll();
    toast(`Role "${role.roleName}" created!`);
  });

  document.getElementById("employeeForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const emp = {
      id: `emp-${Date.now()}`,
      fullName: fd.get("fullName"),
      email: fd.get("email"),
      designation: fd.get("designation"),
      department: fd.get("department"),
      roleName: fd.get("roleName")
    };
    state.employees.unshift(emp);
    saveState();
    e.target.reset();
    renderAll();
    toast(`Invitation sent to ${emp.fullName}!`);
  });

  // ==================== STUDENT 1 (REGISTRATION) & STUDENT 2 (LOGIN & AUTH) ====================
  const authModal = document.getElementById("authModal");
  const authFeedback = document.getElementById("authFeedback");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  function clearAuthFeedback() {
    authFeedback.hidden = true;
    authFeedback.className = "form-alert";
    authFeedback.textContent = "";
    authModal.querySelectorAll(".field-error").forEach(el => (el.textContent = ""));
    authModal.querySelectorAll("input.input-invalid").forEach(el => el.classList.remove("input-invalid"));
  }

  function showAuthAlert(type, message) {
    authFeedback.hidden = false;
    authFeedback.className = `form-alert ${type}`;
    authFeedback.textContent = message;
  }

  function setFieldError(inputId, message) {
    const input = document.getElementById(inputId);
    const errEl = authModal.querySelector(`[data-err-for="${inputId}"]`);
    if (input) input.classList.toggle("input-invalid", Boolean(message));
    if (errEl) errEl.textContent = message || "";
  }

  function setAuthMode(mode) {
    clearAuthFeedback();
    const isReg = mode === "register";
    document.querySelectorAll(".auth-tab").forEach(t => t.classList.toggle("active", t.dataset.authMode === mode));
    loginForm.classList.toggle("active", !isReg);
    registerForm.classList.toggle("active", isReg);
    document.getElementById("authModalHeading").textContent = isReg ? "Create Your BMS Account" : "Welcome Back to BMS";
    document.getElementById("authModalSub").textContent = isReg
      ? "Register with your name, email, mobile number, and password."
      : "Sign in with your registered email and password.";
  }

  function openAuthModal(mode = "login") {
    setAuthMode(mode);
    authModal.classList.add("open");
  }

  function closeAuthModal() {
    authModal.classList.remove("open");
  }

  // Event delegation for dynamic navbar Sign In / Register / Logout buttons & modal switches
  document.body.addEventListener("click", (e) => {
    if (e.target.closest("#authBtn")) {
      openAuthModal("login");
      return;
    }
    if (e.target.closest("#openRegisterBtn")) {
      openAuthModal("register");
      return;
    }
    if (e.target.closest("#logoutBtn")) {
      const name = state.session?.fullName || "User";
      state.session = null;
      saveState();
      renderStats();
      toast(`Signed out (${name})`);
      return;
    }
    const modeTab = e.target.closest("[data-auth-mode]");
    if (modeTab) {
      setAuthMode(modeTab.dataset.authMode);
      return;
    }
    const switchBtn = e.target.closest("[data-switch-auth]");
    if (switchBtn) {
      setAuthMode(switchBtn.dataset.switchAuth);
      return;
    }
    const pwToggle = e.target.closest("[data-toggle-pw]");
    if (pwToggle) {
      const target = document.getElementById(pwToggle.dataset.togglePw);
      if (target) target.type = target.type === "password" ? "text" : "password";
    }
  });

  document.getElementById("closeAuthModal").addEventListener("click", closeAuthModal);

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const MOBILE_REGEX = /^[6-9]\d{9}$/;

  // Student 1: User Registration Form Submission
  //this taken from ai
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearAuthFeedback();

    const fullName = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim().toLowerCase();
    const rawMobile = document.getElementById("regMobile").value.replace(/[\s\-+]/g, "").replace(/^91(?=\d{10}$)/, "");
    const password = document.getElementById("regPassword").value;

    let hasError = false;

    if (!fullName || fullName.length < 2) {
      setFieldError("regName", "Please enter your full name (at least 2 characters).");
      hasError = true;
    }
    if (!email) {
      setFieldError("regEmail", "Email address is required.");
      hasError = true;
    } else if (!EMAIL_REGEX.test(email)) {
      setFieldError("regEmail", "Please enter a valid email address.");
      hasError = true;
    }
    if (!rawMobile) {
      setFieldError("regMobile", "Mobile number is required.");
      hasError = true;
    } else if (!MOBILE_REGEX.test(rawMobile)) {
      setFieldError("regMobile", "Enter a valid 10-digit Indian mobile number (starts with 6–9).");
      hasError = true;
    }
    if (!password) {
      setFieldError("regPassword", "Password is required.");
      hasError = true;
    } else if (password.length < 6) {
      setFieldError("regPassword", "Password must be at least 6 characters long.");
      hasError = true;
    }

    if (hasError) {
      showAuthAlert("error", "Please fix the highlighted validation errors before submitting.");
      return;
    }

    //this taken from ai
    try {
      const response = await fetch("/api/v1/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          mobileNumber: rawMobile,
          password
        })
      });

      const result = await response.json();

      if (!response.ok) {
        setFieldError("regEmail", result.error || "Email already registered.");
        showAuthAlert("error", result.error || "Registration failed. Please try again.");
        return;
      }
    } catch (apiErr) {
      console.warn("Backend API offline or unreachable:", apiErr);
    }

    // Store new user in client-side state
    const newUser = {
      id: `usr-${Date.now()}`,
      fullName,
      email,
      mobileNumber: rawMobile,
      passwordHash: btoa(password),
      role: "CUSTOMER",
      createdAt: new Date().toISOString()
    };

    state.users = state.users || [];
    state.users.push(newUser);
    saveState();
    renderAdminLists();

    registerForm.reset();
    setAuthMode("login");
    document.getElementById("loginEmail").value = email;
    showAuthAlert("success", `Registration successful! Account created for ${fullName}. You can now sign in.`);
    toast(`Welcome, ${fullName}! Account registered.`);
  });

  // Student 2: User Login and Authentication Form Submission
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    clearAuthFeedback();

    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    let hasError = false;
    if (!email || !EMAIL_REGEX.test(email)) {
      setFieldError("loginEmail", "Please enter a valid registered email address.");
      hasError = true;
    }
    if (!password) {
      setFieldError("loginPassword", "Please enter your password.");
      hasError = true;
    }
    if (hasError) {
      showAuthAlert("error", "Please enter both a valid email and password.");
      return;
    }

    // Validate credentials against stored users database
    const user = (state.users || []).find(u => u.email.toLowerCase() === email);
    if (!user) {
      setFieldError("loginEmail", "Email not found in database.");
      showAuthAlert("error", "No account found with this email address. Please register first.");
      return;
    }

    if (user.passwordHash !== btoa(password)) {
      setFieldError("loginPassword", "Incorrect password.");
      showAuthAlert("error", "Invalid email or password. Please check your credentials and try again.");
      return;
    }

    // Maintain authenticated session state (persisted across reloads)
    state.session = {
      userId: user.id,
      fullName: user.fullName,
      email: user.email,
      mobileNumber: user.mobileNumber,
      role: user.role || "CUSTOMER",
      token: `bms_jwt_${btoa(`${user.id}:${Date.now()}`).replace(/=/g, "")}`,
      loggedInAt: new Date().toISOString()
    };
    saveState();
    loginForm.reset();
    renderStats();
    showAuthAlert("success", `Authenticated successfully! Welcome back, ${user.fullName}.`);
    toast(`Signed in as ${user.fullName}`);
    setTimeout(closeAuthModal, 650);
  });

  renderAll();
})();
