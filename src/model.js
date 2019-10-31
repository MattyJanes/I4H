import { observable } from 'mobx';

export const Model = observable({

    Data:{

        Facts:[]
    }
});

Model.GetData = async function()  {

    //This is used for gathering facts. Will be refined later to only gather facts for appropriate age category
    let data = require('./sample-data.json');

    data.Facts.forEach(element => {
        let facts = this.Data.Facts.concat(element);
        this.Data.Facts = facts;
    });
}

Model.GetFacts = function() {
    return this.Data.Facts;
}

Model.ShowData = function() {
    console.log(this.Data);
}