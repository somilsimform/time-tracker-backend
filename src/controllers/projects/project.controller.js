import { Project, Task, Log } from '../../models';
import { successResponse, errorResponse, uniqueId } from '../../helpers';
import moment from 'moment'
import { Op } from 'sequelize'

const TIME_DURATION_MAP = {
    week: 'week',
    month: 'month',
    year: 'year'
}
export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.findAll({
            order: [['createdAt', 'DESC']],
            attributes: ['id', 'name']
        });
        return successResponse(req, res, { projects });
    } catch (error) {
        return errorResponse(req, res, error.message);
    }
};

export const getTaskByProject = async (req, res) => {
    try {
        const tasks = await Task.findAll({
            where: { project_id: req.body.project_id },
            include: [{ model: Project, attributes: ['id', 'name',] }]
        })
        return successResponse(req, res, { tasks })
    }
    catch (error) {
        return errorResponse(req, res, error.message);
    }
}

export const getTaskByUser = async (req, res) => {
    try {
        const tasks = await Task.findAll({
            where: { user_id: req.params.id },
            // include: [{ model: Project, attributes: ['id', 'name',] }]
        })
        return successResponse(req, res, { tasks })
    }
    catch (error) {
        return errorResponse(req, res, error.message);
    }
}

export const addTaskLogs = async (req, res) => {
    try {
        const newLog = await Log.create(req.body);
        return successResponse(req, res, newLog);
    } catch (error) {
        return errorResponse(req, res, error.message);
    }
}

export const updateLog = async (req, res) => {
    try {
        const result = await Log.update(
            req.body,
            { where: { id: req.body.id } }
        )
        return successResponse(req, res, { result });
    } catch (err) {
        return errorResponse(req, res, error.message);
    }
}

export const getLogsByProject = async (req, res) => {
    try {
        const logs = await Log.findAll({
            where: { project_id: req.body.project_id, user_id: req.body.user_id },
            include: [{ model: Task, attributes: ['id', 'name',] }]
        })
        return successResponse(req, res, { logs })
    }
    catch (error) {
        console.log(error, "ERROR");
        return errorResponse(req, res, error.message);
    }
}

export const getLogsByTasks = async (req, res) => {
    try {
        const logs = await Log.findAll({
            where: { task_id: req.body.task_id, user_id: req.body.user_id },
            include: [{ model: Task, attributes: ['id', 'name',] }, { model: Project, attributes: ['id', 'name',] }]
        })
        return successResponse(req, res, { logs })
    }
    catch (error) {
        console.log(error, "ERROR");
        return errorResponse(req, res, error.message);
    }
}

export const getLogsByTasksAndProject = async (req, res) => {
    try {
        switch (req.params.unit) {
            case 'M':
                return successResponse(req, res, await getUnitwiseLogsData(req.params.startDate, req.params.endDate, TIME_DURATION_MAP.month, req.params.userId))
            case 'W':
                return successResponse(req, res, await getUnitwiseLogsData(req.params.startDate, req.params.endDate, TIME_DURATION_MAP.week, req.params.userId))
            case 'Y':
                return successResponse(req, res, await getUnitwiseLogsData(req.params.startDate, req.params.endDate, TIME_DURATION_MAP.year, req.params.userId))
            default:
                return errorResponse(req, res, `Invalid Unit Type ${req.params.unit}`, 400)
        }

    } catch (error) {
        return errorResponse(req, res, error.message);
    }
}

const getUnitwiseLogsData = async (fromDate, toDate, timeDurationValue, userId) => {
    let startOfUnitDate = moment(fromDate).startOf(timeDurationValue)
    let endOfUnitDate = moment(toDate).endOf(timeDurationValue)
    let numberOfUnits = endOfUnitDate.diff(startOfUnitDate, `${timeDurationValue}s`) + 1


    let unitwiseLogs = [];
    startOfUnitDate.subtract(1, 'days')
    console.log(`Fetching date-wise Data. From: ${startOfUnitDate} To: ${endOfUnitDate}`);
    for (let unit = 0; unit < numberOfUnits; unit++) {
        const unitObj = { unitNumber: unit + 1, starts: String(startOfUnitDate.add(1, 'days')) }
        console.log(`Unit ${unit + 1}, Starts: ${startOfUnitDate}`)
        const logs = await Log.findAll({
            where: {
                date: {
                    [Op.gte]: startOfUnitDate.format('YYYY-MM-DD'),
                    [Op.lt]: startOfUnitDate.add(1, timeDurationValue).format('YYYY-MM-DD')
                },
                user_id: userId
            },
            order: [['date', 'DESC']],
            include: [{ model: Task, attributes: ['id', 'name',] }, { model: Project, attributes: ['id', 'name',] }]
        })
        console.log(logs, 'LOGS');

        unitwiseLogs.push({ ...unitObj, ends: String(startOfUnitDate.subtract(1, 'days')), logs })
    }

    return { numberOfUnits, unitwiseLogs }
}



