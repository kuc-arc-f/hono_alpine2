console.log("#alpine3.js");
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
console.log(data);
        this.items = data.data;
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
