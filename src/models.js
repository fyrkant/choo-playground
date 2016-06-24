module.exports = {
  state: {
    editing: null,
    posts: [
      {
        id: 1,
        title: 'Lorem ipsum dolor.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, reprehenderit, dignissimos. Officiis reiciendis accusantium sed enim vitae commodi aliquam ducimus maxime laborum quisquam inventore et, accusamus in, incidunt debitis facere!',
        created: 1466685370855
      },
      {
        id: 2,
        title: 'Lorem ipsum.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, reprehenderit, dignissimos. Officiis reiciendis accusantium sed enim vitae commodi aliquam ducimus maxime laborum quisquam inventore et, accusamus in, incidunt debitis facere!',
        created: 1466685370855
      },
      {
        id: 3,
        title: 'Text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, reprehenderit, dignissimos. Officiis reiciendis accusantium sed enim vitae commodi aliquam ducimus maxime laborum quisquam inventore et, accusamus in, incidunt debitis facere!',
        created: 1466685370855
      },
      {
        id: 4,
        title: 'Title',
        text: `Lorem ipsum dolor sit *amet*, consectetur adipisicing elit.\n\n Sit, reprehenderit, dignissimos. Officiis reiciendis accusantium sed enim vitae commodi aliquam ducimus maxime laborum quisquam inventore et, accusamus in, incidunt debitis facere!`,
        created: 1466685370855
      }
    ]
  },
  reducers: {
    edit: (action, state) => ({ editing: action.payload }),
    cancelEdit: (action, state) => ({ editing: null })
  }
}
