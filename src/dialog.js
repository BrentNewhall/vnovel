const dialog = [
    { title: "where", speaker: "You", line: "...Where am I?" },
    { speaker: "?", line: "Finally awake, are you?" },
    { speaker: "You", line: "...Who are you? What's going on?" },
    { speaker: "?", line: "It doesn't matter who I am. What matter is that you're awake...", char1: 'mitsuki' },
    { speaker: "?", line: "...and that now the story can begin.", char1: 'mitsuki' },
    { speaker: "You", line: "..." },
    { speaker: "?", line: "Stop teasing him, Mitsuki.", char1: 'kasumi' },
    { speaker: "Mitsuki", line: "...Heh.", char1: 'mitsuki', choices: [ { title: '"This is crazy!"', result: 'crazy' }, { title: '"Where am I?"', result: 'where' }, { title: '"Well hello."', result: 'hello' } ] },
    { title: "crazy", speaker: "Mitsuki", line: "It's not crazy.", char1: 'mitsuki', next: 'start' },
    { title: "hello", speaker: "Mitsuki", line: "...", char1: 'mitsuki' },
    { title: "start", speaker: "Mitsuki", line: "Whatever. Let's begin.", char1: 'mitsuki' },
    { speaker: "You", line: "Woah!", bg: 'kitchen-day' },
]

export default dialog;