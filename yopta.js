/*! YoptaScript v2.0.2 (https://yopta.space) | Copyright (c) 2016-2021 Yopta.Space project and Contributors | Licensed under the MIT license */ (() => {
  "use strict";
  var e = {
      289: (e, t, o) => {
        var n = o(215),
          r = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
          a = Object.prototype.toString,
          i = Array.prototype.concat,
          l = Object.defineProperty,
          s =
            l &&
            (function () {
              var e = {};
              try {
                for (var t in (l(e, "x", { enumerable: !1, value: e }), e))
                  return !1;
                return e.x === e;
              } catch (e) {
                return !1;
              }
            })(),
          c = function (e, t, o, n) {
            var r;
            (!(t in e) ||
              ("function" == typeof (r = n) &&
                "[object Function]" === a.call(r) &&
                n())) &&
              (s
                ? l(e, t, {
                    configurable: !0,
                    enumerable: !1,
                    value: o,
                    writable: !0,
                  })
                : (e[t] = o));
          },
          u = function (e, t) {
            var o = arguments.length > 2 ? arguments[2] : {},
              a = n(t);
            r && (a = i.call(a, Object.getOwnPropertySymbols(t)));
            for (var l = 0; l < a.length; l += 1) c(e, a[l], t[a[l]], o[a[l]]);
          };
        (u.supportsDescriptors = !!s), (e.exports = u);
      },
      221: (e) => {
        "undefined" != typeof self
          ? (e.exports = self)
          : "undefined" != typeof window
          ? (e.exports = window)
          : (e.exports = Function("return this")());
      },
      503: (e, t, o) => {
        var n = o(289),
          r = o(221),
          a = o(168),
          i = o(471),
          l = a(),
          s = function () {
            return l;
          };
        n(s, { getPolyfill: a, implementation: r, shim: i }), (e.exports = s);
      },
      168: (e, t, o) => {
        var n = o(221);
        e.exports = function () {
          return "object" == typeof o.g &&
            o.g &&
            o.g.Math === Math &&
            o.g.Array === Array
            ? o.g
            : n;
        };
      },
      471: (e, t, o) => {
        var n = o(289),
          r = o(168);
        e.exports = function () {
          var e = r();
          if (n.supportsDescriptors) {
            var t = Object.getOwnPropertyDescriptor(e, "globalThis");
            (!t ||
              (t.configurable &&
                (t.enumerable || t.writable || globalThis !== e))) &&
              Object.defineProperty(e, "globalThis", {
                configurable: !0,
                enumerable: !1,
                value: e,
                writable: !1,
              });
          } else
            ("object" == typeof globalThis && globalThis === e) ||
              (e.globalThis = e);
          return e;
        };
      },
      987: (e, t, o) => {
        var n;
        if (!Object.keys) {
          var r = Object.prototype.hasOwnProperty,
            a = Object.prototype.toString,
            i = o(414),
            l = Object.prototype.propertyIsEnumerable,
            s = !l.call({ toString: null }, "toString"),
            c = l.call(function () {}, "prototype"),
            u = [
              "toString",
              "toLocaleString",
              "valueOf",
              "hasOwnProperty",
              "isPrototypeOf",
              "propertyIsEnumerable",
              "constructor",
            ],
            p = function (e) {
              var t = e.constructor;
              return t && t.prototype === e;
            },
            d = {
              $applicationCache: !0,
              $console: !0,
              $external: !0,
              $frame: !0,
              $frameElement: !0,
              $frames: !0,
              $innerHeight: !0,
              $innerWidth: !0,
              $onmozfullscreenchange: !0,
              $onmozfullscreenerror: !0,
              $outerHeight: !0,
              $outerWidth: !0,
              $pageXOffset: !0,
              $pageYOffset: !0,
              $parent: !0,
              $scrollLeft: !0,
              $scrollTop: !0,
              $scrollX: !0,
              $scrollY: !0,
              $self: !0,
              $webkitIndexedDB: !0,
              $webkitStorageInfo: !0,
              $window: !0,
            },
            f = (function () {
              if ("undefined" == typeof window) return !1;
              for (var e in window)
                try {
                  if (
                    !d["$" + e] &&
                    r.call(window, e) &&
                    null !== window[e] &&
                    "object" == typeof window[e]
                  )
                    try {
                      p(window[e]);
                    } catch (e) {
                      return !0;
                    }
                } catch (e) {
                  return !0;
                }
              return !1;
            })();
          n = function (e) {
            var t = null !== e && "object" == typeof e,
              o = "[object Function]" === a.call(e),
              n = i(e),
              l = t && "[object String]" === a.call(e),
              d = [];
            if (!t && !o && !n)
              throw new TypeError("Object.keys called on a non-object");
            var h = c && o;
            if (l && e.length > 0 && !r.call(e, 0))
              for (var m = 0; m < e.length; ++m) d.push(String(m));
            if (n && e.length > 0)
              for (var g = 0; g < e.length; ++g) d.push(String(g));
            else
              for (var y in e)
                (h && "prototype" === y) || !r.call(e, y) || d.push(String(y));
            if (s)
              for (
                var b = (function (e) {
                    if ("undefined" == typeof window || !f) return p(e);
                    try {
                      return p(e);
                    } catch (e) {
                      return !1;
                    }
                  })(e),
                  v = 0;
                v < u.length;
                ++v
              )
                (b && "constructor" === u[v]) ||
                  !r.call(e, u[v]) ||
                  d.push(u[v]);
            return d;
          };
        }
        e.exports = n;
      },
      215: (e, t, o) => {
        var n = Array.prototype.slice,
          r = o(414),
          a = Object.keys,
          i = a
            ? function (e) {
                return a(e);
              }
            : o(987),
          l = Object.keys;
        (i.shim = function () {
          Object.keys
            ? (function () {
                var e = Object.keys(arguments);
                return e && e.length === arguments.length;
              })(1, 2) ||
              (Object.keys = function (e) {
                return r(e) ? l(n.call(e)) : l(e);
              })
            : (Object.keys = i);
          return Object.keys || i;
        }),
          (e.exports = i);
      },
      414: (e) => {
        var t = Object.prototype.toString;
        e.exports = function (e) {
          var o = t.call(e),
            n = "[object Arguments]" === o;
          return (
            n ||
              (n =
                "[object Array]" !== o &&
                null !== e &&
                "object" == typeof e &&
                "number" == typeof e.length &&
                e.length >= 0 &&
                "[object Function]" === t.call(e.callee)),
            n
          );
        };
      },
      776: function (e, t, o) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.compile = void 0);
        var r = n(o(503)),
          a = n(o(326));
        function i(e, t) {
          void 0 === t && (t = "ys");
          var o = "ys" === t ? 1 : 0;
          return (
            a.default
              .sort(function (e, t) {
                var n = e[o].length;
                return t[o].length - n;
              })
              .forEach(function (t) {
                return (
                  (n = e),
                  (r = t[o]),
                  (a = t[+!o]),
                  (i = new RegExp(
                    (function (e) {
                      return (
                        (e = e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")),
                        /^\w+$/.test(e) && (e = "\\b" + e + "\\b"),
                        e
                      );
                    })(r),
                    "g"
                  )),
                  (e = n.replace(i, a))
                );
                var n, r, a, i;
              }),
            e
          );
        }
        function l(e, t) {
          void 0 === t && (t = "ys");
          var o = /((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/g,
            n = "ys_" + new Date().getTime() + "_",
            r = {},
            a =
              (e = e.replace(
                /\"(?:\\.|[^\"\\])*\"|\'(?:\\.|[^\'\\])*\'/g,
                function (e, t) {
                  var o = n + t;
                  return (r[o] = e), o;
                }
              )).match(o) || [];
          for (var l in ((e = (e = i(e, t)).replace(o, function () {
            return a.shift() || "";
          })),
          r))
            e = e.replace(l, r[l]);
          return e;
        }
        (t.compile = l), (r.default().yopta = l);
      },
      607: function (e, t, o) {
        var n =
            (this && this.__awaiter) ||
            function (e, t, o, n) {
              return new (o || (o = Promise))(function (r, a) {
                function i(e) {
                  try {
                    s(n.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function l(e) {
                  try {
                    s(n.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function s(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof o
                        ? t
                        : new o(function (e) {
                            e(t);
                          })).then(i, l);
                }
                s((n = n.apply(e, t || [])).next());
              });
            },
          r =
            (this && this.__generator) ||
            function (e, t) {
              var o,
                n,
                r,
                a,
                i = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: l(0), throw: l(1), return: l(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function l(a) {
                return function (l) {
                  return (function (a) {
                    if (o)
                      throw new TypeError("Generator is already executing.");
                    for (; i; )
                      try {
                        if (
                          ((o = 1),
                          n &&
                            (r =
                              2 & a[0]
                                ? n.return
                                : a[0]
                                ? n.throw || ((r = n.return) && r.call(n), 0)
                                : n.next) &&
                            !(r = r.call(n, a[1])).done)
                        )
                          return r;
                        switch (
                          ((n = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return i.label++, { value: a[1], done: !1 };
                          case 5:
                            i.label++, (n = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = i.ops.pop()), i.trys.pop();
                            continue;
                          default:
                            if (
                              !((r = i.trys),
                              (r = r.length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0]))
                            ) {
                              i = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              i.label = a[1];
                              break;
                            }
                            if (6 === a[0] && i.label < r[1]) {
                              (i.label = r[1]), (r = a);
                              break;
                            }
                            if (r && i.label < r[2]) {
                              (i.label = r[2]), i.ops.push(a);
                              break;
                            }
                            r[2] && i.ops.pop(), i.trys.pop();
                            continue;
                        }
                        a = t.call(e, i);
                      } catch (e) {
                        (a = [6, e]), (n = 0);
                      } finally {
                        o = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, l]);
                };
              }
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.yopta = void 0);
        var a = o(776);
        function i(e) {
          return n(this, void 0, void 0, function () {
            var t, o;
            return r(this, function (n) {
              switch (n.label) {
                case 0:
                  return null === e.parentNode
                    ? [3, 3]
                    : (o = e.textContent)
                    ? [3, 2]
                    : [4, l(e)];
                case 1:
                  (o = n.sent()), (n.label = 2);
                case 2:
                  (t = o),
                    e.parentNode.removeChild(e),
                    (r = a.compile(t, "ys")),
                    ((i = document.createElement("script")).innerHTML = r),
                    document.body.appendChild(i),
                    (n.label = 3);
                case 3:
                  return [2];
              }
              var r, i;
            });
          });
        }
        function l(e) {
          return n(this, void 0, void 0, function () {
            var t, o;
            return r(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (t = e.getAttribute("src")),
                    (o = ""),
                    null !== t && t.length
                      ? [4, fetch(t, { method: "GET" })]
                      : [3, 3]
                  );
                case 1:
                  return [4, n.sent().text()];
                case 2:
                  (o = n.sent()), (n.label = 3);
                case 3:
                  return [2, o];
              }
            });
          });
        }
        Object.defineProperty(t, "yopta", {
          enumerable: !0,
          get: function () {
            return a.compile;
          },
        }),
          "undefined" != typeof window &&
            (document.querySelectorAll('[language="YoptaScript"]').forEach(i),
            document
              .querySelectorAll('[type="text/x-yoptascript"]')
              .forEach(i));
      },
      326: (e) => {
        e.exports = JSON.parse(
          '[["includes","лучшеНетВлагалищаЧемОчкоТоварища"],["createRadialGradient","намутитьПоКругуМазнюПодливой"],["createLinearGradient","намутитьЧоткуюМазнюПодливой"],["resizeTo","распидораситьОтносительно"],["fromCodePoint","хуйняИзЭтоТуданахНутыпоэл"],["createTextNode","намутитьМалявуГовнодскую"],["enableStyleSheetsForSet","намутитьСтруйкуДляХабара"],["ondragenter","покаДёргалкаНарисовалась"],["ondragenter","покаДергалкаНарисовалась"],["imul","петухПетухаВидитИздалека"],["getElementsByClassName","вычислитьТерпилПоКлассу"],["vlinkColor","когдаОткинулсяПослеЗоны"],["onpointermove","покаХожуТырколйПоРайону"],["getElementsByName","вычислитьТерпилПоИмени"],["onpointerenter","покаСрелкаНарисовалась"],["oninstall","покаХуйСтоитКакКолонна"],["isPointInStroke","естьЛиКуполаНаНаколках"],["getElementsByTagName","вычислитьТерпилПоТегу"],["getElementById","вычислитьЛохаПоНомеру"],["querySelectorAll","хулиТутВсеВыёбываются"],["querySelectorAll","хулиТутВсеВыебываются"],["pointerLockElement","тырколкуНаАнусТерпилы"],["getComputedStyle","нассыМнеВалиоСтруйкой"],["imageSmoothingEnabled","включитьРазмытиеЕбала"],["scrollPathIntoView","колеситьПоДорогеНахуй"],["setLineDash","заебенитьПятнистыйХуй"],["onreadystatechange","опаГотовЙоптЧозанахуй"],["resolve","щащаНамутитьКактоНадо"],["createNodeIterator","намутитьГовнодыратор"],["lastElementChild","последнийПездюкШняги"],["onafterscriptexecute","послеВыполненияЙопты"],["scrollbars","колеситьПоПивларькам"],["resizeBy","распидораситьПоХуйне"],["sizeToContent","ухтыжёптыжбляПодгони"],["sizeToContent","ухтыжептыжбляПодгони"],["fontcolor","говномПоСтенеКрасиво"],["removeHitRegion","избавитьсяОтПроблемы"],["getResponseHeader","дайКепарикПолосатого"],["acosh","агопосинусКупчинский"],["atanh","агопангенсКупчинский"],["createDocumentFragment","намутитьКусокМалявы"],["onselectionchange","покаДваСтулаМахнуть"],["onfullscreenchange","покаЕбальникПоказал"],["ondblclick","какПырнуДваждыНахуй"],["ondragend","покаХарэОчкоДёргать"],["ondragend","покаХарэОчкоДергать"],["oninvalid","гыйбатьИнвалидНахуй"],["onmouseout","покаТырколкаСъебала"],["onmouseover","покаТырколкаПодошла"],["onpointercancel","покаСтрелаТруханула"],["onpopstate","покаИсторияМаляется"],["isDefaultNamespace","деткаТыПростоКосмос"],["codePointAt","хуйняНутыпоэлОткуда"],["isPointInPath","естьЛиКуполаНаГруди"],["XMLHttpRequestEventTarget","запросСоШнягойПоЩам"],["cosh","гопосиносКолпинский"],["tanh","гопангенсКолпинский"],["getOwnPropertyNames","вычислиПогонялаКрыс"],["setPrototypeOf","замутитьПроточелика"],["ondrop","опаМабилкаЁбнулась"],["ondrop","опаМабилкаЕбнулась"],["oninput","покаЭйтыэтоПишибля"],["ontouchmove","опаДвигайОтСюдаЛещ"],["scrollMaxX","колеситьПоГлавЭксу"],["scrollMaxY","колеситьПоГлавУгам"],["compareDocumentPosition","сравниСтатусМалявы"],["substring","спиздитьМеждуСтрок"],["trimRight","вырезатьОчкоСправа"],["fontsize","говномПоСтенеСочно"],["createImageData","намутитьМазнюЙопта"],["setTransform","перекоситьЕбальник"],["parseFloat","шнырятьПоПлавникам"],["dirxml","йбатьБуратиноНахуй"],["readystatechange","готовЙоптЧозанахуй"],["LOG10E","СЛОЖНЫЙ_ГОПОРИФМ10"],["SQRT1_2","сквиртНаПолшишечки"],["asinh","агопинусКупчинский"],["queryCommandEnabled","хулиЧикаДоступная"],["queryCommandSupported","хулиЧикаБезАйфона"],["firstElementChild","первыйПездюкШняги"],["childElementCount","моиШняжныеПездюки"],["onbeforescriptexecute","доВыполненияЙопты"],["ondragover","покаДёрнулПодошла"],["ondragover","покаДернулПодошла"],["onpointerover","покаСтрелаПодошла"],["onpointerout","покаСтрелаСъебала"],["onpointerleave","покаСтрелаСлиняла"],["ontouchstart","опаЩаЛещаПоЩамДам"],["dispatchEvent","послатьНахуйШнягу"],["scrollByPages","колеситьНаМалявах"],["updateCommands","новыйАйфонДляЧики"],["onbeforeunload","покаСемкиКрутятся"],["onhashchange","покаШнягаИзменяет"],["onpagehide","покаКсиваНаМалине"],["hasChildNodes","батяИмеетПездюков"],["insertBefore","вставитьПездюкаДо"],["substr","спиздитьМеждуБукв"],["trimLeft","вырезатьОчкоСлева"],["quadraticCurveTo","криваяЗавелаНахуй"],["resetTransform","поправитьЕбальник"],["parseInt","шнырятьПоКарманам"],["timeout","длительностьСрока"],["loadstart","началТаскатьСемки"],["progress","сколькоСемокДонёс"],["progress","сколькоСемокДонес"],["LOG2E","СЛОЖНЫЙ_ГОПОРИФМ2"],["clz32","поводырь32петухов"],["log1p","чистыйГопорифмПо1"],["sinh","гопинусКолпинский"],["getOwnPropertyDescriptors","вычислиСходкуКрыс"],["getOwnPropertySymbols","выучиАлфавитМразь"],["createTreeWalker","намутитьБуратино"],["getAnimations","вычислитьДвижуху"],["releaseCapture","зафотатьХуякХуяк"],["querySelector","хулиВыёбываешься"],["querySelector","хулиВыебываешься"],["queryCommandState","хулиЧикаОтдыхает"],["contentType","ухтыжёптыжТипчик"],["contentType","ухтыжептыжТипчик"],["alinkColor","петухЗоныКрасиво"],["lastModified","когдаПетухомСтал"],["ondragexit","анусСебеДёрниПёс"],["ondragexit","анусСебеДерниПес"],["ondragleave","покаДергунСлинял"],["onmouseleave","съебалсяИзРайона"],["onpointerdown","покаТыркнулДауна"],["onprogress","покаМатаетсяСрок"],["ontimeupdate","опаНуЭтоКогдаЭто"],["addEventListener","добавитьВертухай"],["setResizable","датьПопидорасить"],["onunload","опаСемкиКрутятся"],["baseURIObject","мразотыНаХатеКрч"],["ownerDocument","главныйАвторитет"],["textContent","ухтыжёптыжМалява"],["textContent","ухтыжептыжМалява"],["contains","яТвойОтецЕбуОвец"],["lastIndexOf","последняяОтсидка"],["toLocaleLowerCase","поРайонуНеКапсом"],["shadowBlur","наняРазмытьЕбало"],["isSafeInteger","этоОхуеннаяХуйня"],["toLocaleString","кПацанамНаРайоне"],["groupEnd","съебатьсяИзБанды"],["reverse","шухильмеМухильме"],["resolveAfter2Seconds","паруСекНеГомосек"],["defineProperties","ващеЧоткиеЧелики"],["getOwnPropertyDescriptor","вычислиЕблоКрысы"],["isSealed","теЧоЕбалоРазбить"],["elementFromPoint","терпилаИзПараши"],["elementsFromPoint","терпилыИзПараши"],["getSelection","сестьНаДваСтула"],["onabort","когдаУронилМыло"],["onkeypress","гыйбатьВмялЛеща"],["onpointerup","покаТыркнулАута"],["ontouchcancel","покаЛещТруханул"],["returnValue","ответитьЗаВалио"],["scrollByLines","колеситьНаЛинии"],["scrollTo","колеситьНахуйНа"],["onpageshow","опаКсивуПоказал"],["lastChild","последнийПездюк"],["nextSibling","следующийПездюк"],["nodeName","погонялоПездюка"],["parentElement","братишкаЭлемент"],["appendChild","заделатьПездюка"],["fillStyle","кончитьСтруйкой"],["miterLimit","скрестимСтруйки"],["addHitRegion","создатьПроблемы"],["createPattern","намутитьТипчика"],["getImageData","чоТутНамалёвано"],["getImageData","чоТутНамалевано"],["profileEnd","вЛичкуПрописали"],["constructor","стрельнутьБычки"],["onwheel","какНаХуюВертел"],["ondragstart","покаДёрнулКмон"],["ondragstart","покаДернулКмон"],["onkeydown","гыйбатьЛещДаун"],["onmousedown","всунулНаРайоне"],["onmousewheel","вертелНаРайоне"],["onseeking","когдаОбоссался"],["onstalled","опаНефартануло"],["screenX","всёЕбалоПоЭксу"],["screenX","всеЕбалоПоЭксу"],["screenY","всёЕбалоПоУгам"],["screenY","всеЕбалоПоУгам"],["scrollX","колеситьПоЭксу"],["scrollY","колеситьПоУгам"],["ondevicelight","покаХуйДлинный"],["onpaint","опаНарисовался"],["nodeType","типичныйПездюк"],["padStart","начальныйПадик"],["toLocaleUpperCase","поРайонуКапсом"],["shadowOffsetX","наняХатаПоЭксу"],["shadowOffsetY","наняХатаПоУгам"],["textAlign","выровнитьБазар"],["textBaseline","поставитьБазар"],["fillRect","обкончатьДоску"],["fillText","обкончатьБуквы"],["MAX_VALUE","ОХУЕННОЕ_ВАЛИО"],["toExponential","наХуекспоненту"],["trace","складЧмошников"],["readyState","готовностьЙопт"],["entries","вычислитьЛохов"],["expm1","топГопспонента"],["fround","мелочьТожеГони"],["ignoreCase","игнорщикЕбаный"],["sticky","петухОпущенный"],["lastIndex","доКонцаОтсидки"],["test","ответыБудутЭээ"],["getPrototypeOf","чоЗаПроточелик"],["captureEvents","зафотатьШняги"],["createEvent","намутитьШнягу"],["createRange","намутитьОпапа"],["createElement","намутитьЛошка"],["createExpression","намутитьБазар"],["execCommand","идиРаботайБля"],["hasFocus","имеетЧёткость"],["hasFocus","имеетЧеткость"],["hasFocus","имеетЧоткость"],["queryCommandIndeterm","хулиЧикаОйВсё"],["queryCommandIndeterm","хулиЧикаОйВсе"],["queryCommandValue","хулиЧикаВалио"],["inputEncoding","эйтыэтоПиздиш"],["scrollingElement","намазиТерпила"],["activeElement","активнаяШняга"],["defaultView","моргалаВыколю"],["ondrag","опаОчкоДёрнул"],["ondrag","опаОчкоДернул"],["onkeyup","гыйбатьЛещАут"],["onloadstart","покаНесуСемки"],["onmouseup","вынулНаРайоне"],["onsuspend","опаПодфартило"],["ontouchend","покаЛещКончил"],["onwaiting","покаМотаюСрок"],["frameElement","кадрОпущенный"],["innerHeight","внутриДлинный"],["outerHeight","вокругДлинные"],["sessionStorage","хабрИзОтсидки"],["postMessage","намутитьКсиву"],["prompt","поясниЗаБазар"],["removeEventListener","урытьВертухая"],["getRootNode","дайБатеГовнод"],["isEqualNode","эквалиоГовнод"],["removeChild","уебатьПездюка"],["localeCompare","сравнитьГовор"],["padEnd","залупныйПадик"],["repeat","непоэлПовтори"],["slice","поделитьСемки"],["startsWith","начатьЗалупку"],["font","говномПоСтене"],["globalAlpha","главныйАльфач"],["clearHitRegions","убитьПроблему"],["measureText","вместитьБазар"],["restore","выздоравливай"],["MAX_SAFE_INTEGER","ЛУЧШИЙ_ГАНДОН"],["MIN_SAFE_INTEGER","ХУЁВЫЙ_ГАНДОН"],["MIN_SAFE_INTEGER","ХУЕВЫЙ_ГАНДОН"],["groupCollapsed","свернутьБанду"],["EventTarget","очкоНаПрицеле"],["reduceRight","редискаПравая"],["SQRT2","двойнойСквирт"],["atan2","агопангенсПо2"],["hypot","вКореньЗыришь"],["RegExp","фильтруйБазар"],["global","глобалкаЙопта"],["assign","тащиВсёНаХату"],["assign","тащиВсеНаХату"],["defineProperty","вотЭтоЗаебись"],["isPrototypeOf","чейПроточелик"],["createAttribute","намутитьЯжку"],["createTouch","намутитьЛеща"],["documentElement","ксиваТерпилы"],["bgColor","охуеннаяЖопа"],["oncancel","покаТруханул"],["onchange","опаЧозанахуй"],["oncontextmenu","какПоЛбуЁбну"],["oncontextmenu","какПоЛбуЕбну"],["onmouseenter","вошёлНаРайон"],["onmouseenter","вошелНаРайон"],["onmousemove","хожуПоРайону"],["onseeked","когдаОбоссал"],["onsubmit","опаХуйВГовне"],["onvolumechange","покаТишеБудь"],["console","красноглазое"],["dialogArguments","тыэтаТавоэта"],["innerWidth","внутриЖирный"],["outerWidth","вокругЖирные"],["pageXOffset","статьяПоЭксу"],["pageYOffset","статьяПоУгам"],["blur","размытьЕбало"],["clearInterval","отсидетьСизо"],["clearTimeout","отсидетьСрок"],["moveTo","нахуйЭтоТуда"],["setInterval","посетитьСизо"],["setTimeout","получитьСрок"],["onload","опаСемкиНесу"],["childNodes","пездюкГовнод"],["firstChild","первыйПездюк"],["nodeValue","валиоПездюка"],["previousSibling","старыйПездюк"],["replaceChild","сделатьАборт"],["replace","пивасПодмени"],["trim","вырезатьОчко"],["currentTransform","этотЕбальник"],["lineCap","выбратьКонец"],["lineDashOffset","пятнистыйХуй"],["lineJoin","формаШишкана"],["strokeStyle","стильНаколок"],["putImageData","намалюйЧоТут"],["rotate","вертетьНаХую"],["strokeText","текстНаколки"],["translate","дисюдаПиксел"],["MIN_VALUE","ХУЁВОЕ_ВАЛИО"],["MIN_VALUE","ХУЕВОЕ_ВАЛИО"],["POSITIVE_INFINITY","ОХУЕТЬ_ДОХУЯ"],["assert","найтиСтукача"],["copyWithin","вынестиГовно"],["forEach","пероПодРебро"],["splice","въебатьГовна"],["log10","гопорифмПо10"],["input","тыЭтоПишибля"],["flags","флагМнеВанус"],["exec","работайМразь"],["hasOwnProperty","соСвоейТемой"],["else","иливжопураз"],["if","вилкойвглаз"],["characterSet","слышТыЧоЁба"],["characterSet","слышТыЧоЕба"],["documentURI","ксиваНаХате"],["domConfig","чёткоДерзко"],["domConfig","четкоДерзко"],["domConfig","чоткоДерзко"],["visibilityState","мутныйСюжет"],["designMode","хуйРисуйМод"],["linkColor","зонаКрасиво"],["referrer","корешСтарый"],["onscroll","покаКолесим"],["onselect","опаДваСтула"],["location","белыйЛебедь"],["sidebar","стенкаЙбать"],["cancelIdleCallback","харэПиздеть"],["maximize","распидорась"],["moveBy","щаТяПодвину"],["Promise","СловоПацана"],["onoffline","покаОффнусь"],["charCodeAt","обаЁбаХуйня"],["charCodeAt","обаЕбаХуйня"],["split","поделитьЯгу"],["italics","понаехавший"],["shadowColor","наняКрасиво"],["getContext","снятьСкальп"],["NEGATIVE_INFINITY","НИХУЯ_ДОХУЯ"],["isFinite","оноКонченое"],["count","которыйСрок"],["timeStamp","началоСрока"],["XMLHttpRequest","запросПоЩам"],["shift","первыйБачок"],["some","нарываешься"],["E","ГОПСПАНЕНТА"],["exp","гопспанента"],["log2","гопорифмПо2"],["await","сидетьНахуй"],["all","пацанСделал"],["race","пацанСказал"],["isExtensible","жратьБудешь"],["seal","сдохниНахуй"],["exports","предъявляет"],["case","аеслинайду"],["let","участковый"],["Abstract","Говнойбать"],["abstract","говнойбать"],["===","чёткоровно"],["===","четкоровно"],["===","чоткоровно"],["importNode","влабазУзел"],["registerElement","зашитьДело"],["domain","домойБлядь"],["oncut","какВысунул"],["onpaste","какВставил"],["onblur","опаНичотка"],["onerror","наПапандос"],["onreset","покаПравим"],["fullScreen","воВсёЕбало"],["fullScreen","воВсеЕбало"],["opener","открывашка"],["performance","сестьНахуй"],["top","КрышаЙбать"],["getAttention","посвистеть"],["matchMedia","феняНаШару"],["openDialog","побазарить"],["scrollBy","колеситьНа"],["ononline","опаТутачки"],["cloneNode","клонГовнод"],["prototype","проточелик"],["fromCharCode","хуйняИзЁба"],["fromCharCode","хуйняИзЕба"],["concat","заебеньВсе"],["toString","поПацански"],["big","большойЁпт"],["big","большойЕпт"],["lineWidth","толщинаХуя"],["bezierCurveTo","кривоНахуй"],["closePath","тупикНахуй"],["getLineDash","сококПятен"],["lineTo","прямоНахуй"],["transform","перекосить"],["timeEnd","конецСрока"],["warn","тыЭтоНуЭто"],["withCredentials","зашкварить"],["abort","уронилМыло"],["load","нестиСемки"],["loadend","семкиДонёс"],["loadend","семкиДонес"],["from","спиздитьИз"],["isArray","этоПомойка"],["findIndex","найдиБомжа"],["map","засратьВсё"],["map","засратьВсе"],["unshift","верниБачок"],["LN10","ГОПОРИФМ10"],["acos","агопосинус"],["atan","агопангенс"],["cbrt","кубоСквирт"],["trunc","верниЧирик"],["multiline","стулБезПик"],["unicode","хуйняНахуй"],["reject","пацанЗабыл"],["watch","смотрюСюда"],["in","чоунастут"],["default","наотыбись"],["new","захуярить"],["yield*","поебалуна"],["try","побратски"],["try","пабратски"],["typeof","чезажижан"],["static","попонятия"],["==","однахуйня"],["===","конкретно"],["writeln","малявагоп"],["readyState","газуемБля"],["oncopy","какВсунул"],["onpause","покаСтопэ"],["onplaying","покаЖивой"],["crypto","пиздишбля"],["devicePixelRatio","типАйфона"],["length","писькомер"],["navigator","главпетух"],["minimize","спидорась"],["baseURI","наХатеТип"],["endsWith","отЗалупки"],["search","семкиЕсть"],["toUpperCase","капсомБля"],["bold","жирныйЁпт"],["bold","жирныйЕпт"],["strike","въебиОчко"],["clearRect","урытьШкаф"],["fill","обкончать"],["save","схоронить"],["EPSILON","ХУЕПСИЛОН"],["toPrecision","кЧёткости"],["toPrecision","кЧеткости"],["toPrecision","кЧоткости"],["upload","заебенить"],["send","всёПиздуй"],["send","всеПиздуй"],["every","пошерстим"],["join","вписаться"],["LN2","ГОПОРИФМ2"],["abs","абсолютли"],["ceil","чирикГони"],["cos","гопосинос"],["floor","бабкиГони"],["round","подрезать"],["tan","гопангенс"],["AsyncFunction","АссоЙопта"],["propertyIsEnumerable","лютаяТема"],["catch","аченетак"],["catch","аченитак"],["catch","ачёнетак"],["this","тырыпыры"],["try","пабрацки"],["while","потрещим"],["import","спиздить"],["protected","подкрыша"],["null","порожняк"],["false","нетрулио"],["++","плюсуюНа"],["--","слилсяНа"],["evaluate","заценить"],["doctype","типКсивы"],["anchors","якоряЁпт"],["anchors","якоряЕпт"],["dir","буратино"],["location","райончик"],["onfocus","опаЧотка"],["onclick","какПырну"],["onclose","ебалоОфф"],["onplay","покаЖиви"],["onsort","опаСидор"],["closed","завалено"],["name","погоняло"],["screen","всёЕбало"],["screen","всеЕбало"],["self","пельмень"],["find","сигиЕсть"],["print","наПечать"],["scroll","колесить"],["onstorage","опаХабар"],["parentNode","братишка"],["normalize","нормандэ"],["indexOf","поТюряге"],["toLowerCase","неКапсом"],["anchor","якорьЁпт"],["anchor","якорьЕпт"],["filter","фильтруй"],["arcTo","прогибНа"],["clip","запретка"],["moveTo","щемитьНа"],["isInteger","этоХуйня"],["isNaN","этоНихуя"],["error","папандос"],["of","сашаГрей"],["Math","Очканавт"],["Math","Очконавт"],["asin","агопинус"],["create","намутить"],["freeze","датьЛеща"],["export","предъявa"],["debugger","логопед"],["finally","тюряжка"],["function*","пиздюли"],["new","гыйбать"],["return","отвечаю"],["yield","поебалу"],["try","хапнуть"],["Const","ЯсенХуй"],["const","ясенХуй"],["Double","Двойные"],["double","двойные"],["Float","Плавник"],["float","плавник"],["implements","силикон"],["Long","Колонна"],["long","колонна"],["package","клеёнка"],["package","клеенка"],["public","ебанное"],["throws","плюнуть"],["false","пиздишь"],["false","нечётко"],["false","нечетко"],["false","нечотко"],["==","эквалио"],["==","блясука"],["===","блябуду"],["=","внатуре"],["charset","слышЁба"],["charset","слышЕба"],["timeline","всяЖиза"],["children","пездюки"],["embeds","мразоты"],["head","залупка"],["height","длинный"],["plugins","выебоны"],["scripts","гыебаты"],["onshow","опаТуса"],["dump","мусорка"],["valueOf","валиоОф"],["small","малорик"],["scale","чётчеНа"],["scale","четчеНа"],["scale","чотчеНа"],["stroke","наколка"],["Array","Помойка"],["keys","отмычки"],["reduce","редиска"],["values","валиоси"],["sin","гопинус"],["source","обоснуй"],["isFrozen","далЛеща"],["unwatch","съебись"],["continue","двигай"],["delete","ёбнуть"],["delete","ебнуть"],["default","пахану"],["default","апохуй"],["switch","естьчо"],["with","хзйопт"],["goto","пиздуй"],["synchronized","вписон"],["volatile","вписос"],["null","нуллио"],["true","трулио"],["<","хуёвей"],["<","хуевей"],[";"," нахуй"],["close","завали"],["open","отрыть"],["write","малява"],["hidden","кроить"],["forms","еблища"],["width","жирный"],["controllers","мусора"],["parent","родаки"],["confirm","канает"],["focus","хуёкус"],["focus","хуекус"],["stop","стопээ"],["raw","полоса"],["charAt","обаЁба"],["charAt","обаЕба"],["match","футбик"],["direction","лесТам"],["arc","прогиб"],["table","таблом"],["PI","ПИЗДЕЦ"],["min","хуйчик"],["pow","гопень"],["sign","сиськи"],["sqrt","сквирт"],["then","атоэто"],["module","братва"],["function","йопта"],["instanceof","шкура"],["Boolean","Пацан"],["boolean","пацан"],["Byte","Семка"],["byte","семка"],["class","клёво"],["class","клево"],["final","бачок"],["Int","Хуйня"],["int","хуйня"],["interface","хуёво"],["interface","хуево"],["Short","Пипин"],["short","пипин"],["NaN","нихуя"],["undefined","неибу"],["true","чётко"],["true","четко"],["true","чотко"],["==","ровно"],[">=","поцик"],["||","иличо"],[">","пизже"],["!","чобля"],["document","ксива"],["clear","урыть"],["body","висяк"],["cookie","семки"],["images","мазни"],["value","валио"],["window","ебало"],["frames","кадры"],["alert","шухер"],["rect","доска"],["toFixed","наПМС"],["group","банда"],["profile","личка"],["pop","попка"],["push","пупок"],["sort","сидор"],["Math","Гопец"],["Math","Ботан"],["Math","Батан"],["max","хуйло"],["Object","Петух"],["global","общак"],["break","харэ"],["void","куку"],["extends","батя"],["native","чорт"],["eval","ебал"],["}","есть"],["==","типа"],["=","сука"],[";"," нах"],[";"," бля"],["links","зоны"],["title","вася"],["URL","хата"],["link","зона"],["ellipse","очко"],["info","инфо"],["time","срок"],["random","шара"],["async","ассо"],["Object","Кент"],["case","лещ"],["catch","гоп"],["do","крч"],["throw","пнх"],["var","гыы"],["Char","Эээ"],["char","эээ"],["Enum","Еээ"],["enum","еээ"],["private","мой"],["super","яга"],["transient","ахз"],["<=","поц"],["&&","ичо"],["history","фон"],["fixed","ПМС"],["log","чмо"],["for","го"],["{","жЫ"]]'
        );
      },
    },
    t = {};
  function o(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var a = (t[n] = { exports: {} });
    return e[n].call(a.exports, a, a.exports, o), a.exports;
  }
  o.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })();
  o(607);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxDQUFQLEVBQU9BLFVBL0JTLHFFQUhYLEVBQUFoQyxXQU1hLG9CQUFYdkYsU0FFUCtHLFNBQVNXLGlCQUFpQiw0QkFBNEI1QyxRQUFRd0IsR0FDOURTLFNBQVNXLGlCQUFpQiwrQkFBK0I1QyxRQUFRd0IsSyw0a21CQ1JqRXFCLEVBQTJCLEdBRy9CLFNBQVNDLEVBQW9CQyxHQUU1QixJQUFJQyxFQUFlSCxFQUF5QkUsR0FDNUMsUUFBcUJFLElBQWpCRCxFQUNILE9BQU9BLEVBQWFoSSxRQUdyQixJQUFJRCxFQUFTOEgsRUFBeUJFLEdBQVksQ0FHakQvSCxRQUFTLElBT1YsT0FIQWtJLEVBQW9CSCxHQUFVM0ksS0FBS1csRUFBT0MsUUFBU0QsRUFBUUEsRUFBT0MsUUFBUzhILEdBR3BFL0gsRUFBT0MsUUNyQmY4SCxFQUFvQnJILEVBQUksV0FDdkIsR0FBMEIsaUJBQWZLLFdBQXlCLE9BQU9BLFdBQzNDLElBQ0MsT0FBT3FILE1BQVEsSUFBSWhJLFNBQVMsY0FBYixHQUNkLE1BQU9yQixHQUNSLEdBQXNCLGlCQUFYb0IsT0FBcUIsT0FBT0EsUUFMakIsR0NHRTRILEVBQW9CLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b3B0YS8uL25vZGVfbW9kdWxlcy9kZWZpbmUtcHJvcGVydGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly95b3B0YS8uL25vZGVfbW9kdWxlcy9nbG9iYWx0aGlzL2ltcGxlbWVudGF0aW9uLmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8veW9wdGEvLi9ub2RlX21vZHVsZXMvZ2xvYmFsdGhpcy9pbmRleC5qcyIsIndlYnBhY2s6Ly95b3B0YS8uL25vZGVfbW9kdWxlcy9nbG9iYWx0aGlzL3BvbHlmaWxsLmpzIiwid2VicGFjazovL3lvcHRhLy4vbm9kZV9tb2R1bGVzL2dsb2JhbHRoaXMvc2hpbS5qcyIsIndlYnBhY2s6Ly95b3B0YS8uL25vZGVfbW9kdWxlcy9vYmplY3Qta2V5cy9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly95b3B0YS8uL25vZGVfbW9kdWxlcy9vYmplY3Qta2V5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly95b3B0YS8uL25vZGVfbW9kdWxlcy9vYmplY3Qta2V5cy9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly95b3B0YS8uL3NyYy9jb3JlLnRzIiwid2VicGFjazovL3lvcHRhLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3lvcHRhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3lvcHRhL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8veW9wdGEvd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGtleXMgPSByZXF1aXJlKCdvYmplY3Qta2V5cycpO1xudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2woJ2ZvbycpID09PSAnc3ltYm9sJztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBjb25jYXQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0O1xudmFyIG9yaWdEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cbnZhciBhcmVQcm9wZXJ0eURlc2NyaXB0b3JzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgb2JqID0ge307XG5cdHRyeSB7XG5cdFx0b3JpZ0RlZmluZVByb3BlcnR5KG9iaiwgJ3gnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogb2JqIH0pO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycywgbm8tcmVzdHJpY3RlZC1zeW50YXhcblx0XHRmb3IgKHZhciBfIGluIG9iaikgeyAvLyBqc2NzOmlnbm9yZSBkaXNhbGxvd1VudXNlZFZhcmlhYmxlc1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gb2JqLnggPT09IG9iajtcblx0fSBjYXRjaCAoZSkgeyAvKiB0aGlzIGlzIElFIDguICovXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHN1cHBvcnRzRGVzY3JpcHRvcnMgPSBvcmlnRGVmaW5lUHJvcGVydHkgJiYgYXJlUHJvcGVydHlEZXNjcmlwdG9yc1N1cHBvcnRlZCgpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCB2YWx1ZSwgcHJlZGljYXRlKSB7XG5cdGlmIChuYW1lIGluIG9iamVjdCAmJiAoIWlzRnVuY3Rpb24ocHJlZGljYXRlKSB8fCAhcHJlZGljYXRlKCkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG5cdFx0b3JpZ0RlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG9iamVjdFtuYW1lXSA9IHZhbHVlO1xuXHR9XG59O1xuXG52YXIgZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmplY3QsIG1hcCkge1xuXHR2YXIgcHJlZGljYXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDoge307XG5cdHZhciBwcm9wcyA9IGtleXMobWFwKTtcblx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRwcm9wcyA9IGNvbmNhdC5jYWxsKHByb3BzLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG1hcCkpO1xuXHR9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BzW2ldLCBtYXBbcHJvcHNbaV1dLCBwcmVkaWNhdGVzW3Byb3BzW2ldXSk7XG5cdH1cbn07XG5cbmRlZmluZVByb3BlcnRpZXMuc3VwcG9ydHNEZXNjcmlwdG9ycyA9ICEhc3VwcG9ydHNEZXNjcmlwdG9ycztcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0aWVzO1xuIiwiLyogZXNsaW50IG5vLW5lZ2F0ZWQtY29uZGl0aW9uOiAwLCBuby1uZXctZnVuYzogMCAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBzZWxmO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdztcbn0gZWxzZSB7XG5cdG1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgc2hpbSA9IHJlcXVpcmUoJy4vc2hpbScpO1xuXG52YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXG52YXIgZ2V0R2xvYmFsID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcG9seWZpbGw7IH07XG5cbmRlZmluZVByb3BlcnRpZXMoZ2V0R2xvYmFsLCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRHbG9iYWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRQb2x5ZmlsbCgpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWwgIT09ICdvYmplY3QnIHx8ICFnbG9iYWwgfHwgZ2xvYmFsLk1hdGggIT09IE1hdGggfHwgZ2xvYmFsLkFycmF5ICE9PSBBcnJheSkge1xuXHRcdHJldHVybiBpbXBsZW1lbnRhdGlvbjtcblx0fVxuXHRyZXR1cm4gZ2xvYmFsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbUdsb2JhbCgpIHtcblx0dmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblx0aWYgKGRlZmluZS5zdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG5cdFx0dmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHBvbHlmaWxsLCAnZ2xvYmFsVGhpcycpO1xuXHRcdGlmICghZGVzY3JpcHRvciB8fCAoZGVzY3JpcHRvci5jb25maWd1cmFibGUgJiYgKGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBkZXNjcmlwdG9yLndyaXRhYmxlIHx8IGdsb2JhbFRoaXMgIT09IHBvbHlmaWxsKSkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkocG9seWZpbGwsICdnbG9iYWxUaGlzJywge1xuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0XHR2YWx1ZTogcG9seWZpbGwsXG5cdFx0XHRcdHdyaXRhYmxlOiBmYWxzZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSAnb2JqZWN0JyB8fCBnbG9iYWxUaGlzICE9PSBwb2x5ZmlsbCkge1xuXHRcdHBvbHlmaWxsLmdsb2JhbFRoaXMgPSBwb2x5ZmlsbDtcblx0fVxuXHRyZXR1cm4gcG9seWZpbGw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5c1NoaW07XG5pZiAoIU9iamVjdC5rZXlzKSB7XG5cdC8vIG1vZGlmaWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltXG5cdHZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXHR2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXHR2YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGdsb2JhbC1yZXF1aXJlXG5cdHZhciBpc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXHR2YXIgaGFzRG9udEVudW1CdWcgPSAhaXNFbnVtZXJhYmxlLmNhbGwoeyB0b1N0cmluZzogbnVsbCB9LCAndG9TdHJpbmcnKTtcblx0dmFyIGhhc1Byb3RvRW51bUJ1ZyA9IGlzRW51bWVyYWJsZS5jYWxsKGZ1bmN0aW9uICgpIHt9LCAncHJvdG90eXBlJyk7XG5cdHZhciBkb250RW51bXMgPSBbXG5cdFx0J3RvU3RyaW5nJyxcblx0XHQndG9Mb2NhbGVTdHJpbmcnLFxuXHRcdCd2YWx1ZU9mJyxcblx0XHQnaGFzT3duUHJvcGVydHknLFxuXHRcdCdpc1Byb3RvdHlwZU9mJyxcblx0XHQncHJvcGVydHlJc0VudW1lcmFibGUnLFxuXHRcdCdjb25zdHJ1Y3Rvcidcblx0XTtcblx0dmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlID0gZnVuY3Rpb24gKG8pIHtcblx0XHR2YXIgY3RvciA9IG8uY29uc3RydWN0b3I7XG5cdFx0cmV0dXJuIGN0b3IgJiYgY3Rvci5wcm90b3R5cGUgPT09IG87XG5cdH07XG5cdHZhciBleGNsdWRlZEtleXMgPSB7XG5cdFx0JGFwcGxpY2F0aW9uQ2FjaGU6IHRydWUsXG5cdFx0JGNvbnNvbGU6IHRydWUsXG5cdFx0JGV4dGVybmFsOiB0cnVlLFxuXHRcdCRmcmFtZTogdHJ1ZSxcblx0XHQkZnJhbWVFbGVtZW50OiB0cnVlLFxuXHRcdCRmcmFtZXM6IHRydWUsXG5cdFx0JGlubmVySGVpZ2h0OiB0cnVlLFxuXHRcdCRpbm5lcldpZHRoOiB0cnVlLFxuXHRcdCRvbm1vemZ1bGxzY3JlZW5jaGFuZ2U6IHRydWUsXG5cdFx0JG9ubW96ZnVsbHNjcmVlbmVycm9yOiB0cnVlLFxuXHRcdCRvdXRlckhlaWdodDogdHJ1ZSxcblx0XHQkb3V0ZXJXaWR0aDogdHJ1ZSxcblx0XHQkcGFnZVhPZmZzZXQ6IHRydWUsXG5cdFx0JHBhZ2VZT2Zmc2V0OiB0cnVlLFxuXHRcdCRwYXJlbnQ6IHRydWUsXG5cdFx0JHNjcm9sbExlZnQ6IHRydWUsXG5cdFx0JHNjcm9sbFRvcDogdHJ1ZSxcblx0XHQkc2Nyb2xsWDogdHJ1ZSxcblx0XHQkc2Nyb2xsWTogdHJ1ZSxcblx0XHQkc2VsZjogdHJ1ZSxcblx0XHQkd2Via2l0SW5kZXhlZERCOiB0cnVlLFxuXHRcdCR3ZWJraXRTdG9yYWdlSW5mbzogdHJ1ZSxcblx0XHQkd2luZG93OiB0cnVlXG5cdH07XG5cdHZhciBoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcgPSAoZnVuY3Rpb24gKCkge1xuXHRcdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Zm9yICh2YXIgayBpbiB3aW5kb3cpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmICghZXhjbHVkZWRLZXlzWyckJyArIGtdICYmIGhhcy5jYWxsKHdpbmRvdywgaykgJiYgd2luZG93W2tdICE9PSBudWxsICYmIHR5cGVvZiB3aW5kb3dba10gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKHdpbmRvd1trXSk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0oKSk7XG5cdHZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kgPSBmdW5jdGlvbiAobykge1xuXHRcdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1Zykge1xuXHRcdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0a2V5c1NoaW0gPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuXHRcdHZhciBpc09iamVjdCA9IG9iamVjdCAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jztcblx0XHR2YXIgaXNGdW5jdGlvbiA9IHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0XHR2YXIgaXNBcmd1bWVudHMgPSBpc0FyZ3Mob2JqZWN0KTtcblx0XHR2YXIgaXNTdHJpbmcgPSBpc09iamVjdCAmJiB0b1N0ci5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xuXHRcdHZhciB0aGVLZXlzID0gW107XG5cblx0XHRpZiAoIWlzT2JqZWN0ICYmICFpc0Z1bmN0aW9uICYmICFpc0FyZ3VtZW50cykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmtleXMgY2FsbGVkIG9uIGEgbm9uLW9iamVjdCcpO1xuXHRcdH1cblxuXHRcdHZhciBza2lwUHJvdG8gPSBoYXNQcm90b0VudW1CdWcgJiYgaXNGdW5jdGlvbjtcblx0XHRpZiAoaXNTdHJpbmcgJiYgb2JqZWN0Lmxlbmd0aCA+IDAgJiYgIWhhcy5jYWxsKG9iamVjdCwgMCkpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcoaSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChpc0FyZ3VtZW50cyAmJiBvYmplY3QubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBvYmplY3QubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhqKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG5cdFx0XHRcdGlmICghKHNraXBQcm90byAmJiBuYW1lID09PSAncHJvdG90eXBlJykgJiYgaGFzLmNhbGwob2JqZWN0LCBuYW1lKSkge1xuXHRcdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcobmFtZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGhhc0RvbnRFbnVtQnVnKSB7XG5cdFx0XHR2YXIgc2tpcENvbnN0cnVjdG9yID0gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5KG9iamVjdCk7XG5cblx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgZG9udEVudW1zLmxlbmd0aDsgKytrKSB7XG5cdFx0XHRcdGlmICghKHNraXBDb25zdHJ1Y3RvciAmJiBkb250RW51bXNba10gPT09ICdjb25zdHJ1Y3RvcicpICYmIGhhcy5jYWxsKG9iamVjdCwgZG9udEVudW1zW2tdKSkge1xuXHRcdFx0XHRcdHRoZUtleXMucHVzaChkb250RW51bXNba10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGVLZXlzO1xuXHR9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGlzQXJncyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKTtcblxudmFyIG9yaWdLZXlzID0gT2JqZWN0LmtleXM7XG52YXIga2V5c1NoaW0gPSBvcmlnS2V5cyA/IGZ1bmN0aW9uIGtleXMobykgeyByZXR1cm4gb3JpZ0tleXMobyk7IH0gOiByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbnZhciBvcmlnaW5hbEtleXMgPSBPYmplY3Qua2V5cztcblxua2V5c1NoaW0uc2hpbSA9IGZ1bmN0aW9uIHNoaW1PYmplY3RLZXlzKCkge1xuXHRpZiAoT2JqZWN0LmtleXMpIHtcblx0XHR2YXIga2V5c1dvcmtzV2l0aEFyZ3VtZW50cyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBTYWZhcmkgNS4wIGJ1Z1xuXHRcdFx0dmFyIGFyZ3MgPSBPYmplY3Qua2V5cyhhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIGFyZ3MgJiYgYXJncy5sZW5ndGggPT09IGFyZ3VtZW50cy5sZW5ndGg7XG5cdFx0fSgxLCAyKSk7XG5cdFx0aWYgKCFrZXlzV29ya3NXaXRoQXJndW1lbnRzKSB7XG5cdFx0XHRPYmplY3Qua2V5cyA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG5cdFx0XHRcdGlmIChpc0FyZ3Mob2JqZWN0KSkge1xuXHRcdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMoc2xpY2UuY2FsbChvYmplY3QpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxLZXlzKG9iamVjdCk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRPYmplY3Qua2V5cyA9IGtleXNTaGltO1xuXHR9XG5cdHJldHVybiBPYmplY3Qua2V5cyB8fCBrZXlzU2hpbTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c1NoaW07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcblx0dmFyIHN0ciA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHR2YXIgaXNBcmdzID0gc3RyID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcblx0aWYgKCFpc0FyZ3MpIHtcblx0XHRpc0FyZ3MgPSBzdHIgIT09ICdbb2JqZWN0IEFycmF5XScgJiZcblx0XHRcdHZhbHVlICE9PSBudWxsICYmXG5cdFx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG5cdFx0XHR0eXBlb2YgdmFsdWUubGVuZ3RoID09PSAnbnVtYmVyJyAmJlxuXHRcdFx0dmFsdWUubGVuZ3RoID49IDAgJiZcblx0XHRcdHRvU3RyLmNhbGwodmFsdWUuY2FsbGVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0fVxuXHRyZXR1cm4gaXNBcmdzO1xufTtcbiIsImltcG9ydCBwb2x5ZmlsbCBmcm9tICdnbG9iYWx0aGlzJztcbmltcG9ydCBkaWN0aW9uYXJ5IGZyb20gJy4vZGljdGlvbmFyeS9zb3J0ZWRZb3B0YS5qc29uJztcblxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cjogc3RyaW5nKSB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xuXG4gICAgaWYgKC9eXFx3KyQvLnRlc3Qoc3RyKSkge1xuICAgICAgICBzdHIgPSAnXFxcXGInICsgc3RyICsgJ1xcXFxiJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5mdW5jdGlvbiB5b3B0UmVwbGFjZUFsbChzdHI6IHN0cmluZywgc2VhcmNoOiBzdHJpbmcsIHJlcGxhY2VtZW50OiBzdHJpbmcpIHtcbiAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHNlYXJjaCksICdnJyk7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlLCByZXBsYWNlbWVudCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHRleHQg0YLQtdC60YHRgiwg0L/QviDQutC+0YLQvtGA0L7QvNGDINGB0LvQtdC00YPQtdGCINC/0YDQvtC50YLQuNGB0YxcbiAqIEBwYXJhbSB0byDRj9C30YvQuiDRgtC10LrRgdGC0LAgKCd5cycgb3IgJ2pzJylcbiAqL1xuZnVuY3Rpb24gaXRlcmF0ZVRleHQodGV4dDogc3RyaW5nLCB0bzogJ2pzJyB8ICd5cycgPSAneXMnKSB7XG4gICAgY29uc3QgbGFuZ0NvbCA9IHRvID09PSAneXMnID8gMSA6IDA7XG4gICAgY29uc3QgZGljayA9IGRpY3Rpb25hcnk7XG4gICAgZGljay5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsID0gYVtsYW5nQ29sXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGJsID0gYltsYW5nQ29sXS5sZW5ndGg7XG4gICAgICAgIHJldHVybiBibCAtIGFsO1xuICAgIH0pLmZvckVhY2goXG4gICAgICAgIChwYWlyKSA9PiAodGV4dCA9IHlvcHRSZXBsYWNlQWxsKHRleHQsIHBhaXJbbGFuZ0NvbF0sIHBhaXJbKyFsYW5nQ29sXSkpXG4gICAgKTtcblxuICAgIHJldHVybiB0ZXh0O1xufVxuXG4vKipcbiAqINCf0LXRgNC10LLQvtC00LjRgiBZb3B0YVNjcmlwdCDQsiBKYXZhU2NyaXB0INC4INC+0LHRgNCw0YLQvdC+XG4gKiBAcGFyYW0gdGV4dCDQodGC0YDQvtC60LAg0LTQu9GPINC/0LXRgNC10LLQvtC00LBcbiAqIEBwYXJhbSBsYW5nINCv0LfRi9C6INGB0YLRgNC+0LrQuCAoeXMvanMpXG4gKiBAcmV0dXJucyB7c3RyaW5nfSDQn9C10YDQtdCy0LXQtNGR0L3QvdGL0Lkg0YLQtdC60YHRglxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZSh0ZXh0OiBzdHJpbmcsIGxhbmc6ICdqcycgfCAneXMnID0gJ3lzJyk6IHN0cmluZyB7XG4gICAgLyogdGV4dCAtINGC0LXQutGB0YIg0LTQu9GPINGA0LXQv9C70LXQudGB0LBcbiAgICAgKiBsYW5nIC0g0Y/Qt9GL0Log0YLQtdC60YHRgtCwICgneXMnIG9yICdqcycpXG4gICAgICovXG4gICAgaW50ZXJmYWNlIExpdGVyYWxzIHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICAgIH1cbiAgICBjb25zdCBjb21tZW50UmVnRXhwID0gLygoPzpcXC9cXCooPzpbXipdfCg/OlxcKitbXipcXC9dKSkqXFwqK1xcLyl8KD86XFwvXFwvLiopKS9nO1xuICAgIGNvbnN0IHRtcFRva2VuID0gJ3lzXycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICdfJztcbiAgICBjb25zdCByU3RyaW5nTGl0ZXJhbHM6IExpdGVyYWxzID0ge307XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZShcbiAgICAgICAgL1xcXCIoPzpcXFxcLnxbXlxcXCJcXFxcXSkqXFxcInxcXCcoPzpcXFxcLnxbXlxcJ1xcXFxdKSpcXCcvZyxcbiAgICAgICAgZnVuY3Rpb24gKHZhbCwgcG9zKSB7XG4gICAgICAgICAgICBjb25zdCBuZWVkS2V5ID0gdG1wVG9rZW4gKyBwb3M7XG4gICAgICAgICAgICByU3RyaW5nTGl0ZXJhbHNbbmVlZEtleV0gPSB2YWw7XG4gICAgICAgICAgICByZXR1cm4gbmVlZEtleTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgY29tbWVudHNBcnJheSA9IHRleHQubWF0Y2goY29tbWVudFJlZ0V4cCkgfHwgW107XG4gICAgdGV4dCA9IGl0ZXJhdGVUZXh0KHRleHQsIGxhbmcpO1xuICAgIC8vIGNvbWViYWNrIGNvbW1lbnRzXG4gICAgdGV4dCA9IHRleHQucmVwbGFjZShjb21tZW50UmVnRXhwLCAoKSA9PiBjb21tZW50c0FycmF5LnNoaWZ0KCkgfHwgJycpO1xuICAgIC8vIGNvbWViYWNrIHN0cmluZ3NcbiAgICBmb3IgKGNvbnN0IGtleSBpbiByU3RyaW5nTGl0ZXJhbHMpIHtcbiAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShrZXksIHJTdHJpbmdMaXRlcmFsc1trZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQ7XG59XG5cbi8vIFlvcHRhU2NyaXB0IHRvIGdsb2JhbHNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5jb25zdCBnbG9iYWxUaGlzID0gcG9seWZpbGwoKSBhcyBhbnk7XG5nbG9iYWxUaGlzLnlvcHRhID0gY29tcGlsZTtcbiIsImltcG9ydCB7IGNvbXBpbGUgfSBmcm9tICcuL2NvcmUnO1xuXG4vLyDQrdC60YHQv9C+0YDRgiDQtNC70Y8g0LzQvtC00YPQu9GPXG5leHBvcnQgeyBjb21waWxlIGFzIHlvcHRhIH07XG5cbi8vINCf0L7QuNGB0Log0YHQutGA0LjQv9GC0L7QsiDQv9GA0Lgg0YDQsNCx0L7RgtC1INC40Lcg0LHRgNCw0YPQt9C10YDQsFxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy/Qn9C+0LvRg9GH0LDQtdC8INC50L7Qv9GC0YMg0LjQtyDRgdC60YDQuNC/0YLQsFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tsYW5ndWFnZT1cIllvcHRhU2NyaXB0XCJdJykuZm9yRWFjaCh5b3B0YVRvSnMpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0eXBlPVwidGV4dC94LXlvcHRhc2NyaXB0XCJdJykuZm9yRWFjaCh5b3B0YVRvSnMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiB5b3B0YVRvSnMoc2NyaXB0Tm9kZTogRWxlbWVudCkge1xuICAgIGlmIChzY3JpcHROb2RlLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgLy/Qn9C+0LvRg9GH0LDQtdC8INC50L7Qv9GC0YMg0LjQtyDRgdC60YDQuNC/0YLQsFxuICAgICAgICBjb25zdCB5b3B0YVRleHQ6IHN0cmluZyA9XG4gICAgICAgICAgICBzY3JpcHROb2RlLnRleHRDb250ZW50IHx8IChhd2FpdCBnZXRUeHRGcm9tU3JjKHNjcmlwdE5vZGUpKTtcbiAgICAgICAgLy/Rg9C00LDQu9GP0LXQvCDRgdGC0LDRgNGL0Lkg0YHQutGA0LjQv9GCXG4gICAgICAgIHNjcmlwdE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHROb2RlKTtcbiAgICAgICAgLy/RgdC+0LfQtNCw0ZHQvCDQvtCx0YDQsNCx0L7RgtCw0L3QvdGL0Lkg0YHQutGA0LjQv9GCINGBINCx0LvQtdC60LTQttC10LrQvtC8INC4INGI0LvRjtGF0LDQvNC4XG4gICAgICAgIGFkZFNjcmlwdE5vZGUoY29tcGlsZSh5b3B0YVRleHQsICd5cycpKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFR4dEZyb21TcmMobm9kZTogRWxlbWVudCkge1xuICAgIC8v0J/QvtGI0LvQuCDQuNGB0LrQsNGC0Ywg0YHQvtGA0YbRi1xuICAgIGNvbnN0IHNyYyA9IG5vZGUuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICBsZXQgcmVzcCA9ICcnO1xuICAgIGlmIChzcmMgIT09IG51bGwgJiYgc3JjLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBmZSA9IGF3YWl0IGZldGNoKHNyYywge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3AgPSBhd2FpdCBmZS50ZXh0KCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwO1xufVxuXG5mdW5jdGlvbiBhZGRTY3JpcHROb2RlKGNvbXBpbGVkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuaW5uZXJIVE1MID0gY29tcGlsZWQ7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYwNyk7XG4iXSwibmFtZXMiOlsia2V5cyIsImhhc1N5bWJvbHMiLCJTeW1ib2wiLCJ0b1N0ciIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY29uY2F0IiwiQXJyYXkiLCJvcmlnRGVmaW5lUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsInN1cHBvcnRzRGVzY3JpcHRvcnMiLCJvYmoiLCJfIiwiZW51bWVyYWJsZSIsInZhbHVlIiwieCIsImUiLCJhcmVQcm9wZXJ0eURlc2NyaXB0b3JzU3VwcG9ydGVkIiwib2JqZWN0IiwibmFtZSIsInByZWRpY2F0ZSIsImZuIiwiY2FsbCIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydGllcyIsIm1hcCIsInByZWRpY2F0ZXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwcm9wcyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImkiLCJtb2R1bGUiLCJleHBvcnRzIiwic2VsZiIsIndpbmRvdyIsIkZ1bmN0aW9uIiwiaW1wbGVtZW50YXRpb24iLCJnZXRQb2x5ZmlsbCIsInNoaW0iLCJwb2x5ZmlsbCIsImdldEdsb2JhbCIsImciLCJNYXRoIiwiZGVmaW5lIiwiZGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdsb2JhbFRoaXMiLCJrZXlzU2hpbSIsImhhcyIsImhhc093blByb3BlcnR5IiwiaXNBcmdzIiwiaXNFbnVtZXJhYmxlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJoYXNEb250RW51bUJ1ZyIsImhhc1Byb3RvRW51bUJ1ZyIsImRvbnRFbnVtcyIsImVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlIiwibyIsImN0b3IiLCJjb25zdHJ1Y3RvciIsImV4Y2x1ZGVkS2V5cyIsIiRhcHBsaWNhdGlvbkNhY2hlIiwiJGNvbnNvbGUiLCIkZXh0ZXJuYWwiLCIkZnJhbWUiLCIkZnJhbWVFbGVtZW50IiwiJGZyYW1lcyIsIiRpbm5lckhlaWdodCIsIiRpbm5lcldpZHRoIiwiJG9ubW96ZnVsbHNjcmVlbmNoYW5nZSIsIiRvbm1vemZ1bGxzY3JlZW5lcnJvciIsIiRvdXRlckhlaWdodCIsIiRvdXRlcldpZHRoIiwiJHBhZ2VYT2Zmc2V0IiwiJHBhZ2VZT2Zmc2V0IiwiJHBhcmVudCIsIiRzY3JvbGxMZWZ0IiwiJHNjcm9sbFRvcCIsIiRzY3JvbGxYIiwiJHNjcm9sbFkiLCIkc2VsZiIsIiR3ZWJraXRJbmRleGVkREIiLCIkd2Via2l0U3RvcmFnZUluZm8iLCIkd2luZG93IiwiaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnIiwiayIsImlzT2JqZWN0IiwiaXNGdW5jdGlvbiIsImlzQXJndW1lbnRzIiwiaXNTdHJpbmciLCJ0aGVLZXlzIiwiVHlwZUVycm9yIiwic2tpcFByb3RvIiwicHVzaCIsIlN0cmluZyIsImoiLCJza2lwQ29uc3RydWN0b3IiLCJlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kiLCJzbGljZSIsIm9yaWdLZXlzIiwib3JpZ2luYWxLZXlzIiwiYXJncyIsInN0ciIsImNhbGxlZSIsIml0ZXJhdGVUZXh0IiwidGV4dCIsInRvIiwibGFuZ0NvbCIsInNvcnQiLCJhIiwiYiIsImFsIiwiZm9yRWFjaCIsInBhaXIiLCJzZWFyY2giLCJyZXBsYWNlbWVudCIsInJlIiwiUmVnRXhwIiwicmVwbGFjZSIsInRlc3QiLCJlc2NhcGVSZWdFeHAiLCJjb21waWxlIiwibGFuZyIsImNvbW1lbnRSZWdFeHAiLCJ0bXBUb2tlbiIsIkRhdGUiLCJnZXRUaW1lIiwiclN0cmluZ0xpdGVyYWxzIiwiY29tbWVudHNBcnJheSIsInZhbCIsInBvcyIsIm5lZWRLZXkiLCJtYXRjaCIsImtleSIsInNoaWZ0IiwieW9wdGEiLCJ5b3B0YVRvSnMiLCJzY3JpcHROb2RlIiwicGFyZW50Tm9kZSIsInRleHRDb250ZW50IiwiZ2V0VHh0RnJvbVNyYyIsInlvcHRhVGV4dCIsInJlbW92ZUNoaWxkIiwiY29tcGlsZWQiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJub2RlIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwicmVzcCIsImZldGNoIiwibWV0aG9kIiwicXVlcnlTZWxlY3RvckFsbCIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJ0aGlzIl0sInNvdXJjZVJvb3QiOiIifQ==
