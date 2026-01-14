const NEWS_CATEGORIES = [
  { title: "General", href: "/" },
  { title: "Business", href: "/business" },
  { title: "Entertainment", href: "/entertainment" },
  { title: "Health", href: "/health" },
  { title: "Science", href: "/science" },
  { title: "Sports", href: "/sports" },
  { title: "Technology", href: "/technology" },
] as const;

export type ValidCategory = (typeof NEWS_CATEGORIES)[number]["href"];

export default NEWS_CATEGORIES;
