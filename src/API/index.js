const bby = require('bestbuy')('Jt6aw0BPCj6dNJ7Ob3v8xGAs');
const Key = 'Jt6aw0BPCj6dNJ7Ob3v8xGAs';

const getCategory = () => {
    bby.categories('name=Automatic Watch').then(function(data){
        console.log(data);
    });
}

export default getCategory