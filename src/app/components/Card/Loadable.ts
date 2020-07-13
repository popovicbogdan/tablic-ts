/**
 *
 * Asynchronously loads the component for Card
 *
 */

import { lazyLoad } from 'utils/loadable';

export default lazyLoad(() => import('./index'));
