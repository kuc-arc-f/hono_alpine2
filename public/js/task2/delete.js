console.log("#tasks.delet.id=", itemId);
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
    deleteItem : async function()
    {
        try{
            let idValue = "";
            const item = {
                api_key: "",
                id: Number(itemId),
            }
console.log(item);
            const body = JSON.stringify(item);		
            const res = await fetch("/api/tasks/delete", {
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
                throw new Error("Error, json.ret <> OK");
            }
            location.href = '/tasks';
        } catch (e) {
            console.error("Error, delete");
            console.error(e);
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
    }
};
