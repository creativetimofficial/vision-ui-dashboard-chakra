/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtl from "stylis-plugin-rtl";
// NB: A unique `key` is important for it to work!
const options = {
  rtl: { key: "css-ar", stylisPlugins: [rtl] },
  ltr: { key: "css-en" },
};
export function RtlProvider({ children }) {
  const dir = document.documentElement.dir == "ar" ? "rtl" : "ltr";
  const cache = createCache(options[dir]);
  return <CacheProvider value={cache} children={children} />;
}
