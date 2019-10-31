import { observable } from 'mobx';

export const Model = observable({

    Data:{

        Facts:[],
        Age:0
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
    let arr = [];

    this.Data.Facts.forEach(element => {
        if (element.Age === this.Data.Age)
        {
            arr.push(element);
        }
    })

    return arr;
}

Model.ShowData = function() {
    console.log(this.Data);
}

Model.SetAge = function (val) {

    this.Data.Age = val;
}