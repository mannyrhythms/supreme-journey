const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Cook food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
        })

        document.querySelector('#todos').innerHTML = ''
        
        const summary = document.createElement('h2')
        summary.textContent =`You have ${incompleteTodos.length} todos left`
        document.querySelector('#todos').appendChild(summary)
        
        filteredTodos.forEach(function (todo) {
            const p = document.createElement('p')
            p.textContent = todo.text
            document.querySelector('#todos').appendChild(p)
        })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

//create a form with a single input for todo text
//setup a submit handler and cancel the default action
//add a new item to the todo array with that text data (completed value of false)
//Rerender the application
//clear the input field value

document.querySelector("#new-todo").addEventListener("submit", function (e) {
    e.preventDefault()
    todos.push ({
        text: e.target.elements.text.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector("#hide-completed").addEventListener("change", function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})