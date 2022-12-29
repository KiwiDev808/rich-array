export class RichArray<T extends unknown = unknown> extends Array<T> {
  constructor(...args: any[]) {
    super(...args)
  }

  private *takeAux(takeSize: number) {
    let it = this[Symbol.iterator]()
    while (takeSize-- > 0) {
      let next = it.next()
      if (next.done) return
      else yield next.value
    }
  }

  private *reversedAux() {
    let n = this.length
    while (n-- > 0) {
      yield this[n]
    }
  }

  chunks(chunkSize: number): RichArray<RichArray<T | unknown>> {
    let it = this[Symbol.iterator]()
    let chunkItem = new RichArray()
    let chunks: RichArray<RichArray<T | unknown>> = new RichArray()
    while (true) {
      let next = it.next()

      if (next.done) {
        if (chunkItem.length) {
          chunks.push(chunkItem)
        }
        break
      }
      chunkItem.push(next.value)
      if (chunkItem.length === chunkSize) {
        chunks.push(chunkItem)
        chunkItem = new RichArray()
      }
    }
    return chunks
  }

  take(takeSize: number): RichArray<T> {
    return new RichArray(...this.takeAux(takeSize))
  }

  reversed(): RichArray<T> {
    return new RichArray(...this.reversedAux())
  }

  clear() {
    this.length = 0
  }
}

export function toRichArray<T extends unknown = unknown>(
  arr: unknown[]
): RichArray<T | unknown> {
  return new RichArray<T>(...arr)
}
