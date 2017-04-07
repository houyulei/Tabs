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
                    * @file index.jsx
                    * @author houyl@jingoal.com
                    *
                    * 标签页
                    */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TabList = require('./components/TabList');

var _TabList2 = _interopRequireDefault(_TabList);

var _TabPanels = require('./components/TabPanels');

var _TabPanels2 = _interopRequireDefault(_TabPanels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = (_temp = _class = function (_PureComponent) {
    (0, _inherits3.default)(Tabs, _PureComponent);

    function Tabs(props) {
        (0, _classCallCheck3.default)(this, Tabs);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call(this, props));

        _this.state = { index: _this.props.defaultIndex };
        _this.changeTabTo = _this.changeTabTo.bind(_this);
        _this.onChange = _this.onChange.bind(_this);
        _this.transitionEnd = _this.transitionEnd.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Tabs, [{
        key: 'onChange',
        value: function onChange(index) {
            this.setState({
                index: index
            });
            if (this.props.onChange) {
                this.props.onChange(index);
            }
        }
    }, {
        key: 'transitionEnd',
        value: function transitionEnd(index) {
            if (this.props.transitionEnd) {
                this.props.transitionEnd(index);
            }
        }
    }, {
        key: 'changeTabTo',
        value: function changeTabTo(value) {
            this.reactSwipe.getInstance().slide(value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                className = _props.className,
                tabs = _props.tabs,
                defaultIndex = _props.defaultIndex,
                tabStyle = _props.tabStyle,
                tabPanelStyle = _props.tabPanelStyle,
                children = _props.children,
                containerStyle = _props.containerStyle;

            return _react2.default.createElement(
                'div',
                { style: containerStyle, className: className },
                _react2.default.createElement(_TabList2.default, {
                    tabs: tabs,
                    index: this.state.index,
                    onChange: this.changeTabTo,
                    style: tabStyle
                }),
                _react2.default.createElement(
                    _TabPanels2.default,
                    {
                        ref: function ref(_ref) {
                            _this2.reactSwipe = _ref;
                        },
                        onChange: this.onChange,
                        transitionEnd: this.transitionEnd,
                        startSlide: defaultIndex,
                        style: tabPanelStyle
                    },
                    children
                )
            );
        }
    }]);
    return Tabs;
}(_react.PureComponent), _class.propTypes = {
    className: _react.PropTypes.string,
    tabs: _react.PropTypes.arrayOf(_react.PropTypes.node),
    defaultIndex: _react.PropTypes.number,
    onChange: _react.PropTypes.func,
    transitionEnd: _react.PropTypes.func,
    containerStyle: _react.PropTypes.object, // eslint-disable-line react/forbid-prop-types
    tabStyle: _react.PropTypes.object, // eslint-disable-line react/forbid-prop-types
    tabPanelStyle: _react.PropTypes.object, // eslint-disable-line react/forbid-prop-types
    children: _react.PropTypes.node
}, _class.defaultProps = {
    defaultIndex: 0
}, _temp);
exports.default = Tabs;