import { useSearchParams } from "react-router";
import { StickyNav } from "../components/stickynav";
import { SearchBar } from "../components/search";

export function meta() {
  return [
    {
      title:
        "Ruby Ryan Atelier — Used items from models, artists, and creators",
    },
    {
      name: "description",
      content:
        "A marketplace where you can get used items from models, artists, and creators.",
    },
  ];
}

export default function Home() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") ?? "").toLowerCase();

  const filteredNewItems = sampleNewItems.filter(
    (p) =>
      p.title.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query),
  );
  const filteredSnapItems = sampleSnapItems.filter(
    (p) =>
      p.title.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query),
  );
  const filteredPickers = samplePickers.filter((p) =>
    p.name.toLowerCase().includes(query),
  );

  return (
    <div className="h-full text-gray-900 bg-teal-50">
      <StickyNav />
      {
        <main className="flex flex-col gap-10 md:gap-12">
          <FeaturedHero />
          <SearchBar />
          <TopicPills />

          <SectionHeader ja="DIY Projects" en="DIY PROJECTS" />
          <ArticleGrid articles={diyArticles} query={query} />

          <SectionHeader ja="Needlecrafts" en="NEEDLECRAFTS" />
          <ArticleGrid articles={needlecraftsArticles} query={query} />

          <SectionHeader ja="Paper Crafts" en="PAPER CRAFTS" />
          <ArticleGrid articles={paperCraftsArticles} query={query} />

          <SectionHeader ja="Best Products" en="WHAT TO BUY" />
          <ArticleGrid articles={bestProductGuides} query={query} />

          <Newsletter />
        </main>
      }
      <SiteFooter />
    </div>
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-semibold md:text-2xl">{title}</h2>
        {subtitle && <span className="text-xs text-gray-500">{subtitle}</span>}
      </div>
    </div>
  );
}

function OfferCode() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800 md:p-8">
        <h3 className="text-lg font-semibold">
          Find your subscription by entering your offer code
        </h3>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Enter your offer code"
            className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-gray-400 dark:border-gray-700 dark:bg-gray-900"
          />
          <button className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-black">
            Validate
          </button>
        </div>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          Our offer codes provide access to special subscription deals. You can
          find them in our magazines, on our website, or in our newsletters.
        </p>
      </div>
    </section>
  );
}

