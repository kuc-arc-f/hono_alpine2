const TestCreate = {
    /**
     *
     * @param
     *
     * @return
     */  
    delete : async function()
    {
        try{
            let ret = false;
            let idValue = "";
            const item_id = document.querySelector("#item_id");
            if(item_id) {
                idValue = item_id.value;
            }
            const item = {
                api_key: "",
                id: Number(idValue),
            }
//console.log("title=", titleValue);
            const body = JSON.stringify(item);		
            const res = await fetch("/api/test/delete", {
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
            console.error("Error, delete");
            console.error(e);
            throw new Error('Error , delete');
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
            const button = document.querySelector('#btn_delete');
            button.addEventListener('click', async () => {
//console.log("btn_delete=");
                const result = await this.delete();
console.log("result=", result);
                if(result === true) {
                     window.location.href = '/test/test_index';
                }
                /*
                */
            }); 
        } catch (e) {
            console.error(e);
        }    
    },

}
//
TestCreate.startProc();
