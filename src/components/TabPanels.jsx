/**
 * @file SwipeableTabContent.jsx
 * @author houyl@jingoal.com
 *
 * tab滑动内容区
 */
import React, {PureComponent, PropTypes} from 'react';
import ReactSwipe from 'silk-react-swipe';

class TabPanels extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func,
        transitionEnd: PropTypes.func,
        children: PropTypes.node,
        style: PropTypes.shape({
            wrapper: PropTypes.object,
            child: PropTypes.object
        }),
        startSlide: PropTypes.number
    }

    static defaultProps = {
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
    }

    constructor(props) {
        super(props);
        this.swipeOptions = {
            continuous: false,
            callback: this.onChange.bind(this),
            transitionEnd: this.transitionEnd.bind(this),
            startSlide: this.props.startSlide
        };
    }


    onChange(index) {
        this.props.onChange(index);
    }

    getInstance() {
        return this.reactSwipe;
    }

    transitionEnd(index) {
        this.props.transitionEnd(index);
    }

    render() {
        return (
            <ReactSwipe
                ref={ref => { this.reactSwipe = ref }}
                style={this.props.style}
                swipeOptions={this.swipeOptions}
                className="silk-tabs-swipe-container"
            >
                {
                    this.props.children
                }
            </ReactSwipe>
        );
    }
}

export default TabPanels;
