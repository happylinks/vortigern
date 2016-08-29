import { expect } from 'chai';
import { call, put } from 'redux-saga/effects';
import { handleRequest } from '../../../app/helpers/TestHelper.tsx';

import { getGithubStars } from '../../../app/sagas/github/stars';
import { githubStarsSuccess, githubStarsFailure } from '../../../app/actions/github/stars';

describe('Sagas', () => {

  describe('Github', () => {

    describe('Get Stars', () => {
      let generator;
      let githubUrl = 'https://api.github.com/repos/barbar/vortigern';

      beforeEach(() => {
        generator = getGithubStars({ payload: { repo: 'barbar/vortigern' } });
      });

      /** 200 */
      it('dispatches Request and Success Actions on OK requests', (done) => {
        // Check if call is made.
        expect(generator.next().value).to.deep.equal(call(handleRequest, githubUrl));

        // Check if result is ok.
        expect(generator.next().value).to.deep.equal(put(githubStarsSuccess(0)));

        done();
      });

      /** 400 */
      it('dispatches Failure on failed requests', (done) => {
        // Check if call is made.
        expect(generator.next().value).to.deep.equal(call(handleRequest, githubUrl));

        // Check if result is wrong.
        expect(generator.throw({}).value).to.deep.equal(put(githubStarsFailure({})));

        done();
      });

    });

  });

});
