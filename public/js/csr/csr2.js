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
            const res = await fetch("/api/csr2/get_list", {
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
}
//
function App() {
    const [updatetime, setUpdatetime] = React.useState("");
    React.useEffect(() => {
        (async () => {
console.log("#csr2.start");
            message = "hoge"; 
            items = await PageIndex.get_list();
            //console.log(items);
            updateTimestap();
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
        <h1 className="text-4xl font-bold">CSR-TEST</h1>
        <hr className="my-2" />
        <a href="/test/test_create">[ Create ]</a>
        <hr className="my-2" />
        <p className="d-none">updatetime:{updatetime}</p>
        <ul>
          {items.map((item) => {
            return (
            <li key={item.id}>
              <a href={`/test/${item.id}`}><h3 className="text-3xl font-bold">{item.title}</h3></a>
              <p>id={item.id}</p>
              <hr />
            </li>
            );
          })}
        </ul>   
        <hr />
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
