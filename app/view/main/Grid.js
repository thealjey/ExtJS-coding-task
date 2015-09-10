
Ext.define("CodingTask.view.main.Grid",{
  extend: "Ext.grid.Panel",
  alias: ['widget.taskgrid'],
  requires: [
    "CodingTask.view.main.GridController",
    "CodingTask.view.main.GridModel",
    'CodingTask.model.User'
  ],
  controller: "main-grid",
  viewModel: {
    type: "main-grid"
  },
  bind: {title: '{name}'},
  tbar: [{
    xtype: 'button',
    text: 'Add row',
    handler: function () {
      this.up('grid').getStore().add({});
    }
  }, {
    xtype: 'button',
    text: 'Remove row',
    handler: function () {
      Ext.Msg.confirm('Confirm', 'Are you sure?', function (btn) {
        if ('yes' === btn) {
          var grid = this.up('grid');
          grid.getStore().remove(grid.getSelection());
        }
      }, this);
    }
  }, {
    xtype: 'button',
    text: 'Save',
    handler: function () {
      this.up('grid').getStore().commitChanges();
    }
  }],
  store: {
    store: 'store',
    model: 'CodingTask.model.User',
    autoLoad: true
  },
  columns: {
    defaults: {flex: 1},
    items: [
      {text: 'Name', dataIndex: 'name', editor: {
        xtype: 'textfield',
        allowBlank: false,
        minLength: 2
      }},
      {text: 'Age', xtype: 'numbercolumn', format: '0', dataIndex: 'age', editor: {
        xtype: 'numberfield',
        allowBlank: false,
        minValue: 0
      }},
      {text: 'Gender', dataIndex: 'gender', editor: {
        xtype: 'combo',
        allowBlank: false,
        editable: false,
        store: ['male', 'female']
      }},
      {text: 'Email', dataIndex: 'email', editor: {
        xtype: 'textfield',
        allowBlank: false,
        vtype: 'email'
      }}
    ]
  },
  selModel: 'rowmodel',
  plugins: {ptype: 'rowediting'}
});
