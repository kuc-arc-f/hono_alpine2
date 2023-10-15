//
/* data2 */
const data2 = {
    text1: "text_1desu",
    /* */
    items: [
        { id: 1, title: '１番目のタイトル', content: '１番目のコンテンツ', url: 'https://example.com' },
        { id: 2, title: '２番目のタイトル', content: '２番目のコンテンツ' },
        { id: 3, title: '３番目のタイトル', content: '３番目のコンテンツ'},
    ],
    /* */
    item:{
        id: 1, title: "title_1",
    },
    /* setItem */
    setItem(obj){
console.log("#data2.setItem");
console.log(obj);
        this.item = obj;
console.log("#data2.item");
console.log(this.item);
    },
    /* */
    init() {
console.log("data2.init", new Date().toString() );
    }
}
