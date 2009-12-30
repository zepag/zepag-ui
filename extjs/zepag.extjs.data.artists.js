/**
 * @author zepag
 */
Ext.namespace('Zepag');
Ext.namespace('Zepag.records');
Ext.namespace('Zepag.stores');
Ext.namespace('Zepag.readers');
Zepag.records.ArtistRecord = Ext.data.Record.create([{
    name: 'name'
}, {
    name: 'band',
	type:'boolean'
}, {
    name: 'icon'
}]);

Zepag.readers.ArtistsReader = Ext.extend(Zepag.readers.BasicReader, {
    constructor: function(){
        var config = {
            root: 'artists'
        };
        var record = Zepag.records.ArtistRecord;
        Zepag.readers.ArtistsReader.superclass.constructor.call(this, config, record);
    }
});
Zepag.stores.ArtistsStore = Ext.extend(Zepag.stores.BasicStore, {
    constructor: function(){
        var config = {
            reader: new Zepag.readers.ArtistsReader(),
            url: 'data/artists.json'
        };
        Zepag.stores.ArtistStore.superclass.constructor.call(this, config);
    }
});