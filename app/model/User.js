Ext.define('CodingTask.model.User', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'age', type: 'int' },
        { name: 'gender', type: 'string' },
        { name: 'email', type: 'string' }

    ],
    validators: {
      name: {type: 'length', min: 2},
      age: {type: 'range', min: 0},
      gender: {type: 'inclusion', list: ['male', 'female']},
      email: 'email'
    },
    proxy: {
      type: 'ajax',
      url : 'data.json'
    }
});
