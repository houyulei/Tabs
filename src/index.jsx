/**
 * @file index.jsx
 * @author houyl@jingoal.com
 *
 * 标签页
 */
import React, {PureComponent, PropTypes} from 'react';
import TabList from './components/TabList';
import TabPanels from './components/TabPanels';

class Tabs extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        tabs: PropTypes.arrayOf(PropTypes.node),
        defaultIndex: PropTypes.number,
        onChange: PropTypes.func,
        transitionEnd: PropTypes.func,
        containerStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
        tabStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
        tabPanelStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
        children: PropTypes.node
    }

    static defaultProps = {
        defaultIndex: 0
    }

    constructor(props) {
        super(props);

        this.state = {index: this.props.defaultIndex};
        this.changeTabTo = this.changeTabTo.bind(this);
        this.onChange = this.onChange.bind(this);
        this.transitionEnd = this.transitionEnd.bind(this);
    }

    onChange(index) {
        this.setState({
            index
        });
        if (this.props.onChange) {
            this.props.onChange(index);
        }
    }

    transitionEnd(index) {
        if (this.props.transitionEnd) {
            this.props.transitionEnd(index);
        }
    }

    changeTabTo(value) {
        this.reactSwipe.getInstance().slide(value);
    }

    render() {
        const {
            className,
            tabs,
            defaultIndex,
            tabStyle,
            tabPanelStyle,
            children,
            containerStyle
        } = this.props;
        return (
            <div style={containerStyle} className={className}>
                <TabList
                    tabs={tabs}
                    index={this.state.index}
                    onChange={this.changeTabTo}
                    style={tabStyle}
                />
                <TabPanels
                    ref={ref => { this.reactSwipe = ref }}
                    onChange={this.onChange}
                    transitionEnd={this.transitionEnd}
                    startSlide={defaultIndex}
                    style={tabPanelStyle}
                >
                    {children}
                </TabPanels>
            </div>
        );
    }
}

export default Tabs;
