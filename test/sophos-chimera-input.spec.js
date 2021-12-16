/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";
import '../sophos-chimera-input';

describe('Suite cases', () => {
    it('First Test', async () => {
        const _element = await fixture('<sophos-chimera-input></sophos-chimera-input>');
        _element.hello = '';
        assert.strictEqual(_element.hello, '');
    })
})