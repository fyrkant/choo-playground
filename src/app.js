const choo = require('choo')
const sf = require('sheetify')

sf('tachyons')

const app = choo()

app.model({
  state: { title: 'Set the title' },
  reducers: {
    update: (action, state) => ({ title: action.value })
  }
})

const mainView = (params, state, send) => choo.view`
  <main>
    <section class="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
      <h1 class="center">${state.title}</h1>
      <input  type="text"
        oninput=${(e) =>
          send('update', { value: e.target.value })
        }
        onkeyup=${(e) =>
          e.keyCode === 13 &&
            send('update', { value: e.target.value.toUpperCase() })}>
    </section>
  </main>
`

app.router((route) => [
  route('/', mainView)
])

const tree = app.start()
document.body.appendChild(tree)
