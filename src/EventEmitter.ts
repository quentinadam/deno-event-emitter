export default class EventEmitter<T extends Array<unknown>> {
  #listeners = new Set<(...value: T) => void>();

  emit(...value: T): void {
    for (const listener of this.#listeners) {
      listener(...value);
    }
  }

  addListener(listener: (...value: T) => void): (...value: T) => void {
    this.#listeners.add(listener);
    return listener;
  }

  removeListener(listener: (...value: T) => void): void {
    this.#listeners.delete(listener);
  }
}
