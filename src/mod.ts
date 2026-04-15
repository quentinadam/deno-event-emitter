/**
 * A typed event emitter that allows registering listeners and emitting events.
 *
 * @typeParam T The tuple type of arguments passed to listeners when an event is emitted.
 *
 * @example
 * ```ts
 * import { EventEmitter } from "@quentinadam/event-emitter";
 *
 * const emitter = new EventEmitter<[string, number]>();
 *
 * const listener = emitter.addListener((name, value) => {
 *   console.log(`${name}: ${value}`);
 * });
 *
 * emitter.emit("count", 42); // logs "count: 42"
 *
 * emitter.removeListener(listener);
 * ```
 */
export class EventEmitter<T extends Array<unknown>> {
  #listeners = new Set<(...value: T) => void>();

  /**
   * Emits an event to all registered listeners.
   *
   * @param value The arguments to pass to each listener.
   */
  emit(...value: T): void {
    for (const listener of this.#listeners) {
      listener(...value);
    }
  }

  /**
   * Adds a listener to be called when an event is emitted.
   *
   * @param listener The listener function to add.
   * @returns The listener function, for convenience when removing later.
   */
  addListener(listener: (...value: T) => void): (...value: T) => void {
    this.#listeners.add(listener);
    return listener;
  }

  /**
   * Removes a previously added listener.
   *
   * @param listener The listener function to remove.
   */
  removeListener(listener: (...value: T) => void): void {
    this.#listeners.delete(listener);
  }
}
