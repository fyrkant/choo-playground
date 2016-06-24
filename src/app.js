const choo = require('choo')
const sf = require('sheetify')
const moment = require('moment')
const marked = require('element-markdown')

const model = require('./models')

sf('tachyons')

const app = choo()

app.model(model)

const postLinks = posts => posts.map(post => choo.view`<li><a href="/${post.id}">${post.title}</a></li>`)

const mainView = (params, state, send) => {
  return choo.view`
    <main>
      <section class="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
        <ul>${postLinks(state.posts)}</ul>
      </section>
    </main>
  `
}

const postView = (params, state, send) => {
  const post = state.posts.filter(post => post.id === parseInt(params.post))[0]

  if (post === undefined) {
    return choo.view`<p>aww, geez I couldn't find the darn post... sure you got the right url?</p>`
  } else {
    return choo.view`
    <div>
      <a class="link dim black b f6 f5-ns dib mr3" href="/" title="Home">Home</a>
      <article class="cf ph3 ph5-ns pv5">
        ${state.editing === post.id ? `<p>Editing!!</p>` : `<p>Not editing</p>`}

        <header class="fn fl-ns w-50-ns pr4-ns">
          <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
            ${post.title}
          </h1>
          <time class="f6 ttu tracked gray">
            ${moment(post.created).format('MMMM Do YYYY, hh:mm:ss')}
          </time>
          <div><button onclick=${e => send('edit', { payload: post.id })}>Edit</button></div>
        </header>
        <div class="fn fl-ns w-50-ns">
          <span class="measure lh-copy mt0-ns f5">${marked(post.text)}</span>
        </div>
      </article>
    </div>
    `
  }
}

const errorView = (params, state, send) => choo.view`<p>OH NO</p>`

app.router((route) => [
  route('/', mainView),
  route('/:post', postView),
  route('/notfound', errorView)
])

const tree = app.start()
document.body.appendChild(tree)
