# Assignment 4: Provided React-Collection Scenarios

Pick one scenario and copy its goal into the Plan Before Building section of your submission template.

All four are fictional practice situations, not real clients, so there is nothing to research and no one to interview. Every scenario uses the same requirements and rubric. You may change names, wording, and colors, but keep every required item from the assignment. Optional extra features do not replace required work.

**Suggested components.**

Use at least five purposeful components besides `App`. Possible jobs are Header, CollectionControls, ItemForm, ItemList, ItemCard, and StatusMessage. These are starting ideas, not required names or finished code.

Render repeated ItemCards with different props and stable keys, and pass an action callback, such as `onRemove`, to the component that reports it. Name the main state owner and record each component's props, events, and state in your component map.

Every record has an `id`, `title`, `creator`, `category`, `minutes`, and `description`. The records are fictional starting content; the items users add and the state changes are yours to build. `data/empty.json`, `data/incomplete.json`, and `data/boundary-records.json` help you check unusual data.

**Begin and check.**

1. Choose your scenario and copy its goal into your plan.
2. Sketch five or more component jobs and circle the main state owner.
3. Load the starting records into your collection and show a clear empty state when none remain.
4. Build the two-field controlled form with useful validation.
5. Check the initial, valid, invalid, collection update, filter or sort, empty, and keyboard cases.
6. Write at least two meaningful automated tests and record what you actually saw.
7. Explain the component boundary you improved after the first working version.

## Reading List (Recommended)

- Who uses it: Alex, a reader organizing fictional practice books.
- Goal: Add a book to a collection, update its status, and find matching entries.
- Supplied starting content: [Books](data/books.json), in `data/books.json`.
- Two suggested controlled fields: title and creator; require meaningful nonempty text.
- Meaningful actions: add, remove, or toggle a reading status; filter the collection.

## Study-Session Planner

- Who uses it: Casey, a student arranging practice sessions.
- Goal: Add a session and compare it with the planned collection.
- Supplied starting content: [Activities](data/events.json), in `data/events.json`; use the Study records as examples.
- Two suggested controlled fields: session title and duration in minutes; reject missing text and an invalid duration.
- Meaningful actions: add or remove a session, and filter or sort the collection.

## Hobby Collection

- Who uses it: Ren, a collector organizing fictional games.
- Goal: Add a collection item and find items in a selected category.
- Supplied starting content: [Games](data/games.json), in `data/games.json`.
- Two suggested controlled fields: title and category; require meaningful values.
- Meaningful actions: add or remove an item, toggle a favorite, or filter or sort.

## Practice-Resource List

- Who uses it: Jordan, a fictional peer helper collecting short practice resources.
- Goal: Add a resource, update the collection, and find matching entries.
- Supplied starting content: [Resources](data/resources.json), in `data/resources.json`.
- Two suggested controlled fields: title and category; require meaningful nonempty values.
- Meaningful actions: add or remove a resource, toggle a practice status, or filter or sort the collection.
