const router = require('express').Router()
const {create, read, readById, update, destroy } = require("../controllers/task")

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     description: Creates a task and returns the created task object.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the task.
 *                 example: "Test task"
 *               description:
 *                 type: string
 *                 description: The description of the task.
 *                 example: "This is a test task"
 *               status:
 *                 type: boolean
 *                 description: The status of the task.
 *                 example: false
 *     responses:
 *       201:
 *         description: Task successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the operation was successful.
 *                   example: true
 *                 message:
 *                   type: string
 *                   description: Operation message.
 *                   example: The task was successfully created.
 *                 response:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: Unique ID of the task.
 *                       example: 677169076b9bae2187122603
 *                     title:
 *                       type: string
 *                       description: The title of the task.
 *                       example: Test
 *                     description:
 *                       type: string
 *                       description: The description of the task.
 *                       example: This is a test task
 *                     status:
 *                       type: boolean
 *                       description: The status of the task.
 *                       example: false
 *                     __v:
 *                       type: integer
 *                       description: Document version managed by MongoDB (internal use).
 *                       example: 0
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: The timestamp when the task was created.
 *                       example: 2024-12-29T15:21:43.639Z
 *       400:
 *         description: Validation errors occurred.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the operation was successful.
 *                   example: false
 *                 errors:
 *                   type: array
 *                   description: List of validation errors.
 *                   items:
 *                     type: object
 *                     properties:
 *                       type:
 *                         type: string
 *                         description: The type of the error (field, etc.).
 *                         example: field
 *                       msg:
 *                         type: string
 *                         description: Description of the error.
 *                         example: The field 'title' is required.
 *                       path:
 *                         type: string
 *                         description: The field that caused the error.
 *                         example: title
 *                       location:
 *                         type: string
 *                         description: The location of the field in the request.
 *                         example: body
 *       500:
 *         description: Internal server error occurred.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the operation was successful.
 *                   example: false
 *                 message:
 *                   type: string
 *                   description: Operation message.
 *                   example: Error creating the task.
 */


router.post("/", create)

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Retrieve tasks
 *     description: Retrieve tasks based on their status (completed or pending).
 *     parameters:
 *       - in: query
 *         name: status
 *         required: false
 *         schema:
 *           type: string
 *           enum:
 *             - completed
 *             - pending
 *         description: Filter tasks by status. Valid values are 'completed' or 'pending'.
 *     responses:
 *       200:
 *         description: Tasks retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Tasks retrieved successfully.
 *                 response:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "6770012e9175287de4566096"
 *                       title:
 *                         type: string
 *                         example: "Iniciar sprint"
 *                       description:
 *                         type: string
 *                         example: "Se debe iniciar inmediatamente"
 *                       status:
 *                         type: boolean
 *                         example: false
 *                       createdAt:
 *                         type: string
 *                         example: "2024-12-28T13:46:22.126Z"
 *                       __v:
 *                         type: integer
 *                         example: 0
 *               example:
 *                 success: true
 *                 message: "Tasks retrieved successfully."
 *                 response: 
 *                   - _id: "6770012e9175287de4566096"
 *                     title: "Test 1"
 *                     description: "This is  a test task "
 *                     status: false
 *                     createdAt: "2024-12-28T13:46:22.126Z"
 *                     __v: 0
 *                   - _id: "6770012e9175287de4566097"
 *                     title: "Test 2"
 *                     description: "This is  a test task"
 *                     status: false
 *                     createdAt: "2024-12-28T13:46:22.128Z"
 *                     __v: 0
 *                   - _id: "67708f186e33988148f13c1e"
 *                     title: "Test 3"
 *                     description: "This is  a test task"
 *                     status: false
 *                     createdAt: "2024-12-28T23:51:52.296Z"
 *                     __v: 0
 *                   - _id: "6770afe1277ae59f6f7c0902"
 *                     title: "Validator sprint"
 *                     description: "Se debe continuar inmediatamente"
 *                     status: false
 *                     createdAt: "2024-12-29T02:11:45.388Z"
 *                     __v: 0
 *       400:
 *         description: Invalid query parameter or wrong value.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       type:
 *                         type: string
 *                         example: field
 *                       value:
 *                         type: string
 *                         example: pendingh
 *                       msg:
 *                         type: string
 *                         example: Invalid status value. Use 'completed' or 'pending'.
 *                       path:
 *                         type: string
 *                         example: status
 *                       location:
 *                         type: string
 *                         example: query
 *       500:
 *         description: Internal server error while retrieving tasks.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Error retrieving tasks.
 */


