import { RichArray, toRichArray } from './richArray'

describe('Rich Array Module', () => {
  describe('.toRichArray', () => {
    const plainArray = [1, 2, 3]
    it('should return a instance of a RichArray', () => {
      expect(toRichArray(plainArray)).toBeInstanceOf(RichArray)
    })
  })
  describe('RichArray Class', () => {
    describe('.take', () => {
      let takeArray: RichArray
      beforeEach(() => {
        takeArray = new RichArray(1, 2, 3, 4, 5, 6)
      })

      it('should take only specified number of elements of the array', () => {
        const takenElements = takeArray.take(3)
        expect(takenElements).toEqual([1, 2, 3])
      })

      it('should return a instance of RichArray', () => {
        const takenElements = takeArray.take(3)
        expect(takenElements).toBeInstanceOf(RichArray)
      })
    })
    describe('.chunks', () => {
      let chunksArray: RichArray
      beforeEach(() => {
        chunksArray = new RichArray(1, 2, 3, 4, 5, 6)
      })

      it('should take only specified number of elements of the array', () => {
        const chunkedElements = chunksArray.chunks(2)
        expect(chunkedElements.length).toBe(3)
        expect(chunkedElements).toEqual([
          [1, 2],
          [3, 4],
          [5, 6],
        ])
      })

      it('should return a instance of RichArray', () => {
        const chunkedElements = chunksArray.chunks(3)
        expect(chunkedElements).toBeInstanceOf(RichArray)
      })

      it('should return every chunked item as instance of RichArray', () => {
        const chunkedElements = chunksArray.chunks(2)
        expect(chunkedElements[0]).toBeInstanceOf(RichArray)
        expect(chunkedElements[1]).toBeInstanceOf(RichArray)
        expect(chunkedElements[2]).toBeInstanceOf(RichArray)
      })
    })
    describe('.reversed', () => {
      let reversedArray: RichArray
      beforeEach(() => {
        reversedArray = new RichArray(1, 2, 3, 4, 5, 6)
      })
      it('should return the itens of the array in the reverse order', () => {
        const reversedElements = reversedArray.reversed()
        expect(reversedElements).toEqual([6, 5, 4, 3, 2, 1])
      })

      it('should return a instance of RichArray', () => {
        const reversedElements = reversedArray.reversed()
        expect(reversedElements).toBeInstanceOf(RichArray)
      })
    })
    describe('.clear', () => {
      let clearArray: RichArray
      beforeEach(() => {
        clearArray = new RichArray(1, 2, 3, 4, 5, 6)
      })
      it('should by empty when cleared and not have length 0', () => {
        clearArray.clear()
        expect(clearArray.length).toBe(0)
      })
    })
  })
})
