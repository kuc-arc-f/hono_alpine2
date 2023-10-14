//
const data = {
    /*  */
    items: [
        { id: 1, title: 'みかん', content: '' },
        { id: 2, title: 'すいか', content: '' },
        { id: 3, title: 'りんご', content: ''},
    ],
    get_list: async function() {
//console.log(d.body);
        this.items = [];
        const res = await fetch("/api/alpine2");
        const data = await res.json();
console.log(data.data);
        this.items = data.data;
    },
    /* init */
    init() {
console.log("init", new Date().toString() );
    }
};
