// Our product database.
const sampleProducts = [
  {
    id: 1,
    name: "Renata",
    category:"Lifestyle Sneakers",
    price: 194.95,
    description:
      "Rock a cute summer vibe in the laid-back ara® Renata nubuck leather lace-up sneaker.Features fun striped laces and a lightly padded tongue and collar.",
    popular: true,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/4/2/7/4/5042745-t-THUMBNAIL.jpg",
      "https://www.zappos.com/p/ara-renata-jeans-nubuck/product/9379758/color/3698"
    ]
  },
  
    {
      id: 2,
      name: "Briah Perf Sling",
      category: "Wedge Heels",
      price: 109.95,
      description:
        "Bare your fresh pedi in style with the sleek and summer-ready Briah Perf Sling.",
      popular: true,
      imageUrls: [
        "https://www.zappos.com/images/z/4/2/4/8/2/1/4248210-t-THUMBNAIL.jpg",
        "https://www.zappos.com/p/rockport-briah-perf-sling-white/product/8826594/color/14"
      ]
    },
  {
    id: 3,
    name: "Enjoy Spikeless Two-Tone",
    category: "Running Shoes",
    price: 89.95,

    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/7/1/7/9/2/4717924-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 4,
    name: "Suede and Leather Chunky Sole Sneaker",
    category: "Running Shoes",
    price: 250,
    description:
      "Don't miss a beat in the suede and fabricated Versace Jeans Couture" +
      "Suede and Leather Chunky Sole Sneakers with lace front closure and pull-tab at the tongue and heel." +
      "Leather and fabricated lining.",
      
    popular: true,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/5/2/4/1/4952419-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 5,
    name: "Tiptop",
    category: "Running Shoes",
    price: 79.90,
    description:
      "The David Tate® Tiptop slip-on sneaker with a knit mesh upper keeps up with your day-to-day.",

    popular: true,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/0/4/1/1/5004119-t-THUMBNAIL.jpg",
    ]
  },

  {
    id: 7,
    name: "S-Lite",
    category: "Athletic Shoes",
    price: 159.95,
    description: "ECCO YAK leather upper with a diamond-shaped embossing for superior breathability.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/5/9/2/3/7/4592375-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 8,
    name: "Nurse Mates",
    category:  "Athletic Shoes",
    price: 89.95,
    description: "",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/8/4/0/7/4984072-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 9,
    name: "Net 3",
    category: "Athletic Shoes",
    price: 115.00,
    description: "",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/2/5/0/4/5025044-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 10,
    name: "V-12",
    category:  "Athletic Shoes",
    price: 150.00,
    description: "",

    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/7/7/0/2/4977022-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 11,
    name: "LS",
    category:  "Althetic Shoes",
    price:104.95 ,
    description:
      "Treat your feet to the Arcopedico® Vegan LS lace-up oxford. Features a knit upper for fashionable and long-lasting wear and lining contains the Sansmell™ deodorizing system which is antimicrobial.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/1/0/0/8/3/4/1008345-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 11,
    name: "Kinetic Lite Lace",
    category:   "Lifestyle Sneakers",
    price: 119.95,
    description:
      "The sporty-chic look of the SOREL® Kinetic™ Lite Lace sneakers make a fun seasonal statement and are so lightweight you might forget you're wearing them!",
    popular: false,
    imageUrls: [
       "https://www.zappos.com/images/z/5/0/0/4/1/2/5004121-t-THUMBNAIL.jpg"
    ]
  },
 
  {
    id: 11,
    name: "",
    category:  "Cowboy Boots",
    price: 2,
    description:
      "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: 11,
    name: "",
    category:  "Classic Sneakers",
    price: 2,
    description:
      "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: 11,
    name: "",
    category:  "Classic Sneakers",
    price: 2,
    description:
      "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: 11,
    name: "",
    category:  "Classic Sneakers",
    price:2 ,
    description:
      "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: 11,
    name: "",
    category:  "Classic Sneakers",
    price: 2,
    description:
      "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: 11,
    name: "",
    category:  "Classic Sneakers",
    price: 2,
    description:
      "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: 11,
    name: "",
    category:  "Classic Sneakers",
    price: 2,
    description:
      "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: 11,
    name: "",
    category:  "Classic Sneakers",
    price: 2,
    description:
      "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: 11,
    name: "",
    category:  "Classic Sneakers",
    price: 2,
    description:
      "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: 11,
    name: "",
    category:  "Classic Sneakers",
    price: 2,
    description:
      "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: 11,
    name: "",
    category:  "Classic Sneakers",
    price: 2,
    description:
      "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: 11,
    name: "",
    category:  "Classic Sneakers",
    price: 2,
    description:
      "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: 11,
    name: "",
    category:  "Classic Sneakers",
    price: 2,
    description:
      "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
];

// List of item categories.
const categories = [
 
  {
    name: "Running Shoes",
    icon: "group",
    
    
  },
  {
    name: "Athletic Shoes",
    icon: "group"
    
  },


  {
    name: "Lifestyle Sneakers",
    icon: "group"
  }
];
const Shoes = [
  
  {
    name: "Dress Heels",
    icon:"group"
  },
  {
    name:  "Pumps",
    icon: "group"
    
  },
  {
    name:"Wedge Heels",
    icon: "group"
    
  },
  {
    name:"Bootie Heels",
    icon: "group"
    
  },
  {
    name:"Heeled Sandals",
    icon: "group"
    
  },
];
const Boots = [
  
  {
    name: "Chelsea Boots",
    icon:"group"
  },
  {
    name:  "Cowboy Boots",
    icon: "group"
    
  },
  {
    name:"Winter and Snow Boots",
    icon: "group"
    
  },
  {
    name:"Dress Boots",
    icon: "group"
    
  },
  {
    name:"Rain Boots",
    icon: "group"
    
  },
];

// Data for rendering menu.
const dataForTheMenu = [
  { name: "Home page", url: "/", icon: "home", id: 0 },
  { name: "All categories", url: "?category=All%20categories&itemCategoryClicked=true", icon: "list", id: 0 },

  {
    name: "Sneakers and Athletic Shoes", 
    id: 2,
    children: categories.map((x, i) => {
      return {
        name: x.name,
        id: 2 + i,
        url: "/?category=" + x.name + "&itemCategoryClicked=true",
        icon: x.icon
      };
    })
  },
  {
    name: "Heels",
    id: 3,
    children: Shoes.map((x, i) => {
      return {
        name: x.name,
        id: 2 + i,
        url: "/?category=" + x.name + "&itemCategoryClicked=true",
        icon: x.icon
      };
    })
  },
  {
    name: "Boots",
    id: 3,
    children: Boots.map((x, i) => {
      return {
        name: x.name,
        id: 2 + i,
        url: "/?category=" + x.name + "&itemCategoryClicked=true",
        icon: x.icon
      };
    })
  },

];


export { sampleProducts, categories, dataForTheMenu };


