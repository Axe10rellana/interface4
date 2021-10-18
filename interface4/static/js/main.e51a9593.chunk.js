(this["webpackJsonp05-practica"] = this["webpackJsonp05-practica"] || []).push([
  [0],
  {
    12: function (A, e, t) {
      "use strict";
      t.r(e);
      var i = t(1),
        a = t.n(i),
        g = t(3),
        d = t.n(g),
        s = (t(8), t(0)),
        c = function () {
          return Object(s.jsxs)("div", {
            className: "header",
            children: [
              Object(s.jsxs)("h1", {
                children: [
                  "CALL ",
                  Object(s.jsx)("i", { children: "to" }),
                  " ",
                  Object(s.jsx)("b", { children: "IDEA" }),
                ],
              }),
              Object(s.jsx)("small", { children: "Get inspiration!" }),
            ],
          });
        },
        B = function (A) {
          var e = A.title,
            t = A.text,
            i = A.image;
          return Object(s.jsx)("section", {
            children: Object(s.jsxs)("div", {
              className: "card text-center animate__animated animate__fadeInUp",
              children: [
                Object(s.jsx)("div", {
                  className: "overflow",
                  children: Object(s.jsx)("img", {
                    src: i,
                    alt: e,
                    className: "card__img",
                  }),
                }),
                Object(s.jsxs)("div", {
                  className: "card-body",
                  children: [
                    Object(s.jsx)("h4", {
                      className: "card-title subtitle",
                      children: e,
                    }),
                    Object(s.jsx)("p", {
                      className: "card-text text-secondary",
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        E = [
          {
            id: 1,
            title: "Logins",
            text: "29 items",
            image:
              t.p + "interface4/interface4/static/media/image1.46dc9e17.jpg",
          },
          {
            id: 2,
            title: "Registers",
            text: "16 items",
            image:
              t.p + "interface4/interface4/static/media/image2.9f3654e1.png",
          },
          {
            id: 3,
            title: "PopUp's",
            text: "23 items",
            image:
              t.p + "interface4/interface4/static/media/image3.c63a8a3e.jpg",
          },
          {
            id: 4,
            title: "Tabs",
            text: "49 items",
            image: t.p + "interface4/interface4/static/media/image4.png",
          },
          {
            id: 5,
            title: "Footers",
            text: "25 items",
            image: t.p + "interface4/interface4/static/media/image5.png",
          },
          {
            id: 6,
            title: "Empty states",
            text: "17 items",
            image:
              t.p + "interface4/interface4/static/media/image6.c5b4f949.png",
          },
          {
            id: 7,
            title: "Calendars",
            text: "15 items",
            image: t.p + "interface4/interface4/static/media/image7.png",
          },
          {
            id: 8,
            title: "Mailings",
            text: "13 items",
            image: t.p + "interface4/interface4/static/media/image8.png",
          },
          {
            id: 9,
            title: "Lists",
            text: "26 items",
            image:
              t.p + "interface4/interface4/static/media/image9.e3ee56e3.jpg",
          },
          {
            id: 10,
            title: "Galleries",
            text: "15 items",
            image:
              t.p + "interface4/interface4/static/media/image10.47a2cb3c.png",
          },
          {
            id: 11,
            title: "Forms",
            text: "16 items",
            image:
              t.p + "interface4/interface4/static/media/image11.520563f9.png",
          },
          {
            id: 12,
            title: "Sliders",
            text: "41 items",
            image:
              t.p + "interface4/interface4/static/media/image12.c1d31301.png",
          },
          {
            id: 13,
            title: "Stats",
            text: "50 items",
            image:
              t.p + "interface4/interface4/static/media/image13.51b686b0.png",
          },
          {
            id: 14,
            title: "Testimones",
            text: "14 items",
            image: t.p + "interface4/interface4/static/media/image14.png",
          },
          {
            id: 15,
            title: "Details",
            text: "22 items",
            image:
              t.p + "interface4/interface4/static/media/image15.98733b33.jpg",
          },
          {
            id: 16,
            title: "Pricing",
            text: "19 items",
            image: t.p + "interface4/interface4/static/media/image16.png",
          },
          {
            id: 17,
            title: "Players",
            text: "227 items",
            image:
              t.p + "interface4/interface4/static/media/image17.f92a7db0.jpg",
          },
          {
            id: 18,
            title: "Themes",
            text: "26 items",
            image:
              t.p + "interface4/interface4/static/media/image18.bc7e0830.png",
          },
          {
            id: 19,
            title: "Nav",
            text: "38 items",
            image: t.p + "interface4/interface4/static/media/image19.png",
          },
        ],
        v = function () {
          return Object(s.jsx)("div", {
            className: "container",
            children: Object(s.jsx)("div", {
              className: "row",
              children: E.map(function (A, e) {
                return Object(s.jsx)(
                  "div",
                  {
                    className: "col-lg-2 col-sm-6",
                    children: Object(s.jsx)(B, {
                      title: A.title,
                      image: A.image,
                      text: A.text,
                    }),
                  },
                  e
                );
              }),
            }),
          });
        },
        Q = function (A) {
          var e = A.title,
            t = A.text,
            i = A.image;
          return Object(s.jsx)("section", {
            children: Object(s.jsxs)("div", {
              className: "card text-center animate__animated animate__fadeInUp",
              children: [
                Object(s.jsx)("div", {
                  className: "overflow",
                  children: Object(s.jsx)("img", {
                    src: i,
                    alt: e,
                    className: "card__img",
                  }),
                }),
                Object(s.jsxs)("div", {
                  className: "card-body",
                  children: [
                    Object(s.jsx)("h4", {
                      className: "card-title subtitle",
                      children: e,
                    }),
                    Object(s.jsx)("p", {
                      className: "card-text text-secondary",
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        r = [
          {
            id: 1,
            title: "Comings",
            text: "26 items",
            image:
              t.p + "interface4/interface4/static/media/image20.7a4b5d93.jpg",
          },
          {
            id: 2,
            title: "Claims",
            text: "12 items",
            image: t.p + "interface4/interface4/static/media/image21.png",
          },
          {
            id: 3,
            title: "Dashboards",
            text: "10 items",
            image: t.p + "interface4/interface4/static/media/image22.png",
          },
          {
            id: 4,
            title: "Examples",
            text: "41 items",
            image:
              t.p + "interface4/interface4/static/media/image23.dea86c94.png",
          },
          {
            id: 5,
            title: "404",
            text: "37 items",
            image:
              t.p + "interface4/interface4/static/media/image24.2c750d42.png",
          },
          {
            id: 6,
            title: "AdWords",
            text: "10 items",
            image:
              t.p + "interface4/interface4/static/media/image25.4a5daf46.png",
          },
        ],
        n = function () {
          return Object(s.jsx)("div", {
            className: "container",
            children: Object(s.jsx)("div", {
              className: "row",
              children: r.map(function (A, e) {
                return Object(s.jsx)(
                  "div",
                  {
                    className: "col-lg-2 col-sm-6",
                    children: Object(s.jsx)(Q, {
                      title: A.title,
                      image: A.image,
                      text: A.text,
                    }),
                  },
                  e
                );
              }),
            }),
          });
        },
        b = function (A) {
          var e = A.title,
            t = A.text,
            i = A.image;
          return Object(s.jsx)("section", {
            children: Object(s.jsxs)("div", {
              className: "card text-center animate__animated animate__fadeInUp",
              children: [
                Object(s.jsx)("div", {
                  className: "overflow",
                  children: Object(s.jsx)("img", {
                    src: i,
                    alt: e,
                    className: "card__img",
                  }),
                }),
                Object(s.jsxs)("div", {
                  className: "card-body",
                  children: [
                    Object(s.jsx)("h4", {
                      className: "card-title subtitle",
                      children: e,
                    }),
                    Object(s.jsx)("p", {
                      className: "card-text text-secondary",
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        l = [
          {
            id: 1,
            title: "Brand colors",
            text: "9 bandings",
            image:
              t.p + "interface4/interface4/static/media/image26.5db45e01.png",
          },
          {
            id: 2,
            title: "Textures",
            text: "21 items",
            image: t.p + "interface4/interface4/static/media/image27.png",
          },
          {
            id: 3,
            title: "Logos",
            text: "57 items",
            image:
              t.p + "interface4/interface4/static/media/image28.0d84f247.jpg",
          },
          {
            id: 4,
            title: "We Likes",
            text: "14 likes",
            image:
              t.p + "interface4/interface4/static/media/image29.9e5e47f8.jpg",
          },
        ],
        j = function () {
          return Object(s.jsx)("div", {
            className: "container",
            children: Object(s.jsx)("div", {
              className: "row",
              children: l.map(function (A, e) {
                return Object(s.jsx)(
                  "div",
                  {
                    className: "col-lg-2 col-sm-6",
                    children: Object(s.jsx)(b, {
                      title: A.title,
                      image: A.image,
                      text: A.text,
                    }),
                  },
                  e
                );
              }),
            }),
          });
        },
        h = function () {
          return Object(s.jsxs)("div", {
            className: "main",
            children: [
              Object(s.jsx)("h2", { children: "COMPONENTS" }),
              Object(s.jsx)("div", {
                className: "cards",
                children: Object(s.jsx)(v, {}),
              }),
              Object(s.jsx)("h2", { children: "LAYOUTS" }),
              Object(s.jsx)("div", {
                className: "cards",
                children: Object(s.jsx)(n, {}),
              }),
              Object(s.jsx)("h2", { children: "UTILITIES" }),
              Object(s.jsx)("div", {
                className: "cards",
                children: Object(s.jsx)(j, {}),
              }),
            ],
          });
        },
        f = function () {
          return Object(s.jsxs)("div", {
            className: "footer",
            children: [
              Object(s.jsx)("div", {
                children: Object(s.jsxs)("h3", {
                  children: [
                    "CALL to IDEA ",
                    Object(s.jsx)("small", {
                      children: "2014 - All right reserved",
                    }),
                  ],
                }),
              }),
              Object(s.jsxs)("div", {
                className: "menu",
                children: [
                  Object(s.jsx)("a", { href: "#blog", children: "Blog" }),
                  Object(s.jsx)("a", { href: "#contact", children: "Contact" }),
                  Object(s.jsx)("a", { href: "#about", children: "About" }),
                  Object(s.jsx)("a", {
                    href: "#suggests",
                    children: "Suggests",
                  }),
                  Object(s.jsx)("a", {
                    href: "#twitter",
                    children: Object(s.jsx)("i", {
                      className: "fa fa-twitter",
                    }),
                  }),
                  Object(s.jsx)("a", {
                    href: "#instagram",
                    children: Object(s.jsx)("i", {
                      className: "fa fa-instagram",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        m = function () {
          return Object(s.jsxs)("div", {
            children: [
              Object(s.jsx)(c, {}),
              Object(s.jsx)(h, {}),
              Object(s.jsx)(f, {}),
            ],
          });
        };
      t(10), t(11);
      d.a.render(
        Object(s.jsx)(a.a.StrictMode, { children: Object(s.jsx)(m, {}) }),
        document.getElementById("root")
      );
    },
    8: function (A, e, t) {},
  },
  [[12, 1, 2]],
]);
//# sourceMappingURL=main.e51a9593.chunk.js.map
