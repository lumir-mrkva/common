// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Network } from '@polkadot/networks/types';

import { availableNetworks } from '../networks';

function networkToPrefix ({ prefix }: Network): number {
  return prefix;
}

export const defaults = {
  allowedDecodedLengths: [1, 2, 4, 8, 32, 33],
  // publicKey has prefix + 2 checksum bytes, short only prefix + 1 checksum byte
  allowedEncodedLengths: [3, 4, 6, 10, 35, 36, 37, 38],
  allowedPrefix: availableNetworks.map(networkToPrefix),
  prefix: 42
};
