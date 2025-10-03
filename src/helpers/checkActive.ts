export const checkActive = (pathname: string, href: string) => {
  const splitPathNameCurrent = pathname.split("/");
  const splitHref = href.split("/");
  return (
    splitPathNameCurrent[1] === splitHref[1] &&
    splitPathNameCurrent[2] === splitHref[2]
  );
};
