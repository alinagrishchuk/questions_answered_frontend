### What

Simple app for creating questions and corresponding answers

### How

1. I have added `tailwindcss` to speed up development by the usage of tailwind.
   While it seems to be working fine for now, I may need to reconsider this decision in the future.
   This is because it has brought about `42 vulnerabilities (2 low, 40 high)`
2. I have created:
   - a page to display questions list and create question form
   - a new page to display question details. This is a simpler option compared to manipulating the question list to show newly created questions.
3. I made the decision to skip pagination and load the entire collection of data in order to speed up the implementation process.
4. In order to test the controllers, I needed to stub the `store`.
   Although it doesn't seem like the most ideal solution, it was the best option available, since I don't currently have tools like `mirage`.
   Nonetheless, it seems like an acceptable workaround.

### Quick Start

- `git clone git@github.com:alinagrishchuk/questions_answered_frontend.git`
- `cd questions-answered-frontend`
- `npm install`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200/questions](http://localhost:4200/questions).

#### Linting

- `npm run lint`
- `npm run lint:fix`

### Running Tests

- `ember test`
- `ember test --server`

### Anything else
