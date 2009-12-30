/**
 * @author zepag
 */
Ext.namespace('Zepag');
Ext.namespace('Zepag.records');
Ext.namespace('Zepag.stores');
Ext.namespace('Zepag.readers');
Zepag.records.LinkRecord = Ext.data.Record.create([{
    name: 'url'
}, {
    name: 'label'
}, {
    name: 'icon'
}]);

Zepag.readers.LinksReader = Ext.extend(Zepag.readers.BasicReader, {
    constructor: function(){
        var config = {
            root: 'links'
        };
        var record = Zepag.records.LinkRecord;
        Zepag.readers.LinksReader.superclass.constructor.call(this, config, record);
    }
});
Zepag.stores.LinksStore = Ext.extend(Zepag.stores.BasicStore, {
    constructor: function(){
        var config = {
            reader: new Zepag.readers.LinksReader(),
            url: 'data/connections.json'
        };
        Zepag.stores.LinksStore.superclass.constructor.call(this, config);
    }
});
