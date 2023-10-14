let items = [];
let message = "";
//
const PageIndex = {
    /**
     *
     * @param
     *
     * @return
     */ 
    get_list : async function()
    {
        try{
            let ret = [];
            const item = {
                api_key: "",
            }
            const body = JSON.stringify(item);		
            const res = await fetch("/api/tasks/get_list", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},      
                body: body
            });
            const json = await res.json()
            //console.log(json);   
            if (res.status !== 200) {
                console.error("error, status <> 200");
                throw new Error(await res.text());
            }
            if (json.ret !==  "OK") {
                console.error("Error, json.ret <> OK");
                throw new Error("Error, json.ret <> OK");
            }
            ret = json.data;
            return ret;
        } catch (e) {
            console.error("Error, get_list");
            console.error(e);
            throw new Error('Error , get_list');
        }
    },
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
                    location.reload();
                }
            }); 
        } catch (e) {
            console.error(e);
        }    
    },      
}
//

//
function App() {
    const [updatetime, setUpdatetime] = React.useState("");
    React.useEffect(() => {
        (async () => {
            console.log("#start");
            items = await PageIndex.get_list();
console.log(items);
            updateTimestap();
            PageIndex.startProc();
        })()
    }, []);
    //
    const updateTimestap = function() {
        const dt = new Date().toString();
        setUpdatetime(dt);
    }
    //
    return (
    <div className="App">
        <h1 className="text-4xl font-bold">Task2</h1>
        <hr className="my-2" />
            <label>Title:</label>
            <input type="text" id="title" 
            className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"/>
        <hr className="mt-2 mb-1" />
        <button id="save" className="btn-purple ms-2 my-2">Save</button>
        <hr className="my-1" />
        <p className="d-none">{updatetime}</p>
        <ul>
          {items.map((item) => {
            return (
            <li key={item.id}>
              <a href={`/tasks/${item.id}`}><h3 className="text-3xl font-bold">{item.title}</h3></a>
              <p>id={item.id}</p>
              <hr />
            </li>
            );
          })}
        </ul>   
        <hr />        
        {/* CSS */}
        <style>
        {`
        .d-none{ display: none; }
        `}
        </style>        
    </div>
    );
};
//
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);
