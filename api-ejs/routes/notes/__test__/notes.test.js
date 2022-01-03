const { uid } = require('uid');
const assert = require('assert');

const getAll = require('../get-all');
const getById = require('../get-by-id');

describe("Test Notes Api", () => {
	const _id = uid(36);
	['1', '2','3'].forEach((value) => {
		it(`Have Data with id = ${value}`, async () => {
		const data = await getById(value);
		assert.equal(!!data, true);
		})
	})

	it('Get All Have Data', async () => {
		const data = await getAll();
		assert.equal(data.length > 0, true);
	})

	describe("Create Note", () => {
		it("Will Create A Note", async (done) => [
			
		])
		it(`Should Have A Created Note With id = ${_id}`, async () => {

		})
	})

	describe("Update Note With id = ${_id}", () => {
		it("Will Update Note", async (done) => {

		})
		it("Should Updated", async () => {

		})
	})

	describe("Delete Note With id = ${id}", () => {
		it("Will Delete Note", async () => {

		});
		it("Should Removed", async () => {

		})
	})
})
