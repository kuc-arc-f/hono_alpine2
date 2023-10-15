console.log("#data1");
//
const data1 = {
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
            let contentValue = "";
            const title = document.querySelector("#title");
            if(title) {
                titleValue = title.value;
            }
            const content = document.querySelector("#content");
            if(content) {
                contentValue = content.value;
            }
            const item = {
                title: titleValue,
                content: contentValue,
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
    /* */
    test1(){
console.log("#test1");
        this.data2.setItem({id: 100, title: "title_100"});
    },
    /* */
    test2(num){
console.log("#test1", num);
        const row = this.data1.items[num];
console.log(row);
        this.data2.setItem(row);
    },
    /* */
    init() {
console.log("data1.init", new Date().toString() );
        this.get_list();
    },
}
