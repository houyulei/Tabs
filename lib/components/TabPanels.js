'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp; /**
                    * @file SwipeableTabContent.jsx
                    * @author houyl@jingoal.com
                    *
                    * tab滑动内容区
                    */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _silkReactSwipe = require('silk-react-swipe');

var _silkReactSwipe2 = _interopRequireDefault(_silkReactSwipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabPanels = (_temp = _class = function (_PureComponent) {
    (0, _inherits3.default)(TabPanels, _PureComponent);

    function TabPanels(props) {
        (0, _classCallCheck3.default)(this, TabPanels);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TabPanels.__proto__ || (0, _getPrototypeOf2.default)(TabPanels)).call(this, props));

        _this.swipeOptions = {
            continuous: false,
            callback: _this.onChange.bind(_this),
            transitionEnd: _this.transitionEnd.bind(_this),
            startSlide: _this.props.startSlide
        };
        return _this;
    }

    (0, _createClass3.default)(TabPanels, [{
        key: 'onChange',
        value: function onChange(index) {
            this.props.onChange(index);
        }
    }, {
        key: 'getInstance',
        value: function getInstance() {
            return this.reactSwipe;
        }
    }, {
        key: 'transitionEnd',
        value: function transitionEnd(index) {
            this.props.transitionEnd(index);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _silkReactSwipe2.default,
                {
                    ref: function ref(_ref) {
                        _this2.reactSwipe = _ref;
                    },
                    style: this.props.style,
                    swipeOptions: this.swipeOptions,
                    className: 'silk-tabs-swipe-container'
                },
                this.props.children
            );
        }
    }]);
    return TabPanels;
}(_react.PureComponent), _class.propTypes = {
    onChange: _react.PropTypes.func,
    transitionEnd: _react.PropTypes.func,
    children: _react.PropTypes.node,
    style: _react.PropTypes.shape({
        wrapper: _react.PropTypes.object,
        child: _react.PropTypes.object
    }),
    startSlide: _react.PropTypes.number
}, _class.defaultProps = {
    style: {
        container: {
            overflow: 'hidden',
            visibility: 'hidden',
            position: 'relative'
        },
        wrapper: {
            overflow: 'hidden',
            position: 'relative'
        },
        child: {
            float: 'left',
            width: '100%',
            position: 'relative',
            transitionProperty: 'transform'
        }
    },
    startSlide: 0
}, _temp);
exports.default = TabPanels;