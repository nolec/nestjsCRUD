webpackHotUpdate('static/development/pages/index.js', {
  /***/ './components/Header.js':
    /*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime/regenerator */ './node_modules/@babel/runtime/regenerator/index.js',
      );
      /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js',
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! axios */ './node_modules/axios/index.js',
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        axios__WEBPACK_IMPORTED_MODULE_4__,
      );

      var _this = undefined,
        _jsxFileName =
          '/Users/apple/dev/nestjsCRUD/nextjs/components/Header.js';

      var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

      function _templateObject() {
        var data = Object(
          _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[
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

      var Header = styled_components__WEBPACK_IMPORTED_MODULE_3__[
        'default'
      ].header(_templateObject());
      /* harmony default export */ __webpack_exports__[
        'default'
      ] = function () {
        var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__['useState'])(
            null,
          ),
          boards = _useState[0],
          setBoards = _useState[1];

        var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__['useState'])(
            {
              writer: '',
              title: '',
              contents: '',
            },
          ),
          formData = _useState2[0],
          setFormData = _useState2[1];

        var handleSubmit = function handleSubmit(formData) {
          var res;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(
            function handleSubmit$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _context.next = 2;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(
                      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(
                        'http://localhost:3000/boards',
                        formData,
                      ),
                    );

                  case 2:
                    res = _context.sent;
                    console.log(res.data);

                  case 4:
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

        Object(react__WEBPACK_IMPORTED_MODULE_2__['useEffect'])(function () {
          var getAllBoards = function getAllBoards() {
            var res;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(
              function getAllBoards$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _context2.next = 2;
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(
                        axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(
                          'http://localhost:3000/boards',
                        ),
                      );

                    case 2:
                      res = _context2.sent;
                      console.log(res.data);
                      setBoards(res.data);

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

          getAllBoards();
        }, []);
        return __jsx(
          Header,
          {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47,
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
                lineNumber: 48,
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
                  lineNumber: 49,
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
                    lineNumber: 50,
                    columnNumber: 11,
                  },
                },
                __jsx('input', {
                  type: 'text',
                  placeholder: '\uAE00\uC4F4\uC774',
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51,
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
                    lineNumber: 53,
                    columnNumber: 11,
                  },
                },
                __jsx('input', {
                  type: 'text',
                  placeholder: '\uC81C\uBAA9',
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54,
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
                    lineNumber: 56,
                    columnNumber: 11,
                  },
                },
                __jsx('input', {
                  type: 'text',
                  placeholder: '\uB0B4\uC6A9',
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 13,
                  },
                }),
              ),
              __jsx('button', {
                type: 'submit',
                onclick: handleSubmit,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 5,
                },
              }),
            ),
            __jsx(
              'div',
              {
                className: 'boards_box',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 9,
                },
              },
              boards &&
                boards.map(function (board, i) {
                  return __jsx(
                    Item,
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63,
                        columnNumber: 13,
                      },
                    },
                    board.writer,
                  );
                }),
            ),
          ),
        );
      };

      /***/
    },
});
//# sourceMappingURL=index.js.612e1a545141eeca1a3e.hot-update.js.map
