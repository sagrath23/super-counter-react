import { createAction, createActions} from 'redux-actions'

const simpleAction = createAction('Simple Action with actionCreator')
const { actionFromActionsCreator } = createActions({
  SIMPLE_ACTION_FROM_CREATE_ACTIONS: () => ({})
})

console.log(simpleAction(), 'simpleAction without argument')
console.log(simpleAction(124), 'simpleAction with argument')
console.log(simpleAction({ foo: 'var' }), 'simpleAction with object as argument')

console.log(actionFromActionsCreator(), 'actionFromActionsCreator without argument')
console.log(actionFromActionsCreator(124), 'actionFromActionsCreator with argument')
console.log(actionFromActionsCreator({ foo: 'var' }), 'actionFromActionsCreator with object as argument')

