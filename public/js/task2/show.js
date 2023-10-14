let taskItem = [];
let message = "";
console.log("id=", TaskItemId);
//
const PageShow = {
    /**
     *
     * @param
     *
     * @return
     */ 
    get : async function()
    {
        try{
            let ret = [];
            const item = {
                api_key: "",
                id: Number(TaskItemId),
            }
            const body = JSON.stringify(item);		
            const res = await fetch("/api/tasks/get", {
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
            console.error("Error, get");
            console.error(e);
            throw new Error('Error , get');
        }
    },  
}
//
function App() {
    const [updatetime, setUpdatetime] = React.useState("");
    React.useEffect(() => {
        (async () => {
            console.log("#start");
            taskItem = await PageShow.get();
console.log(taskItem);
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
        <p className="d-none">{updatetime}</p>
        <h1 className="text-4xl font-bold">{taskItem.title}</h1>
        <p>id: {taskItem.id}, {taskItem.createdAt}</p>
        <hr />
        {/*
        <p>{taskItem.content}</p>
        */}
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
