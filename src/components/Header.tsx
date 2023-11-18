import { HeaderFullSize } from "./HeaderFullSize";
import { HeaderMobile } from "./HeaderMobile";

export function Header() {
  return (
    <header className="sticky top-0 h-16 w-full border-b border-b-border-color bg-white px-4 font-medium lg:relative">
      <HeaderFullSize />
      <HeaderMobile />
    </header>
  );
}
