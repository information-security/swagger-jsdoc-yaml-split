import { Router } from "express";

const apiRouter = Router();

/**
* @swagger
* /token:
*   post:
*     description: Generate API token
*     tags:
*     - Users
*     requestBody:
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Credentials'
*     responses:
*       200:
*         description: Success
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/TokenResponse'
*/
apiRouter.post('/token', (req, res) => {
    res.status(200).json({
        code: 0,
        accessToken: '685hgH556HHJG55636JHGhdgd6764ey6VDo656gD9989bgyggd'
    });
});

/**
* @swagger
* /error:
*   get:
*     description: Generate API token
*     tags:
*     - Errors
*     responses:
*       404:
*         description: Error
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/ApiResponseError'
*/
apiRouter.get('/error', (req, res) => {
    res.status(404).json({
        code: 1000,
        error: 'Dummy not found error message',
        params: { ERR_TYPE: 'ERROR_DUMMY' }
    });
});

export default apiRouter;