function BlogPreview({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-2 p-4">
              <div className="text-xs text-gray-500">
                {post.tag} · {post.date}
              </div>
              <h3 className="line-clamp-2 font-medium">{post.title}</h3>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Read more
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ValueProps() {
  const items = [
    {
      icon: "🔒",
      title: "Simple and secure payment",
      desc: "Enjoy a smooth shopping experience with our protected and secure payment system.",
    },
    {
      icon: "✂️",
      title: "Quality products",
      desc: "Discover patterns with precise cuts and well-designed lines for a perfect fit.",
    },
    {
      icon: "😊",
      title: "Satisfaction guaranteed",
      desc: "If a product doesn't meet your expectations, return it within 15 days for a full refund.",
    },
    {
      icon: "🗓️",
      title: "New releases every month",
      desc: "New magazines and collections monthly to spark your inspiration.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {items.map((i) => (
          <div
            key={i.title}
            className="rounded-2xl border border-gray-200 p-5 dark:border-gray-800"
          >
            <div className="text-2xl">{i.icon}</div>
            <h4 className="mt-2 font-semibold">{i.title}</h4>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {i.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function NewsletterBurda() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800 md:p-10">
        <h3 className="text-lg font-semibold">Newsletter</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Get inspiration and receive updates on new issues and pattern
          collections!
        </p>
        <form className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-gray-400 dark:border-gray-700 dark:bg-gray-900"
          />
          <button
            type="submit"
            className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-black"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

type BlogPost = {
  id: string;
  title: string;
  tag: string;
  date: string;
  image: string;
};
type Guide = { id: string; title: string; tag: string; image: string };

const latestCollectionProducts: Product[] = [
  {
    id: "lc1",
    brand: "Burda Style 08/25",
    title: "Knit Dress 101",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "lc2",
    brand: "Burda Style 08/25",
    title: "Satin Skirt 103",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "lc3",
    brand: "Burda Style 08/25",
    title: "Satin Dress 105",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "lc4",
    brand: "Burda Style 08/25",
    title: "Polyester Trousers 108",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "lc5",
    brand: "Burda Style 08/25",
    title: "Polyester Dress 110",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1520975922138-8bdf0a50efba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "lc6",
    brand: "Burda Style 08/25",
    title: "Velvet Corset 113",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1605731414532-6b26976cc153?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "lc7",
    brand: "Burda Style 08/25",
    title: "Silk Blouse 116",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "lc8",
    brand: "Burda Style 08/25",
    title: "Velvet Waistcoat 119",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "lc9",
    brand: "Burda Style 08/25",
    title: "Linen Shirt 121",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "lc10",
    brand: "Burda Style 08/25",
    title: "Cashmere Dress 124",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "lc11",
    brand: "Burda Style 08/25",
    title: "Wool Coat 126",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "lc12",
    brand: "Burda Style 08/25",
    title: "Vintage Dress Audrey 130",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
  },
];

const bestSellingProducts: Product[] = [
  {
    id: "bs1",
    brand: "Burda Style 01/24",
    title: "Taffetas Dress 102",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1520975922138-8bdf0a50efba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "bs2",
    brand: "Burda Style 12/24",
    title: "Fake fur Jacket 105",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "bs3",
    brand: "Burda Style 07/24",
    title: "Viscose Dress 110",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "bs4",
    brand: "Burda Style 08/24",
    title: "Wool Waistcoat 110",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "bs5",
    brand: "Burda Style 09/24",
    title: "Denim Jacket 111",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "bs6",
    brand: "Burda Style 10/24",
    title: "Wool Coat 111",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "bs7",
    brand: "Burda Style 01/24",
    title: "Viscose-rayon Blouse 116",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "bs8",
    brand: "Burda Style 12/24",
    title: "Sequin Blouson 120",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "bs9",
    brand: "Burda Style 12/24",
    title: "Polyester Blouse 124",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "bs10",
    brand: "Burda Style 01/24",
    title: "Satin Cocktail Dress 125",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1600&auto=format&fit=crop",
  },
];

const blogPosts: BlogPost[] = [
  {
    id: "b1",
    tag: "Inspiration",
    date: "Aug 11, 2025",
    title: "DIY: Sew a Pencil Case",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "b2",
    tag: "Inspiration",
    date: "Aug 06, 2025",
    title: "Embody La Dolce Vita With This Handmade Burda Look!",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "b3",
    tag: "Tutorial",
    date: "Aug 03, 2025",
    title: "Beginner Tips: Reading Burda Patterns",
    image:
      "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef13?q=80&w=1600&auto=format&fit=crop",
  },
];

// Spruce-like sample content
const diyArticles: Guide[] = [
  {
    id: "d1",
    tag: "DIY Projects",
    title: "12 Succulent Terrariums to Show Off Your Green Thumb",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "d2",
    tag: "DIY Projects",
    title: "15 DIY Summer Wreaths to Brighten Your Home",
    image:
      "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "d3",
    tag: "DIY Projects",
    title: "Beach Crafts to Make This Summer",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "d4",
    tag: "DIY Projects",
    title: "33 DIY Vases Perfect for Your Arrangements",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "d5",
    tag: "DIY Projects",
    title: "73 Inexpensive Homemade Gift Ideas",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "d6",
    tag: "DIY Projects",
    title: "14 Finger Knitting Projects Anyone Can Do",
    image:
      "https://images.unsplash.com/photo-1542219550-4620bcfef63b?q=80&w=1600&auto=format&fit=crop",
  },
];

const needlecraftsArticles: Guide[] = [
  {
    id: "n1",
    tag: "Needlecrafts",
    title: "9 Cross-Stitch Patterns to Try Before Summer Ends",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "n2",
    tag: "Needlecrafts",
    title: "This Is the Trick to Sewing Straight Lines",
    image:
      "https://images.unsplash.com/photo-1517676109075-9a94d242f11b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "n3",
    tag: "Needlecrafts",
    title: "Beginner Tips: Reading Patterns",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "n4",
    tag: "Needlecrafts",
    title: "10 Beautiful DIY Flower Crowns to Make",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "n5",
    tag: "Needlecrafts",
    title: "Everything You Need to Know About Shibori Dyeing",
    image:
      "https://images.unsplash.com/photo-1520975922138-8bdf0a50efba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "n6",
    tag: "Needlecrafts",
    title: "Try These Polymer Clay Ideas",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop",
  },
];

const paperCraftsArticles: Guide[] = [
  {
    id: "p1",
    tag: "Paper Crafts",
    title: "Learn How to Make Flat Paper Flowers",
    image:
      "https://images.unsplash.com/photo-1529672522903-4e4c2b0b5b7c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "p2",
    tag: "Paper Crafts",
    title: "5 Must-Have Supplies to Start Quilling",
    image:
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "p3",
    tag: "Paper Crafts",
    title: "Make a Simple Pennant Banner",
    image:
      "https://images.unsplash.com/photo-1504198266285-165a16f0c43b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "p4",
    tag: "Paper Crafts",
    title: "20 of the Best DIY Birthday Cards",
    image:
      "https://images.unsplash.com/photo-1484712401471-05c7215830eb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "p5",
    tag: "Paper Crafts",
    title: "Free Crochet Placemat Patterns",
    image:
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "p6",
    tag: "Paper Crafts",
    title: "Vintage Costume Jewelry Identification",
    image:
      "https://images.unsplash.com/photo-1535905496755-26ae35d0ae54?q=80&w=1600&auto=format&fit=crop",
  },
];

const bestProductGuides: Guide[] = [
  {
    id: "b1",
    tag: "What to Buy",
    title: "Best Crafting & Scrapbooking Products",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "b2",
    tag: "What to Buy",
    title: "Best Drawing & Painting Products",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "b3",
    tag: "What to Buy",
    title: "Best Books & Games for Crafters",
    image:
      "https://images.unsplash.com/photo-1457694587812-e8bf29a43845?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "b4",
    tag: "What to Buy",
    title: "Best Woodworking Tools for Beginners",
    image:
      "https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "b5",
    tag: "What to Buy",
    title: "Best Beadwork Kits for Starters",
    image:
      "https://images.unsplash.com/photo-1525446715643-69c215b6e117?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "b6",
    tag: "What to Buy",
    title: "Best Sewing Machines 2025",
    image:
      "https://images.unsplash.com/photo-1477865634015-0b232c1dd56a?q=80&w=1600&auto=format&fit=crop",
  },
];

function TopNavPickyou() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur dark:border-gray-800/70 dark:bg-gray-950/70">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="flex h-14 items-center justify-between">
          <a href="/" className="text-lg font-semibold tracking-tight">
            Ruby Ryan Atelier
          </a>
          <ul className="hidden items-center gap-6 text-sm text-gray-700 dark:text-gray-300 md:flex">
            <li>
              <a className="hover:underline" href="#">
                New Items
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Find Pickers
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Snap Items
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Item Categories
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Brand List
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <button
              className="rounded-full bg-gray-100 p-2 dark:bg-gray-800"
              aria-label="Search"
            >
              🔍
            </button>
            <button
              className="rounded-full bg-gray-100 p-2 dark:bg-gray-800"
              aria-label="Cart"
            >
              🛒
            </button>
            <button className="rounded-full bg-black px-3 py-1 text-white dark:bg-white dark:text-black text-sm">
              Log in
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

function HeroMarquee() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-12">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative rounded-2xl bg-black p-10 text-white">
            <p className="text-3xl font-semibold leading-tight md:text-4xl">
              WHAT IS
              <br />
              RUBY RYAN ATELIER?
            </p>
            <p className="mt-4 max-w-md text-sm text-gray-300">
              A marketplace where you can buy used items from models, artists,
              and creators.
            </p>
          </div>
          <div className="relative rounded-2xl bg-gray-100 p-10 dark:bg-gray-900">
            <p className="text-3xl font-semibold leading-tight md:text-4xl">
              HOT PICKERS
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {samplePickers.slice(0, 6).map((p) => (
                <div
                  key={p.id}
                  className="aspect-square overflow-hidden rounded-xl"
                >
                  <img
                    src={p.avatar}
                    alt={p.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          <a
            href="#"
            className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 md:col-span-2"
          >
            <img
              src="https://images.unsplash.com/photo-1520975895090-6c2b3a6b2d94?q=80&w=2000&auto=format&fit=crop"
              alt="Succulent Terrarium"
              className="h-72 w-full object-cover md:h-[420px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-xs uppercase tracking-wide text-white/80">
                DIY Projects
              </p>
              <h2 className="mt-1 text-2xl font-semibold md:text-3xl">
                12 Succulent Terrariums to Show Off Your Green Thumb
              </h2>
            </div>
          </a>
          <div className="grid gap-4">
            <a
              href="#"
              className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900"
            >
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
                alt="Cross-Stitch Patterns"
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="text-xs uppercase tracking-wide text-white/80">
                  Needlecrafts
                </p>
                <h3 className="text-lg font-semibold">
                  9 Cross-Stitch Patterns to Try Before Summer Ends
                </h3>
              </div>
            </a>
            <a
              href="#"
              className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900"
            >
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop"
                alt="DIY Wreaths"
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="text-xs uppercase tracking-wide text-white/80">
                  DIY Projects
                </p>
                <h3 className="text-lg font-semibold">
                  15 DIY Summer Wreaths to Brighten Your Home
                </h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TopicPills() {
  const topics = [
    "DIY Projects",
    "Needlecrafts",
    "Paper Crafts",
    "Kids' Crafts",
    "Hobbies",
    "Beadwork",
    "What to Buy",
  ];
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-2 overflow-x-auto py-2">
        {topics.map((t) => (
          <a
            key={t}
            href="#"
            className="snap-start rounded-full border border-gray-200 bg-white px-4 py-2 text-sm hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            {t}
          </a>
        ))}
      </div>
    </div>
  );
}

type Article = { id: string; title: string; tag: string; image: string };

function ArticleGrid({
  articles,
  query,
}: {
  articles: Article[];
  query: string;
}) {
  const filtered = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(query) ||
      a.tag.toLowerCase().includes(query),
  );
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {filtered.slice(0, 6).map((a) => (
          <a
            key={a.id}
            href="#"
            className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                src={a.image}
                alt={a.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-2 p-4">
              <div className="text-xs text-gray-500">{a.tag}</div>
              <h3 className="line-clamp-2 font-medium">{a.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function QuickLinks() {
  const links = [
    { ja: "New Items", en: "NEW ITEMS" },
    { ja: "Find Pickers", en: "FIND PICKERS" },
    { ja: "Snap Items", en: "SNAP ITEMS" },
    { ja: "Item Category", en: "ITEM CATEGORY" },
    { ja: "Brand List", en: "BRAND LIST" },
  ];
  return (
    <nav className="mx-auto max-w-7xl px-4">
      <ul className="grid grid-cols-2 gap-2 text-sm md:grid-cols-5">
        {links.map((l) => (
          <li key={l.en}>
            <a
              href="#"
              className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 dark:border-gray-800"
            >
              <span className="font-medium">{l.ja}</span>
              <span className="text-xs text-gray-500">{l.en}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function CategoryPills() {
  const categories = [
    "Outerwear",
    "Tops",
    "Pants/All-in-One",
    "Shoes",
    "Skirts/Dresses",
    "Bags",
    "Hats",
    "Accessories",
  ];
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-2 overflow-x-auto py-2">
        {categories.map((c) => (
          <button
            key={c}
            className="snap-start rounded-full border border-gray-200 bg-white px-4 py-2 text-sm hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ ja, en }: { ja: string; en: string }) {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold md:text-2xl">{ja}</h2>
        <span className="text-xs tracking-wide text-gray-500">{en}</span>
      </div>
    </div>
  );
}

type Product = {
  id: string;
  title: string;
  brand: string;
  price: string;
  image: string;
  soldOut?: boolean;
};

function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-xl border border-gray-200 bg-white p-2 transition hover:shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
        {product.soldOut && (
          <span className="absolute left-2 top-2 rounded bg-black/80 px-2 py-1 text-xs font-semibold text-white">
            SOLD OUT
          </span>
        )}
      </div>
      <div className="mt-3 space-y-1 text-sm">
        <p className="line-clamp-1 text-gray-500 dark:text-gray-400">
          {product.brand}
        </p>
        <h3 className="line-clamp-2 font-medium">{product.title}</h3>
        <p className="font-semibold">{product.price}</p>
      </div>
    </article>
  );
}

type Picker = { id: string; name: string; avatar: string };

function PickerGrid({ pickers }: { pickers: Picker[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-3 gap-3 md:grid-cols-6 md:gap-6">
        {pickers.map((p) => (
          <div key={p.id} className="text-center">
            <div className="aspect-square overflow-hidden rounded-full">
              <img
                src={p.avatar}
                alt={p.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-2 text-sm font-medium">{p.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoryTiles() {
  const tiles = [
    {
      title: "Dresses",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Hats",
      image:
        "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Sneakers",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Bags",
      image:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1600&auto=format&fit=crop",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
        {tiles.map((t) => (
          <div key={t.title} className="relative overflow-hidden rounded-2xl">
            <img
              src={t.image}
              alt={t.title}
              className="h-40 w-full object-cover md:h-56"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <p className="absolute bottom-3 left-3 text-sm font-semibold text-white md:text-base">
              {t.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BrandCloud() {
  const brands = [
    "AURALEE",
    "FRAY I.D",
    "Lee",
    "KITH",
    "AMERI",
    "VINTAGE",
    "NEW ERA",
    "NIKE",
    "COMME des GARCONS",
    "A.P.C",
  ];
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="flex flex-wrap gap-2">
        {brands.map((b) => (
          <a
            key={b}
            href="#"
            className="rounded-full border border-gray-200 px-3 py-1 text-sm hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
          >
            {b}
          </a>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800 md:p-10">
        <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Get coupons and the latest updates
        </p>
        <form className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-gray-400 dark:border-gray-700 dark:bg-gray-900"
          />
          <button
            type="submit"
            className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-black"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

function SiteFooter() {
  const links = [
    "About Ruby Ryan Atelier",
    "FAQ",
    "Terms of Use",
    "Privacy Policy",
    "Legal Notice",
    "Contact",
  ];
  return (
    <footer className="mt-10 border-t border-gray-200 py-10 text-sm dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap gap-4">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="text-gray-600 hover:underline dark:text-gray-400"
            >
              {l}
            </a>
          ))}
        </div>
        <p className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Ruby Ryan Atelier.
        </p>
      </div>
    </footer>
  );
}

// Sample data
const sampleNewItems: Product[] = [
  {
    id: "1",
    brand: "FRAY I.D",
    title: "Dress",
    price: "¥18,000",
    image:
      "https://images.unsplash.com/photo-1520975922138-8bdf0a50efba?q=80&w=1600&auto=format&fit=crop",
    soldOut: true,
  },
  {
    id: "2",
    brand: "Lee",
    title: "Denim Dress",
    price: "¥12,000",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "3",
    brand: "KITH",
    title: "Zip Hoodie",
    price: "¥20,000",
    image:
      "https://images.unsplash.com/photo-1548883354-7622d03aca29?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "4",
    brand: "vintage",
    title: "Bucket Hat",
    price: "¥10,800",
    image:
      "https://images.unsplash.com/photo-1527708676371-14f669892d02?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "5",
    brand: "AMERI",
    title: "Dress",
    price: "¥22,000",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "6",
    brand: "NEW ERA",
    title: "Hoodie",
    price: "¥8,200",
    image:
      "https://images.unsplash.com/photo-1520974735194-6b9f6a7a14a4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "7",
    brand: "NIKE",
    title: "Half-Zip",
    price: "¥12,500",
    image:
      "https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=1600&auto=format&fit=crop",
    soldOut: true,
  },
  {
    id: "8",
    brand: "AURALEE",
    title: "Hoodie",
    price: "¥15,300",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
  },
];

const sampleSnapItems: Product[] = [
  {
    id: "s1",
    brand: "A.P.C",
    title: "Denim",
    price: "¥22,000",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "s2",
    brand: "LILY BROWN",
    title: "Wool Skirt",
    price: "¥8,800",
    image:
      "https://images.unsplash.com/photo-1603251594619-c1f99fa6a95e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "s3",
    brand: "JACQUEMUS",
    title: "Coat",
    price: "¥70,000",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "s4",
    brand: "VINTAGE",
    title: "Bambi Bag",
    price: "¥5,000",
    image:
      "https://images.unsplash.com/photo-1535530903018-f4910febe33e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "s5",
    brand: "Needles",
    title: "Bucket Hat",
    price: "¥6,800",
    image:
      "https://images.unsplash.com/photo-1520975922138-8bdf0a50efba?q=80&w=1600&auto=format&fit=crop",
    soldOut: true,
  },
  {
    id: "s6",
    brand: "COMME des GARCONS",
    title: "Skirt",
    price: "¥14,000",
    image:
      "https://images.unsplash.com/photo-1582582621957-dc1b1833e178?q=80&w=1600&auto=format&fit=crop",
  },
];

const samplePickers: Picker[] = [
  {
    id: "p1",
    name: "NANAMI",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p2",
    name: "AYAGI Fumiko",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p3",
    name: "SHIHO",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p4",
    name: "Watanabe Sora",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p5",
    name: "KARIN",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p6",
    name: "Miura Kyoka",
    avatar:
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p7",
    name: "Kimura Misa",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p8",
    name: "関口 蒼",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop",
  },
];
