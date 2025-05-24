# @quentinadam/event-emitter

[![JSR][jsr-image]][jsr-url] [![NPM][npm-image]][npm-url] [![CI][ci-image]][ci-url]

A simple class to handle emitting and listening to events.

## Usage

```ts
import EventEmitter from '@quentinadam/event-emitter';

const onUpdate = new EventEmitter<[value: number]>();

//add listener
const listener = onUpdate.addListener((value) => {
  console.log('value updated', value);
});

//emit
onUpdate.emit(17);

//remove listener
onUpdate.removeListener(listener);
```

[ci-image]: https://img.shields.io/github/actions/workflow/status/quentinadam/deno-event-emitter/ci.yml?branch=main&logo=github&style=flat-square
[ci-url]: https://github.com/quentinadam/deno-event-emitter/actions/workflows/ci.yml
[npm-image]: https://img.shields.io/npm/v/@quentinadam/event-emitter.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@quentinadam/event-emitter
[jsr-image]: https://jsr.io/badges/@quentinadam/event-emitter?style=flat-square
[jsr-url]: https://jsr.io/@quentinadam/event-emitter
