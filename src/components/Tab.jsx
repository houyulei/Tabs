/**
 * @file TabList.jsx
 * @author houyl@jingoal.com
 *
 * Tab组件
 */
import React, {PureComponent, PropTypes} from 'react';

class Tab extends PureComponent {
    static propTypes = {
        onClick: PropTypes.func,
        updateTabWidth: PropTypes.func,
        content: PropTypes.node,
        index: PropTypes.number,
        className: PropTypes.string
    }

    componentDidMount() {
        this.props.updateTabWidth(this.props.index, this.el.offsetWidth)
    }

    render() {
        const {
            index,
            onClick,
            className,
            content
        } = this.props;

        return (
            <div
                onClick={() => onClick(index)}
                ref={ref => { this.el = ref }}
                className={className}
            >
                {content}
            </div>
        )
    }
}

export default Tab;
