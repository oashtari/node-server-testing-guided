const db = require('../data/dbConfig')
const Hobbits = require('./hobbitsModel')

describe('hobbits model', () => {
    describe('insert()', () => {
        it('should insert hobbits into the db', async () => {
            await Hobbits.insert({ name: "gunner" });
            await Hobbits.insert({ name: "sam" });

            const addedHobbits = await db('hobbits');
            expect(addedHobbits).toHaveLength(2);
        })

        it('should add a single hobbit', async () => {
            let hobbit = await Hobbits.insert({ name: "gaffer" })
            expect(hobbit.name).toBe('gaffer')

            hobbit = await Hobbits.insert({ name: "sam" })
            expect(hobbit.name).toBe('sam')
        })
    })
})

beforeEach(async () => {
    await db('hobbits').truncate();
})