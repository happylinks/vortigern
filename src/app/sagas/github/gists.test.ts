import { expect } from 'chai';
import { call, put } from 'redux-saga/effects';
import { handleRequest } from '../../../app/helpers/TestHelper.tsx';

import { getGithubGists } from '../../../app/sagas/github/gists';
import { githubGistsSuccess, githubGistsFailure } from '../../../app/actions/github/gists';

describe('Sagas', () => {

  describe('Github', () => {

    describe('Get Gists', () => {
      let generator;
      let githubUrl = 'https://api.github.com/users/happylinks/gists';

      beforeEach(() => {
        generator = getGithubGists({ payload: { username: 'happylinks' } });
      });

      /** 200 */
      it('dispatches Request and Success Actions on OK requests', (done) => {
        // Check if call is made.
        expect(generator.next().value).to.deep.equal(call(handleRequest, githubUrl));

        // Check if result is ok.
        expect(generator.next().value).to.deep.equal(put(githubGistsSuccess([])));

        done();
      });

      /** 400 */
      it('dispatches Failure on failed requests', (done) => {
        // Check if call is made.
        expect(generator.next().value).to.deep.equal(call(handleRequest, githubUrl));

        // Check if result is wrong.
        expect(generator.throw({}).value).to.deep.equal(put(githubGistsFailure({})));

        done();
      });

    });

  });

});
