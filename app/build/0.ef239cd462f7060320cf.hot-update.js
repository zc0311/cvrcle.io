webpackHotUpdate(0,{

/***/ 1128:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(31), RootInstanceProvider = __webpack_require__(32), ReactMount = __webpack_require__(28), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _getPrototypeOf = __webpack_require__(43);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(102);

var _axios2 = _interopRequireDefault(_axios);

var _semanticUiReact = __webpack_require__(122);

var _Home = __webpack_require__(1129);

var _Home2 = _interopRequireDefault(_Home);

var _reactRouter = __webpack_require__(184);

var _home = __webpack_require__(551);

var _home2 = _interopRequireDefault(_home);

var _itinerary = __webpack_require__(552);

var _itinerary2 = _interopRequireDefault(_itinerary);

var _logout = __webpack_require__(553);

var _logout2 = _interopRequireDefault(_logout);

var _reactRedux = __webpack_require__(183);

var _store = __webpack_require__(297);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppContainer = function (_Component) {
  (0, _inherits3.default)(AppContainer, _Component);

  function AppContainer(props) {
    (0, _classCallCheck3.default)(this, AppContainer);
    return (0, _possibleConstructorReturn3.default)(this, (AppContainer.__proto__ || (0, _getPrototypeOf2.default)(AppContainer)).call(this, props));
  }

  (0, _createClass3.default)(AppContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.lock = new Auth0Lock('qpfelAKW1EAzyb3RI3pk46SD0deXrJhE', 'cvrcle.auth0.com');
      console.log('we in here');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _store2.default },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            { className: 'cvrcle-logo text-center' },
            _react2.default.createElement(
              'span',
              { style: { color: '#4885ed' } },
              'C'
            ),
            _react2.default.createElement(
              'span',
              { style: { color: '#db3236' } },
              'V'
            ),
            _react2.default.createElement(
              'span',
              { style: { color: '#f4c20d' } },
              'R'
            ),
            _react2.default.createElement(
              'span',
              { style: { color: '#4885ed' } },
              'C'
            ),
            _react2.default.createElement(
              'span',
              { style: { color: '#3cba54' } },
              'L'
            ),
            _react2.default.createElement(
              'span',
              { style: { color: '#db3236' } },
              'E'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'text-center' },
            'Auth will go here.',
            _react2.default.createElement(_Home2.default, { lock: this.lock })
          )
        )
      );
    }
  }]);
  return AppContainer;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.hashHistory },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: AppContainer }),
  _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/itinerary', component: _itinerary2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/logout', component: _logout2.default })
), document.getElementById('appRoot'));

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(33); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)(module)))

/***/ }),

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(31), RootInstanceProvider = __webpack_require__(32), ReactMount = __webpack_require__(28), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(43);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home1 = function (_Component) {
  (0, _inherits3.default)(Home1, _Component);

  function Home1(props) {
    (0, _classCallCheck3.default)(this, Home1);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home1.__proto__ || (0, _getPrototypeOf2.default)(Home1)).call(this, props));

    _this.state = {
      entries: []
    };
    _this.showLock = _this.showLock.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Home1, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          { onClick: this.showLock },
          'Sign In'
        )
      );
    }
  }, {
    key: 'showLock',
    value: function showLock() {
      this.props.lock.show();
    }
  }]);
  return Home1;
}(_react.Component);

exports.default = Home1;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(33); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Home.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)(module)))

/***/ })

})
//# sourceMappingURL=0.ef239cd462f7060320cf.hot-update.js.map