import { Log, Task, Project } from '../../models';
import { successResponse, errorResponse, } from '../../helpers';
import { request } from 'http';

export const getAllLogs = async (req, res) => {
    try {
        const logs = await Log.findAll({
            include: [{ model: Task, attributes: ['name',] }, { model: Project, attributes: ['name',] }]
        });

        return successResponse(req, res, { logs });
    } catch (error) {
        console.log(error, "Error");
        return errorResponse(req, res, error.message);
    }
};

export const updateLogStatus = async (req, res) => {
    try {
        const logs = await Log.update(
            { status: req.body.status },
            { where: { id: req.body.id } }
        )

        return successResponse(req, res, { logs });
    } catch (error) {
        console.log(error, "Error");
        return errorResponse(req, res, error.message);
    }
};

