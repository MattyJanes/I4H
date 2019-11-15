import React, { Component } from 'react';

export class FactCategories extends Component {

    CategoryClick = (category) => {

        this.props.history.push('/facts-' + category)
    }

    render() {

        const categories = this.props.model.GetCategories();

        return (

            <div>
                <ol>
                    {categories.map((value, key) =>
                        <div className='categoryWindow' key={key} onClick={(value) => this.CategoryClick(value)}>{value}</div>)}
                </ol>
            </div>
        )
    }
}