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
                    * Tab组件
                    */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = (_temp = _class = function (_PureComponent) {
    (0, _inherits3.default)(Tab, _PureComponent);

    function Tab() {
        (0, _classCallCheck3.default)(this, Tab);
        return (0, _possibleConstructorReturn3.default)(this, (Tab.__proto__ || (0, _getPrototypeOf2.default)(Tab)).apply(this, arguments));
    }

    (0, _createClass3.default)(Tab, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.updateTabWidth(this.props.index, this.el.offsetWidth);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                index = _props.index,
                _onClick = _props.onClick,
                className = _props.className,
                content = _props.content;


            return _react2.default.createElement(
                'div',
                {
                    onClick: function onClick() {
                        return _onClick(index);
                    },
                    ref: function ref(_ref) {
                        _this2.el = _ref;
                    },
                    className: className
                },
                content
            );
        }
    }]);
    return Tab;
}(_react.PureComponent), _class.propTypes = {
    onClick: _react.PropTypes.func,
    updateTabWidth: _react.PropTypes.func,
    content: _react.PropTypes.node,
    index: _react.PropTypes.number,
    className: _react.PropTypes.string
}, _temp);
exports.default = Tab;