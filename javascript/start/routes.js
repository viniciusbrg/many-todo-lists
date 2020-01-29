'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/todos', 'TodoController.index')
Route.get('/todos/:id', 'TodoController.show')
Route.post('/todos', 'TodoController.create')
Route.put('/todos/:id', 'TodoController.edit')
Route.delete('/todos/:id', 'TodoController.delete')
