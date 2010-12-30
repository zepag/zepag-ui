/**
 * @author zepag
 */
Ext.namespace('Zepag');
Ext.namespace('Zepag.records');
Ext.namespace('Zepag.stores');
Ext.namespace('Zepag.readers');
Ext.namespace('Zepag.ui');

// Define a base for Readers, with default registered events for examples.
Zepag.readers.BasicReader = Ext.extend(Ext.data.JsonReader, {});

// Define a base for Stores, with default registered events.
Zepag.stores.BasicStore = Ext.extend(Ext.data.Store, {
    constructor: function(config){
        Zepag.stores.BasicStore.superclass.constructor.call(this, config);
        this.on({
            'beforeload': function(){
                var loadingElement = Ext.get('zepag-store-loading');
                if (loadingElement) {
                    loadingElement.show();
                }
            },
            'load': function(store, records, options){
                //store is loaded, now you can work with it's records, etc.
                if (console) {
                    console.info('Store load, arguments:', arguments);
                    console.info('Store count = ', store.getCount());
                }
                var loadingElement = Ext.get('zepag-store-loading');
                if (loadingElement) {
                    loadingElement.hide();
                }
            },
            'loadexception': function(obj, options, response, e){
                if (console) {
                    console.info('store loadexception, arguments:', arguments);
                    console.info('error = ', e);
                }
                var loadingElement = Ext.get('zepag-store-loading');
                if (loadingElement) {
                    loadingElement.hide();
                }
                Ext.MessageBox.alert("Store loading issue", "A problem occured while loading data" + e);
            }
        });
    }
});
Zepag.ui.BorderViewport = Ext.extend(Ext.Viewport, {
    constructor: function(config){
        config.layout = 'border';
        Zepag.ui.BorderViewport.superclass.constructor.call(this, config);
    }
});
Zepag.ui.Panel = Ext.extend(Ext.Panel, {
    constructor: function(config){
        config.split = config.split || true;
        Zepag.ui.Panel.superclass.constructor.call(this, config);
    }
});
Ext.reg('zepag.panel', Zepag.ui.Panel);
