//
const data = {
    /*  */
    items: [
        { id: 1, title: '１番目のタイトル', content: '１番目のコンテンツ', url: 'https://example.com' },
        { id: 2, title: '２番目のタイトル', content: '２番目のコンテンツ' },
        { id: 3, title: '３番目のタイトル', content: '３番目のコンテンツ'},
        { id: 4, title: '4番目のタイトル', content: '３番目のコンテンツ'},
    ],
    get_list: async function() {
//        const d =  await fetch("/api/alpine2");
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
