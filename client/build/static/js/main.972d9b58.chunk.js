(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    107: function (e, t, a) {},
    165: function (e, t, a) {},
    166: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(2),
        c = a(32),
        r = a.n(c),
        n = a(11),
        i = (a(106), a(107), a(8)),
        l = a(16),
        o = a(4),
        j = a(179),
        d = a(172),
        b = a(182),
        u = a(178),
        m = a(173),
        p = a(92),
        h = a(1),
        O = function () {
          var e = Object(l.f)(),
            t = Object(l.g)(),
            a = Object(s.useState)(JSON.parse(localStorage.getItem("profile"))),
            c = Object(o.a)(a, 2),
            r = c[0],
            n = c[1];
          Object(s.useEffect)(
            function () {
              n(JSON.parse(localStorage.getItem("profile")));
            },
            [t]
          );
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsx)(j.a, {
                className: "header",
                expand: "lg",
                style: {
                  top: "0",
                  position: "fixed",
                  width: "100%",
                  zIndex: "1",
                },
                children: Object(h.jsxs)(d.a, {
                  children: [
                    Object(h.jsx)(i.b, {
                      to: "/",
                      className: "navlink",
                      children: Object(h.jsx)("img", {
                        src: "https://api.freelogodesign.org/files/b73aaafca95a4407ac0b1a4c7ab06ebf/thumb/logo_200x200.png?v=0",
                        alt: "",
                      }),
                    }),
                    Object(h.jsx)(j.a.Toggle, {
                      "aria-controls": "basic-navbar-nav",
                    }),
                    Object(h.jsx)(j.a.Collapse, {
                      id: "basic-navbar-nav",
                      children: Object(h.jsxs)(b.a, {
                        className: "ms-auto",
                        children: [
                          Object(h.jsx)(i.b, {
                            to: "/",
                            className: "navlink",
                            children: "HOME",
                          }),
                          Object(h.jsx)(i.b, {
                            to: "/Allcourses",
                            className: "navlink",
                            children: "COURSES",
                          }),
                          Object(h.jsx)(i.b, {
                            to: "/blog",
                            className: "navlink",
                            children: "BLOG",
                          }),
                          Object(h.jsx)(i.b, {
                            to: "/about",
                            className: "navlink",
                            children: "ABOUT",
                          }),
                          Object(h.jsx)(i.b, {
                            to: "/contact",
                            className: "navlink",
                            children: "CONTACT",
                          }),
                          r
                            ? Object(h.jsx)("div", {
                                className: "profile",
                                children: Object(h.jsxs)(u.a, {
                                  className: "dropdown",
                                  children: [
                                    Object(h.jsx)(u.a.Toggle, {
                                      variant: "none",
                                      id: "dropdown-basic",
                                      children: Object(h.jsx)("div", {
                                        children: r.user.imageUrl
                                          ? Object(h.jsx)(m.a, {
                                              className: "profile_image",
                                              src: r.user.imageUrl,
                                              alt: r.user.name.charAt(0),
                                            })
                                          : Object(h.jsx)("div", {
                                              className: "profile_name",
                                              children: Object(h.jsx)("p", {
                                                children:
                                                  r.user.username.charAt(0),
                                              }),
                                            }),
                                      }),
                                    }),
                                    Object(h.jsxs)(u.a.Menu, {
                                      className: "dropdown_menu",
                                      children: [
                                        Object(h.jsx)(u.a.Item, {
                                          children: Object(h.jsx)(i.b, {
                                            to: "/profile/".concat(
                                              r.user.email
                                            ),
                                            children: Object(h.jsx)("p", {
                                              className: "userName",
                                              children:
                                                r.user.name || r.user.username,
                                            }),
                                          }),
                                        }),
                                        Object(h.jsx)(u.a.Item, {
                                          href: "",
                                          children: Object(h.jsx)(p.a, {
                                            variant: "secondary",
                                            className: "logout",
                                            onClick: function () {
                                              e.push("/login"),
                                                localStorage.removeItem(
                                                  "profile"
                                                ),
                                                localStorage.removeItem("like"),
                                                n(null);
                                            },
                                            children: "Logout",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              })
                            : Object(h.jsx)(i.b, {
                                to: "/login",
                                className: "navlink",
                                children: "LOGIN",
                              }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              Object(h.jsx)("br", {}),
              Object(h.jsx)("br", {}),
              Object(h.jsx)("br", {}),
              Object(h.jsx)("br", {}),
              Object(h.jsx)("br", {}),
            ],
          });
        },
        x = a(174),
        g = a(93),
        f = a(183),
        v = a(10),
        y = function () {
          return Object(h.jsx)("div", {
            className: "footer",
            children: Object(h.jsxs)(d.a, {
              children: [
                Object(h.jsxs)(x.a, {
                  children: [
                    Object(h.jsxs)(g.a, {
                      lg: 3,
                      md: 3,
                      sm: 3,
                      className: "footer_row",
                      children: [
                        Object(h.jsx)("p", {
                          className: "text-uppercase fw-bold mb-4 text-red",
                          children: "Contact",
                        }),
                        Object(h.jsxs)("p", {
                          children: [
                            Object(h.jsx)(v.i, {}),
                            "\xa0 New York, NY 10012, US",
                          ],
                        }),
                        Object(h.jsxs)("p", {
                          children: [
                            Object(h.jsx)(v.b, {}),
                            "\xa0",
                            " ",
                            Object(h.jsx)("a", {
                              href: "mailto:praveenkoranga098@gmail.com",
                              children: " info@example.com",
                            }),
                          ],
                        }),
                        Object(h.jsxs)("p", {
                          children: [
                            Object(h.jsx)(v.m, {}),
                            "\xa0 ",
                            Object(h.jsx)("a", {
                              href: "tel:8755455139",
                              children: "+ 01 234 567 88",
                            }),
                          ],
                        }),
                        Object(h.jsxs)("p", {
                          children: [
                            Object(h.jsx)(v.d, {}),
                            " \xa0",
                            Object(h.jsx)("a", {
                              href: "tel:8755455139",
                              children: " + 01 234 567 89",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(h.jsxs)(g.a, {
                      lg: 3,
                      md: 3,
                      sm: 3,
                      className: "footer_row",
                      children: [
                        Object(h.jsx)("p", {
                          className: "text-uppercase fw-bold mb-4 text-red",
                          children: "Quick links",
                        }),
                        Object(h.jsx)("p", {
                          children: Object(h.jsx)("a", {
                            href: "/",
                            children: "Home",
                          }),
                        }),
                        Object(h.jsx)("p", {
                          children: Object(h.jsx)("a", {
                            href: "/",
                            children: "Blog",
                          }),
                        }),
                        Object(h.jsx)("p", {
                          children: Object(h.jsx)("a", {
                            href: "/",
                            children: "About",
                          }),
                        }),
                        Object(h.jsx)("p", {
                          children: Object(h.jsx)("a", {
                            href: "/",
                            children: "Contact",
                          }),
                        }),
                        Object(h.jsx)("p", {
                          children: Object(h.jsx)("a", {
                            href: "/",
                            children: "Privacy Policy",
                          }),
                        }),
                        Object(h.jsx)("p", {
                          children: Object(h.jsx)("a", {
                            href: "/",
                            children: "Terms and Condition",
                          }),
                        }),
                      ],
                    }),
                    Object(h.jsxs)(g.a, {
                      lg: 3,
                      md: 3,
                      sm: 3,
                      className: "footer_row",
                      children: [
                        Object(h.jsx)("p", {
                          className: "text-uppercase fw-bold mb-4 text-red",
                          children: "populer courses",
                        }),
                        Object(h.jsx)("p", {
                          children: Object(h.jsx)("a", {
                            href: "/",
                            className: "text-reset",
                            children: "Angular",
                          }),
                        }),
                        Object(h.jsx)("p", {
                          children: Object(h.jsx)("a", {
                            href: "/",
                            className: "text-reset",
                            children: "React",
                          }),
                        }),
                        Object(h.jsx)("p", {
                          children: Object(h.jsx)("a", {
                            href: "/",
                            className: "text-reset",
                            children: "Vue",
                          }),
                        }),
                        Object(h.jsx)("p", {
                          children: Object(h.jsx)("a", {
                            href: "/",
                            className: "text-reset",
                            children: "Laravel",
                          }),
                        }),
                      ],
                    }),
                    Object(h.jsxs)(g.a, {
                      lg: 3,
                      md: 3,
                      sm: 3,
                      className: "footer_row",
                      children: [
                        Object(h.jsx)("p", {
                          className: "text-uppercase fw-bold mb-4 text-red",
                          children: "Message Us",
                        }),
                        Object(h.jsx)("input", {
                          type: "email",
                          placeholder: "enter email",
                          className: "footer_email",
                        }),
                        Object(h.jsx)("br", {}),
                        Object(h.jsx)("textarea", {
                          name: "textarea",
                          className: "footer_textarea",
                          placeholder: "enter your message",
                          rows: "3",
                        }),
                        Object(h.jsx)("br", {}),
                        Object(h.jsx)("button", { children: "send message" }),
                      ],
                    }),
                  ],
                }),
                Object(h.jsxs)("div", {
                  className: "footer_social",
                  children: [
                    Object(h.jsx)("a", {
                      href: "/",
                      className: "me-4 text-reset",
                      children: Object(h.jsx)(v.c, {}),
                    }),
                    Object(h.jsx)("a", {
                      href: "/",
                      className: "me-4 text-reset",
                      children: Object(h.jsx)(v.p, {}),
                    }),
                    Object(h.jsx)("a", {
                      href: "/",
                      className: "me-4 text-reset",
                      children: Object(h.jsx)(v.f, {}),
                    }),
                    Object(h.jsx)("a", {
                      href: "/",
                      className: "me-4 text-reset",
                      children: Object(h.jsx)(v.j, {}),
                    }),
                    Object(h.jsx)("a", {
                      href: "/",
                      className: "me-4 text-reset",
                      children: Object(h.jsx)(v.k, {}),
                    }),
                    Object(h.jsx)("a", {
                      href: "/",
                      className: "me-4 text-reset",
                      children: Object(h.jsx)(v.e, {}),
                    }),
                  ],
                }),
                Object(h.jsxs)("div", {
                  className: "text-center p-4 text-white",
                  children: [
                    "\xa9 2021 Copyright:",
                    Object(h.jsx)("a", {
                      className: "text-reset fw-bold",
                      href: "/",
                      children: "EasyLearning.in",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        _ = function () {
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsx)("br", {}),
              Object(h.jsx)("img", {
                src: "https://accountingsoftware.co.in/wp-content/uploads/2017/01/About-Us-banner.png",
                alt: "url1 error",
                className: "image",
              }),
              Object(h.jsx)("br", {}),
              Object(h.jsx)("br", {}),
              Object(h.jsx)("br", {}),
              Object(h.jsxs)(d.a, {
                className: "about_company",
                children: [
                  Object(h.jsxs)("div", {
                    className: "text_box",
                    children: [
                      Object(h.jsx)("p", {
                        className: "all_about",
                        children: "ALL \xa0ABOUT",
                      }),
                      Object(h.jsxs)("h2", {
                        className: "aboutcompany_heading",
                        children: [
                          "THE WORLD\u2019S BEST EDUCATION IN OUR ",
                          Object(h.jsx)("span", { children: "TUTORIAL" }),
                        ],
                      }),
                      Object(h.jsx)("p", {
                        className: "text_box_text",
                        children:
                          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error iste minima, eos fuga alias reiciendis aliquam officia incidunt corrupti nesciunt maxime porro inventore odit quae voluptate nam iusto aliquid eius qui tempore! Repellendus recusandae, quos consectetur illo possimus sint quo labore velit, porro laborum corrupti aut expedita veniam quaerat fugiat.",
                      }),
                    ],
                  }),
                  Object(h.jsx)("div", {
                    className: "image_box",
                    children: Object(h.jsx)("img", {
                      src: "https://images5.alphacoders.com/378/378173.jpg",
                      alt: "url2 error",
                      className: "image2",
                    }),
                  }),
                ],
              }),
              Object(h.jsx)("br", {}),
              Object(h.jsx)("br", {}),
              Object(h.jsx)("div", {
                className: "about_us_features",
                children: Object(h.jsxs)(d.a, {
                  children: [
                    Object(h.jsxs)("h2", {
                      children: [
                        "OUR ",
                        Object(h.jsx)("span", {
                          style: { color: "red" },
                          children: "FEATURES",
                        }),
                      ],
                    }),
                    Object(h.jsx)("br", {}),
                    Object(h.jsxs)(x.a, {
                      children: [
                        Object(h.jsx)(g.a, {
                          lg: 4,
                          md: 6,
                          sm: 12,
                          children: Object(h.jsxs)("div", {
                            className: "features_box",
                            children: [
                              Object(h.jsx)("div", {
                                className: "FaHandScissors_box",
                                children: Object(h.jsx)(v.g, {
                                  color: "white",
                                  fontSize: "30px",
                                }),
                              }),
                              Object(h.jsx)("div", {
                                className: "features_details",
                                children: Object(h.jsxs)("p", {
                                  children: [
                                    "Less Css",
                                    Object(h.jsx)("br", {}),
                                    " ",
                                    Object(h.jsx)("span", {
                                      className: "features_desc",
                                      children:
                                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, reprehenderit ipsam!",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        Object(h.jsx)(g.a, {
                          lg: 4,
                          md: 6,
                          sm: 12,
                          children: Object(h.jsxs)("div", {
                            className: "features_box",
                            children: [
                              Object(h.jsx)("div", {
                                className: "FaHandScissors_box",
                                children: Object(h.jsx)(v.g, {
                                  color: "white",
                                  fontSize: "30px",
                                }),
                              }),
                              Object(h.jsx)("div", {
                                className: "features_details",
                                children: Object(h.jsxs)("p", {
                                  children: [
                                    "Easy Customiz",
                                    Object(h.jsx)("br", {}),
                                    Object(h.jsx)("span", {
                                      className: "features_desc",
                                      children:
                                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, reprehenderit ipsam!",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        Object(h.jsx)(g.a, {
                          lg: 4,
                          md: 6,
                          sm: 12,
                          children: Object(h.jsxs)("div", {
                            className: "features_box",
                            children: [
                              Object(h.jsx)("div", {
                                className: "FaHandScissors_box",
                                children: Object(h.jsx)(v.g, {
                                  color: "white",
                                  fontSize: "30px",
                                }),
                              }),
                              Object(h.jsx)("div", {
                                className: "features_details",
                                children: Object(h.jsxs)("p", {
                                  children: [
                                    "Validation",
                                    Object(h.jsx)("br", {}),
                                    " ",
                                    Object(h.jsx)("span", {
                                      className: "features_desc",
                                      children:
                                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, reprehenderit ipsam!",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        Object(h.jsx)(g.a, {
                          lg: 4,
                          md: 6,
                          sm: 12,
                          children: Object(h.jsxs)("div", {
                            className: "features_box",
                            children: [
                              Object(h.jsx)("div", {
                                className: "FaHandScissors_box",
                                children: Object(h.jsx)(v.g, {
                                  color: "white",
                                  fontSize: "30px",
                                }),
                              }),
                              Object(h.jsx)("div", {
                                className: "features_details",
                                children: Object(h.jsxs)("p", {
                                  children: [
                                    "Less Css",
                                    Object(h.jsx)("br", {}),
                                    " ",
                                    Object(h.jsx)("span", {
                                      className: "features_desc",
                                      children:
                                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, reprehenderit ipsam!",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        Object(h.jsx)(g.a, {
                          lg: 4,
                          md: 6,
                          sm: 12,
                          children: Object(h.jsxs)("div", {
                            className: "features_box",
                            children: [
                              Object(h.jsx)("div", {
                                className: "FaHandScissors_box",
                                children: Object(h.jsx)(v.g, {
                                  color: "white",
                                  fontSize: "30px",
                                }),
                              }),
                              Object(h.jsx)("div", {
                                className: "features_details",
                                children: Object(h.jsxs)("p", {
                                  children: [
                                    "Easy Customiz",
                                    Object(h.jsx)("br", {}),
                                    Object(h.jsx)("span", {
                                      className: "features_desc",
                                      children:
                                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, reprehenderit ipsam!",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        Object(h.jsx)(g.a, {
                          lg: 4,
                          md: 6,
                          sm: 12,
                          children: Object(h.jsxs)("div", {
                            className: "features_box",
                            children: [
                              Object(h.jsx)("div", {
                                className: "FaHandScissors_box",
                                children: Object(h.jsx)(v.g, {
                                  color: "white",
                                  fontSize: "30px",
                                }),
                              }),
                              Object(h.jsx)("div", {
                                className: "features_details",
                                children: Object(h.jsxs)("p", {
                                  children: [
                                    "Validation",
                                    Object(h.jsx)("br", {}),
                                    Object(h.jsx)("span", {
                                      className: "features_desc",
                                      children:
                                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, reprehenderit ipsam!",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              Object(h.jsx)("br", {}),
              Object(h.jsxs)(d.a, {
                children: [
                  Object(h.jsxs)("h2", {
                    children: [
                      "OUR ",
                      Object(h.jsx)("span", {
                        style: { color: "red" },
                        children: "TEACHERS",
                      }),
                    ],
                  }),
                  Object(h.jsx)("br", {}),
                  Object(h.jsxs)(x.a, {
                    children: [
                      Object(h.jsx)(g.a, {
                        lg: 3,
                        md: 6,
                        sm: 12,
                        children: Object(h.jsxs)(f.a, {
                          className: "teacher_card",
                          children: [
                            Object(h.jsx)(f.a.Img, {
                              className: "teacher_image",
                              variant: "top",
                              src: "https://tse2.mm.bing.net/th?id=OIP.rz_yiPxDQENe_QOrsJCp8QHaEK&pid=Api&P=0&w=328&h=186",
                            }),
                            Object(h.jsxs)(f.a.Body, {
                              children: [
                                Object(h.jsxs)(f.a.Title, {
                                  className: "teacher_name",
                                  children: [
                                    "Andre Smith - \xa0",
                                    Object(h.jsx)("span", {
                                      style: {
                                        color: "black",
                                        fontSize: "16px",
                                      },
                                      children: "Teacher",
                                    }),
                                  ],
                                }),
                                Object(h.jsx)(f.a.Text, {
                                  className: "about_teacher",
                                  children:
                                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sequi",
                                }),
                                Object(h.jsxs)(f.a.Text, {
                                  className: "teacher_contact",
                                  children: [
                                    Object(h.jsx)(v.c, {}),
                                    Object(h.jsx)(v.j, {}),
                                    Object(h.jsx)(v.p, {}),
                                    Object(h.jsx)(v.f, {}),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(h.jsx)(g.a, {
                        lg: 3,
                        md: 6,
                        sm: 12,
                        children: Object(h.jsxs)(f.a, {
                          className: "teacher_card",
                          children: [
                            Object(h.jsx)(f.a.Img, {
                              className: "teacher_image",
                              variant: "top",
                              src: "https://tse2.mm.bing.net/th?id=OIP.rz_yiPxDQENe_QOrsJCp8QHaEK&pid=Api&P=0&w=328&h=186",
                            }),
                            Object(h.jsxs)(f.a.Body, {
                              children: [
                                Object(h.jsxs)(f.a.Title, {
                                  className: "teacher_name",
                                  children: [
                                    "Andre Smith - \xa0",
                                    Object(h.jsx)("span", {
                                      style: {
                                        color: "black",
                                        fontSize: "16px",
                                      },
                                      children: "Teacher",
                                    }),
                                  ],
                                }),
                                Object(h.jsx)(f.a.Text, {
                                  className: "about_teacher",
                                  children:
                                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sequi",
                                }),
                                Object(h.jsxs)(f.a.Text, {
                                  className: "teacher_contact",
                                  children: [
                                    Object(h.jsx)(v.c, {}),
                                    Object(h.jsx)(v.j, {}),
                                    Object(h.jsx)(v.p, {}),
                                    Object(h.jsx)(v.f, {}),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(h.jsx)(g.a, {
                        lg: 3,
                        md: 6,
                        sm: 12,
                        children: Object(h.jsxs)(f.a, {
                          className: "teacher_card",
                          children: [
                            Object(h.jsx)(f.a.Img, {
                              className: "teacher_image",
                              variant: "top",
                              src: "https://tse2.mm.bing.net/th?id=OIP.rz_yiPxDQENe_QOrsJCp8QHaEK&pid=Api&P=0&w=328&h=186",
                            }),
                            Object(h.jsxs)(f.a.Body, {
                              children: [
                                Object(h.jsxs)(f.a.Title, {
                                  className: "teacher_name",
                                  children: [
                                    "Andre Smith - \xa0",
                                    Object(h.jsx)("span", {
                                      style: {
                                        color: "black",
                                        fontSize: "16px",
                                      },
                                      children: "Teacher",
                                    }),
                                  ],
                                }),
                                Object(h.jsx)(f.a.Text, {
                                  className: "about_teacher",
                                  children:
                                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sequi",
                                }),
                                Object(h.jsxs)(f.a.Text, {
                                  className: "teacher_contact",
                                  children: [
                                    Object(h.jsx)(v.c, {}),
                                    Object(h.jsx)(v.j, {}),
                                    Object(h.jsx)(v.p, {}),
                                    Object(h.jsx)(v.f, {}),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(h.jsx)(g.a, {
                        lg: 3,
                        md: 6,
                        sm: 12,
                        children: Object(h.jsxs)(f.a, {
                          className: "teacher_card",
                          children: [
                            Object(h.jsx)(f.a.Img, {
                              className: "teacher_image",
                              variant: "top",
                              src: "https://tse2.mm.bing.net/th?id=OIP.rz_yiPxDQENe_QOrsJCp8QHaEK&pid=Api&P=0&w=328&h=186",
                            }),
                            Object(h.jsxs)(f.a.Body, {
                              children: [
                                Object(h.jsxs)(f.a.Title, {
                                  className: "teacher_name",
                                  children: [
                                    "Andre Smith - \xa0",
                                    Object(h.jsx)("span", {
                                      style: {
                                        color: "black",
                                        fontSize: "16px",
                                      },
                                      children: "Teacher",
                                    }),
                                  ],
                                }),
                                Object(h.jsx)(f.a.Text, {
                                  className: "about_teacher",
                                  children:
                                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sequi",
                                }),
                                Object(h.jsxs)(f.a.Text, {
                                  className: "teacher_contact",
                                  children: [
                                    Object(h.jsx)(v.c, {}),
                                    Object(h.jsx)(v.j, {}),
                                    Object(h.jsx)(v.p, {}),
                                    Object(h.jsx)(v.f, {}),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(h.jsx)("br", {}),
              Object(h.jsx)(y, {}),
            ],
          });
        },
        N = a(9),
        w = a.n(N),
        S = a(13),
        E = a(18),
        C = a.n(E),
        T = "CREATE_BLOG_REQUEST",
        A = "CREATE_BLOG_SUCCESS",
        k = "CREATE_BLOG_FAIL",
        I = "GET_BLOGS_REQUEST",
        L = "GET_BLOGS_SUCCESS",
        U = "GET_BLOGS_FAIL",
        R = "GET_BLOG_DETAIL_REQUEST",
        P = "GET_BLOG_DETAIL_SUCCESS",
        q = "GET_BLOG_DETAIL_FAIL",
        B = "UPDATE_BLOG_REQUEST",
        F = "UPDATE_BLOG_SUCCESS",
        G = "UPDATE_BLOG_FAIL",
        D = "DELETE_BLOG_REQUEST",
        Q = "DELETE_BLOG_SUCCESS",
        M = "DELETE_BLOG_FAIL",
        J = "CREATE_COMMENT_REQUEST",
        H = "CREATE_COMMENT_SUCCESS",
        z = "CREATE_COMMENT_FAIL",
        W = "GET_COMMENT_REQUEST",
        V = "GET_COMMENT_SUCCESS",
        Y = "GET_COMMENT_FAIL",
        K = "DELETE_COMMENT",
        X = "GET_ALLCOMMENT_REQUEST",
        Z = "GET_ALLCOMMENT_SUCCESS",
        $ = "GET_ALLCOMMENT_FAIL",
        ee = "LIKED",
        te = "https://sparkling-fawn-loincloth.cyclic.app/",
        ae = a(177),
        se = a(175),
        ce = function () {
          return Object(h.jsx)(se.a, {
            animation: "border",
            role: "status",
            style: {
              height: "100px",
              width: "100px",
              margin: "auto",
              display: "block",
            },
            children: Object(h.jsx)("span", {
              className: "visually-hidden",
              children: "Loading...",
            }),
          });
        },
        re = a(176),
        ne = function (e) {
          var t = e.variant,
            a = e.children;
          return Object(h.jsx)(re.a, { variant: t, children: a });
        },
        ie = "https://sparkling-fawn-loincloth.cyclic.app/",
        le = function (e) {
          var t = e.blog,
            a = Object(n.c)(function (e) {
              return e.AllComments;
            })
              .Allcomments.map(function (e) {
                return t._id === e.postId ? [e.postId].length : 0;
              })
              .reduce(function (e, t) {
                return e + t;
              }, 0),
            s = function (e, t) {
              return e.length > t ? e.substring(0, t) + "..." : e;
            },
            c = t.createdDate.split(" ")[2],
            r = t.createdDate.split(" ")[1];
          return Object(h.jsx)(h.Fragment, {
            children: Object(h.jsxs)(d.a, {
              className: "blog_card",
              children: [
                Object(h.jsx)("div", {
                  className: "Blogcard_top",
                  children: Object(h.jsxs)("div", {
                    className: "date_title_box",
                    children: [
                      Object(h.jsx)("div", {
                        className: "date_month",
                        children: Object(h.jsxs)("p", {
                          children: [c, Object(h.jsx)("br", {}), r],
                        }),
                      }),
                      Object(h.jsxs)("div", {
                        children: [
                          Object(h.jsx)("p", {
                            className: "blogcard_title",
                            children: s(t.title, 50),
                          }),
                          Object(h.jsxs)("p", {
                            children: [
                              "\xa0\xa0",
                              Object(h.jsx)(v.d, {}),
                              a,
                              "\xa0comments \xa0\xa0\xa0",
                              Object(h.jsx)(v.h, {}),
                              "0\xa0likes",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                Object(h.jsx)("p", {
                  className: "blogcard_category",
                  children: s(t.category, 50),
                }),
                Object(h.jsx)("p", {
                  className: "blogcard_description",
                  children: s(t.description, 150),
                }),
                Object(h.jsx)("div", {
                  className: "viewblog_box",
                  children: Object(h.jsxs)(i.b, {
                    className: "view_blog",
                    to: "/blog/".concat(t._id),
                    children: ["VIEW BLOG", Object(h.jsx)(v.n, {})],
                  }),
                }),
              ],
            }),
          });
        },
        oe = function () {
          var e = Object(s.useState)(""),
            t = Object(o.a)(e, 2),
            a = t[0],
            c = t[1],
            r = Object(n.b)(),
            l = Object(n.c)(function (e) {
              return e.blogList;
            }),
            j = l.loading,
            b = l.error,
            u = l.Blogs,
            m = JSON.parse(localStorage.getItem("profile"));
          return (
            Object(s.useEffect)(
              function () {
                r(
                  (function () {
                    var e = Object(S.a)(
                      w.a.mark(function e(t) {
                        var a, s;
                        return w.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    t({ type: I }),
                                    (e.next = 4),
                                    C.a.get("".concat(ie, "/blog/"))
                                  );
                                case 4:
                                  (a = e.sent),
                                    (s = a.data),
                                    t({ type: L, payload: s }),
                                    (e.next = 12);
                                  break;
                                case 9:
                                  (e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    t({
                                      type: U,
                                      payload:
                                        e.t0.response &&
                                        e.t0.response.data.message
                                          ? e.t0.response.data.message
                                          : e.t0.message,
                                    });
                                case 12:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 9]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
              },
              [r]
            ),
            Object(h.jsx)(h.Fragment, {
              children: Object(h.jsx)(d.a, {
                children: j
                  ? Object(h.jsx)(ce, {})
                  : b
                  ? Object(h.jsx)(ne, { variant: "danger", children: b })
                  : Object(h.jsxs)(x.a, {
                      children: [
                        Object(h.jsx)(ae.a, {
                          children: Object(h.jsx)("thead", {
                            style: { textAlign: "center" },
                            children: Object(h.jsxs)("tr", {
                              children: [
                                Object(h.jsx)("th", {
                                  children:
                                    m &&
                                    Object(h.jsx)(h.Fragment, {
                                      children: m.user.isAdmin
                                        ? Object(h.jsx)(i.b, {
                                            to: "/createblog",
                                            children: Object(h.jsx)(p.a, {
                                              variant: "primary",
                                              children: "CREATE BLOG",
                                            }),
                                          })
                                        : "",
                                    }),
                                }),
                                Object(h.jsx)("th", {
                                  children: Object(h.jsxs)("div", {
                                    className: "search_blog_box",
                                    children: [
                                      Object(h.jsx)("input", {
                                        type: "search",
                                        placeholder: "Search Here...",
                                        className: "search_blog",
                                        onChange: function (e) {
                                          return c(e.target.value);
                                        },
                                      }),
                                      Object(h.jsx)(v.o, {}),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        u &&
                          Object(h.jsx)(h.Fragment, {
                            children: u
                              .filter(function (e) {
                                return "" === a ||
                                  e.title
                                    .toLowerCase()
                                    .includes(a.toLowerCase())
                                  ? e
                                  : 0;
                              })
                              .map(function (e) {
                                return Object(h.jsx)(
                                  g.a,
                                  {
                                    lg: 12,
                                    md: 12,
                                    sm: 12,
                                    children: Object(h.jsx)(
                                      le,
                                      { blog: e },
                                      e._id
                                    ),
                                  },
                                  e._id
                                );
                              }),
                          }),
                      ],
                    }),
              }),
            })
          );
        },
        je = function () {
          var e = Object(n.b)();
          Object(s.useEffect)(
            function () {
              e(
                (function () {
                  var e = Object(S.a)(
                    w.a.mark(function e(t) {
                      var a, s;
                      return w.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  t({ type: X }),
                                  (e.next = 4),
                                  C.a.get(
                                    "".concat(te, "/blog/comment/Allcomment")
                                  )
                                );
                              case 4:
                                (a = e.sent),
                                  (s = a.data),
                                  t({ type: Z, payload: s }),
                                  (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(0)),
                                  t({
                                    type: $,
                                    payload:
                                      e.t0.response &&
                                      e.t0.response.data.message
                                        ? e.t0.response.data.message
                                        : e.t0.message,
                                  });
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 9]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
            },
            [e]
          );
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsx)(m.a, {
                src: "https://www.thebalancecareers.com/thmb/3TXSZvKKQXcWu3Zu3qU8ag158MU=/3864x2577/filters:fill(auto,1)/school-books-on-desk--education-concept-871454068-5b548900c9e77c005b04fc8c.jpg",
                alt: "BannerImage",
                width: "100%",
                height: "400px",
              }),
              Object(h.jsx)("br", {}),
              Object(h.jsx)("br", {}),
              Object(h.jsx)(d.a, {
                children: Object(h.jsx)(x.a, {
                  children: Object(h.jsx)(g.a, {
                    children: Object(h.jsx)(oe, {}),
                  }),
                }),
              }),
              Object(h.jsx)("br", {}),
              Object(h.jsx)(y, {}),
            ],
          });
        },
        de = a(17),
        be = function (e) {
          var t = e.blog,
            a = Object(n.b)(),
            c = Object(l.f)(),
            r = JSON.parse(localStorage.getItem("profile")),
            i = Object(n.c)(function (e) {
              return e.comments;
            }).Comments;
          Object(s.useEffect)(
            function () {
              var e;
              a(
                ((e = t._id),
                (function () {
                  var t = Object(S.a)(
                    w.a.mark(function t(a) {
                      var s, c;
                      return w.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  a({ type: W }),
                                  (t.next = 4),
                                  C.a.get(
                                    "".concat(te, "/blog/comments/").concat(e)
                                  )
                                );
                              case 4:
                                (s = t.sent),
                                  (c = s.data),
                                  a({ type: V, payload: c }),
                                  (t.next = 12);
                                break;
                              case 9:
                                (t.prev = 9),
                                  (t.t0 = t.catch(0)),
                                  a({
                                    type: Y,
                                    payload:
                                      t.t0.response &&
                                      t.t0.response.data.message
                                        ? t.t0.response.data.message
                                        : t.t0.message,
                                  });
                              case 12:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 9]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })())
              );
            },
            [a, t._id]
          );
          var o = function (e) {
            a(
              (function (e, t, a) {
                return (function () {
                  var s = Object(S.a)(
                    w.a.mark(function s(c) {
                      return w.a.wrap(
                        function (s) {
                          for (;;)
                            switch ((s.prev = s.next)) {
                              case 0:
                                return (
                                  (s.prev = 0),
                                  c({ type: K }),
                                  (s.next = 4),
                                  C.a.delete(
                                    ""
                                      .concat(te, "/blog/comment/delete/")
                                      .concat(e)
                                  )
                                );
                              case 4:
                                t.push("/blog/".concat(a)), (s.next = 10);
                                break;
                              case 7:
                                (s.prev = 7),
                                  (s.t0 = s.catch(0)),
                                  console.log(
                                    "error while calling deletePost=>",
                                    s.t0
                                  );
                              case 10:
                              case "end":
                                return s.stop();
                            }
                        },
                        s,
                        null,
                        [[0, 7]]
                      );
                    })
                  );
                  return function (e) {
                    return s.apply(this, arguments);
                  };
                })();
              })(e._id, c, t._id)
            );
          };
          return Object(h.jsx)(h.Fragment, {
            children:
              i &&
              Object(h.jsx)(d.a, {
                children: i.map(function (e) {
                  return Object(h.jsxs)(
                    d.a,
                    {
                      className: "comment_detail",
                      children: [
                        Object(h.jsxs)("div", {
                          children: [
                            Object(h.jsx)("p", {
                              className: "commenter_name",
                              children: e.name,
                            }),
                            Object(h.jsx)("p", { children: e.comment }),
                          ],
                        }),
                        Object(h.jsxs)("div", {
                          children: [
                            Object(h.jsx)("p", {
                              className: "commentcreated_date",
                              children: e.date,
                            }),
                            r && r.user.email === e.email
                              ? Object(h.jsx)(de.b, {
                                  onClick: function () {
                                    return o(e);
                                  },
                                })
                              : "",
                          ],
                        }),
                      ],
                    },
                    e._id
                  );
                }),
              }),
          });
        },
        ue = new Date().toDateString(),
        me = function (e) {
          var t = e.blog,
            a = Object(l.f)(),
            c = Object(n.b)(),
            r = JSON.parse(localStorage.getItem("profile")),
            i = Object(s.useState)(""),
            j = Object(o.a)(i, 2),
            b = j[0],
            u = j[1],
            O = Object(s.useState)(""),
            x = Object(o.a)(O, 2),
            g = x[0],
            f = x[1],
            v = Object(s.useState)(""),
            y = Object(o.a)(v, 2),
            _ = y[0],
            N = y[1],
            E = Object(s.useState)(""),
            T = Object(o.a)(E, 2),
            A = T[0],
            k = T[1],
            I = Object(s.useState)(""),
            L = Object(o.a)(I, 2),
            U = L[0],
            R = L[1];
          Object(s.useEffect)(
            function () {
              r &&
                (u(r.user.name || r.user.username),
                f(t._id),
                N(r.user.email),
                R(ue));
            },
            [t, r]
          );
          var P = function () {
            c(
              (function (e, t, a, s, c) {
                return (function () {
                  var r = Object(S.a)(
                    w.a.mark(function r(n) {
                      var i, l;
                      return w.a.wrap(
                        function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (
                                  (r.prev = 0),
                                  n({ type: J }),
                                  (r.next = 4),
                                  C.a.post("".concat(te, "/blog/comment/new"), {
                                    name: e,
                                    postId: t,
                                    email: a,
                                    date: s,
                                    comment: c,
                                  })
                                );
                              case 4:
                                (i = r.sent),
                                  (l = i.data),
                                  n({ type: H, payload: l }),
                                  (r.next = 12);
                                break;
                              case 9:
                                (r.prev = 9),
                                  (r.t0 = r.catch(0)),
                                  n({
                                    type: z,
                                    payload:
                                      r.t0.response &&
                                      r.t0.response.data.message
                                        ? r.t0.response.data.message
                                        : r.t0.message,
                                  });
                              case 12:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        null,
                        [[0, 9]]
                      );
                    })
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })();
              })(b, g, _, U, A)
            ),
              a.push("/blog/".concat(t._id));
          };
          return Object(h.jsxs)(d.a, {
            className: "comment_main",
            children: [
              Object(h.jsxs)(d.a, {
                className: "comment_box",
                children: [
                  r
                    ? Object(h.jsx)(h.Fragment, {
                        children: r.user.imageUrl
                          ? Object(h.jsx)(m.a, {
                              className: "comments_userImage",
                              src: r.user.imageUrl,
                              alt: r.user.name.charAt(0),
                            })
                          : Object(h.jsx)("div", {
                              className: "comments_userProfile",
                              children: r.user.name
                                ? Object(h.jsx)("p", {
                                    children: r.user.name.charAt(0),
                                  })
                                : Object(h.jsx)("p", {
                                    children: r.user.username.charAt(0),
                                  }),
                            }),
                      })
                    : Object(h.jsx)(m.a, {
                        src: "https://tse1.mm.bing.net/th?id=OIP.tHluP4chQzW31oRhD-mqogHaHa&pid=Api&P=0&w=300&h=300",
                        className: "comments_userImage",
                      }),
                  Object(h.jsx)("textarea", {
                    onChange: function (e) {
                      return k(e.target.value);
                    },
                    className: "textarea",
                    placeholder: "Write Your Comment...",
                  }),
                  r
                    ? Object(h.jsx)(p.a, {
                        onClick: function () {
                          return P();
                        },
                        variant: "primary",
                        className: "comment_post_button",
                        children: "Post",
                      })
                    : Object(h.jsx)(p.a, {
                        onClick: function () {
                          a.push("/login");
                        },
                        variant: "primary",
                        className: "comment_post_button",
                        children: "Post",
                      }),
                ],
              }),
              Object(h.jsx)("br", {}),
              Object(h.jsx)(be, { blog: t }, t._id),
              Object(h.jsx)("br", {}),
            ],
          });
        },
        pe = function (e) {
          var t = e.match,
            a = e.history,
            c = Object(n.b)(),
            r = Object(n.c)(function (e) {
              return e.blogDetails;
            }),
            l = r.loading,
            o = r.error,
            j = r.BlogDetail,
            b = JSON.parse(localStorage.getItem("profile")),
            u = JSON.parse(localStorage.getItem("like"));
          Object(s.useEffect)(
            function () {
              var e;
              c(
                ((e = t.params.id),
                (function () {
                  var t = Object(S.a)(
                    w.a.mark(function t(a) {
                      var s, c;
                      return w.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  a({ type: R }),
                                  (t.next = 4),
                                  C.a.get("".concat(ie, "/blog/").concat(e))
                                );
                              case 4:
                                (s = t.sent),
                                  (c = s.data),
                                  a({ type: P, payload: c }),
                                  (t.next = 12);
                                break;
                              case 9:
                                (t.prev = 9),
                                  (t.t0 = t.catch(0)),
                                  a({
                                    type: q,
                                    payload:
                                      t.t0.response &&
                                      t.t0.response.data.message
                                        ? t.t0.response.data.message
                                        : t.t0.message,
                                  });
                              case 12:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 9]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })())
              );
            },
            [c, t]
          );
          var O = function () {
              c(
                (function (e, t) {
                  return (function () {
                    var a = Object(S.a)(
                      w.a.mark(function a(s) {
                        var c, r;
                        return w.a.wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (a.prev = 0),
                                    s({ type: D }),
                                    (a.next = 4),
                                    C.a.delete(
                                      "".concat(ie, "/blog/delete/").concat(e)
                                    )
                                  );
                                case 4:
                                  (c = a.sent),
                                    (r = c.data),
                                    s({ type: D, payload: r }),
                                    t.push("/blog"),
                                    (a.next = 13);
                                  break;
                                case 10:
                                  (a.prev = 10),
                                    (a.t0 = a.catch(0)),
                                    s({
                                      type: M,
                                      payload:
                                        a.t0.response &&
                                        a.t0.response.data.message
                                          ? a.t0.response.data.message
                                          : a.t0.message,
                                    });
                                case 13:
                                case "end":
                                  return a.stop();
                              }
                          },
                          a,
                          null,
                          [[0, 10]]
                        );
                      })
                    );
                    return function (e) {
                      return a.apply(this, arguments);
                    };
                  })();
                })(t.params.id, a)
              );
            },
            x = function () {
              var e, a;
              (document.getElementById("like-button").style.color = "blue"),
                c(
                  ((e = t.params.id),
                  (a = b.user.email || b.email),
                  (function () {
                    var t = Object(S.a)(
                      w.a.mark(function t(s) {
                        return w.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                try {
                                  s({
                                    type: ee,
                                    payload: { like: { id: e, email: a } },
                                  });
                                } catch (o) {
                                  console.log(o);
                                }
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })())
                ),
                console.log("like");
            };
          return Object(h.jsx)(h.Fragment, {
            children: Object(h.jsx)(d.a, {
              children: l
                ? Object(h.jsx)(ce, {})
                : o
                ? Object(h.jsx)(ne, { variant: "danger", children: o })
                : Object(h.jsx)(h.Fragment, {
                    children:
                      j &&
                      Object(h.jsxs)(d.a, {
                        className: "blog_detail_main",
                        children: [
                          Object(h.jsx)(m.a, {
                            src: "https://tse2.mm.bing.net/th?id=OIP.a5YOm_1N-oe-O025Jw4PTQHaE8&pid=Api&P=0&w=246&h=165",
                            alt: "BannerImage",
                            width: "100%",
                            height: "300px",
                          }),
                          Object(h.jsxs)(d.a, {
                            className: "blog_detail_body",
                            children: [
                              Object(h.jsx)(i.b, {
                                to: "/blog",
                                children: Object(h.jsxs)(p.a, {
                                  children: [Object(h.jsx)(de.a, {}), " BACK"],
                                }),
                              }),
                              u
                                ? Object(h.jsx)(de.f, {
                                    className: "like-button",
                                    id: "like-button",
                                    onClick: function () {
                                      return x();
                                    },
                                    style: { color: "blue" },
                                  })
                                : Object(h.jsx)(de.f, {
                                    className: "like-button",
                                    id: "like-button",
                                    onClick: function () {
                                      return x();
                                    },
                                  }),
                              Object(h.jsxs)("div", {
                                className: "blog_detail_buttons",
                                children: [
                                  Object(h.jsx)("p", { children: j.category }),
                                  Object(h.jsx)("div", {
                                    children:
                                      ((b && b.email) ||
                                        (b && b.user.email)) === j.email
                                        ? Object(h.jsxs)("div", {
                                            children: [
                                              Object(h.jsx)(de.b, {
                                                onClick: function () {
                                                  return O();
                                                },
                                                color: "red",
                                                className: "blog_detail_delete",
                                              }),
                                              "\xa0\xa0\xa0\xa0",
                                              Object(h.jsx)(i.b, {
                                                to: "/blog/update/".concat(
                                                  j._id
                                                ),
                                                children: Object(h.jsx)(de.c, {
                                                  color: "orange",
                                                  className: "blog_detail_edit",
                                                }),
                                              }),
                                            ],
                                          })
                                        : " ",
                                  }),
                                ],
                              }),
                              Object(h.jsx)("div", {
                                className: "blog_detail_title",
                                children: Object(h.jsx)("p", {
                                  children: j.title,
                                }),
                              }),
                              Object(h.jsx)("div", {
                                className: "blog_detail_description",
                                children: Object(h.jsx)("p", {
                                  children: j.description,
                                }),
                              }),
                              Object(h.jsxs)("div", {
                                className: "blog_detail_footer",
                                children: [
                                  Object(h.jsx)("p", {}),
                                  Object(h.jsxs)("p", {
                                    children: [
                                      Object(h.jsx)("strong", {
                                        children: "By:",
                                      }),
                                      j.username,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(h.jsx)(me, { blog: j }),
                        ],
                      }),
                  }),
            }),
          });
        },
        he = a(180),
        Oe = new Date().toDateString(),
        xe = function () {
          var e = Object(l.f)(),
            t = Object(n.b)(),
            a = Object(s.useState)(""),
            c = Object(o.a)(a, 2),
            r = c[0],
            j = c[1],
            b = Object(s.useState)(""),
            u = Object(o.a)(b, 2),
            O = u[0],
            f = u[1],
            v = Object(s.useState)(""),
            y = Object(o.a)(v, 2),
            _ = y[0],
            N = y[1],
            E = Object(s.useState)(Oe),
            I = Object(o.a)(E, 2),
            L = I[0],
            U = I[1],
            R = Object(s.useState)(""),
            P = Object(o.a)(R, 2),
            q = P[0],
            B = P[1],
            F = Object(s.useState)(""),
            G = Object(o.a)(F, 2),
            D = G[0],
            Q = G[1],
            M = JSON.parse(localStorage.getItem("profile"));
          Object(s.useEffect)(
            function () {
              U(Oe),
                M
                  ? (j(M.user.name || M.user.username), f(M.user.email))
                  : (j(" "), f(" "));
            },
            [M]
          );
          var J = function () {
            t(
              (function (e, t, a, s, c, r, n) {
                return (function () {
                  var i = Object(S.a)(
                    w.a.mark(function i(l) {
                      var o, j;
                      return w.a.wrap(
                        function (i) {
                          for (;;)
                            switch ((i.prev = i.next)) {
                              case 0:
                                return (
                                  (i.prev = 0),
                                  l({ type: T }),
                                  (i.next = 4),
                                  C.a.post("".concat(ie, "/blog/createblog"), {
                                    username: e,
                                    email: t,
                                    createdDate: a,
                                    title: s,
                                    category: c,
                                    description: r,
                                  })
                                );
                              case 4:
                                (o = i.sent),
                                  (j = o.data),
                                  l({ type: A, payload: j }),
                                  n.push("/blog"),
                                  (i.next = 13);
                                break;
                              case 10:
                                (i.prev = 10),
                                  (i.t0 = i.catch(0)),
                                  l({
                                    type: k,
                                    payload:
                                      i.t0.response &&
                                      i.t0.response.data.message
                                        ? i.t0.response.data.message
                                        : i.t0.message,
                                  });
                              case 13:
                              case "end":
                                return i.stop();
                            }
                        },
                        i,
                        null,
                        [[0, 10]]
                      );
                    })
                  );
                  return function (e) {
                    return i.apply(this, arguments);
                  };
                })();
              })(r, O, L, _, q, D, e)
            );
          };
          return Object(h.jsx)(h.Fragment, {
            children: Object(h.jsxs)(d.a, {
              children: [
                Object(h.jsx)(m.a, {
                  src: "https://tse2.mm.bing.net/th?id=OIP.a5YOm_1N-oe-O025Jw4PTQHaE8&pid=Api&P=0&w=246&h=165",
                  alt: "BannerImage",
                  width: "100%",
                  height: "300px",
                }),
                Object(h.jsx)("br", {}),
                Object(h.jsx)("br", {}),
                Object(h.jsxs)(he.a, {
                  children: [
                    Object(h.jsxs)(he.a.Group, {
                      as: x.a,
                      className: "mb-3",
                      controlId: "formPlaintextPassword",
                      children: [
                        Object(h.jsx)(he.a.Label, {
                          column: !0,
                          sm: "2",
                          children: Object(h.jsx)("strong", {
                            children: "TITLE :",
                          }),
                        }),
                        Object(h.jsx)(g.a, {
                          sm: "10",
                          children: Object(h.jsx)(he.a.Control, {
                            className: "createblog_input",
                            type: "text",
                            placeholder: "Enter The Title of blog...",
                            name: "title",
                            value: _,
                            onChange: function (e) {
                              return N(e.target.value);
                            },
                          }),
                        }),
                      ],
                    }),
                    Object(h.jsxs)(he.a.Group, {
                      as: x.a,
                      className: "mb-3",
                      controlId: "formPlaintextPassword",
                      children: [
                        Object(h.jsx)(he.a.Label, {
                          column: !0,
                          sm: "2",
                          children: Object(h.jsx)("strong", {
                            children: "CATEGORY :",
                          }),
                        }),
                        Object(h.jsx)(g.a, {
                          sm: "10",
                          children: Object(h.jsx)(he.a.Control, {
                            className: "createblog_input",
                            type: "text",
                            placeholder: "Enter The Category of blog...",
                            name: "category",
                            value: q,
                            onChange: function (e) {
                              return B(e.target.value);
                            },
                          }),
                        }),
                      ],
                    }),
                    Object(h.jsxs)(he.a.Group, {
                      as: x.a,
                      className: "mb-3",
                      controlId: "formPlaintextPassword",
                      children: [
                        Object(h.jsx)(he.a.Label, {
                          column: !0,
                          sm: "2",
                          children: Object(h.jsx)("strong", {
                            children: " DESCRIPTION OR BLOG DETAILS :",
                          }),
                        }),
                        Object(h.jsx)(g.a, {
                          sm: "10",
                          children: Object(h.jsx)("textarea", {
                            className: "createblog_input",
                            rows: "3",
                            placeholder:
                              "Enter The Description or Details of blog...",
                            name: "description",
                            value: D,
                            onChange: function (e) {
                              return Q(e.target.value);
                            },
                          }),
                        }),
                      ],
                    }),
                    Object(h.jsx)(p.a, {
                      variant: "primary",
                      className: "publish_button",
                      onClick: function () {
                        return J();
                      },
                      children: "PUBLISH",
                    }),
                  ],
                }),
                Object(h.jsx)(i.b, {
                  to: "/blog",
                  children: Object(h.jsxs)(p.a, {
                    variant: "primary",
                    children: [Object(h.jsx)(de.a, {}), "Back"],
                  }),
                }),
              ],
            }),
          });
        },
        ge = new Date().toDateString(),
        fe = function (e) {
          var t = e.match,
            a = Object(l.f)(),
            c = Object(n.b)(),
            r = Object(n.c)(function (e) {
              return e.blogDetails;
            }),
            j = r.loading,
            b = r.error,
            u = r.BlogDetail,
            O = JSON.parse(localStorage.getItem("profile")),
            f = Object(s.useState)(""),
            v = Object(o.a)(f, 2),
            y = v[0],
            _ = v[1],
            N = Object(s.useState)(""),
            E = Object(o.a)(N, 2),
            T = E[0],
            A = E[1],
            k = Object(s.useState)(""),
            I = Object(o.a)(k, 2),
            L = I[0],
            U = I[1],
            R = Object(s.useState)(""),
            P = Object(o.a)(R, 2),
            q = P[0],
            D = P[1],
            Q = Object(s.useState)(""),
            M = Object(o.a)(Q, 2),
            J = M[0],
            H = M[1];
          Object(s.useEffect)(
            function () {
              u
                ? (_(O.name || O.user.username),
                  U(ge),
                  A(u.title),
                  D(u.category),
                  H(u.description))
                : a.push("/blog/".concat(t.params.id));
            },
            [a, u, O.name, O.user.username, t]
          );
          var z = function () {
            c(
              (function (e, t, a, s, c, r, n) {
                return (function () {
                  var i = Object(S.a)(
                    w.a.mark(function i(l) {
                      var o, j;
                      return w.a.wrap(
                        function (i) {
                          for (;;)
                            switch ((i.prev = i.next)) {
                              case 0:
                                return (
                                  (i.prev = 0),
                                  l({ type: B }),
                                  (i.next = 4),
                                  C.a.put(
                                    "".concat(ie, "/blog/update/").concat(t),
                                    a,
                                    s,
                                    c,
                                    r,
                                    n
                                  )
                                );
                              case 4:
                                (o = i.sent),
                                  (j = o.data),
                                  l({ type: F, payload: j }),
                                  e.push("/blog/".concat(t)),
                                  (i.next = 13);
                                break;
                              case 10:
                                (i.prev = 10),
                                  (i.t0 = i.catch(0)),
                                  l({
                                    type: G,
                                    payload:
                                      i.t0.response &&
                                      i.t0.response.data.message
                                        ? i.t0.response.data.message
                                        : i.t0.message,
                                  });
                              case 13:
                              case "end":
                                return i.stop();
                            }
                        },
                        i,
                        null,
                        [[0, 10]]
                      );
                    })
                  );
                  return function (e) {
                    return i.apply(this, arguments);
                  };
                })();
              })(a, t.params.id, {
                username: y,
                createdDate: L,
                title: T,
                category: q,
                description: J,
              })
            );
          };
          return Object(h.jsx)(h.Fragment, {
            children: j
              ? Object(h.jsx)(ce, {})
              : b
              ? Object(h.jsx)(ne, { variant: "danger", children: b })
              : Object(h.jsxs)(d.a, {
                  children: [
                    Object(h.jsx)(m.a, {
                      src: "https://tse2.mm.bing.net/th?id=OIP.a5YOm_1N-oe-O025Jw4PTQHaE8&pid=Api&P=0&w=246&h=165",
                      alt: "BannerImage",
                      width: "100%",
                      height: "300px",
                    }),
                    Object(h.jsx)("br", {}),
                    Object(h.jsx)("br", {}),
                    Object(h.jsxs)(re.a, {
                      variant: "warning",
                      children: [
                        Object(h.jsx)("strong", { children: "Alert ! " }),
                        Object(h.jsx)("br", {}),
                        "which changes you will do here, all things are updated and your old blog will be updated.",
                      ],
                    }),
                    Object(h.jsxs)(he.a, {
                      children: [
                        Object(h.jsxs)(he.a.Group, {
                          as: x.a,
                          className: "mb-3",
                          controlId: "formPlaintextPassword",
                          children: [
                            Object(h.jsx)(he.a.Label, {
                              column: !0,
                              sm: "2",
                              children: Object(h.jsx)("strong", {
                                children: "TITLE :",
                              }),
                            }),
                            Object(h.jsx)(g.a, {
                              sm: "10",
                              children: Object(h.jsx)(he.a.Control, {
                                className: "createblog_input",
                                type: "text",
                                placeholder: "Enter The Title of blog...",
                                name: "title",
                                value: T,
                                onChange: function (e) {
                                  return A(e.target.value);
                                },
                              }),
                            }),
                          ],
                        }),
                        Object(h.jsxs)(he.a.Group, {
                          as: x.a,
                          className: "mb-3",
                          controlId: "formPlaintextPassword",
                          children: [
                            Object(h.jsx)(he.a.Label, {
                              column: !0,
                              sm: "2",
                              children: Object(h.jsx)("strong", {
                                children: "CATEGORY :",
                              }),
                            }),
                            Object(h.jsx)(g.a, {
                              sm: "10",
                              children: Object(h.jsx)(he.a.Control, {
                                className: "createblog_input",
                                type: "text",
                                placeholder: "Enter The Category of blog...",
                                name: "category",
                                value: q,
                                onChange: function (e) {
                                  return D(e.target.value);
                                },
                              }),
                            }),
                          ],
                        }),
                        Object(h.jsxs)(he.a.Group, {
                          as: x.a,
                          className: "mb-3",
                          controlId: "formPlaintextPassword",
                          children: [
                            Object(h.jsx)(he.a.Label, {
                              column: !0,
                              sm: "2",
                              children: Object(h.jsx)("strong", {
                                children: " DESCRIPTION OR BLOG DETAILS :",
                              }),
                            }),
                            Object(h.jsx)(g.a, {
                              sm: "10",
                              children: Object(h.jsx)("textarea", {
                                className: "createblog_input",
                                rows: "3",
                                placeholder:
                                  "Enter The Description or Details of blog...",
                                name: "description",
                                value: J,
                                onChange: function (e) {
                                  return H(e.target.value);
                                },
                              }),
                            }),
                          ],
                        }),
                        Object(h.jsx)(p.a, {
                          variant: "primary",
                          className: "publish_button",
                          onClick: function () {
                            return z();
                          },
                          children: "UPDATE",
                        }),
                      ],
                    }),
                    Object(h.jsx)(i.b, {
                      to: "/blog/".concat(t.params.id),
                      children: Object(h.jsxs)(p.a, {
                        variant: "primary",
                        children: [Object(h.jsx)(de.a, {}), "Back"],
                      }),
                    }),
                  ],
                }),
          });
        },
        ve = function () {
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsx)("br", {}),
              Object(h.jsx)("img", {
                src: "https://tse4.mm.bing.net/th?id=OIP.WMiQAtdA4QRe08N40UmsdAHaCe&pid=Api&P=0&w=534&h=179",
                alt: "contactbannerImage",
                className: "image",
              }),
              Object(h.jsxs)(d.a, {
                children: [
                  Object(h.jsx)("br", {}),
                  Object(h.jsxs)(x.a, {
                    children: [
                      Object(h.jsx)(g.a, {
                        lg: 8,
                        md: 12,
                        sm: 12,
                        xs: 12,
                        children: Object(h.jsxs)("div", {
                          boxShadow: 3,
                          style: {
                            marginLeft: 10,
                            paddingTop: 30,
                            paddingBottom: 70,
                          },
                          children: [
                            Object(h.jsxs)("p", {
                              style: { fontSize: "25px" },
                              children: [
                                "Interested in ",
                                Object(h.jsx)("span", {
                                  style: { color: "red" },
                                  children: "discussing?",
                                }),
                              ],
                            }),
                            Object(h.jsx)("p", {
                              style: {
                                fontWeight: "400",
                                textAlign: "justify",
                              },
                              children:
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error optio in quia ipsum quae neque alias eligendi, nulla nisi. Veniam ut quis similique culpa natus dolor aliquam officiis ratione libero. Expedita asperiores aliquam provident amet dolores.",
                            }),
                            Object(h.jsxs)("form", {
                              action: "",
                              className: "form",
                              children: [
                                Object(h.jsxs)("p", {
                                  className: "field_name",
                                  children: [
                                    "Full Name",
                                    Object(h.jsx)("span", {
                                      className: "star",
                                      children: "*",
                                    }),
                                    " ",
                                  ],
                                }),
                                Object(h.jsx)("input", {
                                  type: "text",
                                  name: "firstname",
                                  id: "firstname",
                                  placeholder: "enter your first name",
                                  className: "input_fname",
                                }),
                                Object(h.jsx)("input", {
                                  type: "text",
                                  name: "lastname",
                                  placeholder: "enter your last name",
                                  className: "input_lname",
                                }),
                                Object(h.jsx)("br", {}),
                                Object(h.jsxs)("p", {
                                  className: "field_name",
                                  children: [
                                    "Email",
                                    Object(h.jsx)("span", {
                                      className: "star",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                Object(h.jsx)("input", {
                                  type: "text",
                                  name: "email",
                                  placeholder: "enter your mail id",
                                  className: "input_email",
                                }),
                                Object(h.jsx)("br", {}),
                                Object(h.jsxs)("p", {
                                  className: "field_name",
                                  children: [
                                    "Message",
                                    Object(h.jsx)("span", {
                                      className: "star",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                Object(h.jsx)("textarea", {
                                  name: "message",
                                  placeholder: "enter your message",
                                  className: "input_message",
                                }),
                                Object(h.jsx)("br", {}),
                                Object(h.jsx)("p", {
                                  className: "field_name",
                                  children: "Additional Details",
                                }),
                                Object(h.jsx)("textarea", {
                                  name: "details",
                                  placeholder: "Additional details",
                                  className: "input_details",
                                }),
                                Object(h.jsx)("br", {}),
                                Object(h.jsx)("input", {
                                  type: "submit",
                                  name: "submitData",
                                  id: "submitData",
                                  value: "send",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(h.jsxs)(g.a, {
                        lg: 4,
                        md: 12,
                        sm: 12,
                        xs: 12,
                        style: { textAlign: "justify" },
                        children: [
                          Object(h.jsxs)("p", {
                            children: [
                              Object(h.jsx)("span", {
                                className: "contact_heading",
                                children: "CONTACT",
                              }),
                              " US",
                              " ",
                            ],
                          }),
                          Object(h.jsx)("p", {
                            children:
                              "We are currently processing significantly higher order and enquiry volumes than usual. This means response times for enquiries may be delayed. We will reply to all enquiries, and we appreciate your patience.",
                          }),
                          Object(h.jsxs)("div", {
                            className: "contact_detail",
                            children: [
                              Object(h.jsx)(v.l, { className: "contact_icon" }),
                              Object(h.jsxs)("div", {
                                children: [
                                  Object(h.jsx)("p", {
                                    className: "contact_type",
                                    children: Object(h.jsx)("strong", {
                                      children: "our office location",
                                    }),
                                  }),
                                  Object(h.jsx)("p", {
                                    className: "contact_item",
                                    children: " New York, NY 10012, US",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(h.jsxs)("div", {
                            className: "contact_detail",
                            children: [
                              Object(h.jsx)(v.m, { className: "contact_icon" }),
                              Object(h.jsxs)("div", {
                                children: [
                                  Object(h.jsx)("p", {
                                    className: "contact_type",
                                    children: Object(h.jsx)("strong", {
                                      children: "our office location",
                                    }),
                                  }),
                                  Object(h.jsx)("p", {
                                    className: "contact_item",
                                    children: " +91 435 252 4652",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(h.jsxs)("div", {
                            className: "contact_detail",
                            children: [
                              Object(h.jsx)(v.b, { className: "contact_icon" }),
                              Object(h.jsxs)("div", {
                                children: [
                                  Object(h.jsx)("p", {
                                    className: "contact_type",
                                    children: Object(h.jsx)("strong", {
                                      children: "our office location",
                                    }),
                                  }),
                                  Object(h.jsx)("p", {
                                    className: "contact_item",
                                    children: " support@gmail.com",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(h.jsx)("br", {}),
                  Object(h.jsx)(x.a, {
                    children: Object(h.jsx)("iframe", {
                      title: "Easy Learning",
                      className: "map",
                      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.9646245834383!2d77.04583485047557!3d28.480611982391967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19a5f2d2bf1f%3A0x330a402ce4306ed!2sOYO%2022756%20Diksha%20Hotel!5e0!3m2!1sen!2sin!4v1631294759537!5m2!1sen!2sin",
                      style: { border: 0 },
                      loading: "lazy",
                    }),
                  }),
                  Object(h.jsx)("br", {}),
                ],
              }),
              Object(h.jsx)("br", {}),
              Object(h.jsx)(y, {}),
            ],
          });
        },
        ye = function () {
          return Object(h.jsx)(h.Fragment, {
            children: Object(h.jsx)(d.a, {
              children: Object(h.jsx)(x.a, {
                children: [
                  "HTML",
                  "CSS",
                  "PYTHON",
                  "JAVASCRIPT",
                  "JAVA",
                  "ST",
                ].map(function (e) {
                  return Object(h.jsx)(h.Fragment, {
                    children: Object(h.jsx)(g.a, {
                      lg: 3,
                      md: 6,
                      sm: 6,
                      style: { marginBottom: "50px" },
                      children: Object(h.jsxs)("div", {
                        className: "course-box",
                        children: [
                          Object(h.jsx)("div", {
                            children: Object(h.jsx)(i.b, {
                              to: "/Allcourses/b-tech/html",
                              children: Object(h.jsx)("img", {
                                src: "https://tse1.mm.bing.net/th?id=OIP.a3PLjaRMbKrtL-Jnr4rVsAHaGP&pid=Api&P=0&w=212&h=179",
                                width: "100%",
                                height: "300px",
                                alt: "",
                              }),
                            }),
                          }),
                          Object(h.jsx)("h3", {
                            className: "branch-heading",
                            children: e,
                          }),
                          Object(h.jsx)("p", {
                            className: "course-desc",
                            children:
                              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae fuga labore dolore saepe voluptatum. Molestiae sunt, veritatis maiores in illum, neque praesentium, voluptate officiis laboriosam laudantium a optio iure.",
                          }),
                          Object(h.jsx)(i.b, {
                            to: "/Allcourses/b-tech/html",
                            children: "LEARN",
                          }),
                          Object(h.jsx)(i.b, {
                            to: "/Allcourses/b-tech/html",
                            style: { float: "right" },
                            children: "EXAMPLE",
                          }),
                        ],
                      }),
                    }),
                  });
                }),
              }),
            }),
          });
        },
        _e = function () {
          return Object(h.jsx)(h.Fragment, {
            children: Object(h.jsxs)("div", {
              class: "wrapper",
              children: [
                Object(h.jsx)("input", {
                  "data-function": "swipe",
                  id: "swipe",
                  type: "checkbox",
                }),
                Object(h.jsxs)("label", {
                  "data-function": "swipe",
                  for: "swipe",
                  children: [
                    Object(h.jsx)("div", { class: "spinner diagonal part-1" }),
                    Object(h.jsx)("div", { class: "spinner horizontal" }),
                    Object(h.jsx)("div", { class: "spinner diagonal part-2" }),
                  ],
                }),
                Object(h.jsx)("div", { class: "content" }),
                Object(h.jsx)("div", {
                  class: "sidebar",
                  children: Object(h.jsxs)("nav", {
                    class: "menu",
                    children: [
                      Object(h.jsx)("li", {
                        children: Object(h.jsx)(i.b, {
                          className: "alink",
                          to: "/Allcourses/b-tech/html/intro",
                          children: "intro",
                        }),
                      }),
                      Object(h.jsx)("li", {
                        children: Object(h.jsx)(i.b, {
                          className: "alink",
                          to: "/Allcourses/b-tech/html/getstarted",
                          children: "get started",
                        }),
                      }),
                      Object(h.jsx)("li", {
                        children: Object(h.jsx)(i.b, {
                          className: "alink",
                          to: "/Allcourses/b-tech/html/intro",
                          children: "intro",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        Ne = function () {
          return Object(h.jsx)("div", {
            children:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo beatae cum illum eaque, nihil laboriosam tempore dicta quaerat quo, hic, omnis voluptatibus nulla cumque accusamus et voluptatem? Suscipit soluta magni facere. Itaque accusantium optio porro quibusdam sapiente illum molestiae, eos asperiores? Vel, quidem laboriosam odio similique autem ut minus distinctio dolore quasi sequi non, quo sapiente error minima labore omnis accusantium eum eveniet ipsam in possimus quaerat inventore. Minima eos asperiores dolorum eveniet sed, laudantium dicta veniam adipisci atque cumque aspernatur, ullam possimus ad dolore! Amet eveniet praesentium in reprehenderit fugit dolor maiores minus doloremque? Quae tempore deleniti aspernatur quasi?",
          });
        },
        we = function () {
          return Object(h.jsx)(h.Fragment, {
            children: Object(h.jsxs)(d.a, {
              children: [
                Object(h.jsx)("p", {
                  children:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, architecto deleniti. Ipsam labore tenetur sed rerum aliquid quo, maiores alias eligendi, molestiae officiis iste ut sequi cupiditate, minima autem expedita quos modi suscipit esse incidunt ex deleniti obcaecati repellendus ratione. Tenetur ullam illo quis, voluptatum adipisci reiciendis culpa consequatur ex.",
                }),
                Object(h.jsx)("p", {
                  children:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi at explicabo ex, maiores accusamus laborum neque repellendus praesentium fuga sunt!",
                }),
                Object(h.jsx)("p", {
                  children:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam numquam animi pariatur laboriosam! Sapiente magni pariatur sint ipsa fugit saepe blanditiis alias maiores. Neque dolorem quisquam dolor deserunt accusamus est molestiae eos labore culpa cupiditate, doloremque nemo in, sint, voluptatibus perferendis mollitia doloribus! Provident totam dolore aut eum fuga officiis repudiandae explicabo doloremque eius, laboriosam impedit voluptatum saepe aperiam odio! Dicta ad officiis assumenda explicabo suscipit facere eius iusto repellat, porro nam! Eos libero eligendi suscipit. Sit, dolorum facere, quod eaque eligendi blanditiis porro quidem unde aliquid adipisci placeat repudiandae aut quaerat cum. Eius distinctio quia voluptatibus earum neque!",
                }),
              ],
            }),
          });
        },
        Se = function () {
          return Object(h.jsxs)(i.a, {
            children: [
              Object(h.jsx)(_e, {}),
              Object(h.jsxs)(l.c, {
                children: [
                  Object(h.jsx)(l.a, {
                    path: "/Allcourses/b-tech/html/",
                    component: we,
                    exact: !0,
                  }),
                  Object(h.jsx)(l.a, {
                    path: "/Allcourses/b-tech/html/intro",
                    component: we,
                    exact: !0,
                  }),
                  Object(h.jsx)(l.a, {
                    path: "/Allcourses/b-tech/html/getstarted",
                    component: Ne,
                    exact: !0,
                  }),
                ],
              }),
            ],
          });
        },
        Ee = function () {
          return Object(h.jsx)(d.a, {
            children: Object(h.jsx)(x.a, {
              children: ["CSE", "mechanical", "civil"].map(function (e) {
                return Object(h.jsx)(h.Fragment, {
                  children: Object(h.jsx)(g.a, {
                    lg: 3,
                    md: 6,
                    sm: 6,
                    style: { marginBottom: "50px" },
                    children: Object(h.jsxs)("div", {
                      className: "course-box",
                      children: [
                        Object(h.jsx)("div", {
                          children: Object(h.jsx)(i.b, {
                            to: "/Allcourses/b-tech/All-Courses",
                            children: Object(h.jsx)("img", {
                              src: "https://tse1.mm.bing.net/th?id=OIP.a3PLjaRMbKrtL-Jnr4rVsAHaGP&pid=Api&P=0&w=212&h=179",
                              width: "100%",
                              height: "300px",
                              alt: "",
                            }),
                          }),
                        }),
                        Object(h.jsx)("h3", {
                          className: "branch-heading",
                          children: e,
                        }),
                        Object(h.jsx)("p", {
                          className: "course-desc",
                          children:
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae fuga labore dolore saepe voluptatum. Molestiae sunt, veritatis maiores in illum, neque praesentium, voluptate officiis laboriosam laudantium a optio iure.",
                        }),
                        Object(h.jsx)(i.b, {
                          to: "/Allcourses/b-tech/All-Courses",
                          children: "Courses",
                        }),
                      ],
                    }),
                  }),
                });
              }),
            }),
          });
        },
        Ce = function () {
          var e = JSON.parse(localStorage.getItem("profile"));
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsx)("div", {
                style: { height: "500px", marginBottom: "50px" },
                children: Object(h.jsx)("img", {
                  src: "https://www.thebalancecareers.com/thmb/3TXSZvKKQXcWu3Zu3qU8ag158MU=/3864x2577/filters:fill(auto,1)/school-books-on-desk--education-concept-871454068-5b548900c9e77c005b04fc8c.jpg",
                  alt: "",
                  height: "490px",
                  width: "100%",
                }),
              }),
              Object(h.jsxs)(d.a, {
                children: [
                  Object(h.jsx)(x.a, {
                    children:
                      e &&
                      Object(h.jsx)(h.Fragment, {
                        children: e.user.isAdmin
                          ? Object(h.jsx)(i.b, {
                              to: "/createblog",
                              children: Object(h.jsx)(p.a, {
                                variant: "primary",
                                children: "ADD COURSES",
                              }),
                            })
                          : "",
                      }),
                  }),
                  Object(h.jsx)("br", {}),
                  Object(h.jsx)(x.a, {
                    children: [
                      "B-tech",
                      "BCA",
                      "BSC",
                      "B-pharmacy",
                      "BA",
                      "MA",
                      "Army",
                      "SSC",
                      "MSC",
                      "Group-C",
                    ].map(function (e) {
                      return Object(h.jsx)(h.Fragment, {
                        children: Object(h.jsx)(g.a, {
                          lg: 3,
                          md: 6,
                          sm: 6,
                          style: { marginBottom: "50px" },
                          children: Object(h.jsxs)("div", {
                            className: "course-box",
                            children: [
                              Object(h.jsx)("div", {
                                children: Object(h.jsx)(i.b, {
                                  to: "/Allcourses/b-tech",
                                  children: Object(h.jsx)("img", {
                                    src: "https://tse1.mm.bing.net/th?id=OIP.a3PLjaRMbKrtL-Jnr4rVsAHaGP&pid=Api&P=0&w=212&h=179",
                                    width: "100%",
                                    height: "300px",
                                    alt: "",
                                  }),
                                }),
                              }),
                              Object(h.jsx)("p", {
                                className: "total-course",
                                children: "100+ course",
                              }),
                              Object(h.jsx)("h3", {
                                className: "branch-heading",
                                children: e,
                              }),
                              Object(h.jsx)("p", {
                                className: "course-desc",
                                children:
                                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae fuga labore dolore saepe voluptatum. Molestiae sunt, veritatis maiores in illum, neque praesentium, voluptate officiis laboriosam laudantium a optio iure.",
                              }),
                              Object(h.jsx)(i.b, {
                                to: "/Allcourses/b-tech",
                                children: "Courses",
                              }),
                            ],
                          }),
                        }),
                      });
                    }),
                  }),
                ],
              }),
              Object(h.jsx)("br", {}),
              Object(h.jsx)(y, {}),
            ],
          });
        },
        Te = function () {
          return Object(h.jsx)("div", { children: "JavaScriptExample" });
        },
        Ae = function () {
          var e = Object(s.useState)(""),
            t = Object(o.a)(e, 2),
            a = t[0],
            c = t[1],
            r = Object(s.useState)(""),
            n = Object(o.a)(r, 2),
            i = n[0],
            l = n[1],
            j = Object(s.useState)(""),
            d = Object(o.a)(j, 2),
            b = d[0],
            u = d[1],
            m = (function () {
              var e = Object(S.a)(
                w.a.mark(function e(t) {
                  var s, c, r;
                  return w.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (s = {
                                headers: { "Content-Type": "application/json" },
                              }),
                              (e.prev = 2),
                              (e.next = 5),
                              C.a.post(
                                "".concat(
                                  "https://sparkling-fawn-loincloth.cyclic.app/",
                                  "/auth/forgotpassword"
                                ),
                                { email: a },
                                s
                              )
                            );
                          case 5:
                            (c = e.sent),
                              (r = c.data),
                              u(r.data),
                              (e.next = 14);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(2)),
                              l(e.t0.response.data.error),
                              setTimeout(function () {
                                l("");
                              }, 5e3);
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 10]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(h.jsx)(h.Fragment, {
            children: Object(h.jsx)(f.a, {
              className: "form_card",
              children: Object(h.jsxs)("form", {
                onSubmit: m,
                children: [
                  Object(h.jsx)("h3", {
                    className: "forgot_password_heading",
                    children: "Forgot Password",
                  }),
                  i && Object(h.jsx)(ne, { children: i }),
                  b && Object(h.jsx)(ne, { children: b }),
                  Object(h.jsxs)("div", {
                    children: [
                      Object(h.jsx)("p", {
                        className: "forgot_password_alert",
                        children:
                          "Please enter the eamil address you registeryour account with. We will send you reset password confermation to this email",
                      }),
                      Object(h.jsx)("label", {
                        htmlFor: "email",
                        children: "Email:",
                      }),
                      Object(h.jsx)("input", {
                        className: "forgot_password_email",
                        type: "email",
                        required: !0,
                        id: "email",
                        placeholder: "Email Address",
                        value: a,
                        onChange: function (e) {
                          return c(e.target.value);
                        },
                      }),
                    ],
                  }),
                  Object(h.jsx)("br", {}),
                  Object(h.jsx)("button", {
                    type: "submit",
                    className: "forgot_password_sendEmail_button",
                    children: "Send Mail",
                  }),
                ],
              }),
            }),
          });
        },
        ke = "GET_COURSE_REQUEST",
        Ie = "GET_COURSE_SUCCESS",
        Le = "GET_COURSE_FAIL",
        Ue = "GET_COURSE_DETAIL_REQUEST",
        Re = "GET_COURSE_DETAIL_SUCCESS",
        Pe = "GET_COURSE_DETAIL_FAIL",
        qe = "https://sparkling-fawn-loincloth.cyclic.app/",
        Be = "CREATE_REVIEW_REQUEST",
        Fe = "CREATE_REVIEW_SUCCESS",
        Ge = "CREATE_REVIEW_FAIL",
        De = "GET_REVIEW_REQUEST",
        Qe = "GET_REVIEW_SUCCESS",
        Me = "GET_REVIEW_FAIL",
        Je = "https://sparkling-fawn-loincloth.cyclic.app/",
        He = a(181),
        ze = function () {
          return Object(h.jsx)(h.Fragment, {
            children: Object(h.jsxs)(He.a, {
              fade: !0,
              children: [
                Object(h.jsxs)(He.a.Item, {
                  className: "slider_image",
                  children: [
                    Object(h.jsx)("img", {
                      className: "d-block w-100",
                      src: "https://www.thebalancecareers.com/thmb/3TXSZvKKQXcWu3Zu3qU8ag158MU=/3864x2577/filters:fill(auto,1)/school-books-on-desk--education-concept-871454068-5b548900c9e77c005b04fc8c.jpg",
                      alt: "First slide",
                    }),
                    Object(h.jsxs)(He.a.Caption, {
                      children: [
                        Object(h.jsx)("p", {
                          className: "slider1_heading",
                          children: "EDUCATION",
                        }),
                        Object(h.jsx)("p", {
                          className: "slider1_subheading",
                          children: "education for everyone",
                        }),
                        Object(h.jsxs)("p", {
                          className: "slider1_desc",
                          children: [
                            "We provides always our best services for our clients and always",
                            Object(h.jsx)("br", {}),
                            "try to achieve our client's trust and satisfaction.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(h.jsxs)(He.a.Item, {
                  className: "slider_image",
                  children: [
                    Object(h.jsx)("img", {
                      className: "d-block w-100",
                      src: "https://static-copyright-com-au.s3.amazonaws.com/uploads/2015/04/Education_StudyingBooks-@Stokkete-lowres.jpg",
                      alt: "Second slide",
                    }),
                    Object(h.jsxs)(He.a.Caption, {
                      children: [
                        Object(h.jsx)("p", {
                          className: "slider2_heading",
                          children: "feed your knowladge",
                        }),
                        Object(h.jsx)("p", {
                          className: "slider2_subheading",
                          children: "best code learning platform",
                        }),
                        Object(h.jsxs)("p", {
                          className: "slider2_desc",
                          children: [
                            "We provides always our best services for our clients and always",
                            Object(h.jsx)("br", {}),
                            "try to achieve our client's trust and satisfaction.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(h.jsxs)(He.a.Item, {
                  className: "slider_image",
                  children: [
                    Object(h.jsx)("img", {
                      className: "d-block w-100",
                      src: "https://images.financialexpress.com/2020/10/education-1.jpg",
                      alt: "Third slide",
                    }),
                    Object(h.jsxs)(He.a.Caption, {
                      children: [
                        Object(h.jsx)("p", {
                          className: "slider3_heading",
                          children: "best education",
                        }),
                        Object(h.jsx)("p", {
                          className: "slider3_subheading",
                          children: "for your better future",
                        }),
                        Object(h.jsxs)("p", {
                          className: "slider3_desc",
                          children: [
                            "We provides always our best services for our clients and always",
                            Object(h.jsx)("br", {}),
                            "try to achieve our client's trust and satisfaction.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        We = function () {
          var e = Object(n.c)(function (e) {
              return e.CourseList;
            }),
            t = e.loading,
            a = e.error,
            s = e.courses;
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsx)("br", {}),
              t
                ? Object(h.jsx)(ce, {})
                : a
                ? Object(h.jsx)(ne, { variant: "danger", children: a })
                : Object(h.jsx)("div", {
                    className: "main_container",
                    children: Object(h.jsxs)(d.a, {
                      className: "main_container",
                      children: [
                        Object(h.jsxs)("p", {
                          className: "our_courses_heading",
                          children: [
                            "Our ",
                            Object(h.jsx)("span", {
                              children: "Populer Courses",
                            }),
                          ],
                        }),
                        Object(h.jsx)(x.a, {
                          children: s
                            ? Object(h.jsx)(h.Fragment, {
                                children: s.map(function (e) {
                                  return Object(h.jsxs)(
                                    g.a,
                                    {
                                      lg: 3,
                                      md: 4,
                                      sm: 6,
                                      xs: 12,
                                      className: "language_card",
                                      children: [
                                        Object(h.jsxs)(f.a, {
                                          className: "card",
                                          children: [
                                            Object(h.jsx)(f.a.Img, {
                                              variant: "top",
                                              height: "150px",
                                              src: e.image,
                                            }),
                                            Object(h.jsxs)(f.a.Body, {
                                              children: [
                                                Object(h.jsxs)(f.a.Title, {
                                                  className: "card_title",
                                                  children: [
                                                    ((t = e.title),
                                                    (a = 50),
                                                    t.length > a
                                                      ? t.substring(0, a) +
                                                        "..."
                                                      : t),
                                                    Object(h.jsx)("br", {}),
                                                    Object(h.jsx)("p", {}),
                                                  ],
                                                }),
                                                Object(h.jsxs)(f.a.Text, {
                                                  className:
                                                    "goto_example_button_box",
                                                  children: [
                                                    Object(h.jsx)(i.b, {
                                                      to: "/course/".concat(
                                                        e._id
                                                      ),
                                                      className: "link",
                                                      children: e.gotolearnpage,
                                                    }),
                                                    Object(h.jsx)(i.b, {
                                                      to: "/example/".concat(
                                                        e.name
                                                      ),
                                                      variant: "primary",
                                                      className: "link",
                                                      children: e.example,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        Object(h.jsx)("br", {}),
                                      ],
                                    },
                                    e._id
                                  );
                                  var t, a;
                                }),
                              })
                            : "",
                        }),
                      ],
                    }),
                  }),
            ],
          });
        },
        Ve = a(94),
        Ye = a.n(Ve),
        Ke = (a(164), new Date().toDateString()),
        Xe = function () {
          var e = Object(n.b)(),
            t = Object(l.f)(),
            a = Object(s.useState)(""),
            c = Object(o.a)(a, 2),
            r = c[0],
            i = c[1],
            j = Object(s.useState)(""),
            b = Object(o.a)(j, 2),
            u = b[0],
            m = b[1],
            O = Object(s.useState)(""),
            x = Object(o.a)(O, 2),
            g = x[0],
            f = x[1],
            v = Object(s.useState)(""),
            y = Object(o.a)(v, 2),
            _ = y[0],
            N = y[1],
            E = Object(s.useState)(""),
            T = Object(o.a)(E, 2),
            A = T[0],
            k = T[1],
            I = JSON.parse(localStorage.getItem("profile")),
            L = Object(n.c)(function (e) {
              return e.reviews;
            }),
            U = L.loading,
            R = L.error,
            P = L.Reviews;
          Object(s.useEffect)(
            function () {
              I &&
                (i(I.user.name || I.user.username),
                m(I.user.image || I.user.username || I.user.name.imageUrl),
                f(I.user.email),
                N(Ke));
            },
            [I]
          );
          var q = function () {
            e(
              (function (e, t, a, s, c) {
                return (function () {
                  var r = Object(S.a)(
                    w.a.mark(function r(n) {
                      var i, l;
                      return w.a.wrap(
                        function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (
                                  (r.prev = 0),
                                  n({ type: Be }),
                                  (r.next = 4),
                                  C.a.post("".concat(Je, "/review/new"), {
                                    name: e,
                                    image: t,
                                    email: a,
                                    date: s,
                                    review: c,
                                  })
                                );
                              case 4:
                                (i = r.sent),
                                  (l = i.data),
                                  n({ type: Fe, payload: l }),
                                  (r.next = 12);
                                break;
                              case 9:
                                (r.prev = 9),
                                  (r.t0 = r.catch(0)),
                                  n({
                                    type: Ge,
                                    payload:
                                      r.t0.response &&
                                      r.t0.response.data.message
                                        ? r.t0.response.data.message
                                        : r.t0.message,
                                  });
                              case 12:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        null,
                        [[0, 9]]
                      );
                    })
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })();
              })(r, u, g, _, A)
            ),
              t.push("/");
          };
          return Object(h.jsx)(h.Fragment, {
            children: U
              ? Object(h.jsx)(ce, {})
              : R
              ? Object(h.jsx)(ne, { variant: "danger" })
              : Object(h.jsxs)(h.Fragment, {
                  children: [
                    Object(h.jsxs)(d.a, {
                      className: "review-container",
                      children: [
                        Object(h.jsxs)("h1", {
                          className: "students-reviews",
                          children: [
                            Object(h.jsx)("span", {
                              className: "students-heading",
                              children: "Students",
                            }),
                            " Says About Us",
                          ],
                        }),
                        P
                          ? Object(h.jsx)("div", {
                              children: Object(h.jsx)(Ye.a, {
                                autoPlay: !0,
                                autoPlayInterval: "3000",
                                children: P.map(function (e) {
                                  return Object(h.jsxs)("div", {
                                    className: "review-box",
                                    children: [
                                      Object(h.jsxs)("div", {
                                        className: "review-user-image",
                                        children: [
                                          Object(h.jsx)("img", {
                                            src: "https://tse2.mm.bing.net/th?id=OIP.rz_yiPxDQENe_QOrsJCp8QHaEK&pid=Api&P=0&w=328&h=186",
                                            alt: "",
                                          }),
                                          Object(h.jsx)("p", {
                                            className: "review-username",
                                            children: e.name,
                                          }),
                                        ],
                                      }),
                                      Object(h.jsxs)("div", {
                                        className: "review-text",
                                        children: [
                                          Object(h.jsx)("p", {
                                            children:
                                              ((t = e.review),
                                              (a = 150),
                                              t.length > a
                                                ? t.substring(0, a) + "..."
                                                : t),
                                          }),
                                          Object(h.jsx)("p", {
                                            className: "review-username-mobile",
                                            children: e.name,
                                          }),
                                          Object(h.jsx)("p", {
                                            children: e.date,
                                          }),
                                        ],
                                      }),
                                    ],
                                  });
                                  var t, a;
                                }),
                              }),
                            })
                          : "",
                      ],
                    }),
                    Object(h.jsxs)(d.a, {
                      children: [
                        Object(h.jsx)("h1", {
                          className: "reviews-text-box",
                          children: "Write your review",
                        }),
                        Object(h.jsxs)(d.a, {
                          style: { display: "flex" },
                          children: [
                            Object(h.jsx)("textarea", {
                              name: "reviewTest",
                              id: "write-review",
                              rows: "3",
                              placeholder: "Write Your Review",
                              className: "reviews-textarea",
                              onChange: function (e) {
                                return k(e.target.value);
                              },
                            }),
                            I
                              ? Object(h.jsx)(p.a, {
                                  className: "review-post-button",
                                  onClick: function () {
                                    return q();
                                  },
                                  children: "Post",
                                })
                              : Object(h.jsx)(p.a, {
                                  className: "review-post-button",
                                  onClick: function () {
                                    t.push("/login");
                                  },
                                  children: "Post",
                                }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
          });
        },
        Ze = function () {
          var e = Object(n.b)();
          return (
            Object(s.useEffect)(
              function () {
                e(
                  (function () {
                    var e = Object(S.a)(
                      w.a.mark(function e(t) {
                        var a, s;
                        return w.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    t({ type: ke }),
                                    (e.next = 4),
                                    C.a.get("".concat(qe, "/courses/"))
                                  );
                                case 4:
                                  (a = e.sent),
                                    (s = a.data),
                                    t({ type: Ie, payload: s }),
                                    (e.next = 12);
                                  break;
                                case 9:
                                  (e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    t({
                                      type: Le,
                                      payload:
                                        e.t0.response &&
                                        e.t0.response.data.message
                                          ? e.t0.response.data.message
                                          : e.t0.message,
                                    });
                                case 12:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 9]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                ),
                  e(
                    (function () {
                      var e = Object(S.a)(
                        w.a.mark(function e(t) {
                          var a, s;
                          return w.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      t({ type: De }),
                                      (e.next = 4),
                                      C.a.get(
                                        "".concat(Je, "/review/AllReviews")
                                      )
                                    );
                                  case 4:
                                    (a = e.sent),
                                      (s = a.data),
                                      t({ type: Qe, payload: s }),
                                      (e.next = 12);
                                    break;
                                  case 9:
                                    (e.prev = 9),
                                      (e.t0 = e.catch(0)),
                                      t({
                                        type: Me,
                                        payload:
                                          e.t0.response &&
                                          e.t0.response.data.message
                                            ? e.t0.response.data.message
                                            : e.t0.message,
                                      });
                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 9]]
                          );
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  );
              },
              [e]
            ),
            Object(h.jsxs)(h.Fragment, {
              children: [
                Object(h.jsx)(ze, {}),
                Object(h.jsx)(We, {}),
                Object(h.jsx)(d.a, {
                  children: Object(h.jsxs)("p", {
                    children: [
                      "Please Write Your Reviews ",
                      Object(h.jsx)("a", {
                        href: "#write-review",
                        children: "Write Reviews",
                      }),
                    ],
                  }),
                }),
                Object(h.jsx)("br", {}),
                Object(h.jsx)(d.a, {
                  children: Object(h.jsxs)(x.a, {
                    children: [
                      Object(h.jsx)(g.a, {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        children: Object(h.jsx)(m.a, {
                          src: "https://tse2.mm.bing.net/th?id=OIP.jt60nECehjyXrIklqmQ4yQHaEL&pid=Api&P=0&w=292&h=165",
                          style: { width: "100%", marginTop: "30px" },
                        }),
                      }),
                      Object(h.jsxs)(g.a, {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        children: [
                          Object(h.jsxs)("p", {
                            className: "why_choose_us",
                            children: [
                              "why ",
                              Object(h.jsx)("span", { children: "choose us " }),
                              "?",
                            ],
                          }),
                          Object(h.jsxs)("p", {
                            className: "why_choose_desc",
                            children: [
                              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reprehenderit provident quae, repudiandae optio incidunt sunt perferendis nisi similique dicta, at tempora itaque ea in blanditiis debitis odio error dolorem quas doloremque velit omnis. Reiciendis eligendi, tenetur ipsum illo voluptates officia non suscipit nulla cupiditate, odio delectus omnis voluptatum enim illum aliquam voluptatibus ad minima molestias excepturi saepe architecto. Provident accusantium eius ex molestias, dicta pariatur debitis aut aliquid facilis maiores harum laudantium eum ipsa corrupti architecto. Praesentium incidunt voluptatum omnis libero minima tempora excepturi aliquid explicabo tempore beatae, ratione ab nostrum accusantium ad consequuntur id, alias, quia officiis quis.",
                              Object(h.jsx)("br", {}),
                              Object(h.jsxs)(i.b, {
                                to: "/about",
                                style: { color: "black" },
                                children: [
                                  "Read More \xa0",
                                  Object(h.jsx)(v.a, {
                                    color: "black",
                                    fontSize: "13px",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                Object(h.jsx)("br", {}),
                Object(h.jsx)("div", {
                  className: "about_site_container",
                  children: Object(h.jsxs)(d.a, {
                    children: [
                      Object(h.jsxs)(x.a, {
                        children: [
                          Object(h.jsxs)(g.a, {
                            lg: 3,
                            md: 3,
                            sm: 6,
                            xs: 6,
                            className: "about_site",
                            children: [
                              Object(h.jsx)("i", {
                                className:
                                  "pe-7s-smile mt-5 text-theme-color-2",
                              }),
                              Object(h.jsx)(de.k, {
                                color: "red",
                                fontSize: "50px",
                              }),
                              Object(h.jsxs)("p", {
                                children: [
                                  "1000+",
                                  Object(h.jsx)("br", {}),
                                  Object(h.jsx)("span", {
                                    children: "students",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(h.jsxs)(g.a, {
                            lg: 3,
                            md: 3,
                            sm: 6,
                            xs: 6,
                            className: "about_site",
                            children: [
                              Object(h.jsx)(de.i, {
                                color: "red",
                                fontSize: "50px",
                              }),
                              Object(h.jsxs)("p", {
                                children: [
                                  "10",
                                  Object(h.jsx)("br", {}),
                                  Object(h.jsx)("span", {
                                    children: " courses",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(h.jsxs)(g.a, {
                            lg: 3,
                            md: 3,
                            sm: 6,
                            xs: 6,
                            className: "about_site",
                            children: [
                              Object(h.jsx)(de.j, {
                                color: "red",
                                fontSize: "50px",
                              }),
                              Object(h.jsxs)("p", {
                                children: [
                                  "14",
                                  Object(h.jsx)("br", {}),
                                  Object(h.jsx)("span", {
                                    children: " teachers",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(h.jsxs)(g.a, {
                            lg: 3,
                            md: 3,
                            sm: 6,
                            xs: 6,
                            className: "about_site",
                            children: [
                              Object(h.jsx)(de.l, {
                                color: "red",
                                fontSize: "50px",
                              }),
                              Object(h.jsxs)("p", {
                                children: [
                                  "50",
                                  Object(h.jsx)("br", {}),
                                  Object(h.jsx)("span", { children: "Blogs" }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(h.jsx)("br", {}),
                      Object(h.jsx)(Xe, {}),
                    ],
                  }),
                }),
                Object(h.jsx)("br", {}),
                Object(h.jsx)(y, {}),
              ],
            })
          );
        },
        $e = function (e) {
          var t = e.match,
            a = Object(n.b)(),
            c = Object(n.c)(function (e) {
              return e.CourseDetail;
            }),
            r = c.loading,
            l = c.error,
            o = c.courseDetails;
          return (
            Object(s.useEffect)(
              function () {
                var e;
                a(
                  ((e = t.params.id),
                  (function () {
                    var t = Object(S.a)(
                      w.a.mark(function t(a) {
                        var s, c;
                        return w.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    a({ type: Ue }),
                                    (t.next = 4),
                                    C.a.get(
                                      "".concat(qe, "/courses/").concat(e)
                                    )
                                  );
                                case 4:
                                  (s = t.sent),
                                    (c = s.data),
                                    a({ type: Re, payload: c }),
                                    (t.next = 12);
                                  break;
                                case 9:
                                  (t.prev = 9),
                                    (t.t0 = t.catch(0)),
                                    a({
                                      type: Pe,
                                      payload:
                                        t.t0.response &&
                                        t.t0.response.data.message
                                          ? t.t0.response.data.message
                                          : t.t0.message,
                                    });
                                case 12:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 9]]
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })())
                );
              },
              [a, t.params.id]
            ),
            Object(h.jsxs)(d.a, {
              children: [
                Object(h.jsx)("br", {}),
                r
                  ? Object(h.jsx)(ce, {})
                  : l
                  ? Object(h.jsx)(ne, { variant: "danger", children: l })
                  : Object(h.jsx)(h.Fragment, {
                      children: o
                        ? Object(h.jsx)(x.a, {
                            children: Object(h.jsxs)(g.a, {
                              children: [
                                Object(h.jsx)(d.a, {
                                  className: "language_name",
                                  children: Object(h.jsx)("h1", {
                                    children: o.name,
                                  }),
                                }),
                                Object(h.jsx)("h3", { children: o.title }),
                                Object(h.jsx)("p", { children: o.description }),
                                " ",
                                Object(h.jsx)("br", {}),
                                Object(h.jsxs)(d.a, {
                                  className: "button_box",
                                  children: [
                                    Object(h.jsxs)(i.b, {
                                      to: "/",
                                      className: "link",
                                      children: [
                                        Object(h.jsx)(de.h, {}),
                                        "Back",
                                      ],
                                    }),
                                    Object(h.jsx)("br", {}),
                                    Object(h.jsx)(i.b, {
                                      to: "/language/".concat(o.name),
                                      className: "link",
                                      children: "Start Learning",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          })
                        : "",
                    }),
              ],
            })
          );
        },
        et = a(73),
        tt = "USER_REGISTER_REQUEST",
        at = "USER_REGISTER_SUCCESS",
        st = "USER_REGISTER_FAIL",
        ct = "USER_LOGIN_REQUEST",
        rt = "USER_LOGIN_SUCCESS",
        nt = "USER_LOGIN_FAIL",
        it = "USER_BLOGS_REQUEST",
        lt = "USER_BLOGS_SUCCESS",
        ot = "USER_BLOGS_FAIL",
        jt = "USER_UPDATE_REQUEST",
        dt = "USER_UPDATE_SUCCESS",
        bt = "USER_UPDATE_FAIL",
        ut = "USERS_GET_REQUEST",
        mt = "USERS_GET_SUCCESS",
        pt = "USERS_GET_FAIL",
        ht = "https://sparkling-fawn-loincloth.cyclic.app/",
        Ot = function (e, t, a, s, c) {
          return (function () {
            var r = Object(S.a)(
              w.a.mark(function r(n) {
                var i, l;
                return w.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            n({ type: tt }),
                            (r.next = 4),
                            C.a.post(
                              "".concat(ht, "/auth/register"),
                              { username: e, email: t, password: a },
                              s
                            )
                          );
                        case 4:
                          (i = r.sent),
                            (l = i.data),
                            n({ type: at, payload: l }),
                            c.push("/"),
                            (r.next = 13);
                          break;
                        case 10:
                          (r.prev = 10),
                            (r.t0 = r.catch(0)),
                            n({
                              type: st,
                              payload:
                                r.t0.response && r.t0.response.data.message
                                  ? r.t0.response.data.message
                                  : r.t0.message,
                            });
                        case 13:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })();
        },
        xt = function (e, t, a, s) {
          return (function () {
            var c = Object(S.a)(
              w.a.mark(function c(r) {
                var n, i;
                return w.a.wrap(
                  function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          return (
                            (c.prev = 0),
                            r({ type: ct }),
                            (c.next = 4),
                            C.a.post(
                              "".concat(ht, "/auth/login"),
                              { email: e, password: t },
                              a
                            )
                          );
                        case 4:
                          (n = c.sent),
                            (i = n.data),
                            r({ type: rt, payload: i }),
                            s.push("/"),
                            (c.next = 13);
                          break;
                        case 10:
                          (c.prev = 10),
                            (c.t0 = c.catch(0)),
                            r({
                              type: nt,
                              payload: "Invalid Email Or Password",
                            });
                        case 13:
                        case "end":
                          return c.stop();
                      }
                  },
                  c,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return c.apply(this, arguments);
            };
          })();
        },
        gt = function (e) {
          e.location;
          var t = e.history,
            a = Object(s.useState)(""),
            c = Object(o.a)(a, 2),
            r = c[0],
            l = c[1],
            j = Object(s.useState)(""),
            b = Object(o.a)(j, 2),
            u = b[0],
            m = b[1],
            O = Object(n.b)(),
            v = Object(n.c)(function (e) {
              return e.userLogin;
            }),
            y = v.loading,
            _ = v.error,
            N = (function () {
              var e = Object(S.a)(
                w.a.mark(function e(a) {
                  return w.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          a.preventDefault(),
                            O(
                              xt(
                                r,
                                u,
                                {
                                  header: {
                                    "Content-Type": "application/json",
                                  },
                                },
                                t
                              )
                            );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          Object(s.useEffect)(
            function () {
              localStorage.getItem("profile") && t.push("/");
            },
            [t]
          );
          var E = (function () {
            var e = Object(S.a)(
              w.a.mark(function e(a) {
                var s, c;
                return w.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (s =
                          null === a || void 0 === a ? void 0 : a.profileObj),
                          (c = null === a || void 0 === a ? void 0 : a.tokenId);
                        try {
                          localStorage.setItem(
                            "profile",
                            JSON.stringify({ user: s, token: c })
                          ),
                            t.push("/");
                        } catch (_) {
                          console.log(_);
                        }
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return Object(h.jsx)(h.Fragment, {
            children: y
              ? Object(h.jsx)(ce, {})
              : Object(h.jsx)(d.a, {
                  className: "login_box",
                  children: Object(h.jsxs)(f.a, {
                    className: "form_card",
                    children: [
                      Object(h.jsx)(de.g, {
                        varient: "danger",
                        className: "lock_icon",
                      }),
                      _ && Object(h.jsx)(ne, { children: _ }),
                      Object(h.jsxs)(he.a, {
                        onSubmit: N,
                        children: [
                          Object(h.jsx)(he.a.Group, {
                            children: Object(h.jsx)(he.a.Control, {
                              type: "email",
                              placeholder: "Email Address *",
                              name: "email",
                              value: r,
                              onChange: function (e) {
                                return l(e.target.value);
                              },
                              required: !0,
                              autoFocus: !0,
                            }),
                          }),
                          Object(h.jsx)("br", {}),
                          Object(h.jsx)(he.a.Group, {
                            controlId: "password",
                            children: Object(h.jsx)(he.a.Control, {
                              type: "password",
                              placeholder: "Password *",
                              name: "password",
                              value: u,
                              onChange: function (e) {
                                return m(e.target.value);
                              },
                              required: !0,
                            }),
                          }),
                          Object(h.jsx)(i.b, {
                            to: "/forgotpassword",
                            children: "Forgot Password?",
                          }),
                          Object(h.jsx)("br", {}),
                          Object(h.jsx)(p.a, {
                            type: "submit",
                            varient: "primary",
                            className: "form_submit",
                            children: "Login",
                          }),
                          Object(h.jsx)("br", {}),
                          Object(h.jsx)("br", {}),
                          Object(h.jsx)(et.GoogleLogin, {
                            clientId:
                              "623404801924-gpslvq6mrjbcfsq92oou89lg5q3eplu9.apps.googleusercontent.com",
                            render: function (e) {
                              return Object(h.jsxs)(p.a, {
                                className: "google_button",
                                onClick: e.onClick,
                                disabled: e.disabled,
                                children: [
                                  Object(h.jsx)(de.e, {}),
                                  " Google Sign In",
                                ],
                              });
                            },
                            onSuccess: E,
                            onFailure: function () {
                              console.log(
                                "Google Sign In was unsuccessfull. try again later"
                              );
                            },
                            cookiePolicy: "single_host_origin",
                          }),
                          Object(h.jsx)("br", {}),
                          Object(h.jsx)(x.a, {
                            children: Object(h.jsx)(g.a, {
                              children: Object(h.jsxs)(p.a, {
                                variant: "secondary",
                                className: "switch_button",
                                children: [
                                  "Don't have an account ? ",
                                  Object(h.jsx)(i.b, {
                                    to: "/register",
                                    children: "Register",
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
          });
        },
        ft = function (e) {
          e.blogs, e.user;
          return Object(h.jsx)(h.Fragment, {
            children: Object(h.jsx)(d.a, {
              children: Object(h.jsxs)(re.a, {
                variant: "warning",
                children: [
                  Object(h.jsx)(re.a.Heading, {
                    children: "Hey, nice to see you",
                  }),
                  Object(h.jsx)("p", {
                    children:
                      "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
                  }),
                  Object(h.jsx)("hr", {}),
                  Object(h.jsx)("p", {
                    className: "mb-0",
                    children:
                      "Whenever you need to, be sure to use margin utilities to keep things nice and tidy.",
                  }),
                  Object(h.jsxs)("div", {
                    className: "noblogButtons",
                    children: [
                      Object(h.jsx)(i.b, {
                        to: "/createblog",
                        children: Object(h.jsx)(p.a, {
                          variant: "primary",
                          className: "noblogscreatebutton",
                          children: "CREATE BLOG",
                        }),
                      }),
                      Object(h.jsx)(i.b, {
                        to: "/blog",
                        children: Object(h.jsx)(p.a, {
                          variant: "primary",
                          className: "noblogsallblogbutton",
                          children: "ALL BLOG",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        vt = function (e) {
          var t = e.totalBlogs,
            a = Object(l.f)(),
            c = Object(s.useState)([]),
            r = Object(o.a)(c, 2),
            n = r[0],
            j = r[1],
            d = Object(s.useState)(JSON.parse(localStorage.getItem("profile"))),
            b = Object(o.a)(d, 2),
            u = b[0],
            O = b[1];
          Object(s.useEffect)(
            function () {
              j(t ? Object.keys(t.result).length : "0");
            },
            [t]
          );
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsx)("br", {}),
              Object(h.jsxs)(f.a, {
                className: "profileCard",
                children: [
                  Object(h.jsx)("br", {}),
                  u.user.imageUrl
                    ? Object(h.jsxs)(h.Fragment, {
                        children: [
                          Object(h.jsx)(m.a, {
                            src: u.user.imageUrl,
                            alt: "",
                            className: "image_profile",
                          }),
                          Object(h.jsx)("br", {}),
                        ],
                      })
                    : Object(h.jsxs)(h.Fragment, {
                        children: [
                          Object(h.jsx)("div", {
                            className: "image_profile_noName",
                            children: Object(h.jsx)("p", {
                              children: u.user.username.charAt(0),
                            }),
                          }),
                          Object(h.jsx)("br", {}),
                        ],
                      }),
                  Object(h.jsx)("p", {
                    children: u.user.name || u.user.username,
                  }),
                  Object(h.jsx)("br", {}),
                  Object(h.jsx)("p", { children: u.user.email }),
                  Object(h.jsx)("br", {}),
                  Object(h.jsxs)("p", { children: ["Total Blogs: ", n] }),
                  Object(h.jsx)("br", {}),
                  Object(h.jsx)(i.b, {
                    to: "/profile/update/".concat(u.user.email),
                    className: "userdetail_links",
                    children: "EDIT PROFILE",
                  }),
                  Object(h.jsx)("br", {}),
                  Object(h.jsx)(p.a, {
                    variant: "none",
                    className: "userdetail_links",
                    onClick: function () {
                      localStorage.removeItem("profile"),
                        a.push("/login"),
                        O(null);
                    },
                    children: "LOGOUT",
                  }),
                  Object(h.jsx)("br", {}),
                ],
              }),
            ],
          });
        },
        yt = "https://sparkling-fawn-loincloth.cyclic.app/",
        _t = function () {
          var e = Object(n.b)(),
            t = Object(n.c)(function (e) {
              return e.totalUsers;
            }),
            a = t.loading,
            c = t.TotalUser,
            r = t.error;
          return (
            Object(s.useEffect)(
              function () {
                e(
                  (function () {
                    var e = Object(S.a)(
                      w.a.mark(function e(t) {
                        var a, s;
                        return w.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    t({ type: ut }),
                                    (e.next = 4),
                                    C.a.get(
                                      "".concat(
                                        "https://sparkling-fawn-loincloth.cyclic.app/",
                                        "/profile/All/users"
                                      )
                                    )
                                  );
                                case 4:
                                  (a = e.sent),
                                    (s = a.data),
                                    t({ type: mt, payload: s }),
                                    (e.next = 12);
                                  break;
                                case 9:
                                  (e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    t({
                                      type: pt,
                                      payload:
                                        e.t0.response &&
                                        e.t0.response.data.message
                                          ? e.t0.response.data.message
                                          : e.t0.message,
                                    });
                                case 12:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 9]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
              },
              [e]
            ),
            Object(h.jsx)(h.Fragment, {
              children: a
                ? Object(h.jsx)(ce, {})
                : r
                ? Object(h.jsx)(ne, { variant: "danger", children: r })
                : Object(h.jsx)(h.Fragment, {
                    children: c
                      ? Object(h.jsxs)(d.a, {
                          className: "user_blogs",
                          children: [
                            c.length > 0
                              ? Object(h.jsx)("h2", { children: "Users" })
                              : "",
                            Object(h.jsxs)(ae.a, {
                              striped: !0,
                              bordered: !0,
                              hover: !0,
                              className: "user_blogs_table",
                              children: [
                                c.length > 0
                                  ? Object(h.jsx)(h.Fragment, {
                                      children: Object(h.jsx)("thead", {
                                        children: Object(h.jsxs)("tr", {
                                          children: [
                                            Object(h.jsx)("th", {
                                              style: {
                                                textTransform: "uppercase",
                                              },
                                              children: "ID",
                                            }),
                                            Object(h.jsx)("th", {
                                              style: {
                                                textTransform: "uppercase",
                                              },
                                              children: "Username",
                                            }),
                                            Object(h.jsx)("th", {
                                              style: {
                                                textTransform: "uppercase",
                                              },
                                              children: "email",
                                            }),
                                            Object(h.jsx)("th", {
                                              style: {
                                                textTransform: "uppercase",
                                              },
                                              children: "Admin",
                                            }),
                                          ],
                                        }),
                                      }),
                                    })
                                  : "",
                                Object(h.jsx)(h.Fragment, {
                                  children: c.map(function (e) {
                                    return Object(h.jsx)(h.Fragment, {
                                      children: Object(h.jsx)(
                                        "tbody",
                                        {
                                          children: Object(h.jsxs)("tr", {
                                            children: [
                                              Object(h.jsx)("td", {
                                                children: e._id,
                                              }),
                                              Object(h.jsx)("td", {
                                                children: e.username,
                                              }),
                                              Object(h.jsx)("td", {
                                                children: e.email,
                                              }),
                                              Object(h.jsx)("td", {
                                                children:
                                                  !0 === e.isAdmin
                                                    ? "YES"
                                                    : "NO",
                                              }),
                                            ],
                                          }),
                                        },
                                        e._id
                                      ),
                                    });
                                  }),
                                }),
                              ],
                            }),
                            Object(h.jsx)(i.b, {
                              to: "/",
                              style: { float: "right" },
                              children: "View All Users List",
                            }),
                          ],
                        })
                      : "",
                  }),
            })
          );
        },
        Nt = function (e) {
          var t = e.match,
            a = e.history,
            c = Object(n.b)(),
            r = Object(n.c)(function (e) {
              return e.userBlogs;
            }),
            l = r.loading,
            o = r.error,
            j = r.UsersBlog,
            b = JSON.parse(localStorage.getItem("profile"));
          Object(s.useEffect)(
            function () {
              var e;
              c(
                ((e = t.params.email),
                (function () {
                  var t = Object(S.a)(
                    w.a.mark(function t(a) {
                      var s, c;
                      return w.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  a({ type: it }),
                                  (t.next = 4),
                                  C.a.get(
                                    "".concat(yt, "/profile/detail/").concat(e)
                                  )
                                );
                              case 4:
                                (s = t.sent),
                                  (c = s.data),
                                  a({ type: lt, payload: c }),
                                  (t.next = 12);
                                break;
                              case 9:
                                (t.prev = 9),
                                  (t.t0 = t.catch(0)),
                                  a({
                                    type: ot,
                                    payload:
                                      t.t0.response &&
                                      t.t0.response.data.message
                                        ? t.t0.response.data.message
                                        : t.t0.message,
                                  });
                              case 12:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 9]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })())
              );
            },
            [t, c]
          );
          var u = function (e) {
            c(
              (function (e, t, a) {
                return (function () {
                  var s = Object(S.a)(
                    w.a.mark(function s(c) {
                      return w.a.wrap(
                        function (s) {
                          for (;;)
                            switch ((s.prev = s.next)) {
                              case 0:
                                return (
                                  (s.prev = 0),
                                  c({ type: "USER_DELETE_BLOG" }),
                                  (s.next = 4),
                                  C.a.delete(
                                    "".concat(yt, "/blog/delete/").concat(e)
                                  )
                                );
                              case 4:
                                t.push("/profile/".concat(a)), (s.next = 10);
                                break;
                              case 7:
                                (s.prev = 7),
                                  (s.t0 = s.catch(0)),
                                  console.log(s.t0);
                              case 10:
                              case "end":
                                return s.stop();
                            }
                        },
                        s,
                        null,
                        [[0, 7]]
                      );
                    })
                  );
                  return function (e) {
                    return s.apply(this, arguments);
                  };
                })();
              })(e, a, b.user.email)
            );
          };
          return Object(h.jsx)(d.a, {
            children: l
              ? Object(h.jsx)(ce, {})
              : o
              ? Object(h.jsx)(ne, { variant: "danger", children: o })
              : Object(h.jsxs)(d.a, {
                  className: "profileDetail",
                  children: [
                    Object(h.jsx)("div", {
                      children: Object(h.jsx)(vt, { user: b, totalBlogs: j }),
                    }),
                    Object(h.jsxs)("div", {
                      className: "userBlogs_container",
                      children: [
                        Object(h.jsx)(h.Fragment, {
                          children: j
                            ? Object(h.jsxs)(d.a, {
                                className: "user_blogs",
                                children: [
                                  Object.keys(j.result).length > 0
                                    ? Object(h.jsx)(h.Fragment, {
                                        children: Object(h.jsx)("h2", {
                                          children: "Blogs",
                                        }),
                                      })
                                    : "",
                                  Object(h.jsxs)(ae.a, {
                                    striped: !0,
                                    bordered: !0,
                                    hover: !0,
                                    className: "user_blogs_table",
                                    children: [
                                      Object.keys(j.result).length > 0
                                        ? Object(h.jsx)(h.Fragment, {
                                            children: Object(h.jsx)("thead", {
                                              children: Object(h.jsxs)("tr", {
                                                children: [
                                                  Object(h.jsx)("th", {
                                                    style: {
                                                      textTransform:
                                                        "uppercase",
                                                    },
                                                    children: "Title",
                                                  }),
                                                  Object(h.jsx)("th", {
                                                    style: {
                                                      textTransform:
                                                        "uppercase",
                                                    },
                                                    children: "Category",
                                                  }),
                                                  Object(h.jsx)("th", {
                                                    style: {
                                                      textTransform:
                                                        "uppercase",
                                                    },
                                                    children: "Description",
                                                  }),
                                                  Object(h.jsx)("th", {
                                                    style: {
                                                      textTransform:
                                                        "uppercase",
                                                    },
                                                    children: "created Date",
                                                  }),
                                                  Object(h.jsx)("th", {
                                                    colSpan: "3",
                                                    style: {
                                                      textTransform:
                                                        "uppercase",
                                                    },
                                                    children: "Action",
                                                  }),
                                                ],
                                              }),
                                            }),
                                          })
                                        : Object(h.jsx)(ft, {}),
                                      j.result.map(function (e) {
                                        return Object(h.jsx)(
                                          "tbody",
                                          {
                                            children: Object(h.jsxs)("tr", {
                                              children: [
                                                Object(h.jsx)("td", {
                                                  children: e.title,
                                                }),
                                                Object(h.jsx)("td", {
                                                  children: e.category,
                                                }),
                                                Object(h.jsx)("td", {
                                                  children:
                                                    ((t = e.description),
                                                    (a = 40),
                                                    t.length > a
                                                      ? t.substring(0, a) +
                                                        "..."
                                                      : t),
                                                }),
                                                Object(h.jsx)("td", {
                                                  children: e.createdDate,
                                                }),
                                                Object(h.jsx)("td", {
                                                  children: Object(h.jsxs)(
                                                    i.b,
                                                    {
                                                      to: "/blog/update/".concat(
                                                        e._id
                                                      ),
                                                      className: "links",
                                                      children: [
                                                        Object(h.jsx)(de.c, {
                                                          color: "orange",
                                                          className:
                                                            "blog_detail_edit",
                                                        }),
                                                        "UPDATE",
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                Object(h.jsx)("td", {
                                                  children: Object(h.jsxs)(
                                                    i.b,
                                                    {
                                                      className: "links",
                                                      to: "/blog/".concat(
                                                        e._id
                                                      ),
                                                      children: [
                                                        Object(h.jsx)(de.d, {
                                                          color: "blue",
                                                        }),
                                                        " VIEW",
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                Object(h.jsx)("td", {
                                                  children: Object(h.jsxs)(
                                                    p.a,
                                                    {
                                                      className: "button_links",
                                                      onClick: function () {
                                                        return u(e._id);
                                                      },
                                                      children: [
                                                        Object(h.jsx)(de.b, {
                                                          color: "red",
                                                        }),
                                                        " DELETE",
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          },
                                          e._id
                                        );
                                        var t, a;
                                      }),
                                    ],
                                  }),
                                  " ",
                                  Object(h.jsx)(i.b, {
                                    to: "/",
                                    style: { float: "right" },
                                    children: "View All Blogs List",
                                  }),
                                ],
                              })
                            : "",
                        }),
                        !0 === b.user.isAdmin && Object(h.jsx)(_t, {}),
                      ],
                    }),
                  ],
                }),
          });
        },
        wt = function () {
          var e = Object(n.b)(),
            t = Object(l.f)(),
            a = JSON.parse(localStorage.getItem("profile")),
            c = Object(s.useState)(""),
            r = Object(o.a)(c, 2),
            j = r[0],
            b = r[1],
            u = Object(s.useState)(""),
            O = Object(o.a)(u, 2),
            v = O[0],
            y = O[1],
            _ = Object(s.useState)(""),
            N = Object(o.a)(_, 2),
            E = N[0],
            T = N[1];
          Object(s.useEffect)(
            function () {
              if (a.user.name)
                return (
                  setTimeout(function () {
                    T(""), t.push("/profile/".concat(a.user.email));
                  }, 5e3),
                  T(
                    "You Can't Update Your Profile, Because You Logged In Through Google !!!"
                  )
                );
              b(a.user.username), y(a.user.email);
            },
            [a.user.email, a.user.username, a.user.name, t]
          );
          var A = function () {
            e(
              (function (e, t, a, s) {
                return (function () {
                  var c = Object(S.a)(
                    w.a.mark(function c(r) {
                      var n, i, l;
                      return w.a.wrap(
                        function (c) {
                          for (;;)
                            switch ((c.prev = c.next)) {
                              case 0:
                                return (
                                  (c.prev = 0),
                                  r({ type: jt }),
                                  (n = {
                                    header: {
                                      "Content-Type": "application/json",
                                    },
                                  }),
                                  (c.next = 5),
                                  C.a.put(
                                    "".concat(yt, "/profile/update/").concat(e),
                                    { username: t, email: a },
                                    n
                                  )
                                );
                              case 5:
                                (i = c.sent),
                                  (l = i.data),
                                  r({ type: dt, payload: l }),
                                  s.push("/profile/".concat(a)),
                                  (c.next = 14);
                                break;
                              case 11:
                                (c.prev = 11),
                                  (c.t0 = c.catch(0)),
                                  r({
                                    type: bt,
                                    payload:
                                      c.t0.response &&
                                      c.t0.response.data.message
                                        ? c.t0.response.data.message
                                        : c.t0.message,
                                  });
                              case 14:
                              case "end":
                                return c.stop();
                            }
                        },
                        c,
                        null,
                        [[0, 11]]
                      );
                    })
                  );
                  return function (e) {
                    return c.apply(this, arguments);
                  };
                })();
              })(a.user._id, j, v, t)
            );
          };
          return Object(h.jsxs)(h.Fragment, {
            children: [
              E && Object(h.jsx)(ne, { variant: "danger", children: E }),
              Object(h.jsx)(d.a, {
                className: "login_box",
                children: Object(h.jsxs)(f.a, {
                  className: "form_card",
                  children: [
                    a.user.imageUrl
                      ? Object(h.jsxs)(h.Fragment, {
                          children: [
                            Object(h.jsx)(m.a, {
                              src: a.user.imageUrl,
                              alt: "",
                              className: "image_profile",
                            }),
                            Object(h.jsx)("br", {}),
                          ],
                        })
                      : Object(h.jsxs)(h.Fragment, {
                          children: [
                            Object(h.jsx)("div", {
                              className: "image_profile_noName",
                              children: a.user.name
                                ? Object(h.jsx)("p", {
                                    children: a.user.name.charAt(0),
                                  })
                                : Object(h.jsx)("p", {
                                    children: a.user.username.charAt(0),
                                  }),
                            }),
                            Object(h.jsx)("br", {}),
                          ],
                        }),
                    Object(h.jsx)("br", {}),
                    Object(h.jsx)(he.a, {
                      children: Object(h.jsxs)(h.Fragment, {
                        children: [
                          Object(h.jsx)(x.a, {
                            children: Object(h.jsx)(g.a, {
                              lg: 12,
                              md: 12,
                              xs: 12,
                              children: Object(h.jsx)(he.a.Group, {
                                controlId: "username",
                                children: Object(h.jsx)(he.a.Control, {
                                  type: "text",
                                  placeholder: "UserName",
                                  name: "username",
                                  autoFocus: !0,
                                  value: j,
                                  onChange: function (e) {
                                    return b(e.target.value);
                                  },
                                }),
                              }),
                            }),
                          }),
                          Object(h.jsx)("br", {}),
                          Object(h.jsx)(he.a.Group, {
                            children: Object(h.jsx)(he.a.Control, {
                              type: "email",
                              placeholder: "Email Address",
                              name: "email",
                              value: v,
                              onChange: function (e) {
                                return y(e.target.value);
                              },
                            }),
                          }),
                          Object(h.jsx)("br", {}),
                          a.user.username &&
                            Object(h.jsx)(x.a, {
                              children: Object(h.jsx)(g.a, {
                                lg: 12,
                                md: 12,
                                xs: 12,
                                children: Object(h.jsx)(i.b, {
                                  to: "/forgotpassword",
                                  children: "Update Password",
                                }),
                              }),
                            }),
                          Object(h.jsx)(p.a, {
                            variant: "primary",
                            className: "publish_button",
                            onClick: function () {
                              return A();
                            },
                            children: "UPDATE",
                          }),
                        ],
                      }),
                    }),
                    Object(h.jsx)("br", {}),
                  ],
                }),
              }),
            ],
          });
        },
        St = function (e) {
          var t = e.history,
            a = Object(s.useState)(""),
            c = Object(o.a)(a, 2),
            r = c[0],
            l = c[1],
            j = Object(s.useState)(""),
            b = Object(o.a)(j, 2),
            u = b[0],
            m = b[1],
            O = Object(s.useState)(""),
            v = Object(o.a)(O, 2),
            y = v[0],
            _ = v[1],
            N = Object(s.useState)(""),
            E = Object(o.a)(N, 2),
            C = E[0],
            T = E[1],
            A = Object(s.useState)(""),
            k = Object(o.a)(A, 2),
            I = k[0],
            L = k[1],
            U = Object(n.b)();
          Object(s.useEffect)(
            function () {
              localStorage.getItem("profile") && t.push("Home");
            },
            [t]
          );
          var R = (function () {
              var e = Object(S.a)(
                w.a.mark(function e(a) {
                  var s;
                  return w.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (a.preventDefault(),
                            (s = {
                              header: { "Content-Type": "application/json" },
                            }),
                            y === C)
                          ) {
                            e.next = 7;
                            break;
                          }
                          return (
                            _(""),
                            T(""),
                            setTimeout(function () {
                              L("");
                            }, 5e3),
                            e.abrupt("return", L("Password Do Not Match"))
                          );
                        case 7:
                          U(Ot(r, u, y, s, t));
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            P = (function () {
              var e = Object(S.a)(
                w.a.mark(function e(a) {
                  var s, c;
                  return w.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (s =
                            null === a || void 0 === a ? void 0 : a.profileObj),
                            (c =
                              null === a || void 0 === a ? void 0 : a.tokenId);
                          try {
                            localStorage.setItem(
                              "profile",
                              JSON.stringify(s, c)
                            ),
                              t.push("/");
                          } catch (I) {
                            console.log(I);
                          }
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(h.jsx)(h.Fragment, {
            children: Object(h.jsx)(d.a, {
              className: "login_box",
              children: Object(h.jsxs)(f.a, {
                className: "form_card",
                children: [
                  Object(h.jsx)(de.g, {
                    varient: "danger",
                    className: "lock_icon",
                  }),
                  I && Object(h.jsx)(ne, { varient: "danger", children: I }),
                  Object(h.jsxs)(he.a, {
                    onSubmit: R,
                    children: [
                      Object(h.jsxs)(h.Fragment, {
                        children: [
                          Object(h.jsx)(he.a.Group, {
                            controlId: "firstName",
                            children: Object(h.jsx)(he.a.Control, {
                              type: "text",
                              placeholder: "Enter username *",
                              name: "username",
                              value: r,
                              onChange: function (e) {
                                return l(e.target.value);
                              },
                              autoFocus: !0,
                              required: !0,
                            }),
                          }),
                          Object(h.jsx)("br", {}),
                        ],
                      }),
                      Object(h.jsx)(he.a.Group, {
                        children: Object(h.jsx)(he.a.Control, {
                          type: "email",
                          placeholder: "Email Address *",
                          name: "email",
                          value: u,
                          onChange: function (e) {
                            return m(e.target.value);
                          },
                          required: !0,
                        }),
                      }),
                      Object(h.jsx)("br", {}),
                      Object(h.jsx)(he.a.Group, {
                        controlId: "password",
                        children: Object(h.jsx)(he.a.Control, {
                          type: "password",
                          placeholder: "Password *",
                          name: "password",
                          id: "password",
                          value: y,
                          onChange: function (e) {
                            return _(e.target.value);
                          },
                          required: !0,
                        }),
                      }),
                      Object(h.jsxs)(h.Fragment, {
                        children: [
                          Object(h.jsx)("br", {}),
                          Object(h.jsx)(he.a.Group, {
                            controlId: "password",
                            children: Object(h.jsx)(he.a.Control, {
                              type: "password",
                              placeholder: "Confirm Password *",
                              name: "confirmPassword",
                              id: "confirmpassword",
                              value: C,
                              onChange: function (e) {
                                return T(e.target.value);
                              },
                            }),
                          }),
                        ],
                      }),
                      Object(h.jsx)("br", {}),
                      Object(h.jsx)(p.a, {
                        type: "submit",
                        varient: "primary",
                        className: "form_submit",
                        children: "Register",
                      }),
                      Object(h.jsx)("br", {}),
                      Object(h.jsx)("br", {}),
                      Object(h.jsx)(et.GoogleLogin, {
                        clientId:
                          "623404801924-gpslvq6mrjbcfsq92oou89lg5q3eplu9.apps.googleusercontent.com",
                        render: function (e) {
                          return Object(h.jsxs)(p.a, {
                            className: "google_button",
                            onClick: e.onClick,
                            disabled: e.disabled,
                            children: [
                              Object(h.jsx)(de.e, {}),
                              " Google Sign In",
                            ],
                          });
                        },
                        onSuccess: P,
                        onFailure: function () {
                          console.log(
                            "Google Sign In was unsuccessfull. try again later"
                          );
                        },
                        cookiePolicy: "single_host_origin",
                      }),
                      Object(h.jsx)("br", {}),
                      Object(h.jsx)(x.a, {
                        children: Object(h.jsx)(g.a, {
                          children: Object(h.jsxs)(p.a, {
                            variant: "secondary",
                            className: "switch_button",
                            children: [
                              "Already have an account ? ",
                              Object(h.jsx)(i.b, {
                                to: "/login",
                                children: "Login",
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        Et = function (e) {
          var t = e.match,
            a = Object(s.useState)(""),
            c = Object(o.a)(a, 2),
            r = c[0],
            n = c[1],
            l = Object(s.useState)(""),
            j = Object(o.a)(l, 2),
            b = j[0],
            u = j[1],
            m = Object(s.useState)(""),
            p = Object(o.a)(m, 2),
            O = p[0],
            x = p[1],
            g = Object(s.useState)(""),
            v = Object(o.a)(g, 2),
            y = v[0],
            _ = v[1],
            N = (function () {
              var e = Object(S.a)(
                w.a.mark(function e(a) {
                  var s, c, i;
                  return w.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (a.preventDefault(),
                              (s = {
                                headers: { "Content-Type": "application/json" },
                              }),
                              r === b)
                            ) {
                              e.next = 7;
                              break;
                            }
                            return (
                              n(""),
                              u(""),
                              setTimeout(function () {
                                x("");
                              }, 5e3),
                              e.abrupt("return", x("Password Don't Match"))
                            );
                          case 7:
                            return (
                              (e.prev = 7),
                              (e.next = 10),
                              C.a.put(
                                ""
                                  .concat(
                                    "https://sparkling-fawn-loincloth.cyclic.app/",
                                    "/auth/resetpassword/"
                                  )
                                  .concat(t.params.resetToken),
                                { password: r },
                                s
                              )
                            );
                          case 10:
                            (c = e.sent),
                              (i = c.data),
                              _(i.data),
                              (e.next = 19);
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(7)),
                              x(e.t0.response.data.error),
                              setTimeout(function () {
                                x("");
                              }, 5e3);
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[7, 15]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(h.jsx)(h.Fragment, {
            children: Object(h.jsx)(h.Fragment, {
              children: Object(h.jsx)(d.a, {
                className: "login_box",
                children: Object(h.jsxs)(f.a, {
                  className: "form_card",
                  children: [
                    Object(h.jsx)("h3", { children: "Reset Password" }),
                    O && Object(h.jsx)(ne, { children: O }),
                    y &&
                      Object(h.jsxs)(ne, {
                        children: [
                          y,
                          Object(h.jsx)(i.b, {
                            to: "/login",
                            children: "login",
                          }),
                        ],
                      }),
                    Object(h.jsxs)(he.a, {
                      onSubmit: N,
                      children: [
                        Object(h.jsx)(he.a.Group, {
                          children: Object(h.jsx)(he.a.Control, {
                            type: "password",
                            placeholder: "Enter New Password",
                            name: "password",
                            value: r,
                            onChange: function (e) {
                              return n(e.target.value);
                            },
                            required: !0,
                          }),
                        }),
                        Object(h.jsx)("br", {}),
                        Object(h.jsx)(he.a.Group, {
                          controlId: "password",
                          children: Object(h.jsx)(he.a.Control, {
                            type: "password",
                            required: !0,
                            id: "confirmpassword",
                            placeholder: "Enter New confirmpassword",
                            value: b,
                            onChange: function (e) {
                              return u(e.target.value);
                            },
                          }),
                        }),
                        Object(h.jsx)("br", {}),
                        Object(h.jsx)("button", {
                          type: "submit",
                          children: "Reset Password",
                        }),
                        Object(h.jsx)("br", {}),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        Ct =
          (a(165),
          function () {
            return Object(h.jsxs)(i.a, {
              children: [
                Object(h.jsx)(O, {}),
                Object(h.jsxs)(l.c, {
                  children: [
                    Object(h.jsx)(l.a, { path: "/", component: Ze, exact: !0 }),
                    Object(h.jsx)(l.a, {
                      path: "/example/:name",
                      component: Te,
                      exact: !0,
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/course/:id",
                      component: $e,
                      exact: !0,
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/Allcourses",
                      component: Ce,
                      exact: !0,
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/Allcourses/b-tech",
                      component: Ee,
                      exact: !0,
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/Allcourses/b-tech/All-Courses",
                      component: ye,
                      exact: !0,
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/Allcourses/b-tech/html",
                      component: Se,
                      exact: !0,
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/blog",
                      component: je,
                      exact: !0,
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/createblog",
                      component: xe,
                      exact: !0,
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/blog/:id",
                      component: pe,
                      exact: !0,
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/blog/update/:id",
                      component: fe,
                      exact: !0,
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/about",
                      component: _,
                      exact: !0,
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/contact",
                      component: ve,
                      exact: !0,
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/login",
                      component: gt,
                      exact: !0,
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/register",
                      component: St,
                      exact: !0,
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/forgotpassword",
                      component: Ae,
                      exact: !0,
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/profile/:email",
                      component: Nt,
                      exact: !0,
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/profile/update/:email",
                      component: wt,
                      exact: !0,
                    }),
                    Object(h.jsx)(l.a, {
                      path: "/resetpassword/:resetToken",
                      component: Et,
                      exact: !0,
                    }),
                  ],
                }),
              ],
            });
          }),
        Tt = a(60),
        At = a(96),
        kt = a(95),
        It = Object(Tt.combineReducers)({
          CourseList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ke:
                return { loading: !0, courses: [] };
              case Ie:
                return { loading: !1, courses: t.payload };
              case Le:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          CourseDetail: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Ue:
                return { loading: !0, courseDetails: [] };
              case Re:
                return { loading: !1, courseDetails: t.payload };
              case Pe:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          blogList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case I:
                return { loading: !0, Blogs: [] };
              case L:
                return { loading: !1, Blogs: t.payload };
              case U:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          createdBlog: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case T:
                return { loading: !0, Blog: [] };
              case A:
                return { loading: !1, Blog: t.payload };
              case k:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          blogDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case R:
                return { loading: !0, BlogDetail: [] };
              case P:
                return { loading: !1, BlogDetail: t.payload };
              case q:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          updateBlog: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case B:
                return { loading: !0, UpdatedBlog: [] };
              case F:
                return { loading: !1, UpdatedBlog: t.payload };
              case G:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          deleteBlog: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case D:
                return { loading: !0, DeletedBlog: [] };
              case Q:
                return { loading: !1, DeletedBlog: t.payload };
              case M:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          userRegister: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case tt:
                return { loading: !0, RegisteredUser: [] };
              case at:
                return (
                  localStorage.setItem("profile", JSON.stringify(t.payload)),
                  { loading: !1, RegisteredUser: t.payload }
                );
              case st:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          userLogin: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ct:
                return { loading: !0, LoginUser: [] };
              case rt:
                return (
                  localStorage.setItem("profile", JSON.stringify(t.payload)),
                  { loading: !1, LoginUser: t.payload }
                );
              case nt:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          userBlogs: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case it:
                return { loading: !0, UsersBlog: [] };
              case lt:
                return { loading: !1, UsersBlog: t.payload };
              case ot:
                return { loading: !1, error: t.error };
              default:
                return e;
            }
          },
          totalUsers: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ut:
                return { loading: !0, TotalUser: [] };
              case mt:
                return { loading: !1, TotalUser: t.payload };
              case pt:
                return { loading: !1, error: t.error };
              default:
                return e;
            }
          },
          comment: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { Comment: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case J:
                return { loading: !0, Comment: [] };
              case H:
                return { loading: !1, Comment: t.payload };
              case z:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          comments: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { Comments: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case W:
                return { loading: !0, Comments: [] };
              case V:
                return { loading: !1, Comments: t.payload };
              case Y:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          userUpdate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case jt:
                return { loading: !0, UpdatedUser: [] };
              case dt:
                return (
                  localStorage.removeItem("profile"),
                  localStorage.setItem("profile", JSON.stringify(t.payload)),
                  { loading: !1, UpdatedUser: t.payload }
                );
              case bt:
                return { loading: !1, error: t.error };
              default:
                return e;
            }
          },
          AllComments: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { Allcomments: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case X:
                return { loading: !0, Allcomments: [] };
              case Z:
                return { loading: !1, Allcomments: t.payload };
              case $:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          newReview: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { NewReview: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Be:
                return { loading: !0, NewReview: [] };
              case Fe:
                return { loading: !1, NewReview: t.payload };
              case Ge:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          reviews: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { Reviews: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case De:
                return { loading: !0, Reviews: [] };
              case Qe:
                return { loading: !1, Reviews: t.payload };
              case Me:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          like: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            return t.type === ee
              ? (localStorage.setItem("like", JSON.stringify(t.payload)),
                { likes: t.payload })
              : e;
          },
        }),
        Lt = [At.a],
        Ut = Object(Tt.createStore)(
          It,
          Object(kt.composeWithDevTools)(Tt.applyMiddleware.apply(void 0, Lt))
        );
      r.a.render(
        Object(h.jsx)(n.a, { store: Ut, children: Object(h.jsx)(Ct, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[166, 1, 2]],
]);
//# sourceMappingURL=main.972d9b58.chunk.js.map
