
const tasks=[];

exports.addTask = (req, res)=>{
    const newTask = req.body;
    tasks.push(newTask);
    return res.status(200).send(newTask);
}

exports.getAllTasks = (req, res)=>{
    return res.status(200).send(tasks);
}
