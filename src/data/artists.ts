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
    biography: `Sávia Viegas é uma renomada académica, escritora, artista e curadora indiana,
que vive em Carmona, no sul de Goa, na Índia. Ela é conhecida pelo seu
trabalho multifacetado, centrado na investigação do intrincado tecido social
local e nas nuances culturais de Goa, particularmente focando-se nos desafios
e transformações que afetam a região devido à modernização.`,
    ////academicBackground: "Licenciatura em Belas Artes, Escola Superior de Belas Artes de Lisboa.",
    address: "Rua das Flores, 45, Lisboa",
    contact: "+351 912 345 678",
    portfolio: [
      { title: "THE CAMESON JOURNEY I-1553-1580", image: "/savia1.jpg", description: "Acrylic on canvas", price: "₹ 50,000/-", year: "2025" },
      { title: "THE CAMESON JOURNEY II-1563-1567", image: "/savia2.jpg", description: "Acrylic on canvas", price: "₹ 50,000/-", year: "2025" },
    ],

  exhibitions: [
{
    "year": "2024",
    "title": "Fonseca: An Indic Lexicon",
    "location": "Xavier Institute of Historical Research, Porvorim, Goa"
  },
  {
    "year": "2024",
    "title": "Cor Ghimache",
    "location": "Instituto Camoes"
  },
  {
    "year": "2024",
    "title": "Carmona’s Talking Quilt",
    "location": "Museum of Goa (MOG) Pilerne, Goa, India"
  },
  {
    "year": "2022",
    "title": "The Fonsecan Madonna",
    "location": "Xavier Institute of Historical Research, Porvorim, Goa."
  },
  {
    "year": "2017",
    "title": "Blueprints",
    "location": "University of Lisbon Library showroom"
  },
  {
    "year": "2015",
    "title": "Blueprints",
    "location": "International Centre, Goa (GALF festivities)"
  },
  {
    "year": "2015",
    "title": "Moments, Memory & Memorabilia",
    "location": "Xavier’s Centre for Historical Research, Porvorim Goa"
  },
  {
    "year": "2015",
    "title": "Moments, Memory & Memorabilia",
    "location": "Sunaparanta and Carpe Diem, Goa"
  },
  {
    "year": "2015",
    "title": "Vignettes from a Visual Narrative | Exhibition of paintings",
    "location": "Fundacao Oriente Art Gallery, Panjim Goa"
  },
  {
    "year": "2015",
    "title": "Angelo da Fonseca – a Retrospective",
    "location": "Xavier Institute of Historical Research, Porvorim, Goa."
  },
  {
    "year": "2014",
    "title": "Mementos | Solo exhibition of paintings",
    "location": "Sunaparanta, Panjim, Goa"
  },
  {
    "year": "2012",
    "title": "Angelo da Fonseca: Maiden, Muse and Madonna",
    "location": "Xavier Institute of Historical Research, Porvorim, Goa."
  },
  {
    "year": "2012",
    "title": "Angelo da Fonseca: Passion and Glory",
    "location": "Xavier Institute of Historical Research, Porvorim, Goa."
  },
  {
    "year": "2011",
    "title": "Angelo da Fonseca: A Christmas Story",
    "location": "Xavier Institute of Historical Research, Porvorim, Goa."
  },
  {
    "year": "2009",
    "title": "Picturing Us | Solo exhibition of paintings",
    "location": "Carmona (My Home)"
  },
  {
    "year": "2005",
    "title": "Museum thru Indian Eyes | Photographic exhibition",
    "location": "NCPA"
  }
  ]
},
  
  {
    id: "francisdesousa",
    name: "Francis Desousa",
    profileImage: "/francis.jpg",
    biography: `Francis DeSousa é um talentoso artista que concluiu o seu Bacharelado em
Belas Artes (BFA) no Goa College of Art em 1984. Tem granjeado uma
relevante admiração entre o público nacional e internacional, pelas obras e
trabalho muito procurado por apreciadores de arte em todo o Reino Unido,
França e Portugal.`,
    //academicBackground: "BFA, Goa College of Art, 1984.",
    address: "Avenida da República, 123, Porto",
    contact: "+351 923 456 789",
    portfolio: [
       { title: "PRETIDÃO DE AMOR", image: "/francis1.jpg", description: "Watercolour on paper", price: "₹ 70,000/-", year: "2025" },
       { title: "NO MUNDO POUCOS ANOS, E CANSADO", image: "/francis2.jpg", description: "Watercolour on paper", price: "₹ 70,000/-", year: "2025" },
    ],
    exhibitions: [
{
    "year": "2023",
    "title": "State Art Award Exhibition",
    "location": "Goa"
  },
  {
    "year": "2017",
    "title": "Group Exhibition",
    "location": "The Radisson"
  },
  {
    "year": "2015",
    "title": "Kama Interrupted",
    "location": "Gallery Gitanjali, Panaji"
  },
  {
    "year": "2012",
    "title": "Complex machinery confused minds",
    "location": "Gallery 545, Bangalore"
  },
  {
    "year": "2008",
    "title": "New Goa Coast to Canvas",
    "location": "Ruchikas Art Gallery, Goa"
  },
  {
    "year": "2006",
    "title": "Once upon a Time",
    "location": "Cymroza Art Gallery, Mumbai"
  },
  {
    "year": "2001",
    "title": "Festival of India",
    "location": "Germany"
  },
  {
    "year": "1999",
    "title": "Fado - Group Exhibition",
    "location": "Jamaat Art Gallery, Mumbai"
  },
  {
    "year": "1995",
    "title": "Contemporary Colourz",
    "location": "Flying Dutchman Art Gallery, Goa"
  }
    ]
  },
  {
    id: "virajnaik",
    name: "Viraj Naik",
    profileImage: "/viraj.jpg",
    biography: ` Viraj Naik é um artista altamente virtuoso, residente em Goa, na Índia, sendo
conhecido pelas significativas participações na arte gráfica e pela sua extensa
presença internacional. A sua carreira artística começou com o Bacharelado
em Belas Artes (BFA) do Goa College of Art, Pangim, Goa, concluído em 1998.
Tem vindo a aprimorar as suas qualidades e formação académica com a
obtenção de um Mestrado em belas artes (MFA) na Sarojini Naidu School of
Bine Art, Golden Leshold, Hyderabad, em 2000. O compromisso artístico de
Naik tem sido evidenciado através da prolífica participação em numerosos
eventos de arte e exposições desde 2000. Tem exposto em prestigiosos
certames como a International Graphic Art Biennials, Triennials, exposições
em diversos países, incluindo a Índia, a Bélgica (La Boverie, Liège), Itália,
Taiwan, Portugal, Bulgária, Bangladesh, Egito, Reino Unido (&quot;Hybrid Identities&quot;
in Edimburgo), EUA, Japão, Austrália, México, Canadá, Ucrânia, Macedónia,
Zurique, Abu Dhabi, Tailândia e Uzice, Sérvia, entre muitos outros. Além da sua
prática artística individual, Naik contribuiu ativamente para a comunidade
artística através de vários cargos de liderança e de consultoria que assumiu. É
membro de vários comités relacionados com a arte e serviu como membro do
júri em Goa e em outros estados da Índia. A sua dedicação à educação e troca
artística também é notável; foi professor convidado na Escola de Belas Artes de

Sarojini Naidu, na Universidade de Hyderabad, em 2002, e serviu como artista
residente em Frans Masereel Centrum, Bélgica, em 2012. Naik também
desempenhou um papel fundamental na coordenação de importantes
iniciativas de arte. Isso inclui o workshop de portfólio &quot;Olhe para esta terra&quot; no
Centro de Artes de Sunapantara-Goa, em 2012, &quot;Goa não é um pequeno lugar&quot;
na Kalakriti Art Gallery, Hyderabad, Índia em 2015, o &quot;Workshop-Goa 2015&quot;,
em 2015. Atualmente, Viraj Naik continua vivendo e praticando a sua arte no
seu estúdio, &quot;Graphikos&quot;, localizado em Kesarval, Quelossim, Goa, como
testemunho das suas profundas raízes e dedicação contínua ao seu ofício no
seu estado original.`,
    //academicBackground: "Mestre em Artes Visuais, Universidade de Coimbra.",
    address: "Rua do Ouro, 78, Coimbra",
    contact: "+351 934 567 890",
    portfolio: [
       { title: "FACES OF CAMÕES I", image: "/viraj1.jpg", description: "Watercolour on paper", price: "₹ 50,000/-", year: "2025" },
       { title: "FACES OF CAMÕES II", image: "/viraj2.jpg", description: "Watercolour on paper", price: "₹ 50,000/-", year: "2025" },
       { title: "FACES OF CAMÕES III", image: "/viraj3.jpg", description: "Watercolour on paper", price: "₹ 50,000/-", year: "2025" },
       { title: "FACES OF CAMÕES IV", image: "/viraj4.jpg", description: "Watercolour on paper", price: "₹ 50,000/-", year: "2025" },
    ],
exhibitions: [
{
    "year": "2019",
    "title": "Ordinary Superheroes: Tales from the AniMan Kingdom",
    "location": "Sunaparanta Goa Centre for the Arts, Goa, India"
  },
  {
    "year": "2017",
    "title": "Ambrosia de Fabulae",
    "location": "The Art Walkway, Park Hyatt, Hyderabad"
  },
  {
    "year": "2013",
    "title": "Hybridization",
    "location": "India Fine Art, Mumbai"
  },
  {
    "year": "2010",
    "title": "Seize on",
    "location": "Apparao Galleries, Chennai, India"
  },
  {
    "year": "2009",
    "title": "Fanatical Beings",
    "location": "India Fine Art, Mumbai"
  },
  {
    "year": "2008",
    "title": "Mythical Menagerie",
    "location": "Visual Arts Centre, Hong Kong"
  },
  {
    "year": "2007",
    "title": "Landscape with Possible Monsters",
    "location": "Travancore Palace, New Delhi"
  },
  {
    "year": "2007",
    "title": "Speaking of Otherness",
    "location": "Pundole Art Gallery, Mumbai"
  },
  {
    "year": "2006",
    "title": "Blue Ants",
    "location": "Lalit Kala Akademi, New Delhi"
  },
  {
    "year": "2004",
    "title": "Anxiety",
    "location": "Museum Gallery, Mumbai"
  },
  {
    "year": "2003",
    "title": "Metamorphosis",
    "location": "Galeria Cidade de Goa, Goa"
  }
  ]
  },
  {
    id: "nishantsaldanha",
    name: "Nishant Saldanha",
    profileImage: "/nishant.jpg",
    biography:` Nishant Saldanha é um artista cuja prática abrange publicações significativas e
o campo dinâmico da banda desenhada. As suas ideias foram destacadas
recentemente em &quot;Memórias, Arquivadas: Vistas Contemporâneas do Sul da
Ásia&quot;, uma entrevista do artista, publicada pelo Sunapantaranta Goa Center for
the Arts em agosto de 2024. Esta publicação foi editada por Dale Luís Menezes,
Leandre d&#39;Souza e Susana Bastos Mateus. No campo da banda desenhada,
Saldanha participou como artista na Comic Arts Los Angeles em dezembro de
2024. O seu reconhecimento internacional ficou bem patente ao ser
selecionado para o Colorama Club House, uma residência internacional de
banda desenhada da Colorama Publishers, em Berlim, em 2022, pela série de
palestras realizadas na Universidade de Minnesota Duluth em abril de 2022.
Alcançou um feito notável na sua carreira ao ser selecionado seleção como
artista e designer das versões finais de livros para a &quot;The Best American Comics
2019&quot;, publicado por Houghton Mifflin Harcourt em Nova York, em outubro de
2019.`,
    address: "Praça do Comércio, 12, Lisboa",
    contact: "+351 945 678 901",
    portfolio: [
        { title: "ADAMASTOR WEEPS", image: "/nishant1.jpg", description: "Diptych acrylic oil pastel and colour-pencil", price: "₹ 90,000/-", year: "2025" },
        { title: "THE TEMPTATION OF BACCHUS", image: "/nishant2.jpg", description: "Diptych acrylic oil pastel and colour-pencil", price: "₹ 90,000/-", year: "2025" },
    ],
exhibitions: [
    {
      year: "2025",
      title: "A Dream In The Balcao",
      location: "Goa Open Arts, Goa"
    },
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
  ]
  
  },
  {
    id: "shaileshdabholkar",
    name: "Shailesh Dabholkar",
    profileImage: "/shailesh.jpg",
    biography: `Shailesh V. Dabholkar é um artista distinto, com uma sólida formação
académica em belas artes, e especialização em pintura. Iniciou a sua educação
artística formal no Goa College of Art, Goa University, tendo concluído o seu
bacharelado em Belas Artes (BFA) em pintura de 2008 a 2012, com distinção.
Graças a essa boa formação, Dabholkar aprimorou ainda as suas habilidades e
desenvolveu o seu conhecimento teórico na Escola de Belas Artes de S. N.,
Hyderabad Central University. Aí, completou o seu mestrado em belas artes
(pintura) de 2013 a 2015, alcançando mais uma vez uma distinção de louvor. A
sua formação educacional reflete uma dedicação consistente à excelência
artística e um profundo envolvimento com a disciplina da pintura.`,
    address: "Rua da Misericórdia, 56, Aveiro",
    contact: "+351 956 789 012",
    portfolio: [
       { title: "ESPELHO DA ALMA", image: "/shailesh1.jpg", description: "Watercolour on paper", price: "₹ 50,000/-", year: "2025" },
       { title: "THE CRAB WHO ATE MY EYE", image: "/shailesh2.jpg", description: "Watercolour on paper", price: "₹ 50,000/-", year: "2025" },
    ],
  exhibitions: [
  {
    "year": "2020",
    "title": "All India Watercolour Camp “DHAROHAR”",
    "location": "Chittorgargh, Rajasthan"
  },
  {
    "year": "2019",
    "title": "Work displayed at Lalitkala National Exhibition",
    "location": "Mumbai"
  },
  {
    "year": "2019",
    "title": "Group show “Into the Vault”",
    "location": "Museum of Goa (MOG)"
  },
  {
    "year": "2019",
    "title": "Group “Azulezo”",
    "location": "Serendipity"
  },
  {
    "year": "2018",
    "title": "Work displayed for Art Society of India",
    "location": "Mumbai"
  },
  {
    "year": "2017",
    "title": "Participated in a show named “Opus Tinta”",
    "location": "Sanskruti Bhavan, Panjim Goa"
  },
  {
    "year": "2017",
    "title": "Video installation",
    "location": "Serendipity Art Festival Goa"
  },
  {
    "year": "2016",
    "title": "Participated in Contemporary Painters Camp “Chitrankan”",
    "location": "Udaipur and Panjim"
  },
  {
    "year": "2016",
    "title": "State Art Award for Painting",
    "location": "Unknown"
  },
  {
    "year": "2016",
    "title": "Goenchi Mati Show",
    "location": "MOG (Museum of Goa)"
  },
  {
    "year": "2015",
    "title": "Work displayed at “Mini print” exhibition",
    "location": "Goa"
  },
  {
    "year": "2014",
    "title": "HCU Project work EXHIBITED at WIMBLEDON College of Art",
    "location": "UK"
  },
  {
    "year": "2014",
    "title": "Work displayed for Kochi Muziris Student Biennale",
    "location": "Kochi"
  }
  ]
  },
  {
    id: "viteshnaik",
    name: "Vitesh Naik",
    profileImage: "/vitesh.jpg",
    biography: `Vitesh Naik, nascido no dia 4 de janeiro de 1974, é um artista talentoso com
uma base muito sólida na pintura. Ele distinguiu-se academicamente ao obter
o grau de Bacharel em Belas Artes em Pintura pelo Goa College of Art, Índia,
concluindo o curso com distinção. Além da sua prática artística, Naik contribuiu
ativamente para o cenário cultural de Goa através do seu envolvimento em
júris de várias competições a nível comunitário. Frequentemente, atuou ainda
como membro do júri de competições infantis a nível estadual, bem como em
eventos tradicionais, como os concursos de Rangoli, do Narkasur, do Ganesh
Dekhava e Matoli. Os talentos artísticos de Naik estão bem presentes em obras
de grande escala, tendo executado vários murais em grandes hotéis e
residências particulares, tanto em Goa quanto noutros estados da Índia. A sua
versatilidade também é evidente no seu trabalho de ilustração, onde tem
contribuído com ilustrações para dois livros infantis. Além disso, Vitesh Naik
goza da distinção de ter sido convidado em &#39;Articulação Infinita&#39;, o livro
inaugural de Goa dedicado a seus artistas proeminentes, consolidando a sua
posição entre as figuras artísticas mais significativas da região.`,
    address: "Rua Augusta, 234, Lisboa",
    contact: "+351 967 890 123",
    portfolio: [
        { title: "CAMÕES I LONGING", image: "/vitesh1.jpg", description: "Mixed media on paper", price: "₹ 50,000/-", year: "2025" },
        { title: "CAMÕES II TIME", image: "/vitesh2.jpg", description: "Mixed media on paper", price: "₹ 50,000/-", year: "2025" }
    ],
exhibitions: [
    {
    "year": "2024",
    "title": "One Square Foot",
    "location": "Monalisa Kalagram, Koregaon Park, Pune"
  },
  {
    "year": "2024",
    "title": "NEWS - The Art Fest 2024",
    "location": "State Art Gallery, Hyderabad"
  },
  {
    "year": "2023",
    "title": "Colours of Life",
    "location": "Cymroza Art Gallery, Mumbai"
  },
  {
    "year": "2022-2023",
    "title": "Songs of Innocence & Experience",
    "location": "Ahuja Museums of Arts, Kolkata, India"
  },
  {
    "year": "2022-2023",
    "title": "Co-existence",
    "location": "Aguada Fort, Goa"
  },
  {
    "year": "2022",
    "title": "Posthumous Dialogues with F.N. Souza, homage to Goan Artist",
    "location": "Museum of Goa, Pilerna-Goa"
  },
  {
    "year": "2021-2022",
    "title": "Mystical Body",
    "location": "Carpe Diem Gallery, Majorda-Goa"
  },
  {
    "year": "2021",
    "title": "Goa-Gazebo",
    "location": "Bhopal"
  },
  {
    "year": "2021",
    "title": "Multiple Impressions",
    "location": "Gallery Sala De Arte, Panjim Goa"
  },
  {
    "year": "2020",
    "title": "Art Investments 2020",
    "location": "Carpe Diem Art Gallery, Majorda-Goa"
  },
  {
    "year": "2019",
    "title": "Chitrankan - Contemporary Painters Camp",
    "location": "West Zone Cultural Centre Panjim"
  },
  {
    "year": "2019",
    "title": "Multi-Medium National Art Camp",
    "location": "L.K.A., Mumbai"
  },
  {
    "year": "2019",
    "title": "Kanish Bhargava's 'Art & Couture'",
    "location": "Garden Estate, Gurugram"
  },
  {
    "year": "2019",
    "title": "Blue God",
    "location": "Taj Holiday Village, Sinkerim-Goa"
  },
  {
    "year": "2019",
    "title": "Intimate Insights",
    "location": "The MonalisaKalagram, Pune"
  },
  {
    "year": "2018",
    "title": "The Painted Face – A Tribute to Frida Kahlo",
    "location": "Art Exposure Gallery, Kolkata"
  },
  {
    "year": "2017-2018",
    "title": "Selected work for ‘59th National Exhibition of Art’",
    "location": "Lalita Kala Academy, New Delhi"
  },
  {
    "year": "2017",
    "title": "1st National Exhibition",
    "location": "Lalita Kala Academy, Karnataka"
  },
  {
    "year": "2017",
    "title": "Beads in a thread",
    "location": "Gallery Sala de Kala, Goa"
  },
  {
    "year": "2017",
    "title": "Opus Tinta",
    "location": "Goa"
  },
  {
    "year": "2016",
    "title": "Faces",
    "location": "Cafe de Artes, Pondicherry"
  },
  {
    "year": "2016",
    "title": "Group show",
    "location": "International Centre Goa, Dona Paula"
  },
  {
    "year": "2016",
    "title": "Chai Cronicles",
    "location": "Gallery Range, Kolkata"
  },
  {
    "year": "2015",
    "title": "Kama Interrupted",
    "location": "Gallery Gitanjali, Panjim"
  },
  {
    "year": "2015",
    "title": "Beyond Images",
    "location": "Gallery Achies, Chandor, Goa"
  },
  {
    "year": "2015",
    "title": "Goa is not a small place",
    "location": "Gallery Kalakriti, Hydrabad"
  },
  {
    "year": "2014",
    "title": "Miniature Etching Print Camp",
    "location": "Studio of Directorate of Art & Culture, Goa"
  },
  {
    "year": "2014",
    "title": "Balcao",
    "location": "Stainless & DhoomimalGallery, Delhi"
  },
  {
    "year": "2014",
    "title": "The Sixth Sense",
    "location": "Hotel Novotel, Candolim"
  },
  {
    "year": "2014",
    "title": "A group show of Goan artist",
    "location": "Gallery Sala De Kala, Goa Velha"
  },
  {
    "year": "2013",
    "title": "Five Point Something: A Creative Ensemble",
    "location": "Kala Academy, Panjim"
  },
  {
    "year": "2013",
    "title": "Small is Big",
    "location": "Darbar Hall Gallery, Kochi"
  },
  {
    "year": "2013",
    "title": "12x12=12000",
    "location": "Casa Goa, Calangute"
  },
  {
    "year": "2013",
    "title": "Why Not",
    "location": "Sunaparanta, Goa"
  },
  {
    "year": "2012",
    "title": "United Art Fair",
    "location": "PragatiMaidan, N. Delhi"
  },
  {
    "year": "2012",
    "title": "Painting Camp",
    "location": "Studio 215, Mandrem, Goa"
  },
  {
    "year": "2012",
    "title": "National Etching Print Camp",
    "location": "Sunaparanta, Goa"
  },
  {
    "year": "2012",
    "title": "National Painting Camp",
    "location": "L.K.A., Chennai"
  },
  {
    "year": "2012",
    "title": "OsCruzados",
    "location": "Gallery Gitanjali, Panjim, Goa"
  },
  {
    "year": "2012",
    "title": "Goa Reloaded",
    "location": "Niv Art Centre, Delhi"
  },
  {
    "year": "2012",
    "title": "Silent Voices II",
    "location": "Hotel Crown, Panjim, Goa"
  },
  {
    "year": "2012",
    "title": "Look at this Land",
    "location": "Sunaparanta, Panjim"
  },
  {
    "year": "2012",
    "title": "12x12=12000",
    "location": "Casa Goa, Calangute"
  },
  {
    "year": "2011",
    "title": "Wild Flowers Camp",
    "location": "International Centre, Dona Paula, Goa"
  },
  {
    "year": "2011",
    "title": "Etching Workshop",
    "location": "Studio 'The Works', Nagoa, Goa"
  },
  {
    "year": "2011",
    "title": "Silent Voices",
    "location": "Salida del Sol, Panjim, Goa"
  },
  {
    "year": "2011",
    "title": "Draw the Line",
    "location": "Sunaparanta, Altinho, Panjim, Goa"
  },
  {
    "year": "2010",
    "title": "8th National Artist Camp",
    "location": "L.K.A., Mizoram"
  },
  {
    "year": "2009",
    "title": "Carnival of Colours",
    "location": "Ruchika Art Gallery, Panjim Goa"
  },
  {
    "year": "2009",
    "title": "Sacred and Secular",
    "location": "India Fine Art, Mumbai"
  },
  {
    "year": "2008",
    "title": "Residency Programme",
    "location": "Ruchika Art Gallery, Panjim, Goa"
  },
  {
    "year": "2008",
    "title": "Monsoon Expressions Festival",
    "location": "Kala Academy, Goa"
  },
  {
    "year": "2008",
    "title": "Young Goan Masters",
    "location": "L. K. A., N. Delhi"
  },
  {
    "year": "2008",
    "title": "Basha/Language",
    "location": "Gallery Nvya, N. Delhi"
  },
  {
    "year": "2008",
    "title": "Neo Goa- Cost to Canvas C",
    "location": "Gallery G, Bangalore"
  },
  {
    "year": "2007",
    "title": "Fontainhas Art Festival",
    "location": "Panjim, Goa"
  },
  {
    "year": "2007",
    "title": "A workshop in Painting",
    "location": "Ruchika Art Gallery"
  },
  {
    "year": "2007",
    "title": "Paper Love",
    "location": "India Fine Art Gallery, Mumbai"
  },
  {
    "year": "2007",
    "title": "Vismaya",
    "location": "Mahua Art Gallery, Bangalore"
  },
  {
    "year": "2007",
    "title": "Forms and Figures",
    "location": "Hotel Goan Heritage, Calangute"
  },
  {
    "year": "2006",
    "title": "Memories of my Land",
    "location": "Kerkar Art Complex, Calangute, Goa"
  },
  {
    "year": "2002",
    "title": "Platinium Jubilee an Art Exhibition",
    "location": "A. I. F. A.C.S."
  },
  {
    "year": "2002",
    "title": "National Artist Camp",
    "location": "L.K.A., Chennai"
  },
  {
    "year": "2002",
    "title": "A group show",
    "location": "Leela Palace, Dona Sylvia, Goa"
  },
  {
    "year": "2001",
    "title": "Millenium Art Exhibition",
    "location": "L.K.A. and K.A., Panjim, Goa"
  },
  {
    "year": "2001",
    "title": "Fulbright Mono Print Camp",
    "location": "Art Chamber, Calangute, Goa"
  },
  {
    "year": "2001",
    "title": "Junior National Artist Camp",
    "location": "A. I. F. A.C.S., N. Delhi"
  },
  {
    "year": "2001",
    "title": "Creatively Yours",
    "location": "Ponda, Goa"
  },
  {
    "year": "2000",
    "title": "Jesus Christ with Indian Contemporary Artist",
    "location": "N.G.M.A., N. Delhi"
  },
  {
    "year": "2000",
    "title": "Green Palate",
    "location": "Art Chamber, Calangute, Goa"
  },
  {
    "year": "1999",
    "title": "Leprosy Eradication by 2000 A.D.' Painting Exhibition",
    "location": "Panjim-Goa"
  },
  {
    "year": "1999",
    "title": "An exhibition of Goan Artist",
    "location": "L.K.A., N. Delhi"
  },
  {
    "year": "1999",
    "title": "A workshop of Ceramics",
    "location": "Coconut Brush, Siolim - Goa"
  },
  {
    "year": "1999",
    "title": "An workshop of ceramics",
    "location": "Regional Design & Technical Development Centre, Mumbai"
  },
  {
    "year": "1999",
    "title": "Journey II",
    "location": "Kala Academy, Panjim, Goa"
  },
  {
    "year": "1999",
    "title": "Fado",
    "location": "Jamat in Mumbai"
  },
  {
    "year": "1998",
    "title": "Best of the year 98",
    "location": "L.K.A., Chennai"
  },
  {
    "year": "1998",
    "title": "All India Senior Graphic Camp",
    "location": "Bharat Bhavan, Bhopal"
  },
  {
    "year": "1997",
    "title": "Fifty years of Art in Independence of India",
    "location": "A. I. F. A.C.S., N. Delhi"
  },
  {
    "year": "1997",
    "title": "Artists Camp at Daman",
    "location": "West Zone Cultural Centre, Udaipur"
  },
  {
    "year": "1997",
    "title": "Workshop in Ceramic",
    "location": "Portuguese Department at Kala Academy, Panjim, Goa"
  },
  {
    "year": "1997",
    "title": "Journey I",
    "location": "Kala Academy, Panjim, Goa"
  },
  {
    "year": "1995",
    "title": "Aids Awareness Painting Competition",
    "location": "Goa"
  },
  {
    "year": "1995",
    "title": "Kala Mela Exhibition",
    "location": "Bangalore"
  },
  {
    "year": "1994-2016",
    "title": "Goa State Art Exhibitions",
    "location": "Panjim, Goa"
  },
  {
    "year": "1994",
    "title": "Landscape Exhibition",
    "location": "Mahashala Kala Sangam, Marcel"
  }
  ],
  },
  {
    id: "verodinaferrao",
    name: "Verodina Ferrao",
    profileImage: "/verodina.jpg",
    biography: `Verodina Ferrao, é uma célebre artista goesa, cujo trabalho e escultura em
cerâmica deixou já uma marca indelével no cenário artístico de Goa. Tendo
começado a sua carreira como oleira, gradualmente foi expandindo a sua arte
na escultura, trabalhando com diversos materiais como o barro, a madeira e a
pedra. A suas criações costumam captar as subtilezas da experiência humana,
variando de uma expressão alegre e extravagante a um estado profundamente
espiritual, com temas religiosos que frequentemente emergem no seu
trabalho. Um dos aspetos mais impressionantes da arte de Verodina é sua
capacidade de trazer vida a espaços públicos através de instalações artísticas
de grande escala ao ar livre. Entre as suas obras mais reconhecidas encontra-se
a escultura da uma pescadora numa rotunda em Panaji, uma homenagem às
mulheres resilientes das comunidades de pescadores goeses. Outra peça
significativa é o &quot; Cristo ressuscitado &quot; na Igreja Bambolim, uma poderosa
representação de fé que mostra sua destreza em transmitir emoção através da
expressão plástica. Além dos temas tradicionais, Verodina também explorou
assuntos contemporâneos, criando trabalhos instigantes que refletem o
impacto da era digital na interação humana. O seu estúdio em Karaswada,
Mapusa, é um refúgio para os amantes da arte, confinado no quintal da sua
casa de família. Aqui, os visitantes podem testemunhar seu processo criativo,
desde moldar argila crua até aplicar técnicas intrincadas como os esmaltes
Raku, que permitem criar peças de cerâmica com um acabamento distinto. O
estúdio não é apenas um espaço de trabalho, mas um arquivo vivo da sua
evolução artística, onde cada peça conta uma história. A arte de Verodina está
profundamente entrelaçada com a cultura de Goa, preservando as suas
tradições e também envolvendo-se com as influências modernas. As suas
esculturas - sejam descontraídas, devocionais ou refletindo a mudança social -
serve como uma ponte entre o passado e o presente. Através do seu trabalho,
ela tornou-se um símbolo da herança artística de Goa, garantindo que as suas
histórias e emoções sejam captadas através de formas duradouras. Mais do
que apenas uma artista, Verodina Ferrao é uma contadora de histórias cujo
meio ou instrumento é a argila e a pedra. A sua capacidade de evocar emoção
e provocar os pensamentos através das suas esculturas consolidou o seu lugar

como uma das artistas contemporâneas mais reverenciados em todo o Estado
de Goa. Seja em instalações públicas ou peças de estúdio mais íntimas ou
pessoais, o seu trabalho continua a inspirar, evocando nos espectadores a
beleza e a complexidade da vida humana.`,
    address: "Rua do Carmo, 89, Porto",
    contact: "+351 978 901 234",
    portfolio: [
     { title: "CANÇÃO DO AMOR", image: "/verodina1.jpg", description: "Caramic", price: "₹ 70,000/-", year: "2025" },
     { title: "SOPA DE LETRAS", image: "/verodina2.jpg", description: "Caramic", price: "₹ 120,000/-", year: "2025" },
    ],
    exhibitions: [
   {
      "year": "2024",
      "title": "Footprints of Hope: group Show",
      "location": "Old Goa"
    },
    {
      "year": "2023",
      "title": "Engraved Treasures",
      "location": "Goa"
    },
    {
      "year": "2021",
      "title": "Negritude: An exhibition of African Americans artist with Goan artists",
      "location": "Goa"
    },
    {
      "year": "2019",
      "title": "Ceu Mar e Prias de Calangute: group show",
      "location": "Art Chamber Calangute, Goa"
    },
    {
      "year": "2018",
      "title": "Group Show",
      "location": "Art Chambers, Calangute, Goa"
    },
    {
      "year": "2017",
      "title": "She: group Show",
      "location": "The Cube, Moira"
    },
    {
      "year": "2015",
      "title": "Kama Reinvented: group Show",
      "location": "Gitanjali, Panjim"
    },
    {
      "year": "2014",
      "title": "A brush with faith. Group show",
      "location": "Pilar"
    },
    {
      "year": "2003",
      "title": "Festival of Art",
      "location": "Pangim Goa"
    },
    {
      "year": "2001",
      "title": "Festival of India",
      "location": "Port Huron Museum, Michigan USA"
    },
    {
      "year": "2000",
      "title": "Varied journeys: group show",
      "location": "Art Chambers, Calangute Goa"
    },
    {
      "year": "2000",
      "title": "Portugal through the eyes of Goan artistes: group show",
      "location": "Galeria Jose de Guimaraes, Portugal"
    },
    {
      "year": "1999",
      "title": "Fado",
      "location": "Lalit Kala Akademi, Kala Akademi Goa"
    },
    {
      "year": "1999",
      "title": "Fado: an exhibition of works of Goan artists",
      "location": "Jamaat art Gallery, Mumbai"
    },
    {
      "year": "1997",
      "title": "Verodina: an exhibition of sculpture curated by Wendell Rodrigues",
      "location": "Goa"
    },
    {
      "year": "1997",
      "title": "Different Strokes: an exhibition of sculptures",
      "location": "Galleria Ralino, Panjim Goa"
    }
]
  },
  {
    id: "yolandakammermeier",
    name: "Yolanda de Sousa Kammermeier",
    profileImage: "/yolanda.jpg",
    biography: `Nasceu e cresceu em Goa, um território português até à sua libertação em
1961. Yolanda de Sousa Kammermeier é licenciada em pintura pela
Universidade de Bombaim. O estilo de Yolanda de criar um efeito semelhante
ao da cerâmica sobre a tela, com relevo e alto brilho, tornou-se a sua marca
registada. Desde há algum tempo, Yolanda tem adicionado instalações e
vídeos curtos ao seu repertório de criações que têm vindo a público como
parte das suas exposições individuais desde 2009. Muito viajada, Sousa
Kammermeier já realizou 25 exposições individuais e mais de 100 exposições
coletivas na Índia e no estrangeiro. Em cidades como Montreal, Berlim,
Bremen, Nova Iorque, Veneza, Lake valence, Hajdubosormeny, Haydunanas na
Hungria, Áustria, Roménia, Japão, Coreia, Polónia, Rússia e Brasil, além de
várias outras cidades na Índia como Mumbai, Bangalore, Hyderabad, Kolkata,
Jaipur, Delhi e Goa. Tem sido convidada e tem participado em eventos de arte
internacionais/residências artísticas dentro e fora da Índia e tem sido aclamada
pelo seu trabalho através de prémios que tem recebido ao longo da sua vasta
carreira.`,
    address: "Avenida dos Aliados, 167, Porto",
    contact: "+351 989 012 345",
    portfolio: [
      { title: "CAMÕES NA PRAIA DE CALANGUTE, NOVEMBRO DE 1553", image: "/yolanda1.jpg", description: "Acrylic on Canvas", price: "₹ 250,000/-", year: "2025" },
      { title: "CAMÕES E PANJIM HOJE", image: "/yolanda2.jpg", description: "Acrylic on Canvas", price: "₹ 250,000/-", year: "2025" },
    ],
exhibitions: [
    {
    "year": "2025",
    "title": "Liberdade",
    "location": "Artivo Galeria, Fortaleza Brasil"
  },
  {
    "year": "2024",
    "title": "International Art Meet",
    "location": "Hawaje Poland"
  },
  {
    "year": "2024",
    "title": "International Art Exhibition",
    "location": "Folwark Hawaje, Stara Wiśniewka Poland"
  },
  {
    "year": "2022",
    "title": "Toyama International Art Camp by Toyama Prefectural Artistic and Cultural Society",
    "location": "Toyama Japan"
  },
  {
    "year": "2022",
    "title": "International Art Exhibition",
    "location": "Toyama Japan"
  },
  {
    "year": "2020-2021",
    "title": "Lockdown Musings...",
    "location": "Art Chamber-Goa"
  },
  {
    "year": "2019",
    "title": "International Group Show",
    "location": "Budapest Hungary"
  },
  {
    "year": "2018",
    "title": "Toyama International Art Residency organized by the Toyama Prefectural Artistic and Cultural Society",
    "location": "Toyama Japan"
  },
  {
    "year": "2018",
    "title": "International Art Exhibition",
    "location": "Marianowo Poland"
  },
  {
    "year": "2018",
    "title": "Monsoon Clutter",
    "location": "Art Chamber-Goa"
  },
  {
    "year": "2016",
    "title": "Alma e a Vida",
    "location": "Art Chamber-Goa"
  },
  {
    "year": "2015",
    "title": "Inspire Trust International Art Residency",
    "location": "Goa"
  },
  {
    "year": "2015",
    "title": "IX. International Symposion",
    "location": "Lake Velence Hungary"
  },
  {
    "year": "2015",
    "title": "9th International Symposium of Modern Art d. fleiss & east-west artists",
    "location": "Mallnitz Austria"
  },
  {
    "year": "2015",
    "title": "International Art Exhibition Artists at Malinitz Austria",
    "location": "Malinitz Austria"
  },
  {
    "year": "2015",
    "title": "International Art Exhibition",
    "location": "Lake Valence Town Gallery Hungary"
  },
  {
    "year": "2015",
    "title": "International Art Exhibition",
    "location": "Toyama Japan"
  },
  {
    "year": "2014",
    "title": "Incident III-Accident",
    "location": "Czestochowa Museum-Poland"
  },
  {
    "year": "2013",
    "title": "International Art Camp organized by Tellus Art Sweden and Directorate of Art and Culture",
    "location": "Goa"
  },
  {
    "year": "2013",
    "title": "International Art Camp organized by The International Artists Colony",
    "location": "Hajdubozsermeny Hungary"
  },
  {
    "year": "2013",
    "title": "International Art Camp organized by The International Artists Colony",
    "location": "Hajdunanas Hungary"
  },
  {
    "year": "2013",
    "title": "International Artists Camp",
    "location": "Zerind Arad Romania"
  },
  {
    "year": "2013",
    "title": "International Artists Exhibition Romania",
    "location": "Zerind Art Gallery Arad"
  },
  {
    "year": "2013",
    "title": "International Artists Exhibition Hajdunanas Hun.",
    "location": "Town Hall Gallery-Hungary"
  },
  {
    "year": "2013",
    "title": "International Artists Exhibition",
    "location": "Varos Galeria- Hungary"
  },
  {
    "year": "2013",
    "title": "Simply Watercolors",
    "location": "Art Chamber-Goa"
  },
  {
    "year": "2012",
    "title": "50th International Art Camp organized by The International Artists Colony",
    "location": "Hajdubozsermeny Hungary"
  },
  {
    "year": "2012",
    "title": "48th International Artists Exhibition",
    "location": "Varos Galeria- Hungary"
  },
  {
    "year": "2012",
    "title": "See it my Way",
    "location": "Art Chamber-Goa"
  },
  {
    "year": "2011",
    "title": "The International Art Camp organized by The International Artists Colony",
    "location": "Hajdubozsermeny Hungary"
  },
  {
    "year": "2011",
    "title": "49th International Artists Exhibition-Varos",
    "location": "Galeria-Hungary"
  },
  {
    "year": "2011",
    "title": "Little Treasures",
    "location": "Bologna -Italy"
  },
  {
    "year": "2011",
    "title": "VIDA",
    "location": "Kunstzentrum - Bremen Germany"
  },
  {
    "year": "2011",
    "title": "The Wait",
    "location": "Art Chamber-Goa"
  },
  {
    "year": "2010",
    "title": "Artists at Home and Abroad",
    "location": "Broadway Gallery-New York"
  },
  {
    "year": "2010",
    "title": "Journey Beyond Time",
    "location": "Wedding Art Gallery-Berlin"
  },
  {
    "year": "2010",
    "title": "Once Upon a Time",
    "location": "Hanse Art Fair-Bremen Germany"
  },
  {
    "year": "2009",
    "title": "Apathy",
    "location": "Art Chamber-Goa"
  },
  {
    "year": "2009",
    "title": "Destined Destiny",
    "location": "Galerie Gora-Montreal, Canada"
  },
  {
    "year": "2008",
    "title": "Biennale de Venizia",
    "location": "Venice Italy"
  },
  {
    "year": "2007",
    "title": "Roots & Shoots",
    "location": "Corks Gallery, London"
  },
  {
    "year": "2006",
    "title": "Recent Works",
    "location": "Kitab Mahal Mumbai"
  },
  {
    "year": "2006",
    "title": "Yolanda's Recent Works",
    "location": "Right Lines Bangalore"
  },
  {
    "year": "2005",
    "title": "Faces and Phases...",
    "location": "Art Chamber - Galeria de Belas Artes Goa"
  },
  {
    "year": "2005",
    "title": "Yesterday....",
    "location": "Chitrakala Parishad Bagalore"
  },
  {
    "year": "2004",
    "title": "Women Artists on Amrita Sher Gil",
    "location": "Moskow and Tashkent"
  },
  {
    "year": "2004",
    "title": "Women on Women",
    "location": "Int. Festival of Art Bangalore"
  },
  {
    "year": "2003",
    "title": "Saudades...",
    "location": "Galeria Cidade-Goa"
  },
  {
    "year": "2001",
    "title": "International Exhibition of Art",
    "location": "Busan Korea"
  },
  {
    "year": "1998",
    "title": "Bayrn in Februar....",
    "location": "Art Chamber-Goa"
  }
  ],
  }

];