
const tasks=[];

exports.addTask = (req, res)=>{
    const newTask = req.body;
    tasks.push({id: newTask.id, title: newTask.title, dateAdded: new Date()});
    return res.status(200).send("Task added");
}

exports.getAllTasks = (req, res)=>{
    return res.status(200).send(tasks);
}
