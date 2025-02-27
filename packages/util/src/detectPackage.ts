// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import others from './detectOther';
import { packageInfo } from './packageInfo';
import { detectPackage } from './versionDetect';

detectPackage(packageInfo, null, others);
