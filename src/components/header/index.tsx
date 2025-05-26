import Navbar04Page from "@/components/header/navbar/navbar-04";

interface HeaderProps {
  page: string;
}

export function Header(props: HeaderProps) {
  return (
    <header className="bg-muted">
        <div className="fixed top-0 left-0 right-0 z-40 bg-muted w-full h-14"/>
        <div className="fixed top-0 left-0 right-0 z-40 bg-muted w-full h-28 blur-md"/>
        <Navbar04Page active={props.page} />
    </header>
  );
};
