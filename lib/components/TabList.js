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
                    * @file TabList.jsx
                    * @author houyl@jingoal.com
                    *
                    * tabs组件
                    */


// import Scroller from '../../scroller';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var docWidth = document.documentElement.clientWidth;

var TabList = (_temp = _class = function (_PureComponent) {
    (0, _inherits3.default)(TabList, _PureComponent);

    function TabList(props) {
        (0, _classCallCheck3.default)(this, TabList);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TabList.__proto__ || (0, _getPrototypeOf2.default)(TabList)).call(this, props));

        _this.totalWidth = 0;
        _this.tabWidths = []; // 记录每个tab的宽度
        _this.handleTabClick = _this.handleTabClick.bind(_this);
        _this.updateTabWidth = _this.updateTabWidth.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(TabList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.scrollTo(this.props.index);
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps) {
            var index = nextProps.index;
            if (this.scroller) {
                this.scrollTo(index, 400);
            }
        }
    }, {
        key: 'scrollTo',
        value: function scrollTo(index) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _utils2.default.ease.circular;

            var start = 0;
            for (var i = 0; i < index; i++) {
                start += this.tabWidths[i];
            }
            this.inkBar.style.cssText = '-webkit-transform: translate3d(' + (start + 6) + 'px, 0px, 0px);transform: translate3d(' + (start + 6) + 'px, 0px, 0px);width:' + (this.tabWidths[index] - 12) + 'px';
            if (this.totalWidth > docWidth) {
                var scrollTo = start - this.tabWidths[index];
                this.animate(this.scroller.scrollLeft, scrollTo, duration, easing.fn);
            }
        }
    }, {
        key: 'animate',
        value: function animate(start, dest, duration, easingFn) {
            var _this2 = this;

            var startTime = _utils2.default.getTime();
            var destTime = startTime + duration;

            var step = function step() {
                var now = _utils2.default.getTime();

                // 如果当前时间大于持续时间，则结束动画
                if (now >= destTime) {
                    _this2.isAnimating = false;
                    _this2.scroller.scrollLeft = dest;
                    return;
                }

                now = (now - startTime) / duration;
                var easing = easingFn(now);
                var newX = (dest - start) * easing + start;

                _this2.scroller.scrollLeft = newX;

                if (_this2.isAnimating) {
                    _utils2.default.requestAnimationFrame.call(window, step);
                }
            };

            this.isAnimating = true;
            step();
        }
    }, {
        key: 'handleTabClick',
        value: function handleTabClick(index) {
            this.props.onChange(index);
        }
    }, {
        key: 'updateTabWidth',
        value: function updateTabWidth(index, width) {
            this.totalWidth = this.tabWidths[index] ? this.totalWidth - this.tabWidths[index] + width : this.totalWidth + width;
            this.tabWidths[index] = width;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                tabs = _props.tabs,
                style = _props.style;

            return _react2.default.createElement(
                'div',
                {
                    style: style,
                    className: 'silk-tabs-nav-wrapper',
                    ref: function ref(_ref2) {
                        _this3.scroller = _ref2;
                    }
                },
                _react2.default.createElement(
                    'div',
                    { className: 'silk-tabs-nav-scroller silk-tabs-border-line' },
                    _react2.default.createElement('div', { className: 'silk-tabs-ink-bar silk-tabs-ink-bar-animated', ref: function ref(_ref) {
                            _this3.inkBar = _ref;
                        } }),
                    tabs.map(function (item, index) {
                        var tabClass = (0, _classnames2.default)('silk-tabs-tab', {
                            'silk-tabs-active': index === _this3.props.index
                        });
                        return _react2.default.createElement(_Tab2.default, {
                            key: index,
                            index: index,
                            className: tabClass,
                            onClick: _this3.handleTabClick,
                            content: item,
                            updateTabWidth: _this3.updateTabWidth
                        });
                    })
                )
            );
        }
    }]);
    return TabList;
}(_react.PureComponent), _class.propTypes = {
    onChange: _react.PropTypes.func,
    tabs: _react.PropTypes.arrayOf(_react.PropTypes.node),
    index: _react.PropTypes.number,
    style: _react.PropTypes.object // eslint-disable-line react/forbid-prop-types
}, _class.defaultProps = {
    index: 0,
    style: {}
}, _temp);
exports.default = TabList;