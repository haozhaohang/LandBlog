import React, { Component } from 'react';
import * as actions from 'Actions/code';
import { connect } from 'react-redux';

// Component
import Main from './Main';
import Aside from './Aside';

// css
import './index.styl';

class Code extends Component {
    componentDidMount() {
        const { fetchList, pageSize } = this.props;

        fetchList({ pageSize, classify: 'code' });
    }

    render() {
        const { list, total } = this.props;

        return (
            <div className="code-wrapper">
                <div className="code-main">
                    <Main
                        list={list}
                    />
                </div>
                <div className="code-aside">
                    <Aside />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ code }, { location: { query } }) => {

    const { list, total, pageSize } = code;
    return {
        list,
        total,
        pageSize,
    };
};

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(Code);
