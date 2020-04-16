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
          var res, _res;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(
            function handleSubmit$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    e.preventDefault();

                    if (update) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 4;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(
                      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(
                        'http://localhost:3000/boards',
                        formData,
                      ),
                    );

                  case 4:
                    res = _context.sent;
                    _context.next = 18;
                    break;

                  case 7:
                    _context.next = 9;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(
                      axios__WEBPACK_IMPORTED_MODULE_5___default.a.patch(
                        'http://localhost:3000/boards/'.concat(formData.id),
                        formData,
                      ),
                    );

                  case 9:
                    _res = _context.sent;

                    if (!(_res.data.message === '업데이트가 실패했습니다.')) {
                      _context.next = 16;
                      break;
                    }

                    alert(_res.data.message);
                    setUpdateData({
                      writer: '',
                      title: '',
                      contents: '',
                    });
                    return _context.abrupt('return', setUpdate(true));

                  case 16:
                    setUpdateData({
                      writer: '',
                      title: '',
                      contents: '',
                    });
                    setUpdate(false);

                  case 18:
                    setFormData({
                      writer: '',
                      title: '',
                      contents: '',
                    });
                    setRender(true);

                  case 20:
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
            id: forUpdateData._id,
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
              id: updateData.id,
              title: updateData.title,
              contents: updateData.contents,
            });
          },
          [update],
        );
        return __jsx(
          Header,
          {
            __self: _this,
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
              __self: _this,
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
                __self: _this,
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
                  __self: _this,
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
                  onChange: function onChange(e) {
                    return handleChange(e);
                  },
                  __self: _this,
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
                  __self: _this,
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
                  onChange: function onChange(e) {
                    return handleChange(e);
                  },
                  __self: _this,
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
                  __self: _this,
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
                  onChange: function onChange(e) {
                    return handleChange(e);
                  },
                  __self: _this,
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
                  __self: _this,
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
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 130,
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
                        lineNumber: 134,
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
                        onClick: function onClick() {
                          return goToUpdate(board);
                        },
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 139,
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
//# sourceMappingURL=index.js.c15959e2fad7db382bdf.hot-update.js.map
