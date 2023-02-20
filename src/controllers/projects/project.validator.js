const Joi = require('joi');

export const tasks = {
    body: {
        project_id: Joi.number()
            .required(),
    },
};

export const tasksLogs = {
    body: {
        task_id: Joi.number()
            .required(),
    },
};

export const addLog = {
    body: {
        user_id: Joi.number()
            .required(),
        task_id: Joi.number()
            .required(),
        project_id: Joi.number()
            .required(),
        date: Joi.required(),
        time: Joi.string().required(),
        status: Joi.string().required()
    },
}



