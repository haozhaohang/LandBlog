import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import { fetchList } from 'Actions/user';
import { updateQuery } from 'Actions/router';
import { equalByProps } from 'Assets/js/util';

class User extends Component {
    constructor(props) {
        super(props);

        this.columns = [
            {
                title: 'ID',
                dataIndex: '_id',
            },
            {
                title: '账号',
                dataIndex: 'username',
            },
            {
                title: '创建时间',
                dataIndex: 'password',
            },
            {
                title: '是否是管理员',
                dataIndex: 'isAdmin',
                render: (val) => {
                    const res = val ? '是' : '否';

                    return res;
                },
            },
        ];

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const { pageIndex, fetchList } = this.props;
        const params = {
            pageIndex,
        };

        fetchList(params);
    }

    componentDidUpdate(preProps) {
        const { pageIndex, fetchList } = this.props;
        const fields = ['pageIndex'];
        const params = {
            pageIndex,
        };

        if (equalByProps(preProps, this.props, fields)) {
            fetchList(params);
        }
    }

    handleChange(val) {
        const { onchange } = this.props;
        const { current: pageIndex } = val;
        const params = {
            pageIndex,
        };

        onchange(params);
    }

    render() {
        const { list, loading, total, pageIndex } = this.props;
        const pagination = {
            total,
            current: pageIndex,
            pageSize: 2,
        };

        return (
            <div>
                <div>
                    <Table
                        columns={this.columns}
                        dataSource={list}
                        loading={loading}
                        rowKey="_id"
                        pagination={pagination}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ userList }, { location }) => {
    const { list, total, loading } = userList;
    const { pageIndex = 1 } = location.query;

    return {
        list,
        total,
        loading,
        pageIndex: Number(pageIndex),
    };
};

const mapDispatchToProps = dispatch => ({
    fetchList: opts => dispatch(fetchList(opts)),
    onchange: opts => dispatch(updateQuery(opts)),
});

User.propTypes = {
    list: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    pageIndex: PropTypes.number.isRequired,
    fetchList: PropTypes.func.isRequired,
    onchange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);