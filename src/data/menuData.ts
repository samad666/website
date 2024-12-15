export interface MenuItem {
  name: string;
  description: string;
  image: string;
  price?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    title: "Morning Munchies",
    items: [
      {
        name: "Scone Cold Fox",
        description: "Classic scones with clotted cream and jam",
        image: "https://static01.nyt.com/images/2024/09/25/multimedia/25KOrex-sconesrex-fbmj/18KOrex-sconesrex-fbmj-jumbo.jpg",
        price: "$4.50"
      },
      {
        name: "Croissant Me Not",
        description: "Flaky croissants stuffed with chocolate, almond, or ham and cheese",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
        price: "$3.95"
      },
      {
        name: "Muffin to See Here",
        description: "A selection of jumbo muffins: blueberry, banana nut, and double chocolate",
        image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?w=800&q=80",
        price: "$3.75"
      }
    ]
  },
  {
    title: "Sweet Treats",
    items: [
      {
        name: "Holy Cannoli!",
        description: "Fresh cannolis with ricotta or chocolate filling",
        image: "data:image/jpeg;base64,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",
        price: "$4.25"
      },
      {
        name: "Eclairvoyant",
        description: "Cream-filled eclairs topped with chocolate glaze",
        image: "https://images.unsplash.com/photo-1612809075925-230725151da2?w=800&q=80",
        price: "$4.50"
      },
      {
        name: "Tart Me Up",
        description: "Assorted fruit tarts (strawberry, kiwi, and lemon meringue)",
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80",
        price: "$5.25"
      },
      {
        name: "Pie-curious",
        description: "Mini pies in apple, cherry, and pecan flavors",
        image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?w=800&q=80",
        price: "$6.00"
      }
    ]
  },
  {
    title: "Bread & Butter",
    items: [
      {
        name: "Loaf Actually",
        description: "Crusty artisan loaves, sourdough, and focaccia",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80",
        price: "$6.50"
      },
      {
        name: "Butter Off Dead",
        description: "Buttery brioche rolls served warm",
        image: "https://images.unsplash.com/photo-1620921568790-c1cf8984624c?w=800&q=80",
        price: "$4.25"
      },
      {
        name: "Rye Humor",
        description: "Fresh rye bread with a hint of caraway",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOaz-6X5WH4GBXZJrlyflfKKkR16v2cfUaxA&s",
        price: "$5.75"
      }
    ]
  },
  {
    title: "Cookies & More",
    items: [
      {
        name: "Chip Happens",
        description: "Gooey chocolate chip cookies",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
        price: "$2.50"
      },
      {
        name: "Donut Tempt Me",
        description: "Assorted donuts: glazed, powdered, and filled",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80",
        price: "$3.25"
      },
      {
        name: "Macaron Madness",
        description: "Colorful French macarons in seasonal flavors",
        image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&q=80",
        price: "$2.75"
      },
      {
        name: "Snicker-Doodler",
        description: "Classic cinnamon sugar cookies",
        image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=800&q=80",
        price: "$2.25"
      }
    ]
  },
  {
    title: "Savory Bites",
    items: [
      {
        name: "Quiche Me Quick",
        description: "Spinach & feta or bacon & cheddar quiches",
        image: "https://images.unsplash.com/photo-1623428454614-abaf00244e52?w=800&q=80",
        price: "$7.50"
      },
      {
        name: "Rollin' in the Dough",
        description: "Savory stuffed rolls with chicken, spinach, or cheese",
        image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2Farchive%2Fa45b1e38c953ffa12cfd13ebf4ab3b6b6f821bef",
        price: "$4.75"
      },
      {
        name: "Pretzel Logic",
        description: "Soft pretzels with mustard or cheese dip",
        image: "https://thecozyplum.com/wp-content/uploads/2020/11/1x1-pumpkin-spice-soft-pretzel-1.jpg",
        price: "$4.25"
      }
    ]
  },
  {
    title: "Beverages",
    items: [
      {
        name: "Mocha Choca Latte Ya Ya",
        description: "Rich, creamy coffee-based drinks",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80",
        price: "$4.50"
      },
      {
        name: "Steep Dreams",
        description: "A variety of premium teas",
        image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=800&q=80",
        price: "$3.75"
      },
      {
        name: "Hot Cocoa Loco",
        description: "Decadent hot chocolate with whipped cream",
        image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=800&q=80",
        price: "$4.25"
      },
      {
        name: "Freshly Squeezed",
        description: "Orange juice and other seasonal juices",
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&q=80",
        price: "$4.00"
      }
    ]
  }
];