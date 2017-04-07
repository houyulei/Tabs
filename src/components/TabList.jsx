/**
 * @file TabList.jsx
 * @author houyl@jingoal.com
 *
 * tabs组件
 */
import React, {PureComponent, PropTypes} from 'react';
import classNames from 'classnames';

// import Scroller from '../../scroller';
import Tab from './Tab';
import utils from './utils';

const docWidth = document.documentElement.clientWidth;

class TabList extends PureComponent {

    static propTypes = {
        onChange: PropTypes.func,
        tabs: PropTypes.arrayOf(PropTypes.node),
        index: PropTypes.number,
        style: PropTypes.object // eslint-disable-line react/forbid-prop-types
    }

    static defaultProps = {
        index: 0,
        style: {}
    }

    constructor(props) {
        super(props);
        this.totalWidth = 0;
        this.tabWidths = []; // 记录每个tab的宽度
        this.handleTabClick = this.handleTabClick.bind(this);
        this.updateTabWidth = this.updateTabWidth.bind(this);
    }

    componentDidMount() {
        this.scrollTo(this.props.index);
    }

    componentWillUpdate(nextProps) {
        const index = nextProps.index;
        if (this.scroller) {
            this.scrollTo(index, 400);
        }
    }

    scrollTo(index, duration = 0, easing = utils.ease.circular) {
        let start = 0;
        for (let i = 0; i < index; i++) {
            start += this.tabWidths[i];
        }
        this.inkBar.style.cssText = `-webkit-transform: translate3d(${start + 6}px, 0px, 0px);transform: translate3d(${start + 6}px, 0px, 0px);width:${this.tabWidths[index] - 12}px`
        if (this.totalWidth > docWidth) {
            let scrollTo = start - this.tabWidths[index];
            this.animate(this.scroller.scrollLeft, scrollTo, duration, easing.fn)
        }
    }

    animate(start, dest, duration, easingFn) {
        const startTime = utils.getTime();
        const destTime = startTime + duration;

        const step = () => {
            let now = utils.getTime();

            // 如果当前时间大于持续时间，则结束动画
            if (now >= destTime) {
                this.isAnimating = false;
                this.scroller.scrollLeft = dest;
                return;
            }

            now = (now - startTime) / duration;
            const easing = easingFn(now);
            const newX = ((dest - start) * easing) + start;

            this.scroller.scrollLeft = newX;

            if (this.isAnimating) {
                utils.requestAnimationFrame.call(window, step);
            }
        }

        this.isAnimating = true;
        step();
    }

    handleTabClick(index) {
        this.props.onChange(index);
    }

    updateTabWidth(index, width) {
        this.totalWidth = this.tabWidths[index] ?
        (this.totalWidth - this.tabWidths[index]) + width : this.totalWidth + width
        this.tabWidths[index] = width;
    }

    render() {
        const {
            tabs,
            style
        } = this.props;
        return (
            <div
                style={style}
                className="silk-tabs-nav-wrapper"
                ref={ref => { this.scroller = ref }}
            >
                <div className="silk-tabs-nav-scroller silk-tabs-border-line">
                    <div className="silk-tabs-ink-bar silk-tabs-ink-bar-animated" ref={ref => { this.inkBar = ref }} />
                    {
                        tabs.map((item, index) => {
                            const tabClass = classNames('silk-tabs-tab', {
                                'silk-tabs-active': index === this.props.index
                            })
                            return (
                                <Tab
                                    key={index}
                                    index={index}
                                    className={tabClass}
                                    onClick={this.handleTabClick}
                                    content={item}
                                    updateTabWidth={this.updateTabWidth}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default TabList;
