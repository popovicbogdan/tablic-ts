/**
 *
 * Asynchronously loads the component for PlayerHand
 *
 */

import { lazyLoad } from 'utils/loadable';

export default lazyLoad(() => import('./index'));
