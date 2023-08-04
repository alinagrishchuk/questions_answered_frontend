### What

Simple app for creating questions and corresponding answers

Related to https://github.com/alinagrishchuk/questions_answered_api

### How

1. I have added `tailwindcss` to speed up development by the usage of tailwind.
   While it's working fine for now, it's worth considering this solution in the future.
   This is because it has brought about `42 vulnerabilities (2 low, 40 high)`
2. I have created:
   - a page to display the questions list and the create question form.
   - a page to display question details with related answers.
     - This seems as a simpler option compared to single page approach. 
     - To show newly created questions, the application redirects a user to the details page. This is not perfect, but it simplifies development by eliminating the need to manipulate the question list to show created items on top of the list.
3. I made the decision to skip pagination and load the entire collection of data in order to speed up the implementation process.
4. No validations have been implemented on the frontend side.
5. In order to test the controllers, I needed to stub the `store`.
   Although it doesn't seem like the most ideal solution, it was the best option available, since I don't currently have tools like `mirage`.
   Nonetheless, it seems like an acceptable workaround.
6. I have not used the namespace for the API endpoint because it caused issues with `self` links generation on the API side.

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

The solutions consist of simple `Question` has many `Answers` model relationships.
I also added validations to the attributes, but on the API side only.

Test coverage is not ideal:
- on the backend side, not all the generated 'jsonapi-resources' are covered
- on the frontend side, the `acceptance` tests are not implemented at all. Also, not all the functionality is covered.

I decided to use the simplest way possible to implement the Question-answer app in order to meet the development timeline.
But that can be easily improved during the next phase of development.
