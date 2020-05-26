import { Router } from 'express'
import CieloController from './controllers/CieloController'

const routes = Router()

routes.get('/cielo', CieloController.index)

export default routes
