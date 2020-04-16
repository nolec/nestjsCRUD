module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require('../../../ssr-module-cache.js'); // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__,
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode,
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key),
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 3));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './components/Header.js':
      /*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! styled-components */ 'styled-components',
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! axios */ 'axios',
        );
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          axios__WEBPACK_IMPORTED_MODULE_2__,
        );
        var _jsxFileName =
          '/Users/apple/dev/nestjsCRUD/nextjs/components/Header.js';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source),
              );
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key),
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a
          .header`
  width: 100%;
  height: auto;
  .container {
    max-width: 1200px;
    width: 100%;
    height: auto;
    .input_box {
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      > div {
        flex: 0 0 33.333%;
      }
    }
  }
`;
        const Item = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a
          .div``;
        /* harmony default export */ __webpack_exports__['default'] = () => {
          const { 0: boards, 1: setBoards } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__['useState'],
          )();
          const { 0: render, 1: setRender } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__['useState'],
          )(false);
          const { 0: update, 1: setUpdate } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__['useState'],
          )(false);
          const { 0: updateData, 1: setUpdateData } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__['useState'],
          )({});
          const { 0: formData, 1: setFormData } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__['useState'],
          )({
            writer: '',
            title: '',
            contents: '',
          });

          const handleSubmit = async (e) => {
            e.preventDefault();

            if (!update) {
              const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(
                'http://localhost:3000/boards',
                formData,
              );
            } else {
              const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch(
                `http://localhost:3000/boards/${formData.id}`,
                formData,
              );

              if (res.data.message === '업데이트가 실패했습니다.') {
                alert(res.data.message);
                setUpdateData({
                  writer: '',
                  title: '',
                  contents: '',
                });
                return setUpdate(true);
              } else {
                setUpdateData({
                  writer: '',
                  title: '',
                  contents: '',
                });
                setUpdate(false);
              }
            }

            setFormData({
              writer: '',
              title: '',
              contents: '',
            });
            setRender(true);
          };

          const handleChange = (e) => {
            setFormData(
              _objectSpread({}, formData, {
                [e.target.name]: e.target.value,
              }),
            );
            console.log(formData);
          };

          const deleteBtn = async (id) => {
            console.log(id);
            const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(
              `http://localhost:3000/boards/${id}`,
            );
            setRender(true);
          };

          const goToUpdate = (forUpdateData) => {
            console.log(forUpdateData);
            setUpdate(true);
            setUpdateData({
              writer: forUpdateData.writer,
              id: forUpdateData._id,
              title: forUpdateData.title,
              contents: forUpdateData.contents,
            });
          };

          Object(react__WEBPACK_IMPORTED_MODULE_0__['useEffect'])(() => {
            const getAllBoards = async () => {
              const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(
                'http://localhost:3000/boards',
              );
              console.log(res.data);
              setBoards(res.data);
            };

            getAllBoards();
            setRender(false);
          }, [render]);
          Object(react__WEBPACK_IMPORTED_MODULE_0__['useEffect'])(() => {
            console.log(updateData);
            setFormData({
              id: updateData.id,
              title: updateData.title,
              contents: updateData.contents,
            });
          }, [update]);
          return __jsx(
            Header,
            {
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 5,
              },
            },
            __jsx(
              'div',
              {
                className: 'container',
                __self: undefined,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 7,
                },
              },
              __jsx(
                'div',
                {
                  className: 'input_box',
                  __self: undefined,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  'div',
                  {
                    className: 'writer_box',
                    __self: undefined,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 11,
                    },
                  },
                  __jsx('input', {
                    type: 'text',
                    name: 'writer',
                    value: update ? updateData.writer : formData.writer,
                    placeholder: '\uAE00\uC4F4\uC774',
                    disabled: update ? true : false,
                    onChange: (e) => handleChange(e),
                    __self: undefined,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 13,
                    },
                  }),
                ),
                __jsx(
                  'div',
                  {
                    className: 'title_box',
                    __self: undefined,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 11,
                    },
                  },
                  __jsx('input', {
                    type: 'text',
                    name: 'title',
                    value: formData.title,
                    placeholder: '\uC81C\uBAA9',
                    onChange: (e) => handleChange(e),
                    __self: undefined,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 13,
                    },
                  }),
                ),
                __jsx(
                  'div',
                  {
                    className: 'contents_box',
                    __self: undefined,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 117,
                      columnNumber: 11,
                    },
                  },
                  __jsx('input', {
                    type: 'text',
                    name: 'contents',
                    value: formData.contents,
                    placeholder: '\uB0B4\uC6A9',
                    onChange: (e) => handleChange(e),
                    __self: undefined,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 118,
                      columnNumber: 13,
                    },
                  }),
                ),
                __jsx(
                  'button',
                  {
                    type: 'submit',
                    onClick: handleSubmit,
                    __self: undefined,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 11,
                    },
                  },
                  update ? '수정' : '등록',
                ),
              ),
              __jsx(
                'div',
                {
                  className: 'boards_box',
                  __self: undefined,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 9,
                  },
                },
                boards &&
                  boards.length > 0 &&
                  boards.map((board, i) =>
                    __jsx(
                      Item,
                      {
                        key: i,
                        __self: undefined,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 134,
                          columnNumber: 15,
                        },
                      },
                      `글쓴이 : ${board.writer}, 제목 : ${board.title}, 내용 : ${board.contents}`,
                      __jsx(
                        'button',
                        {
                          type: 'button',
                          onClick: () => deleteBtn(board._id),
                          __self: undefined,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 136,
                            columnNumber: 17,
                          },
                        },
                        '\uC0AD\uC81C',
                      ),
                      __jsx(
                        'button',
                        {
                          type: 'button',
                          onClick: () => goToUpdate(board),
                          __self: undefined,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 139,
                            columnNumber: 17,
                          },
                        },
                        '\uC218\uC815',
                      ),
                    ),
                  ),
              ),
            ),
          );
        };

        /***/
      },

    /***/ './pages/index.js':
      /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../components/Header */ './components/Header.js',
        );
        var _jsxFileName = '/Users/apple/dev/nestjsCRUD/nextjs/pages/index.js';

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        /* harmony default export */ __webpack_exports__['default'] = () => {
          return __jsx(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__['default'], {
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 6,
                columnNumber: 7,
              },
            }),
            __jsx(
              'div',
              {
                __self: undefined,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 7,
                  columnNumber: 7,
                },
              },
              ' Welcome to Next.js ',
            ),
          );
        };

        /***/
      },

    /***/ 3:
      /*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /Users/apple/dev/nestjsCRUD/nextjs/pages/index.js */ './pages/index.js',
        );

        /***/
      },

    /***/ axios:
      /*!************************!*\
  !*** external "axios" ***!
  \************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require('axios');

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require('react');

        /***/
      },

    /***/ 'styled-components':
      /*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require('styled-components');

        /***/
      },

    /******/
  },
);
//# sourceMappingURL=index.js.map
