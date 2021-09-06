require('../db/mongoose');
const Task = require('../models/task');

const _id = '61345832e73a7a162d2825bb';

Task.findByIdAndRemove(_id).then(()=>{
    return Task.countDocuments({completed:false});
}).then((tasks)=>{
    console.log(tasks);
}).catch((err)=>{
    console.log(err);
})