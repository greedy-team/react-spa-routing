import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../modeToggle";
import { NavLink, useLocation } from "react-router-dom";
import NEWS_CATEGORIES from "@/constants/newsCategory";

export function Header() {
  const location = useLocation();
  const currentCategory =
    NEWS_CATEGORIES.find(
      (category) => category.href === location.pathname.toLowerCase()
    )?.title ?? "General";

  return (
    <header className="border-b w-full px-4 py-2">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex flex-row items-center space-x-2 ">
          <NavLink to="/" className="text-xl font-bold text-primary">
            Greedy News
          </NavLink>

          <NavigationMenu>
            <NavigationMenuList className="hidden lg:flex gap-1">
              {NEWS_CATEGORIES.map((category) => (
                <HeaderMenuListItem
                  key={category.href}
                  title={category.title}
                  href={category.href}
                />
              ))}
            </NavigationMenuList>

            <NavigationMenuList className="flex lg:hidden">
              <NavigationMenuItem>
                <NavigationMenuTrigger>{currentCategory}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul>
                    {NEWS_CATEGORIES.map((category) => (
                      <li key={category.href} className="mb-2">
                        <NavigationMenuLink asChild>
                          <NavLink to={category.href}>{category.title}</NavLink>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}

const HeaderMenuListItem = ({
  title,
  href,
}: {
  title: string;
  href: string;
}) => {
  return (
    <NavigationMenuList key={title}>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <NavLink to={href}>{title}</NavLink>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
};
