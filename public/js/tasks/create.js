const TestCreate = {
    /**
     *
     * @param
     *
     * @return
     */  
    addItem : async function()
    {
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
console.log("title=", titleValue);
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
            ret = true;
            return ret;
        } catch (e) {
            console.error("Error, addItem");
            console.error(e);
            throw new Error('Error , addItem');
        }
    },         
    /**
     * startProc
     * @param
     *
     * @return
     */   
    startProc :async function ()
    {
        try{
            console.log("#startProc");
            //btn
            const button = document.querySelector('#save');
            button.addEventListener('click', async () => {
                const result = await this.addItem();
console.log("result=", result);
                if(result === true) {
                    window.location.href = '/tasks';
                }
            }); 
        } catch (e) {
            console.error(e);
        }    
    },

}
//
TestCreate.startProc();
