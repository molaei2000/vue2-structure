import router from "@/router";
import app from "../tools/App";
import Lang from "../tools/Lang";
import auth from "../tools/Auth";

// Require auth
router.beforeEach((to, from, next) => {
  if (!to.matched.some((record) => record.meta.requiresAuth)) return next();
  if (!auth.check())
    return next({ name: "auth", query: { redirect: to.fullPath } });
  next();
});

// Require guest
router.beforeEach((to, from, next) => {
  if (!to.matched.some((record) => record.meta.requiresGuest)) return next();
  if (auth.check())
    return next({ name: "panel", params: { lang: Lang.locale() } });
  next();
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.headTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle)
    document.title = nearestWithTitle.meta.title + " | " + app.app_name;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(
    document.querySelectorAll("[data-vue-router-controlled]")
  ).map((el) => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.headTags
    .map((tagDef) => {
      let tag_name = tagDef["tag_name"] ? tagDef["tag_name"] : "meta";
      if (tagDef["tag_name"]) delete tagDef.tag_name;

      const tag = document.createElement(tag_name);

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })

    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  // Set lang
  document.getElementsByTagName("html")[0].setAttribute("lang", Lang.locale());
  next();
});
