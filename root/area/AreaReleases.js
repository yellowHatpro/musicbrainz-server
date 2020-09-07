/*
 * @flow strict-local
 * Copyright (C) 2019 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import * as React from 'react';

import ReleaseList from '../components/list/ReleaseList';
import PaginatedResults from '../components/PaginatedResults';
import RelationshipsTable from '../components/RelationshipsTable';

import AreaLayout from './AreaLayout';

type Props = {
  +$c: CatalystContextT,
  +area: AreaT,
  +pager: PagerT,
  +releases: ?$ReadOnlyArray<ReleaseT>,
};

const AreaReleases = ({
  $c,
  area,
  pager,
  releases,
}: Props): React.Element<typeof AreaLayout> => (
  <AreaLayout $c={$c} entity={area} page="releases" title={l('Releases')}>
    <h2>{l('Releases')}</h2>

    {releases?.length ? (
      <form action="/release/merge_queue" method="post">
        <PaginatedResults pager={pager}>
          <ReleaseList
            $c={$c}
            checkboxes="add-to-merge"
            releases={releases}
          />
        </PaginatedResults>
        {$c.user ? (
          <div className="row">
            <span className="buttons">
              <button type="submit">
                {l('Add selected releases for merging')}
              </button>
            </span>
          </div>
        ) : null}
      </form>
    ) : (
      <p>
        {l('This area is not currently associated with any releases.')}
      </p>
    )}

    <RelationshipsTable
      entity={area}
      fallbackMessage={l(
        'This area has no relationships to any releases.',
      )}
      heading={l('Relationships')}
      showCredits
    />
  </AreaLayout>
);

export default AreaReleases;
