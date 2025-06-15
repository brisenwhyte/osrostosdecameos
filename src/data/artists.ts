export interface Exhibition {
  year: string;
  title: string;
  location: string;
}

export interface Artist {
  id: string;
  name: string;
  profileImage: string;
  biography: string; // This will be the short bio for the card front
  ////academicBackground: string;
  address: string;
  contact: string;
  portfolio: {
    title: string;
    image: string;
    description: string;
    price:string
    year: string;
  }[];
  exhibitions: Exhibition[];
}

export const artists: Artist[] = [
  {
    id: "saviaviegas",
    name: "Sávia Viegas",
    profileImage: "/savia.jpg", // Standardized paths
    biography: "Savia Viegas is a prominent Indian academic, writer, artist, and curator, primarily based in Carmona, South Goa, India. She is known for her multifaceted work that often delves into the intricate social fabric and cultural nuances of Goa, particularly focusing on the challenges and transformations faced by the region due to modernization.",
    ////academicBackground: "Licenciatura em Belas Artes, Escola Superior de Belas Artes de Lisboa.",
    address: "Rua das Flores, 45, Lisboa",
    contact: "+351 912 345 678",
    portfolio: [
      { title: "THE CAMESON JOURNEY I-1553-1580", image: "...", description: "Acrylic on canvas", price: "₹ 50,000/-", year: "2025" },
      { title: "THE CAMESON JOURNEY II-1563-1567", image: "...", description: "Acrylic on canvas", price: "₹ 50,000/-", year: "2025" },
    ],

  exhibitions: [
    {
      year: "2011",
      title: "Angelo da Fonseca: A Christmas Story",
      location: "Xavier Institute of Historical Research, Porvorim, Goa."
    },
    {
      year: "2012",
      title: "Angelo da Fonseca: Passion and Glory",
      location: "Xavier Institute of Historical Research, Porvorim, Goa."
    },
    {
      year: "2012",
      title: "Angelo da Fonseca: Maiden, Muse and Madonna",
      location: "Xavier Institute of Historical Research, Porvorim, Goa."
    },
    {
      year: "2015",
      title: "Angelo da Fonseca – a Retrospective",
      location: "Xavier Institute of Historical Research, Porvorim, Goa."
    },
    {
      year: "2022",
      title: "The Fonsecan Madonna",
      location: "Xavier Institute of Historical Research, Porvorim, Goa."
    },
    {
      year: "2024",
      title: "Fonseca: An Indic Lexicon",
      location: "Xavier Institute of Historical Research, Porvorim, Goa."
    },
    {
      year: "2005",
      title: "Museum thru Indian Eyes | Photographic exhibition",
      location: "NCPA"
    },
    {
      year: "2009",
      title: "Picturing Us | Solo exhibition of paintings",
      location: "Carmona (My Home)"
    },
    {
      year: "2014",
      title: "Mementos | Solo exhibition of paintings",
      location: "Sunaparanta, Panjim, Goa"
    },
    {
      year: "2015",
      title: "Vignettes from a Visual Narrative | Exhibition of paintings",
      location: "Fundacao Oriente Art Gallery, Panjim Goa"
    },
    {
      year: "2015",
      title: "Moments, Memory & Memorabilia",
      location: "Sunaparanta and Carpe Diem, Goa"
    },
    {
      year: "2015",
      title: "Moments, Memory & Memorabilia",
      location: "Xavier’s Centre for Historical Research, Porvorim Goa"
    },
    {
      year: "2015",
      title: "Blueprints",
      location: "International Centre, Goa (GALF festivities)"
    },
    {
      year: "2017",
      title: "Blueprints",
      location: "University of Lisbon Library showroom"
    },
    {
      year: "2024",
      title: "Carmona’s Talking Quilt",
      location: "Museum of Goa (MOG) Pilerne, Goa, India"
    },
    {
      year: "2024",
      title: "Cor Ghimache",
      location: "Quadro Art Gallery"
    },
    {
      year: "2024",
      title: "Fonseca: An Indic Lexicon",
      location: "Xavier Institute of Historical Research, Porvorim, Goa"
    }
  ]
},
  
  {
    id: "francisdesousa",
    name: "Francis Desousa",
    profileImage: "/francis.jpg",
    biography: "Francis Desousa is an accomplished artist who earned his Bachelor of Fine Arts (BFA) from the Goa College of Art in 1984. He has established a broad international clientele, with his work sought after by clients across the United Kingdom, France, and Portugal.",
    //academicBackground: "BFA, Goa College of Art, 1984.",
    address: "Avenida da República, 123, Porto",
    contact: "+351 923 456 789",
    portfolio: [
       { title: "PRETIDÃO DE AMOR", image: "...", description: "Watercolour on paper", price: "₹ 70,000/-", year: "2025" },
       { title: "NO MUNDO POUCOS ANOS, E CANSADO", image: "...", description: "Watercolour on paper", price: "₹ 70,000/-", year: "2025" },
    ],
    exhibitions: [
        { year: "2023", title: "State Art Award Exhibition", location: "Goa" },
        { year: "2017", title: "Group Exhibition", location: "The Radisson" },
        { year: "2015", title: "Kama Interrupted", location: "Gallery Gitanjali, Panaji" },
        { year: "2012", title: "Complex machinery confused minds", location: "Gallery 545, Bangalore" },
        { year: "2008", title: "New Goa Coast to Canvas", location: "Ruchikas Art Gallery, Goa" },
        { year: "2006", title: "Once upon a Time", location: "Cymroza Art Gallery, Mumbai" },
        { year: "2001", title: "Festival of India", location: "Germany" },
        { year: "1999", title: "Fado - Group Exhibition", location: "Jamaat Art Gallery, Mumbai" },
        { year: "1995", title: "Contemporary Colourz", location: "Flying Dutchman Art Gallery, Goa" }
    ]
  },
  {
    id: "virajnaik",
    name: "Viraj Naik",
    profileImage: "/viraj.jpg",
    biography: `Viraj Naik is a highly accomplished artist based in Goa, India, renowned for his significant contributions to graphic art and his extensive international presence. His artistic journey began with a Bachelor of Fine Arts (BFA) from Goa College of Art, Panjim, Goa, completed in 1998. He further honed his skills and academic foundation by earning a Master of Fine Arts (MFA) at Sarojini Naidu School of Fine Art, Golden Threshold, Hyderabad, in 2000.

Naik's commitment as a practicing artist is evident through his prolific participation in numerous shows since 2000. He has exhibited in prestigious International Graphic Art Biennials, Triennials, and exhibitions across a remarkable array of countries, including India, Belgium (La Boverie, Liège), Italy, Taiwan, Portugal, Bulgaria, Bangladesh, Egypt, the UK ("Hybrid Identities" in Edinburgh), U.S.A, Japan, Australia, Mexico, Canada, Ukraine, Macedonia, Zurich, Abu Dhabi, Thailand, and Uzice, Serbia, among many others.

Beyond his individual artistic practice, Naik has actively contributed to the art community through various leadership and advisory roles. He is a member of several committees related to art and has served as a jury member in Goa and other states of India. His dedication to education and artistic exchange is also notable; he was a guest faculty at Sarojini Naidu School of Fine Arts, University of Hyderabad, in 2002, and served as an Artist-in-Residence at Frans Masereel Centrum, Belgium, in 2012.

Naik has also played a pivotal role in coordinating significant art initiatives. These include "Look at this Land" Etching portfolio workshop at Sunaparanta-Goa Centre for the Arts in 2012, "Goa is not a small place" at Kalakriti Art Gallery, Hyderabad, India in 2015, the "International Artist Workshop-Goa" in association with Tellus Art, Sweden, in 2013, and "Mini Print Goa 2015" in association with the Directorate of Art and Culture, Goa, in 2015.

Today, Viraj Naik continues to live and practice his art from his studio, "Graphikos," located in Kesarval, Quelossim, Goa, a testament to his deep roots and ongoing dedication to his craft in his home state.`,
    //academicBackground: "Mestre em Artes Visuais, Universidade de Coimbra.",
    address: "Rua do Ouro, 78, Coimbra",
    contact: "+351 934 567 890",
    portfolio: [
       { title: "FACES OF CAMÕES I", image: "...", description: "Watercolour on paper", price: "₹ 50,000/-", year: "2025" },
       { title: "FACES OF CAMÕES II", image: "...", description: "Watercolour on paper", price: "₹ 50,000/-", year: "2025" },
       { title: "FACES OF CAMÕES III", image: "...", description: "Watercolour on paper", price: "₹ 50,000/-", year: "2025" },
       { title: "FACES OF CAMÕES IV", image: "...", description: "Watercolour on paper", price: "₹ 50,000/-", year: "2025" },
    ],
exhibitions: [
    {
      year: "2019",
      title: "Ordinary Superheroes: Tales from the AniMan Kingdom",
      location: "Sunaparanta Goa Centre for the Arts, Goa, India"
    },
    {
      year: "2017",
      title: "Ambrosia de Fabulae",
      location: "The Art Walkway, Park Hyatt, Hyderabad"
    },
    {
      year: "2013",
      title: "Hybridization",
      location: "India Fine Art, Mumbai"
    },
    {
      year: "2010",
      title: "Seize on",
      location: "Apparao Galleries, Chennai, India"
    },
    {
      year: "2009",
      title: "Fanatical Beings",
      location: "India Fine Art, Mumbai"
    },
    {
      year: "2008",
      title: "Mythical Menagerie",
      location: "Visual Arts Centre, Hong Kong"
    },
    {
      year: "2007",
      title: "Speaking of Otherness",
      location: "Pundole Art Gallery, Mumbai"
    },
    {
      year: "2007",
      title: "Landscape with Possible Monsters",
      location: "Travancore Palace, New Delhi"
    },
    {
      year: "2006",
      title: "Blue Ants",
      location: "Lalit Kala Akademi, New Delhi"
    },
    {
      year: "2004",
      title: "Anxiety",
      location: "Museum Gallery, Mumbai"
    },
    {
      year: "2003",
      title: "Metamorphosis",
      location: "Galeria Cidade de Goa, Goa"
    }
  ]
  },
  {
    id: "nishantsaldanha",
    name: "Nishant Saldanha",
    profileImage: "/nishant.jpg",
    biography:` Nishant Saldanha is an artist whose practice spans both significant publications and the dynamic field of comics. His insights were recently highlighted in "Memories, Archived: Contemporary Views from South Asia," an artist interview published by the Sunaparanta Goa Centre for the Arts in August 2024. This publication was edited by Dale Luis Menezes, Leandre D’Souza, and Susana Bastos Mateus. 
    In the realm of comics, Saldanha  participated as an artist at Comic Arts Los Angeles in December 2024. His international recognition includes being selected for the Colorama Club House, an International Comics Residency by Colorama Publishers in Berlin, in August 2022. He has also shared his expertise as a Visiting Artist Lecturer for "Comics: Theory and Practice" at Parsons, New York, in April 2022, and as a Key Speaker for the Visual Culture Lecture Series at the University of Minnesota Duluth in April 2022. A notable achievement in his career was his selection as an artist and book endpapers designer for "The Best American Comics 2019," published by Houghton Mifflin Harcourt in New York in October 2019.`,
    address: "Praça do Comércio, 12, Lisboa",
    contact: "+351 945 678 901",
    portfolio: [
        { title: "ADAMASTOR WEEPS", image: "...", description: "Diptych acrylic oil pastel and colour-pencil", price: "₹ 90,000/-", year: "2025" },
        { title: "THE TEMPTATION OF BACCHUS", image: "...", description: "Diptych acrylic oil pastel and colour-pencil", price: "₹ 90,000/-", year: "2025" },
    ],
exhibitions: [
    {
      year: "2025",
      title: "Summer Somethings",
      location: "Pulp Society with Goa Open Arts and IMMERSE Fellowship, New Delhi"
    },
    {
      year: "2025",
      title: "A Dream In The Balcao",
      location: "Goa Open Arts, Goa"
    },
    {
      year: "2024",
      title: "ArQhive: Early-Modern Contemporary Visions",
      location: "Sunaparanta Center for the Arts, Goa"
    }
  ]
  
  },
  {
    id: "shaileshdabholkar",
    name: "Shailesh Dabholkar",
    profileImage: "/shailesh.jpg",
    biography: "Shailesh V. Dabholkar is a distinguished artist with a strong academic foundation in Fine Art, specializing in painting. He began his formal artistic journey at the Goa College of Art, Goa University, where he pursued his Bachelor of Fine Arts (BFA) in Painting from 2008 to 2012, graduating with First Class honors. Building on this solid base, Dabholkar further honed his skills and expanded his theoretical understanding at the S. N. School of Fine Art, Hyderabad Central University. Here, he completed his Masters in Fine Art (Painting) from 2013 to 2015, achieving a commendable Distinction. His educational background reflects a consistent dedication to artistic excellence and a deep engagement with the discipline of painting.",
    address: "Rua da Misericórdia, 56, Aveiro",
    contact: "+351 956 789 012",
    portfolio: [
       { title: "ESPELHO DA ALMA", image: "...", description: "Watercolour on paper", price: "₹ 50,000/-", year: "2025" },
       { title: "THE CRAB WHO ATE MY EYE", image: "...", description: "Watercolour on paper", price: "₹ 50,000/-", year: "2025" },
    ],
  exhibitions: [
    {
      year: "2020",
      title: "All India Watercolour Camp “DHAROHAR”",
      location: "Chittorgargh, Rajasthan"
    },
    {
      year: "2019",
      title: "Group “Azulezo”",
      location: "Serendipity"
    },
    {
      year: "2019",
      title: "Group show “Into the Vault”",
      location: "Museum of Goa (MOG)"
    },
    {
      year: "2019",
      title: "Work displayed at Lalitkala National Exhibition",
      location: "Mumbai"
    },
    {
      year: "2018",
      title: "Work displayed for Art Society of India",
      location: "Mumbai"
    },
    {
      year: "2017",
      title: "Video installation",
      location: "Serendipity Art Festival Goa"
    },
    {
      year: "2017",
      title: "Participated in a show named “Opus Tinta”",
      location: "Sanskruti Bhavan, Panjim Goa"
    },
    {
      year: "2016",
      title: "Goenchi Mati Show",
      location: "MOG (Museum of Goa)"
    },
    {
      year: "2016",
      title: "State Art Award for Painting",
      location: "Unknown"
    },
    {
      year: "2016",
      title: "Participated in Contemporary Painters Camp “Chitrankan”",
      location: "Udaipur and Panjim"
    },
    {
      year: "2015",
      title: "Work displayed at “Mini print” exhibition",
      location: "Goa"
    },
    {
      year: "2014",
      title: "Work displayed for Kochi Muziris Student Biennale",
      location: "Kochi"
    },
    {
      year: "2014",
      title: "HCU Project work EXHIBITED at WIMBLEDON College of Art",
      location: "UK"
    }
  ]
  },
  {
    id: "viteshnaik",
    name: "Vitesh Naik",
    profileImage: "/vitesh.jpg",
    biography: `Vitesh Naik, born on January 4, 1974, is an accomplished artist with a strong foundation in painting. He distinguished himself academically by earning a Bachelor of Fine Arts in Painting from the Goa College of Art, India, graduating with First Class First honors.

Beyond his artistic practice, Naik has actively contributed to the cultural landscape of Goa through his involvement in judging various community-level competitions. He has frequently served as a judge for state-level children's competitions, as well as for traditional events like Rangoli Competitions, Narkasure competitions, and Ganesh dekhava & Matoli competitions.

Naik's artistic talents extend to large-scale works, having executed numerous murals in major hotels and private residences both within Goa and in other states across India. His versatility is also evident in his illustration work, where he has contributed illustrations for two children's books. Furthermore, Vitesh Naik holds the distinction of being included in 'Infinite Articulation,' Goa’s inaugural book dedicated to its prominent artists, solidifying his place among the region's significant artistic figures.`,
    address: "Rua Augusta, 234, Lisboa",
    contact: "+351 967 890 123",
    portfolio: [
        { title: "CAMÕES I LONGING", image: "...", description: "Mixed media on paper", price: "₹ 50,000/-", year: "2025" },
        { title: "CAMÕES II TIME", image: "...", description: "Mixed media on paper", price: "₹ 50,000/-", year: "2025" }
    ],
exhibitions: [
    {
      year: "2024",
      title: "NEWS - The Art Fest 2024",
      location: "State Art Gallery, Hyderabad"
    },
    {
      year: "2024",
      title: "One Square Foot",
      location: "Monalisa Kalagram, Koregaon Park, Pune"
    },
    {
      year: "2023",
      title: "Colours of Life",
      location: "Cymroza Art Gallery, Mumbai"
    },
    {
      year: "2022-2023",
      title: "Co-existence",
      location: "Aguada Fort, Goa"
    },
    {
      year: "2022",
      title: "Posthumous Dialogues with F.N. Souza, homage to Goan Artist",
      location: "Museum of Goa, Pilerna-Goa"
    },
    {
      year: "2021",
      title: "Multiple Impressions",
      location: "Gallery Sala De Arte, Panjim Goa"
    },
    {
      year: "2021",
      title: "Goa-Gazebo",
      location: "Bhopal"
    },
    {
      year: "2020",
      title: "Art Investments 2020",
      location: "Carpe Diem Art Gallery, Majorda-Goa"
    },
    {
      year: "2019",
      title: "Intimate Insights",
      location: "The MonalisaKalagram, Pune"
    },
    {
      year: "2019",
      title: "Blue God",
      location: "Taj Holiday Village, Sinkerim-Goa"
    },
    {
      year: "2019",
      title: "Kanish Bhargava's 'Art & Couture'",
      location: "Garden Estate, Gurugram"
    },
    {
      year: "2018",
      title: "The Painted Face – A Tribute to Frida Kahlo",
      location: "Art Exposure Gallery, Kolkata"
    },
    {
      year: "2017",
      title: "Opus Tinta",
      location: "Goa"
    },
    {
      year: "2017",
      title: "Beads in a thread",
      location: "Gallery Sala de Kala, Goa"
    },
    {
      year: "2016",
      title: "Chai Cronicles",
      location: "Gallery Range, Kolkata"
    },
    {
      year: "2016",
      title: "Group show",
      location: "International Centre Goa, Dona Paula"
    },
    {
      year: "2015",
      title: "Goa is not a small place",
      location: "Gallery Kalakriti, Hydrabad"
    },
    {
      year: "2015",
      title: "Beyond Images",
      location: "Gallery Achies, Chandor, Goa"
    },
    {
      year: "2015",
      title: "Kama Interrupted",
      location: "Gallery Gitanjali, Panjim"
    },
    {
      year: "2014",
      title: "A group show of Goan artist",
      location: "Gallery Sala De Kala, Goa Velha"
    },
    {
      year: "2014",
      title: "The Sixth Sense",
      location: "Hotel Novotel, Candolim"
    },
    {
      year: "2014",
      title: "Balcao",
      location: "Stainless & DhoomimalGallery, Delhi"
    },
    {
      year: "2013",
      title: "Why Not",
      location: "Sunaparanta, Goa"
    },
    {
      year: "2013",
      title: "12x12=12000",
      location: "Casa Goa, Calangute"
    },
    {
      year: "2013",
      title: "Small is Big",
      location: "Darbar Hall Gallery, Kochi"
    },
    {
      year: "2013",
      title: "Five Point Something: A Creative Ensemble",
      location: "Kala Academy, Panjim"
    },
    {
      year: "2012",
      title: "12x12=12000",
      location: "Casa Goa, Calangute"
    },
    {
      year: "2012",
      title: "Look at this Land",
      location: "Sunaparanta, Panjim"
    },
    {
      year: "2012",
      title: "Silent Voices II",
      location: "Hotel Crown, Panjim, Goa"
    },
    {
      year: "2012",
      title: "Goa Reloaded",
      location: "Niv Art Centre, Delhi"
    },
    {
      year: "2012",
      title: "OsCruzados",
      location: "Gallery Gitanjali, Panjim, Goa"
    },
    {
      year: "2011",
      title: "Draw the Line",
      location: "Sunaparanta, Altinho, Panjim, Goa"
    },
    {
      year: "2011",
      title: "Silent Voices",
      location: "Salida del Sol, Panjim, Goa"
    },
    {
      year: "2009",
      title: "Sacred and Secular",
      location: "India Fine Art, Mumbai"
    },
    {
      year: "2009",
      title: "Carnival of Colours",
      location: "Ruchika Art Gallery, Panjim Goa"
    },
    {
      year: "2008",
      title: "Neo Goa- Cost to Canvas C",
      location: "Gallery G, Bangalore"
    },
    {
      year: "2008",
      title: "Basha/Language",
      location: "Gallery Nvya, N. Delhi"
    },
    {
      year: "2008",
      title: "Young Goan Masters",
      location: "L. K. A., N. Delhi"
    },
    {
      year: "2007",
      title: "Forms and Figures",
      location: "Hotel Goan Heritage, Calangute"
    },
    {
      year: "2007",
      title: "Vismaya",
      location: "Mahua Art Gallery, Bangalore"
    },
    {
      year: "2007",
      title: "Paper Love",
      location: "India Fine Art Gallery, Mumbai"
    },
    {
      year: "2002",
      title: "A group show",
      location: "Leela Palace, Dona Sylvia, Goa"
    },
    {
      year: "2001",
      title: "Creatively Yours",
      location: "Ponda, Goa"
    },
    {
      year: "2000",
      title: "Green Palate",
      location: "Art Chamber, Calangute, Goa"
    },
    {
      year: "2000",
      title: "Jesus Christ with Indian Contemporary Artist",
      location: "N.G.M.A., N. Delhi"
    },
    {
      year: "1999",
      title: "Fado",
      location: "Jamat in Mumbai"
    },
    {
      year: "1999",
      title: "Journey II",
      location: "Kala Academy, Panjim, Goa"
    },
    {
      year: "1997",
      title: "Journey I",
      location: "Kala Academy, Panjim, Goa"
    },

    {
      year: "2022-2023",
      title: "Songs of Innocence & Experience",
      location: "Ahuja Museums of Arts, Kolkata, India"
    },
    {
      year: "2021-2022",
      title: "Mystical Body",
      location: "Carpe Diem Gallery, Majorda-Goa"
    },
    {
      year: "2016",
      title: "Faces",
      location: "Cafe de Artes, Pondicherry"
    },
    {
      year: "2006",
      title: "Memories of my Land",
      location: "Kerkar Art Complex, Calangute, Goa"
    },

    {
      year: "2019",
      title: "Multi-Medium National Art Camp",
      location: "L.K.A., Mumbai"
    },
    {
      year: "2019",
      title: "Chitrankan - Contemporary Painters Camp",
      location: "West Zone Cultural Centre Panjim"
    },
    {
      year: "2014",
      title: "Miniature Etching Print Camp",
      location: "Studio of Directorate of Art & Culture, Goa"
    },
    {
      year: "2012",
      title: "National Painting Camp",
      location: "L.K.A., Chennai"
    },
    {
      year: "2012",
      title: "National Etching Print Camp",
      location: "Sunaparanta, Goa"
    },
    {
      year: "2012",
      title: "Painting Camp",
      location: "Studio 215, Mandrem, Goa"
    },
    {
      year: "2011",
      title: "Etching Workshop",
      location: "Studio 'The Works', Nagoa, Goa"
    },
    {
      year: "2011",
      title: "Wild Flowers Camp",
      location: "International Centre, Dona Paula, Goa"
    },
    {
      year: "2010",
      title: "8th National Artist Camp",
      location: "L.K.A., Mizoram"
    },
    {
      year: "2008",
      title: "Monsoon Expressions Festival",
      location: "Kala Academy, Goa"
    },
    {
      year: "2008",
      title: "Residency Programme",
      location: "Ruchika Art Gallery, Panjim, Goa"
    },
    {
      year: "2007",
      title: "A workshop in Painting",
      location: "Ruchika Art Gallery"
    },
    {
      year: "2002",
      title: "National Artist Camp",
      location: "L.K.A., Chennai"
    },
    {
      year: "2001",
      title: "Junior National Artist Camp",
      location: "A. I. F. A.C.S., N. Delhi"
    },
    {
      year: "2001",
      title: "Fulbright Mono Print Camp",
      location: "Art Chamber, Calangute, Goa"
    },
    {
      year: "1999",
      title: "An workshop of ceramics",
      location: "Regional Design & Technical Development Centre, Mumbai"
    },
    {
      year: "1999",
      title: "A workshop of Ceramics",
      location: "Coconut Brush, Siolim - Goa"
    },
    {
      year: "1998",
      title: "All India Senior Graphic Camp",
      location: "Bharat Bhavan, Bhopal"
    },
    {
      year: "1997",
      title: "Workshop in Ceramic",
      location: "Portuguese Department at Kala Academy, Panjim, Goa"
    },
    {
      year: "1997",
      title: "Artists Camp at Daman",
      location: "West Zone Cultural Centre, Udaipur"
    },


    {
      year: "2017-2018",
      title: "Selected work for ‘59th National Exhibition of Art’",
      location: "Lalita Kala Academy, New Delhi"
    },
    {
      year: "2017",
      title: "1st National Exhibition",
      location: "Lalita Kala Academy, Karnataka"
    },
    {
      year: "2012",
      title: "United Art Fair",
      location: "PragatiMaidan, N. Delhi"
    },
    {
      year: "2007",
      title: "Fontainhas Art Festival",
      location: "Panjim, Goa"
    },
    {
      year: "2002",
      title: "Platinium Jubilee an Art Exhibition",
      location: "A. I. F. A.C.S."
    },
    {
      year: "2001",
      title: "Millenium Art Exhibition",
      location: "L.K.A. and K.A., Panjim, Goa"
    },
    {
      year: "1999",
      title: "An exhibition of Goan Artist",
      location: "L.K.A., N. Delhi"
    },
    {
      year: "1998",
      title: "Best of the year 98",
      location: "L.K.A., Chennai"
    },
    {
      year: "1997",
      title: "Fifty years of Art in Independence of India",
      location: "A. I. F. A.C.S., N. Delhi"
    },
    {
      year: "1999",
      title: "Leprosy Eradication by 2000 A.D.' Painting Exhibition",
      location: "Panjim-Goa"
    },
    {
      year: "1995",
      title: "Kala Mela Exhibition",
      location: "Bangalore"
    },
    {
      year: "1995",
      title: "Aids Awareness Painting Competition",
      location: "Goa"
    },
    {
      year: "1994",
      title: "Landscape Exhibition",
      location: "Mahashala Kala Sangam, Marcel"
    },
    {
      year: "1994-2016",
      title: "Goa State Art Exhibitions",
      location: "Panjim, Goa"
    }
  ],
  },
  {
    id: "verodinaferrao",
    name: "Verodina Ferrao",
    profileImage: "/verodina.jpg",
    biography: "Artista conceptual e performer, mestre em Arte Contemporânea. Suas obras exploram a relação entre corpo, palavra e espaço, criando experiências imersivas que reinterpretam a herança cultural portuguesa.",
    address: "Rua do Carmo, 89, Porto",
    contact: "+351 978 901 234",
    portfolio: [
     { title: "CANÇÃO DO AMOR", image: "...", description: "Caramic", price: "₹ 70,000/-", year: "2025" },
     { title: "SOPA DE LETRAS", image: "...", description: "Caramic", price: "₹ 120,000/-", year: "2025" },
    ],
    exhibitions: [
        { year: "2024", title: "Perspectiva Feminina", location: "Museu de Arte, Coimbra" },
        { year: "2022", title: "Lente Histórica", location: "Galeria Lumina, Lisboa" },
        { year: "2020", title: "Instalações Vivas", location: "Espaço Arte, Porto" },
    ]
  },
  {
    id: "yolandakammermeier",
    name: "Yolanda de Sousa Kammermeier",
    profileImage: "/yolanda.jpg",
    biography: `Born and brought up in Goa, A Portuguese Territory until its liberation in 1961. Yolanda de Sousa Kammermeier holds a B.F.A. (painting) Degree from The University of Bombay. Yolanda's style of creating a ceramic like effect on canvas with relief and high gloss has become her trade mark She enjoys working with watercolors too. Yolanda also has since a while added Installations and little video Snippets to her repertoire of creations that have been making an appearance as part of her Solo Shows since 2009.
Widely Travelled, Sousa Kammermeier has had 25 Solo Shows and more. than 100 group shows within and outside the country. In cities like Montreal, Berlin, Bremen, New York, Venice, Lake valence, Hajdubosormeny, Haydunanas both in Hungary, Austria, Romania, Japan Korea, Poland ,Russia and Brasil, besides various cities in India like Mumbai, Bangalore, Hyderabad, Kolkata, Jaipur, Delhi besides Goa.
She has been invited and has been participating in International Art Camps/Art residencies within and outside India and has found acclaim for her work in way of Awards along the way.`,
    address: "Avenida dos Aliados, 167, Porto",
    contact: "+351 989 012 345",
    portfolio: [
      { title: "CAMÕES NA PRAIA DE CALAMGUTE, NOVEMBRO DE 1953", image: "...", description: "Acrylic on Canvas", price: "₹ 250,000/-", year: "2025" },
      { title: "CAMÕES E PANJIM HOJE", image: "...", description: "Acrylic on Canvas", price: "₹ 250,000/-", year: "2025" },
    ],
exhibitions: [
    {
      year: "2020-2021",
      title: "Lockdown Musings...",
      location: "Art Chamber-Goa"
    },
    {
      year: "2018",
      title: "Monsoon Clutter",
      location: "Art Chamber-Goa"
    },
    {
      year: "2016",
      title: "Alma e a Vida",
      location: "Art Chamber-Goa"
    },
    {
      year: "2013",
      title: "Simply Watercolors",
      location: "Art Chamber-Goa"
    },
    {
      year: "2012",
      title: "See it my Way",
      location: "Art Chamber-Goa"
    },
    {
      year: "2011",
      title: "The Wait",
      location: "Art Chamber-Goa"
    },
    {
      year: "2011",
      title: "VIDA",
      location: "Kunstzentrum - Bremen Germany"
    },
    {
      year: "2010",
      title: "Once Upon a Time",
      location: "Hanse Art Fair-Bremen Germany"
    },
    {
      year: "2010",
      title: "Journey Beyond Time",
      location: "Wedding Art Gallery-Berlin"
    },
    {
      year: "2009",
      title: "Destined Destiny",
      location: "Galerie Gora-Montreal, Canada"
    },
    {
      year: "2009",
      title: "Apathy",
      location: "Art Chamber-Goa"
    },
    {
      year: "2006",
      title: "Yolanda's Recent Works",
      location: "Right Lines Bangalore"
    },
    {
      year: "2006",
      title: "Recent Works",
      location: "Kitab Mahal Mumbai"
    },
    {
      year: "2005",
      title: "Yesterday....",
      location: "Chitrakala Parishad Bagalore"
    },
    {
      year: "2005",
      title: "Faces and Phases...",
      location: "Art Chamber - Galeria de Belas Artes Goa"
    },
    {
      year: "2003",
      title: "Saudades...",
      location: "Galeria Cidade-Goa"
    },
    {
      year: "1998",
      title: "Bayrn in Februar....",
      location: "Art Chamber-Goa"
    },
    {
      year: "2025",
      title: "Liberdade",
      location: "Artivo Galeria, Fortaleza Brasil"
    },
    {
      year: "2024",
      title: "International Art Exhibition",
      location: "Folwark Hawaje, Stara Wiśniewka Poland"
    },
    {
      year: "2022",
      title: "International Art Exhibition",
      location: "Toyama Japan"
    },
    {
      year: "2019",
      title: "International Group Show",
      location: "Budapest Hungary"
    },
    {
      year: "2018",
      title: "International Art Exhibition",
      location: "Marianowo Poland"
    },
    {
      year: "2015",
      title: "International Art Exhibition",
      location: "Toyama Japan"
    },
    {
      year: "2015",
      title: "International Art Exhibition",
      location: "Lake Valence Town Gallery Hungary"
    },
    {
      year: "2015",
      title: "International Art Exhibition Artists at Malinitz Austria",
      location: "Malinitz Austria"
    },
    {
      year: "2014",
      title: "Incident III-Accident",
      location: "Czestochowa Museum-Poland"
    },
    {
      year: "2013",
      title: "International Artists Exhibition",
      location: "Varos Galeria- Hungary"
    },
    {
      year: "2013",
      title: "International Artists Exhibition Hajdunanas Hun.",
      location: "Town Hall Gallery-Hungary"
    },
    {
      year: "2013",
      title: "International Artists Exhibition Romania",
      location: "Zerind Art Gallery Arad"
    },
    {
      year: "2012",
      title: "48th International Artists Exhibition",
      location: "Varos Galeria- Hungary"
    },
    {
      year: "2011",
      title: "Little Treasures",
      location: "Bologna -Italy"
    },
    {
      year: "2011",
      title: "49th International Artists Exhibition-Varos",
      location: "Galeria-Hungary"
    },
    {
      year: "2010",
      title: "Artists at Home and Abroad",
      location: "Broadway Gallery-New York"
    },
    {
      year: "2008",
      title: "Biennale de Venizia",
      location: "Venice Italy"
    },
    {
      year: "2007",
      title: "Roots & Shoots",
      location: "Corks Gallery, London"
    },
    {
      year: "2004",
      title: "Women on Women",
      location: "Int. Festival of Art Bangalore"
    },
    {
      year: "2004",
      title: "Women Artists on Amrita Sher Gil",
      location: "Moskow and Tashkent"
    },
    {
      year: "2001",
      title: "International Exhibition of Art",
      location: "Busan Korea"
    },

    {
      year: "2024",
      title: "International Art Meet",
      location: "Hawaje Poland"
    },
    {
      year: "2022",
      title: "Toyama International Art Camp by Toyama Prefectural Artistic and Cultural Society",
      location: "Toyama Japan"
    },
    {
      year: "2018",
      title: "Toyama International Art Residency organized by the Toyama Prefectural Artistic and Cultural Society",
      location: "Toyama Japan"
    },
    {
      year: "2015",
      title: "Toyama International Art Residency organized by the Toyama Prefectural Artistic and Cultural Society",
      location: "Toyama Japan"
    },
    {
      year: "2015",
      title: "9th International Symposium of Modern Art d. fleiss & east-west artists",
      location: "Mallnitz Austria"
    },
    {
      year: "2015",
      title: "IX. International Symposion",
      location: "Lake Velence Hungary"
    },
    {
      year: "2015",
      title: "Inspire Trust International Art Residency",
      location: "Goa"
    },
    {
      year: "2013",
      title: "International Artists Camp",
      location: "Zerind Arad Romania"
    },
    {
      year: "2013",
      title: "International Art Camp organized by The International Artists Colony",
      location: "Hajdunanas Hungary"
    },
    {
      year: "2013",
      title: "International Art Camp organized by The International Artists Colony",
      location: "Hajdubozsermeny Hungary"
    },
    {
      year: "2013",
      title: "International Art Camp organized by Tellus Art Sweden and Directorate of Art and Culture",
      location: "Goa"
    },
    {
      year: "2012",
      title: "50th International Art Camp organized by The International Artists Colony",
      location: "Hajdubozsermeny Hungary"
    },
    {
      year: "2011",
      title: "The International Art Camp organized by The International Artists Colony",
      location: "Hajdubozsermeny Hungary"
    }
  ],
  }

];