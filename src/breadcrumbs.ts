import type { BreadcrumbList, ListItem } from "schema-dts";
import { startCase } from "lodash-es";

export function generate(url: URL) {
  console.log(url);

  let itemList = [];

  const home: ListItem = {
    "@type": "ListItem",
    position: 1,
    name: "Halaman Depan",
    item: url.origin,
  };

  itemList.push(home);

  if (url.pathname !== "/") {
    let thisPage: ListItem = {
      "@type": "ListItem",
      position: 2,
      name: startCase(url.pathname),
      item: url.origin,
    };

    itemList.push(thisPage);
  }

  const breadcrumbList: BreadcrumbList = {
    "@type": "BreadcrumbList",
    itemListElement: itemList,
  };

  return breadcrumbList;
}
