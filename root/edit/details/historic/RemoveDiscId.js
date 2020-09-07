/*
 * @flow strict-local
 * Copyright (C) 2020 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import * as React from 'react';

import HistoricReleaseList
  from '../../components/HistoricReleaseList';
import CDTocLink
  from '../../../static/scripts/common/components/CDTocLink';

type RemoveDiscIdEditT = {
  ...EditT,
  +display_data: {
    +cdtoc: CDTocT,
    +releases: $ReadOnlyArray<ReleaseT | null>,
  },
};

type Props = {
  +edit: RemoveDiscIdEditT,
};

const RemoveDiscId = ({edit}: Props): React.Element<'table'> => (
  <table className="details remove-discid">
    <HistoricReleaseList releases={edit.display_data.releases} />
    <tr>
      <th>{l('Disc ID:')}</th>
      <td>
        <CDTocLink
          cdToc={edit.display_data.cdtoc}
          content={edit.display_data.cdtoc.discid}
        />
      </td>
    </tr>
  </table>
);

export default RemoveDiscId;
