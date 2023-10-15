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
    addItem: async function() {
console.log("#addItem");
        try{
            let ret = false;
            let titleValue = "";
            const title = document.querySelector("#title");
            if(title) {
                titleValue = title.value;
            }
            const item = {
                title: titleValue,
                content: "",
            }
console.log(item);
//return;
            const body = JSON.stringify(item);		
            const res = await fetch("/api/tasks/create", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},      
                body: body
            });
            const json = await res.json()
console.log(json);   
            if (res.status !== 200) {
                console.error("error, status <> 200");
                throw new Error(await res.text());
            }
            if (json.ret !==  "OK") {
                console.error("Error, json.ret <> OK");
                return ret;
            }
            location.reload();
        } catch (e) {
            console.error("Error, addItem");
            console.error(e);
            throw new Error('Error , addItem');
        }
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
