console.log("#tasks.index.js");
//
const data = {
    /**
     *
     * @param
     *
     * @return
     */    
    items: [],
    /**
     *
     * @param
     *
     * @return
     */    
    get_list: async function() {
//console.log(d.body);
        this.items = [];
        const res = await fetch("/api/alpine3");
        const data = await res.json();
        const tasks = this.convertUrl(data.data);
//console.log(tasks);
        this.items = tasks;
    },
    /**
     *
     * @param
     *
     * @return
     */    
    convertUrl: function(items){
        const ret = [];
        items.forEach(function(item){
            item.url = `/tasks/${item.id}`;
//console.log(item);
            ret.push(item);
        });
        return ret
    },    
    /**
     *
     * @param
     *
     * @return
     */
    init() {
console.log("init", new Date().toString() );
        this.get_list();
    }
};
