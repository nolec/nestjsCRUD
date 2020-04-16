webpackHotUpdate('static/development/pages/index.js', {
  /***/ './components/Header.js':
    /*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime/helpers/esm/toConsumableArray */ './node_modules/@babel/runtime/helpers/esm/toConsumableArray.js',
      );
      /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @babel/runtime/helpers/esm/defineProperty */ './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
      );
      /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @babel/runtime/regenerator */ './node_modules/@babel/runtime/regenerator/index.js',
      );
      /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js',
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! axios */ './node_modules/axios/index.js',
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        axios__WEBPACK_IMPORTED_MODULE_6__,
      );

      var _this = undefined,
        _jsxFileName =
          '/Users/apple/dev/nestjsCRUD/nextjs/components/Header.js';

      var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

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
              Object(
                _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ],
              )(target, key, source[key]);
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

      function _templateObject2() {
        var data = Object(
          _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[
            'default'
          ],
        )(['']);

        _templateObject2 = function _templateObject2() {
          return data;
        };

        return data;
      }

      function _templateObject() {
        var data = Object(
          _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[
            'default'
          ],
        )([
          '\n  width: 100%;\n  height: auto;\n  .container {\n    max-width: 1200px;\n    width: 100%;\n    height: auto;\n    .input_box {\n      display: flex;\n      justify-content: center;\n      align-content: center;\n      flex-direction: column;\n      > div {\n        flex: 0 0 33.333%;\n      }\n    }\n  }\n',
        ]);

        _templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      var Header = styled_components__WEBPACK_IMPORTED_MODULE_5__[
        'default'
      ].header(_templateObject());
      var Item = styled_components__WEBPACK_IMPORTED_MODULE_5__['default'].div(
        _templateObject2(),
      );
      /* harmony default export */ __webpack_exports__[
        'default'
      ] = function () {
        var _useState = Object(
            react__WEBPACK_IMPORTED_MODULE_4__['useState'],
          )(),
          boards = _useState[0],
          setBoards = _useState[1];

        var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__['useState'])(
            false,
          ),
          render = _useState2[0],
          setRender = _useState2[1];

        var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__['useState'])(
            false,
          ),
          update = _useState3[0],
          setUpdate = _useState3[1];

        var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__['useState'])(
            {},
          ),
          updateData = _useState4[0],
          setUpdateData = _useState4[1];

        var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__['useState'])(
            {
              writer: '',
              title: '',
              contents: '',
            },
          ),
          formData = _useState5[0],
          setFormData = _useState5[1];

        var handleSubmit = function handleSubmit(e) {
          var res;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(
            function handleSubmit$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    e.preventDefault();
                    _context.next = 3;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(
                      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(
                        'http://localhost:3000/boards',
                        formData,
                      ),
                    );

                  case 3:
                    res = _context.sent;
                    setRender(true);
                    console.log(res.data, formData);

                  case 6:
                  case 'end':
                    return _context.stop();
                }
              }
            },
            null,
            null,
            null,
            Promise,
          );
        };

        var handleChange = function handleChange(e) {
          setFormData(
            _objectSpread(
              {},
              formData,
              Object(
                _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ],
              )({}, e.target.name, e.target.value),
            ),
          );
          console.log(formData);
        };

        var deleteBtn = function deleteBtn(id) {
          var res;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(
            function deleteBtn$(_context2) {
              while (1) {
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    console.log(id);
                    _context2.next = 3;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(
                      axios__WEBPACK_IMPORTED_MODULE_6___default.a['delete'](
                        'http://localhost:3000/boards/'.concat(id),
                      ),
                    );

                  case 3:
                    res = _context2.sent;
                    setRender(true);

                  case 5:
                  case 'end':
                    return _context2.stop();
                }
              }
            },
            null,
            null,
            null,
            Promise,
          );
        };

        var goToUpdate = function goToUpdate(forUpdateData) {
          console.log(forUpdateData);
          setUpdate(true);
          setUpdateData({
            writer: forUpdateData.writer,
            title: forUpdateData.title,
            contents: forUpdateData.contents,
          });
        };

        Object(react__WEBPACK_IMPORTED_MODULE_4__['useEffect'])(
          function () {
            var getAllBoards = function getAllBoards() {
              var res;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(
                function getAllBoards$(_context3) {
                  while (1) {
                    switch ((_context3.prev = _context3.next)) {
                      case 0:
                        _context3.next = 2;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(
                          axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(
                            'http://localhost:3000/boards',
                          ),
                        );

                      case 2:
                        res = _context3.sent;
                        console.log(res.data);
                        setBoards(res.data);

                      case 5:
                      case 'end':
                        return _context3.stop();
                    }
                  }
                },
                null,
                null,
                null,
                Promise,
              );
            };

            getAllBoards();
            setRender(false);
          },
          [render],
        );
        Object(react__WEBPACK_IMPORTED_MODULE_4__['useEffect'])(
          function () {
            console.log(updateData);
            setFormData.apply(
              void 0,
              Object(
                _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[
                  'default'
                ],
              )(formData).concat([_objectSpread({}, updateData)]),
            );
          },
          [update],
        );
        return __jsx(
          Header,
          {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 5,
            },
          },
          __jsx(
            'div',
            {
              className: 'container',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 7,
              },
            },
            __jsx(
              'div',
              {
                className: 'input_box',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 9,
                },
              },
              __jsx(
                'div',
                {
                  className: 'writer_box',
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 11,
                  },
                },
                __jsx('input', {
                  type: 'text',
                  name: 'writer',
                  placeholder: '\uAE00\uC4F4\uC774',
                  onChange: function onChange(e) {
                    return handleChange(e);
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 13,
                  },
                }),
              ),
              __jsx(
                'div',
                {
                  className: 'title_box',
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 11,
                  },
                },
                __jsx('input', {
                  type: 'text',
                  name: 'title',
                  placeholder: '\uC81C\uBAA9',
                  onChange: function onChange(e) {
                    return handleChange(e);
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 13,
                  },
                }),
              ),
              __jsx(
                'div',
                {
                  className: 'contents_box',
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 11,
                  },
                },
                __jsx('input', {
                  type: 'text',
                  name: 'contents',
                  placeholder: '\uB0B4\uC6A9',
                  onChange: function onChange(e) {
                    return handleChange(e);
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 13,
                  },
                }),
              ),
              __jsx(
                'button',
                {
                  type: 'submit',
                  onClick: handleSubmit,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 11,
                  },
                },
                '\uB4F1\uB85D',
              ),
            ),
            __jsx(
              'div',
              {
                className: 'boards_box',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 9,
                },
              },
              boards &&
                boards.length > 0 &&
                boards.map(function (board, i) {
                  return __jsx(
                    Item,
                    {
                      key: i,
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 15,
                      },
                    },
                    '\uAE00\uC4F4\uC774 : '
                      .concat(board.writer, ', \uC81C\uBAA9 : ')
                      .concat(board.title, ', \uB0B4\uC6A9 : ')
                      .concat(board.contents),
                    __jsx(
                      'button',
                      {
                        type: 'button',
                        onClick: function onClick() {
                          return deleteBtn(board._id);
                        },
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 112,
                          columnNumber: 17,
                        },
                      },
                      '\uC0AD\uC81C',
                    ),
                    __jsx(
                      'button',
                      {
                        type: 'button',
                        onClick: function onClick() {
                          return goToUpdate(board);
                        },
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 115,
                          columnNumber: 17,
                        },
                      },
                      '\uC218\uC815',
                    ),
                  );
                }),
            ),
          ),
        );
      };

      /***/
    },

  /***/ './node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js':
    /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function () {
          return _arrayWithoutHoles;
        },
      );
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }

          return arr2;
        }
      }

      /***/
    },

  /***/ './node_modules/@babel/runtime/helpers/esm/iterableToArray.js':
    /*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function () {
          return _iterableToArray;
        },
      );
      function _iterableToArray(iter) {
        if (
          Symbol.iterator in Object(iter) ||
          Object.prototype.toString.call(iter) === '[object Arguments]'
        )
          return Array.from(iter);
      }

      /***/
    },

  /***/ './node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js':
    /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function () {
          return _nonIterableSpread;
        },
      );
      function _nonIterableSpread() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      }

      /***/
    },

  /***/ './node_modules/@babel/runtime/helpers/esm/toConsumableArray.js':
    /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function () {
          return _toConsumableArray;
        },
      );
      /* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./arrayWithoutHoles */ './node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js',
      );
      /* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./iterableToArray */ './node_modules/@babel/runtime/helpers/esm/iterableToArray.js',
      );
      /* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./nonIterableSpread */ './node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js',
      );

      function _toConsumableArray(arr) {
        return (
          Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__['default'])(
            arr,
          ) ||
          Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__['default'])(
            arr,
          ) ||
          Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__['default'])()
        );
      }

      /***/
    },
});
//# sourceMappingURL=index.js.29dd9b785c145b8b7e52.hot-update.js.map
