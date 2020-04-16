webpackHotUpdate('static/development/pages/index.js', {
  /***/ './components/Header.js':
    /*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime/helpers/esm/defineProperty */ './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
      );
      /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @babel/runtime/regenerator */ './node_modules/@babel/runtime/regenerator/index.js',
      );
      /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js',
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! axios */ './node_modules/axios/index.js',
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        axios__WEBPACK_IMPORTED_MODULE_5__,
      );

      var _this = undefined,
        _jsxFileName =
          '/Users/apple/dev/nestjsCRUD/nextjs/components/Header.js';

      var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

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
                _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[
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
          _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[
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
          _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[
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

      var Header = styled_components__WEBPACK_IMPORTED_MODULE_4__[
        'default'
      ].header(_templateObject());
      var Item = styled_components__WEBPACK_IMPORTED_MODULE_4__['default'].div(
        _templateObject2(),
      );
      /* harmony default export */ __webpack_exports__[
        'default'
      ] = function () {
        var _useState = Object(
            react__WEBPACK_IMPORTED_MODULE_3__['useState'],
          )(),
          boards = _useState[0],
          setBoards = _useState[1];

        var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__['useState'])(
            false,
          ),
          render = _useState2[0],
          setRender = _useState2[1];

        var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__['useState'])(
            false,
          ),
          update = _useState3[0],
          setUpdate = _useState3[1];

        var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__['useState'])(
            {},
          ),
          updateData = _useState4[0],
          setUpdateData = _useState4[1];

        var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__['useState'])(
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
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(
            function handleSubmit$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    e.preventDefault();
                    _context.next = 3;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(
                      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(
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
                _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[
                  'default'
                ],
              )({}, e.target.name, e.target.value),
            ),
          );
          console.log(formData);
        };

        var deleteBtn = function deleteBtn(id) {
          var res;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(
            function deleteBtn$(_context2) {
              while (1) {
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    console.log(id);
                    _context2.next = 3;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(
                      axios__WEBPACK_IMPORTED_MODULE_5___default.a['delete'](
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

        Object(react__WEBPACK_IMPORTED_MODULE_3__['useEffect'])(
          function () {
            var getAllBoards = function getAllBoards() {
              var res;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(
                function getAllBoards$(_context3) {
                  while (1) {
                    switch ((_context3.prev = _context3.next)) {
                      case 0:
                        _context3.next = 2;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(
                          axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(
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
        Object(react__WEBPACK_IMPORTED_MODULE_3__['useEffect'])(
          function () {
            console.log(updateData);
            setFormData({
              writer: updateData.writer,
              title: updateData.title,
              contents: updateData.contents,
            });
            setUpdate(false);
          },
          [update],
        );
        return __jsx(
          Header,
          {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80,
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
                lineNumber: 81,
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
                  lineNumber: 82,
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
                    lineNumber: 83,
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
                    lineNumber: 84,
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
                    lineNumber: 91,
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
                    lineNumber: 92,
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
                    lineNumber: 99,
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
                    lineNumber: 100,
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
                    lineNumber: 107,
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
                  lineNumber: 111,
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
                        lineNumber: 115,
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
                          lineNumber: 117,
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
                          lineNumber: 120,
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
});
//# sourceMappingURL=index.js.3a493892f830bdcad818.hot-update.js.map
