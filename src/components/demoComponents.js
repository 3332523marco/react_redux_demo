import React, { Component, PropTypes } from 'react'

class demoComponents extends Component {

    //在React组件渲染以后将被React调用的方法
    componentDidMount () {

    }

    render() {
        //从组件的props属性中导入四个方法和一个变量
        const { addPrice, counter} = this.props;
        //渲染组件，包括一个数字，四个按钮
        return (
            <div>
                {counter.map((counter,index) =>
                    <div>
                        title: {counter.title}
                        {' '}
                        price: {counter.price}
                        {' '}
                        <button
                            key={counter.id}
                            onClick={() => addPrice(index)}>
                            button
                        </button>
                    </div>
                )}
            </div>
        )
    }
}
//限制组件的props安全
demoComponents.propTypes = {
    //addPrice必须为fucntion,且必须存在
    addPrice: PropTypes.func.isRequired,

    //counter必须为数组，且必须存在
    counter: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })).isRequired,
};

export default demoComponents
