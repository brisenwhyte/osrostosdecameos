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
    biography: "Savia Viegas é uma importante acadêmica, escritora, artista e curadora indiana, baseada principalmente em Carmona, South Goa, Índia. Ela é conhecida por seu trabalho multifacetado, que geralmente investiga o intrincado tecido social e as nuances culturais de Goa, particularmente focando nos desafios e transformações enfrentadas pela região devido à modernização.",
    ////academicBackground: "Licenciatura em Belas Artes, Escola Superior de Belas Artes de Lisboa.",
    address: "Rua das Flores, 45, Lisboa",
    contact: "+351 912 345 678",
    portfolio: [
      { title: "THE CAMESON JOURNEY I-1553-1580", image: "...", description: "Acrylic on canvas", price: "₹ 50,000/-", year: "2025" },
      { title: "THE CAMESON JOURNEY II-1563-1567", image: "...", description: "Acrylic on canvas", price: "₹ 50,000/-", year: "2025" },
    ],

  exhibitions: [
    {
    "year": "2005",
    "title": "Museum thru Indian Eyes | Photographic exhibition",
    "location": "NCPA"
  },
  {
    "year": "2009",
    "title": "Picturing Us | Solo exhibition of paintings",
    "location": "Carmona (My Home)"
  },
  {
    "year": "2011",
    "title": "Angelo da Fonseca: A Christmas Story",
    "location": "Xavier Institute of Historical Research, Porvorim, Goa."
  },
  {
    "year": "2012",
    "title": "Angelo da Fonseca: Passion and Glory",
    "location": "Xavier Institute of Historical Research, Porvorim, Goa."
  },
  {
    "year": "2012",
    "title": "Angelo da Fonseca: Maiden, Muse and Madonna",
    "location": "Xavier Institute of Historical Research, Porvorim, Goa."
  },
  {
    "year": "2014",
    "title": "Mementos | Solo exhibition of paintings",
    "location": "Sunaparanta, Panjim, Goa"
  },
  {
    "year": "2015",
    "title": "Angelo da Fonseca – a Retrospective",
    "location": "Xavier Institute of Historical Research, Porvorim, Goa."
  },
  {
    "year": "2015",
    "title": "Vignettes from a Visual Narrative | Exhibition of paintings",
    "location": "Fundacao Oriente Art Gallery, Panjim Goa"
  },
  {
    "year": "2015",
    "title": "Moments, Memory & Memorabilia",
    "location": "Sunaparanta and Carpe Diem, Goa"
  },
  {
    "year": "2015",
    "title": "Moments, Memory & Memorabilia",
    "location": "Xavier’s Centre for Historical Research, Porvorim Goa"
  },
  {
    "year": "2015",
    "title": "Blueprints",
    "location": "International Centre, Goa (GALF festivities)"
  },
  {
    "year": "2017",
    "title": "Blueprints",
    "location": "University of Lisbon Library showroom"
  },
  {
    "year": "2022",
    "title": "The Fonsecan Madonna",
    "location": "Xavier Institute of Historical Research, Porvorim, Goa."
  },
  {
    "year": "2024",
    "title": "Carmona’s Talking Quilt",
    "location": "Museum of Goa (MOG) Pilerne, Goa, India"
  },
  {
    "year": "2024",
    "title": "Cor Ghimache",
    "location": "Instituto Camoes"
  },
  {
    "year": "2024",
    "title": "Fonseca: An Indic Lexicon",
    "location": "Xavier Institute of Historical Research, Porvorim, Goa"
  }
  ]
},
  
  {
    id: "francisdesousa",
    name: "Francis Desousa",
    profileImage: "/francis.jpg",
    biography: "Francis DeSousa é um artista talentoso que ganhou seu Bacharelado em Belas Artes (BFA) do Goa College of Art em 1984. Ele estabeleceu uma ampla clientela internacional, com seu trabalho procurado por clientes em todo o Reino Unido, França e Portugal.",
    //academicBackground: "BFA, Goa College of Art, 1984.",
    address: "Avenida da República, 123, Porto",
    contact: "+351 923 456 789",
    portfolio: [
       { title: "PRETIDÃO DE AMOR", image: "...", description: "Watercolour on paper", price: "₹ 70,000/-", year: "2025" },
       { title: "NO MUNDO POUCOS ANOS, E CANSADO", image: "...", description: "Watercolour on paper", price: "₹ 70,000/-", year: "2025" },
    ],
    exhibitions: [
{
    "year": "1995",
    "title": "Contemporary Colourz",
    "location": "Flying Dutchman Art Gallery, Goa"
  },
  {
    "year": "1999",
    "title": "Fado - Group Exhibition",
    "location": "Jamaat Art Gallery, Mumbai"
  },
  {
    "year": "2001",
    "title": "Festival of India",
    "location": "Germany"
  },
  {
    "year": "2006",
    "title": "Once upon a Time",
    "location": "Cymroza Art Gallery, Mumbai"
  },
  {
    "year": "2008",
    "title": "New Goa Coast to Canvas",
    "location": "Ruchikas Art Gallery, Goa"
  },
  {
    "year": "2012",
    "title": "Complex machinery confused minds",
    "location": "Gallery 545, Bangalore"
  },
  {
    "year": "2015",
    "title": "Kama Interrupted",
    "location": "Gallery Gitanjali, Panaji"
  },
  {
    "year": "2017",
    "title": "Group Exhibition",
    "location": "The Radisson"
  },
  {
    "year": "2023",
    "title": "State Art Award Exhibition",
    "location": "Goa"
  }
    ]
  },
  {
    id: "virajnaik",
    name: "Viraj Naik",
    profileImage: "/viraj.jpg",
    biography: `Viraj Naik é um artista altamente talentoso com sede em Goa, Índia, conhecido por suas contribuições significativas à arte gráfica e sua extensa presença internacional. Sua jornada artística começou com um Bacharelado em Belas Artes (BFA) da Goa College of Art, Panjim, Goa, concluído em 1998. Ele aprimorou ainda mais suas habilidades e fundação acadêmica ao ganhar um mestre em belas artes (MFA) em Sarojini Naidu School of Bine Art, Golden Leshold, Hyderabad, em 2000.

Naik's commitment as a practicing artist is evident through his prolific participation in numerous shows since 2000. He has exhibited in prestigious International Graphic Art Biennials, Triennials, and exhibitions across a remarkable array of countries, including India, Belgium (La Boverie, Liège), Italy, Taiwan, Portugal, Bulgaria, Bangladesh, Egypt, the UK ("Hybrid Identities" in Edimburgo), EUA, Japão, Austrália, México, Canadá, Ucrânia, Macedônia, Zurique, Abu Dhabi, Tailândia e Uzice, Sérvia, entre muitos outros.

Além de sua prática artística individual, Naik contribuiu ativamente para a comunidade artística através de vários papéis de liderança e consultoria. Ele é membro de vários comitês relacionados à arte e serviu como membro do júri em Goa e em outros estados da Índia. Sua dedicação à educação e troca artística também é notável; Ele era professora convidada na Escola de Belas Artes de Sarojini Naidu, Universidade de Hyderabad, em 2002, e serviu como artista residente em Frans Masereel Centrum, Bélgica, em 2012.

Naik também desempenhou um papel fundamental na coordenação de iniciativas de arte significativas. Isso inclui o workshop de portfólio "Olhe para esta terra" no Centro de Artes de Sunapantara-Goa, em 2012, "Goa não é um pequeno lugar" na Kalakriti Art Gallery, Hyderabad, Índia em 2015, o "Workshop-Goa-Goa 2015", em 2015, em 2015, em 2015, o "Workshop-Goa 2015" em 2015.

Hoje, Viraj Naik continua vivendo e praticando sua arte em seu estúdio, "Graphikos", localizado em Kesarval, Quelossim, Goa, um testemunho de suas profundas raízes e dedicação contínua ao seu ofício em seu estado de origem.`,
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
    "year": "2003",
    "title": "Metamorphosis",
    "location": "Galeria Cidade de Goa, Goa"
  },
  {
    "year": "2004",
    "title": "Anxiety",
    "location": "Museum Gallery, Mumbai"
  },
  {
    "year": "2006",
    "title": "Blue Ants",
    "location": "Lalit Kala Akademi, New Delhi"
  },
  {
    "year": "2007",
    "title": "Speaking of Otherness",
    "location": "Pundole Art Gallery, Mumbai"
  },
  {
    "year": "2007",
    "title": "Landscape with Possible Monsters",
    "location": "Travancore Palace, New Delhi"
  },
  {
    "year": "2008",
    "title": "Mythical Menagerie",
    "location": "Visual Arts Centre, Hong Kong"
  },
  {
    "year": "2009",
    "title": "Fanatical Beings",
    "location": "India Fine Art, Mumbai"
  },
  {
    "year": "2010",
    "title": "Seize on",
    "location": "Apparao Galleries, Chennai, India"
  },
  {
    "year": "2013",
    "title": "Hybridization",
    "location": "India Fine Art, Mumbai"
  },
  {
    "year": "2017",
    "title": "Ambrosia de Fabulae",
    "location": "The Art Walkway, Park Hyatt, Hyderabad"
  },
  {
    "year": "2019",
    "title": "Ordinary Superheroes: Tales from the AniMan Kingdom",
    "location": "Sunaparanta Goa Centre for the Arts, Goa, India"
  }
  ]
  },
  {
    id: "nishantsaldanha",
    name: "Nishant Saldanha",
    profileImage: "/nishant.jpg",
    biography:` Nishant Saldanha é um artista cuja prática abrange publicações significativas e o campo dinâmico dos quadrinhos. Suas idéias foram destacadas recentemente em "Memórias, Arquivadas: Vistas Contemporâneas do Sul da Ásia", uma entrevista de artista publicada pelo Sunapantaranta Goa Center for the Arts em agosto de 2024. Esta publicação foi editada por Dale Luis Menezes, Leandre d'Souza e Susana Bastos Mateus. No campo dos quadrinhos, Saldanha participou como artista da Comic Arts Los Angeles em dezembro de 2024. Seu reconhecimento internacional inclui ser selecionado para o Colorama Club House, uma residência internacional de quadrinhos da Colorama Publishers, em Berlim, em 2022. Série de palestras na Universidade de Minnesota Duluth em abril de 2022. Uma conquista notável em sua carreira foi sua seleção como artista e designer de papéis finais de livros para "The Best American Comics 2019", publicado por Houghton Mifflin Harcourt em Nova York em outubro de 2019.`,
    address: "Praça do Comércio, 12, Lisboa",
    contact: "+351 945 678 901",
    portfolio: [
        { title: "ADAMASTOR WEEPS", image: "...", description: "Diptych acrylic oil pastel and colour-pencil", price: "₹ 90,000/-", year: "2025" },
        { title: "THE TEMPTATION OF BACCHUS", image: "...", description: "Diptych acrylic oil pastel and colour-pencil", price: "₹ 90,000/-", year: "2025" },
    ],
exhibitions: [
      {
      year: "2024",
      title: "ArQhive: Early-Modern Contemporary Visions",
      location: "Sunaparanta Center for the Arts, Goa"
    },
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
  ]
  
  },
  {
    id: "shaileshdabholkar",
    name: "Shailesh Dabholkar",
    profileImage: "/shailesh.jpg",
    biography: "Shailesh V. Dabholkar é um artista distinto, com uma forte base acadêmica em belas artes, especializada em pintura. Ele iniciou sua jornada artística formal no Goa College of Art, Goa University, onde perseguiu seu Bacharelado em Belas Artes (BFA) em pintura de 2008 a 2012, se formando com honras de primeira classe. Com base nessa base sólida, Dabholkar aprimorou ainda suas habilidades e expandiu seu entendimento teórico na Escola de Belas Artes de S. N., Hyderabad Central University. Aqui, ele completou seu mestrado em belas artes (pintura) de 2013 a 2015, alcançando uma distinção louvável. Sua formação educacional reflete uma dedicação consistente à excelência artística e um profundo envolvimento com a disciplina da pintura.",
    address: "Rua da Misericórdia, 56, Aveiro",
    contact: "+351 956 789 012",
    portfolio: [
       { title: "ESPELHO DA ALMA", image: "...", description: "Watercolour on paper", price: "₹ 50,000/-", year: "2025" },
       { title: "THE CRAB WHO ATE MY EYE", image: "...", description: "Watercolour on paper", price: "₹ 50,000/-", year: "2025" },
    ],
  exhibitions: [
    {
    "year": "2014",
    "title": "Work displayed for Kochi Muziris Student Biennale",
    "location": "Kochi"
  },
  {
    "year": "2014",
    "title": "HCU Project work EXHIBITED at WIMBLEDON College of Art",
    "location": "UK"
  },
  {
    "year": "2015",
    "title": "Work displayed at “Mini print” exhibition",
    "location": "Goa"
  },
  {
    "year": "2016",
    "title": "Goenchi Mati Show",
    "location": "MOG (Museum of Goa)"
  },
  {
    "year": "2016",
    "title": "State Art Award for Painting",
    "location": "Unknown"
  },
  {
    "year": "2016",
    "title": "Participated in Contemporary Painters Camp “Chitrankan”",
    "location": "Udaipur and Panjim"
  },
  {
    "year": "2017",
    "title": "Video installation",
    "location": "Serendipity Art Festival Goa"
  },
  {
    "year": "2017",
    "title": "Participated in a show named “Opus Tinta”",
    "location": "Sanskruti Bhavan, Panjim Goa"
  },
  {
    "year": "2018",
    "title": "Work displayed for Art Society of India",
    "location": "Mumbai"
  },
  {
    "year": "2019",
    "title": "Group “Azulezo”",
    "location": "Serendipity"
  },
  {
    "year": "2019",
    "title": "Group show “Into the Vault”",
    "location": "Museum of Goa (MOG)"
  },
  {
    "year": "2019",
    "title": "Work displayed at Lalitkala National Exhibition",
    "location": "Mumbai"
  },
  {
    "year": "2020",
    "title": "All India Watercolour Camp “DHAROHAR”",
    "location": "Chittorgargh, Rajasthan"
  }
  ]
  },
  {
    id: "viteshnaik",
    name: "Vitesh Naik",
    profileImage: "/vitesh.jpg",
    biography: `Vitesh Naik, nascido em 4 de janeiro de 1974, é um artista talentoso com uma base forte na pintura. Ele se distinguiu academicamente ao ganhar um Bacharelado em Belas Artes em Pintura pelo Goa College of Art, Índia, se formando com as primeiras honras de primeira classe.

Além de sua prática artística, Naik contribuiu ativamente para o cenário cultural de Goa através de seu envolvimento em julgar várias competições em nível comunitário. Ele freqüentemente atuou como juiz de competições infantis em nível estadual, bem como para eventos tradicionais, como competições de Rangoli, competições de Narkasure e competições de Ganesh Dekhava e Matoli.

Os talentos artísticos de Naik se estendem a obras em larga escala, tendo executado vários murais em grandes hotéis e residências particulares, tanto em Goa quanto em outros estados da Índia. Sua versatilidade também é evidente em seu trabalho de ilustração, onde ele contribuiu com ilustrações para dois livros infantis. Além disso, Vitesh Naik mantém a distinção de ser incluída em 'Articulação Infinita', o livro inaugural de Goa dedicado a seus artistas proeminentes, solidificando seu lugar entre as figuras artísticas significativas da região.`,
    address: "Rua Augusta, 234, Lisboa",
    contact: "+351 967 890 123",
    portfolio: [
        { title: "CAMÕES I LONGING", image: "...", description: "Mixed media on paper", price: "₹ 50,000/-", year: "2025" },
        { title: "CAMÕES II TIME", image: "...", description: "Mixed media on paper", price: "₹ 50,000/-", year: "2025" }
    ],
exhibitions: [
    {
    "year": "1994",
    "title": "Landscape Exhibition",
    "location": "Mahashala Kala Sangam, Marcel"
  },
  {
    "year": "1994-2016",
    "title": "Goa State Art Exhibitions",
    "location": "Panjim, Goa"
  },
  {
    "year": "1995",
    "title": "Kala Mela Exhibition",
    "location": "Bangalore"
  },
  {
    "year": "1995",
    "title": "Aids Awareness Painting Competition",
    "location": "Goa"
  },
  {
    "year": "1997",
    "title": "Journey I",
    "location": "Kala Academy, Panjim, Goa"
  },
  {
    "year": "1997",
    "title": "Workshop in Ceramic",
    "location": "Portuguese Department at Kala Academy, Panjim, Goa"
  },
  {
    "year": "1997",
    "title": "Artists Camp at Daman",
    "location": "West Zone Cultural Centre, Udaipur"
  },
  {
    "year": "1997",
    "title": "Fifty years of Art in Independence of India",
    "location": "A. I. F. A.C.S., N. Delhi"
  },
  {
    "year": "1998",
    "title": "All India Senior Graphic Camp",
    "location": "Bharat Bhavan, Bhopal"
  },
  {
    "year": "1998",
    "title": "Best of the year 98",
    "location": "L.K.A., Chennai"
  },
  {
    "year": "1999",
    "title": "Fado",
    "location": "Jamat in Mumbai"
  },
  {
    "year": "1999",
    "title": "Journey II",
    "location": "Kala Academy, Panjim, Goa"
  },
  {
    "year": "1999",
    "title": "An workshop of ceramics",
    "location": "Regional Design & Technical Development Centre, Mumbai"
  },
  {
    "year": "1999",
    "title": "A workshop of Ceramics",
    "location": "Coconut Brush, Siolim - Goa"
  },
  {
    "year": "1999",
    "title": "An exhibition of Goan Artist",
    "location": "L.K.A., N. Delhi"
  },
  {
    "year": "1999",
    "title": "Leprosy Eradication by 2000 A.D.' Painting Exhibition",
    "location": "Panjim-Goa"
  },
  {
    "year": "2000",
    "title": "Green Palate",
    "location": "Art Chamber, Calangute, Goa"
  },
  {
    "year": "2000",
    "title": "Jesus Christ with Indian Contemporary Artist",
    "location": "N.G.M.A., N. Delhi"
  },
  {
    "year": "2001",
    "title": "Creatively Yours",
    "location": "Ponda, Goa"
  },
  {
    "year": "2001",
    "title": "Junior National Artist Camp",
    "location": "A. I. F. A.C.S., N. Delhi"
  },
  {
    "year": "2001",
    "title": "Fulbright Mono Print Camp",
    "location": "Art Chamber, Calangute, Goa"
  },
  {
    "year": "2001",
    "title": "Millenium Art Exhibition",
    "location": "L.K.A. and K.A., Panjim, Goa"
  },
  {
    "year": "2002",
    "title": "A group show",
    "location": "Leela Palace, Dona Sylvia, Goa"
  },
  {
    "year": "2002",
    "title": "National Artist Camp",
    "location": "L.K.A., Chennai"
  },
  {
    "year": "2002",
    "title": "Platinium Jubilee an Art Exhibition",
    "location": "A. I. F. A.C.S."
  },
  {
    "year": "2006",
    "title": "Memories of my Land",
    "location": "Kerkar Art Complex, Calangute, Goa"
  },
  {
    "year": "2007",
    "title": "Forms and Figures",
    "location": "Hotel Goan Heritage, Calangute"
  },
  {
    "year": "2007",
    "title": "Vismaya",
    "location": "Mahua Art Gallery, Bangalore"
  },
  {
    "year": "2007",
    "title": "Paper Love",
    "location": "India Fine Art Gallery, Mumbai"
  },
  {
    "year": "2007",
    "title": "A workshop in Painting",
    "location": "Ruchika Art Gallery"
  },
  {
    "year": "2007",
    "title": "Fontainhas Art Festival",
    "location": "Panjim, Goa"
  },
  {
    "year": "2008",
    "title": "Neo Goa- Cost to Canvas C",
    "location": "Gallery G, Bangalore"
  },
  {
    "year": "2008",
    "title": "Basha/Language",
    "location": "Gallery Nvya, N. Delhi"
  },
  {
    "year": "2008",
    "title": "Young Goan Masters",
    "location": "L. K. A., N. Delhi"
  },
  {
    "year": "2008",
    "title": "Monsoon Expressions Festival",
    "location": "Kala Academy, Goa"
  },
  {
    "year": "2008",
    "title": "Residency Programme",
    "location": "Ruchika Art Gallery, Panjim, Goa"
  },
  {
    "year": "2009",
    "title": "Sacred and Secular",
    "location": "India Fine Art, Mumbai"
  },
  {
    "year": "2009",
    "title": "Carnival of Colours",
    "location": "Ruchika Art Gallery, Panjim Goa"
  },
  {
    "year": "2010",
    "title": "8th National Artist Camp",
    "location": "L.K.A., Mizoram"
  },
  {
    "year": "2011",
    "title": "Draw the Line",
    "location": "Sunaparanta, Altinho, Panjim, Goa"
  },
  {
    "year": "2011",
    "title": "Silent Voices",
    "location": "Salida del Sol, Panjim, Goa"
  },
  {
    "year": "2011",
    "title": "Etching Workshop",
    "location": "Studio 'The Works', Nagoa, Goa"
  },
  {
    "year": "2011",
    "title": "Wild Flowers Camp",
    "location": "International Centre, Dona Paula, Goa"
  },
  {
    "year": "2012",
    "title": "12x12=12000",
    "location": "Casa Goa, Calangute"
  },
  {
    "year": "2012",
    "title": "Look at this Land",
    "location": "Sunaparanta, Panjim"
  },
  {
    "year": "2012",
    "title": "Silent Voices II",
    "location": "Hotel Crown, Panjim, Goa"
  },
  {
    "year": "2012",
    "title": "Goa Reloaded",
    "location": "Niv Art Centre, Delhi"
  },
  {
    "year": "2012",
    "title": "OsCruzados",
    "location": "Gallery Gitanjali, Panjim, Goa"
  },
  {
    "year": "2012",
    "title": "National Painting Camp",
    "location": "L.K.A., Chennai"
  },
  {
    "year": "2012",
    "title": "National Etching Print Camp",
    "location": "Sunaparanta, Goa"
  },
  {
    "year": "2012",
    "title": "Painting Camp",
    "location": "Studio 215, Mandrem, Goa"
  },
  {
    "year": "2012",
    "title": "United Art Fair",
    "location": "PragatiMaidan, N. Delhi"
  },
  {
    "year": "2013",
    "title": "Why Not",
    "location": "Sunaparanta, Goa"
  },
  {
    "year": "2013",
    "title": "12x12=12000",
    "location": "Casa Goa, Calangute"
  },
  {
    "year": "2013",
    "title": "Small is Big",
    "location": "Darbar Hall Gallery, Kochi"
  },
  {
    "year": "2013",
    "title": "Five Point Something: A Creative Ensemble",
    "location": "Kala Academy, Panjim"
  },
  {
    "year": "2014",
    "title": "A group show of Goan artist",
    "location": "Gallery Sala De Kala, Goa Velha"
  },
  {
    "year": "2014",
    "title": "The Sixth Sense",
    "location": "Hotel Novotel, Candolim"
  },
  {
    "year": "2014",
    "title": "Balcao",
    "location": "Stainless & DhoomimalGallery, Delhi"
  },
  {
    "year": "2014",
    "title": "Miniature Etching Print Camp",
    "location": "Studio of Directorate of Art & Culture, Goa"
  },
  {
    "year": "2015",
    "title": "Goa is not a small place",
    "location": "Gallery Kalakriti, Hydrabad"
  },
  {
    "year": "2015",
    "title": "Beyond Images",
    "location": "Gallery Achies, Chandor, Goa"
  },
  {
    "year": "2015",
    "title": "Kama Interrupted",
    "location": "Gallery Gitanjali, Panjim"
  },
  {
    "year": "2016",
    "title": "Chai Cronicles",
    "location": "Gallery Range, Kolkata"
  },
  {
    "year": "2016",
    "title": "Group show",
    "location": "International Centre Goa, Dona Paula"
  },
  {
    "year": "2016",
    "title": "Faces",
    "location": "Cafe de Artes, Pondicherry"
  },
  {
    "year": "2017",
    "title": "Opus Tinta",
    "location": "Goa"
  },
  {
    "year": "2017",
    "title": "Beads in a thread",
    "location": "Gallery Sala de Kala, Goa"
  },
  {
    "year": "2017",
    "title": "1st National Exhibition",
    "location": "Lalita Kala Academy, Karnataka"
  },
  {
    "year": "2017-2018",
    "title": "Selected work for ‘59th National Exhibition of Art’",
    "location": "Lalita Kala Academy, New Delhi"
  },
  {
    "year": "2018",
    "title": "The Painted Face – A Tribute to Frida Kahlo",
    "location": "Art Exposure Gallery, Kolkata"
  },
  {
    "year": "2019",
    "title": "Intimate Insights",
    "location": "The MonalisaKalagram, Pune"
  },
  {
    "year": "2019",
    "title": "Blue God",
    "location": "Taj Holiday Village, Sinkerim-Goa"
  },
  {
    "year": "2019",
    "title": "Kanish Bhargava's 'Art & Couture'",
    "location": "Garden Estate, Gurugram"
  },
  {
    "year": "2019",
    "title": "Multi-Medium National Art Camp",
    "location": "L.K.A., Mumbai"
  },
  {
    "year": "2019",
    "title": "Chitrankan - Contemporary Painters Camp",
    "location": "West Zone Cultural Centre Panjim"
  },
  {
    "year": "2020",
    "title": "Art Investments 2020",
    "location": "Carpe Diem Art Gallery, Majorda-Goa"
  },
  {
    "year": "2021",
    "title": "Multiple Impressions",
    "location": "Gallery Sala De Arte, Panjim Goa"
  },
  {
    "year": "2021",
    "title": "Goa-Gazebo",
    "location": "Bhopal"
  },
  {
    "year": "2021-2022",
    "title": "Mystical Body",
    "location": "Carpe Diem Gallery, Majorda-Goa"
  },
  {
    "year": "2022",
    "title": "Posthumous Dialogues with F.N. Souza, homage to Goan Artist",
    "location": "Museum of Goa, Pilerna-Goa"
  },
  {
    "year": "2022-2023",
    "title": "Co-existence",
    "location": "Aguada Fort, Goa"
  },
  {
    "year": "2022-2023",
    "title": "Songs of Innocence & Experience",
    "location": "Ahuja Museums of Arts, Kolkata, India"
  },
  {
    "year": "2023",
    "title": "Colours of Life",
    "location": "Cymroza Art Gallery, Mumbai"
  },
  {
    "year": "2024",
    "title": "NEWS - The Art Fest 2024",
    "location": "State Art Gallery, Hyderabad"
  },
  {
    "year": "2024",
    "title": "One Square Foot",
    "location": "Monalisa Kalagram, Koregaon Park, Pune"
  }
  ],
  },
  {
    id: "verodinaferrao",
    name: "Verodina Ferrao",
    profileImage: "/verodina.jpg",
    biography: `Verodina Ferrao, é uma célebre artista de Goa, cujo trabalho em cerâmica e escultura em cerâmica deixou uma marca indelével na paisagem artística de Goa. Começando sua jornada como Potter, ela gradualmente expandiu seu ofício para escultura, trabalhando com diversos materiais como barro, madeira e pedra. Suas criações costumam capturar as sutilezas da experiência humana, variando de alegre e extravagante a profundamente espiritual, com temas religiosos frequentemente aparecendo em seu trabalho. Um dos aspectos mais impressionantes da arte de Verodina é sua capacidade de trazer vida a espaços públicos por meio de instalações ao ar livre em larga escala. Entre suas obras mais reconhecíveis está a escultura da pescadora em uma ilha de trânsito em Panaji, uma homenagem às mulheres resilientes das comunidades de pesca de Goa. Outra peça significativa é o "ressuscitado Cristo" na Igreja Bambolim, uma poderosa representação de fé que mostra sua habilidade em transmitir emoção através da forma. Além dos temas tradicionais, ela também explorou assuntos contemporâneos, criando trabalhos instigantes que refletem o impacto da era digital na interação humana. Seu estúdio em Karaswada, Mapusa, é um refúgio para os amantes da arte, aninhado no quintal de sua casa em sua família. Aqui, os visitantes podem testemunhar seu processo criativo, desde moldar argila crua até aplicar técnicas intrincadas como os esmaltes Raku, que dão a ela peças de cerâmica seu acabamento distinto. O estúdio não é apenas um espaço de trabalho, mas um arquivo vivo de sua evolução artística, onde cada peça conta uma história. A arte de Verodina está profundamente entrelaçada com a cultura de Goa, preservando suas tradições e também se envolvendo com influências modernas. Suas esculturas - sejam brincalhões, devocionais ou refletindo a mudança social - serve como uma ponte entre o passado e o presente. Através de seu trabalho, ela se tornou um custodiante da herança artística de Goa, garantindo que suas histórias e emoções sejam capturadas em formas duradouras. Mais do que apenas uma artista, Verodina Ferrao é uma contadora de histórias cujo meio é argila e pedra. Sua capacidade de evocar emoção e provocar pensamento através de suas esculturas consolidou seu lugar como uma das artistas contemporâneos mais reverenciados de Goa. Seja em instalações públicas ou peças de estúdio íntimo, seu trabalho continua a inspirar, lembrando os espectadores da beleza e complexidade da vida humana.`,
    address: "Rua do Carmo, 89, Porto",
    contact: "+351 978 901 234",
    portfolio: [
     { title: "CANÇÃO DO AMOR", image: "...", description: "Caramic", price: "₹ 70,000/-", year: "2025" },
     { title: "SOPA DE LETRAS", image: "...", description: "Caramic", price: "₹ 120,000/-", year: "2025" },
    ],
    exhibitions: [
   {
    "year": "1994",
    "title": "Contemporary Colourz",
    "location": "Flying Dutchman Art Gallery, Goa"
  },
  {
    "year": "1997",
    "title": "Exhibition of sculptures",
    "location": "Galleria Ralino, Panjim, Goa"
  },
  {
    "year": "1997",
    "title": "An exhibition of sculpture",
    "location": "Goa (curated by Wendell Rodericks)"
  },
  {
    "year": "1997",
    "title": "Verodina curated by Wendell Rodrigues",
    "location": "Goa"
  },
  {
    "year": "1999",
    "title": "Lalit Kala exhibition",
    "location": "Kala Academy, Goa"
  },
  {
    "year": "1999",
    "title": "Fado",
    "location": "Jamaat Art Gallery, Mumbai"
  },
  {
    "year": "2000",
    "title": "Group show",
    "location": "Art Chambers, Goa"
  },
  {
    "year": "2000",
    "title": "Group show",
    "location": "Galeria Jose de Guimaraes, Portugal"
  },
  {
    "year": "2001",
    "title": "Festival of India",
    "location": "Port Huron Museum, Michigan, U.S.A."
  },
  {
    "year": "2003",
    "title": "Festival of Art",
    "location": "Panjim, Goa"
  },
  {
    "year": "2015",
    "title": "Kama Reinvented",
    "location": "Gitanjali"
  },
  {
    "year": "2017",
    "title": "She",
    "location": "The Cube"
  },
  {
    "year": "2018",
    "title": "Group show",
    "location": "Art Chambers"
  },
  {
    "year": "2023",
    "title": "Engraved Treasures",
    "location": "Goa"
  },
  {
    "year": "2025",
    "title": "Footprints of Hope",
    "location": "Goa"
  }
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
    "year": "1998",
    "title": "Bayrn in Februar....",
    "location": "Art Chamber-Goa"
  },
  {
    "year": "2001",
    "title": "International Exhibition of Art",
    "location": "Busan Korea"
  },
  {
    "year": "2003",
    "title": "Saudades...",
    "location": "Galeria Cidade-Goa"
  },
  {
    "year": "2004",
    "title": "Women on Women",
    "location": "Int. Festival of Art Bangalore"
  },
  {
    "year": "2004",
    "title": "Women Artists on Amrita Sher Gil",
    "location": "Moskow and Tashkent"
  },
  {
    "year": "2005",
    "title": "Yesterday....",
    "location": "Chitrakala Parishad Bagalore"
  },
  {
    "year": "2005",
    "title": "Faces and Phases...",
    "location": "Art Chamber - Galeria de Belas Artes Goa"
  },
  {
    "year": "2006",
    "title": "Yolanda's Recent Works",
    "location": "Right Lines Bangalore"
  },
  {
    "year": "2006",
    "title": "Recent Works",
    "location": "Kitab Mahal Mumbai"
  },
  {
    "year": "2007",
    "title": "Roots & Shoots",
    "location": "Corks Gallery, London"
  },
  {
    "year": "2008",
    "title": "Biennale de Venizia",
    "location": "Venice Italy"
  },
  {
    "year": "2009",
    "title": "Destined Destiny",
    "location": "Galerie Gora-Montreal, Canada"
  },
  {
    "year": "2009",
    "title": "Apathy",
    "location": "Art Chamber-Goa"
  },
  {
    "year": "2010",
    "title": "Once Upon a Time",
    "location": "Hanse Art Fair-Bremen Germany"
  },
  {
    "year": "2010",
    "title": "Journey Beyond Time",
    "location": "Wedding Art Gallery-Berlin"
  },
  {
    "year": "2010",
    "title": "Artists at Home and Abroad",
    "location": "Broadway Gallery-New York"
  },
  {
    "year": "2011",
    "title": "The Wait",
    "location": "Art Chamber-Goa"
  },
  {
    "year": "2011",
    "title": "VIDA",
    "location": "Kunstzentrum - Bremen Germany"
  },
  {
    "year": "2011",
    "title": "Little Treasures",
    "location": "Bologna -Italy"
  },
  {
    "year": "2011",
    "title": "49th International Artists Exhibition-Varos",
    "location": "Galeria-Hungary"
  },
  {
    "year": "2011",
    "title": "The International Art Camp organized by The International Artists Colony",
    "location": "Hajdubozsermeny Hungary"
  },
  {
    "year": "2012",
    "title": "See it my Way",
    "location": "Art Chamber-Goa"
  },
  {
    "year": "2012",
    "title": "48th International Artists Exhibition",
    "location": "Varos Galeria- Hungary"
  },
  {
    "year": "2012",
    "title": "50th International Art Camp organized by The International Artists Colony",
    "location": "Hajdubozsermeny Hungary"
  },
  {
    "year": "2013",
    "title": "Simply Watercolors",
    "location": "Art Chamber-Goa"
  },
  {
    "year": "2013",
    "title": "International Artists Exhibition",
    "location": "Varos Galeria- Hungary"
  },
  {
    "year": "2013",
    "title": "International Artists Exhibition Hajdunanas Hun.",
    "location": "Town Hall Gallery-Hungary"
  },
  {
    "year": "2013",
    "title": "International Artists Exhibition Romania",
    "location": "Zerind Art Gallery Arad"
  },
  {
    "year": "2013",
    "title": "International Artists Camp",
    "location": "Zerind Arad Romania"
  },
  {
    "year": "2013",
    "title": "International Art Camp organized by The International Artists Colony",
    "location": "Hajdunanas Hungary"
  },
  {
    "year": "2013",
    "title": "International Art Camp organized by The International Artists Colony",
    "location": "Hajdubozsermeny Hungary"
  },
  {
    "year": "2013",
    "title": "International Art Camp organized by Tellus Art Sweden and Directorate of Art and Culture",
    "location": "Goa"
  },
  {
    "year": "2014",
    "title": "Incident III-Accident",
    "location": "Czestochowa Museum-Poland"
  },
  {
    "year": "2015",
    "title": "International Art Exhibition",
    "location": "Toyama Japan"
  },
  {
    "year": "2015",
    "title": "International Art Exhibition",
    "location": "Lake Valence Town Gallery Hungary"
  },
  {
    "year": "2015",
    "title": "International Art Exhibition Artists at Malinitz Austria",
    "location": "Malinitz Austria"
  },
  {
    "year": "2015",
    "title": "9th International Symposium of Modern Art d. fleiss & east-west artists",
    "location": "Mallnitz Austria"
  },
  {
    "year": "2015",
    "title": "IX. International Symposion",
    "location": "Lake Velence Hungary"
  },
  {
    "year": "2015",
    "title": "Inspire Trust International Art Residency",
    "location": "Goa"
  },
  {
    "year": "2016",
    "title": "Alma e a Vida",
    "location": "Art Chamber-Goa"
  },
  {
    "year": "2018",
    "title": "Monsoon Clutter",
    "location": "Art Chamber-Goa"
  },
  {
    "year": "2018",
    "title": "International Art Exhibition",
    "location": "Marianowo Poland"
  },
  {
    "year": "2018",
    "title": "Toyama International Art Residency organized by the Toyama Prefectural Artistic and Cultural Society",
    "location": "Toyama Japan"
  },
  {
    "year": "2019",
    "title": "International Group Show",
    "location": "Budapest Hungary"
  },
  {
    "year": "2020-2021",
    "title": "Lockdown Musings...",
    "location": "Art Chamber-Goa"
  },
  {
    "year": "2022",
    "title": "International Art Exhibition",
    "location": "Toyama Japan"
  },
  {
    "year": "2022",
    "title": "Toyama International Art Camp by Toyama Prefectural Artistic and Cultural Society",
    "location": "Toyama Japan"
  },
  {
    "year": "2024",
    "title": "International Art Exhibition",
    "location": "Folwark Hawaje, Stara Wiśniewka Poland"
  },
  {
    "year": "2024",
    "title": "International Art Meet",
    "location": "Hawaje Poland"
  },
  {
    "year": "2025",
    "title": "Liberdade",
    "location": "Artivo Galeria, Fortaleza Brasil"
  }
  ],
  }

];