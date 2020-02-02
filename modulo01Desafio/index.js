const express = require('express');

let requestNumber = 0;

const server = express();
server.use(express.json());
server.use((req, res, next) => {
    console.log(`Request number: ${++requestNumber}`);
    next();
});

let projects = [];

function validateProjectIdSent(req, res, next) {
    const { id } = req.params;

    const project = projects.find(project => project.id === id);
    if (!project) {
        return res.status(400).json({ error: 'Project ID does not exists!'});
    }

    return next();
}

function validateProjectPost(req, res, next) {
    const { id, title } = req.body;
    if (!id || id.length < 1) {
        return res.status(400).json({ error: 'ID field is required!' });
    }

    if (!title || title.length < 1) {
        return res.status(400).json({ error: 'TITLE field is required!' });
    }

    return next();
}

server.post('/projects', validateProjectPost, (req, res) => {
    const { id, title } = req.body;
    projects.push({
        id,
        title,
        "tasks" : []
    });

    return res.json(projects);
});

server.get('/projects', (req, res) => {
    return res.json(projects);
});

server.put('/projects/:id', validateProjectIdSent, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const projectIndex = projects.findIndex(project => project.id === id);
    console.log(`ProjectIndex: ${projectIndex}`);

    projects[projectIndex].title = title;

    return res.json(projects);
});

server.delete('/projects/:id', validateProjectIdSent, (req, res) => {
    const { id } = req.params;

    projects = projects.filter(function(project) {
        return project.id !== id.toString();
    });

    return res.send();
});

server.post('/projects/:id/tasks', validateProjectIdSent, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const projectIndex = projects.findIndex(project => project.id === id);
    console.log(`ProjectIndex: ${projectIndex}`);

    projects[projectIndex].tasks.push(title);

    return res.json(projects);
});

server.listen(3000);