router.get("/", read)

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Retrieve a task by its ID
 *     description: Get a task using its unique ID from the database.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task to retrieve
 *         schema:
 *           type: string
 *           example: "67708f186e33988148f13c1e"
 *     responses:
 *       200:
 *         description: Task retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Task retrieved successfully.
 *                 response:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "67708f186e33988148f13c1e"
 *                     title:
 *                       type: string
 *                       example: "Intermedio sprint"
 *                     description:
 *                       type: string
 *                       example: "Se debe continuar inmediatamente"
 *                     status:
 *                       type: boolean
 *                       example: false
 *                     createdAt:
 *                       type: string
 *                       example: "2024-12-28T23:51:52.296Z"
 *                     __v:
 *                       type: integer
 *                       example: 0
 *               example:
 *                 success: true
 *                 message: "Task retrieved successfully."
 *                 response:
 *                   _id: "67708f186e33988148f13c1e"
 *                   title: "Test"
 *                   description: "This is a test task"
 *                   status: false
 *                   createdAt: "2024-12-28T23:51:52.296Z"
 *                   __v: 0
 *       400:
 *         description: Invalid task ID format or missing parameter.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       type:
 *                         type: string
 *                         example: field
 *                       value:
 *                         type: string
 *                         example: "6770b7f50a70c899b510eacdGF"
 *                       msg:
 *                         type: string
 *                         example: "Invalid task ID format."
 *                       path:
 *                         type: string
 *                         example: id
 *                       location:
 *                         type: string
 *                         example: params
 *       404:
 *         description: Task not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Task not found."
 *       500:
 *         description: Internal server error retrieving task.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Error retrieving the task."
 *                
 */


router.get("/:id",  readById)

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Update a task by its ID
 *     description: Update the details of a task by providing the task ID and any fields to be updated (title, description, or status).
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task to update
 *         schema:
 *           type: string
 *           example: "6770afe1277ae59f6f7c0902"
 *       - in: body
 *         name: task
 *         description: The task details to update
 *         required: false
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *               example: "Edit"
 *               description: The title of the task (optional, must be at least 3 characters long)
 *             description:
 *               type: string
 *               example: "This a test edit"
 *               description: A detailed description of the task (optional, must be at least 15 characters long)
 *             status:
 *               type: boolean
 *               example: false
 *               description: Status of the task (optional, boolean)
 *     responses:
 *       200:
 *         description: Task updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Task updated successfully."
 *                 response:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "6770afe1277ae59f6f7c0902"
 *                     title:
 *                       type: string
 *                       example: "Edit"
 *                     description:
 *                       type: string
 *                       example: "This a test edit"
 *                     status:
 *                       type: boolean
 *                       example: false
 *                     createdAt:
 *                       type: string
 *                       example: "2024-12-29T02:11:45.388Z"
 *                     __v:
 *                       type: integer
 *                       example: 0
 *       400:
 *         description: Bad request (validation error).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       type:
 *                         type: string
 *                         example: "field"
 *                       value:
 *                         type: string
 *                         example: "6770b7f50a70c899b510eacbFD"
 *                       msg:
 *                         type: string
 *                         example: "Invalid task ID format."
 *                       path:
 *                         type: string
 *                         example: "id"
 *                       location:
 *                         type: string
 *                         example: "params"
 *       404:
 *         description: Task not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Task not found."
 *       500:
 *         description: Internal server error updating task.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Error updating the task."
 */


router.put("/:id",  update)

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Delete a task by its ID
 *     description: Delete the task specified by the provided task ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task to be deleted
 *         schema:
 *           type: string
 *           example: "6770afe1277ae59f6f7c0902"
 *     responses:
 *       200:
 *         description: Task deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Task deleted successfully."
 *       400:
 *         description: Invalid task ID format (validation error).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       type:
 *                         type: string
 *                         example: "field"
 *                       value:
 *                         type: string
 *                         example: "6770b7f50a70c899b510eacdH"
 *                       msg:
 *                         type: string
 *                         example: "Invalid task ID format."
 *                       path:
 *                         type: string
 *                         example: "id"
 *                       location:
 *                         type: string
 *                         example: "params"
 *       404:
 *         description: Task not found with the provided ID.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Task not found."
 *       500:
 *         description: Internal server error while deleting the task.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Error deleting the task."
 */


router.delete("/:id", destroy)

module.exports = router;